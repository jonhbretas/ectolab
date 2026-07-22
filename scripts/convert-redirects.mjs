import fs from 'node:fs';
import path from 'node:path';

/**
 * Converte public/_redirects (formato Netlify/Cloudflare) para vercel.json
 * (formato que a Vercel entende). A Vercel NÃO lê _redirects — sem esta
 * conversão os 301 do site antigo ficam inativos (404 → perda de SEO).
 *
 * Rode: node scripts/convert-redirects.mjs
 * O _redirects continua sendo a fonte legível; re-rode este script após editá-lo.
 */

const root = process.cwd();
const src = path.join(root, 'public', '_redirects');
const out = path.join(root, 'vercel.json');

// Prefixos servidos como arquivos estáticos reais hoje na Vercel — NÃO podem
// virar redirect, senão quebram (ex.: /wp-content/uploads/... usado pelas
// imagens do blog). A Vercel aplica redirect ANTES de servir o arquivo.
const EXCLUDE_PREFIXES = ['/wp-content'];

const lines = fs.readFileSync(src, 'utf8').split(/\r?\n/);
const redirects = [];

for (const raw of lines) {
  const line = raw.trim();
  if (!line || line.startsWith('#')) continue;

  const parts = line.split(/\s+/);
  if (parts.length < 2) continue;

  let [source, destination, status = '301'] = parts;
  const permanent = !status.startsWith('302'); // 301/301!/308 → permanente

  if (EXCLUDE_PREFIXES.some((prefix) => source.startsWith(prefix))) continue;

  // Regra de host: www → não-www (ex.: https://www.ectolab.org/*)
  const wwwMatch = source.match(/^https?:\/\/(www\.[^/]+)(\/.*)?$/i);
  if (wwwMatch) {
    const host = wwwMatch[1];
    redirects.push({
      source: '/:path*',
      has: [{ type: 'host', value: host }],
      destination: destination.replace(/:splat\b/g, ':path*'),
      permanent,
    });
    continue;
  }

  // Wildcard Netlify (*) → path-to-regexp da Vercel (:path*)
  source = source.replace(/\*/g, ':path*');
  destination = destination.replace(/:splat\b/g, ':path*');

  if (!source.startsWith('/')) continue; // ignora fontes não-path remanescentes

  redirects.push({ source, destination, permanent });
}

const config = { redirects };
fs.writeFileSync(out, JSON.stringify(config, null, 2) + '\n');
console.log(`Wrote vercel.json with ${redirects.length} redirects.`);
