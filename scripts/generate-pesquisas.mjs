import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

/**
 * Lê as pesquisas cadastradas no CMS (content/pesquisas/*.md) e gera
 * assets/pesquisas-data.js, consumido pelo React da página de Pesquisas
 * (assets/pesquisas.jsx). Segue o mesmo padrão do generate-agenda.
 */

const root = process.cwd();
const contentDir = path.join(root, 'content', 'pesquisas');
const outPath = path.join(root, 'assets', 'pesquisas-data.js');

const STATUS = ['preparacao', 'aberto', 'concluida'];

function readPesquisas() {
  if (!fs.existsSync(contentDir)) return [];

  return fs.readdirSync(contentDir)
    .filter((file) => file.toLowerCase().endsWith('.md'))
    .map((file) => {
      const { data } = matter(fs.readFileSync(path.join(contentDir, file), 'utf8'));
      return data || {};
    })
    .filter((d) => d.published !== false && String(d.title || '').trim())
    .map((d) => ({
      title: String(d.title || '').trim(),
      code: String(d.code || '').trim(),
      status: STATUS.includes(d.status) ? d.status : 'preparacao',
      statusNote: String(d.statusNote || '').trim(),
      researcher: String(d.researcher || '').trim(),
      coverImage: String(d.coverImage || '').trim(),
      researcherPhoto: String(d.researcherPhoto || '').trim(),
      summary: String(d.summary || '').trim(),
      profile: String(d.profile || '').trim(),
      modality: String(d.modality || '').trim(),
      format: String(d.format || '').trim(),
      line: String(d.line || '').trim(),
      tags: Array.isArray(d.tags) ? d.tags.map((t) => String(t).trim()).filter(Boolean) : [],
      details: String(d.details || '').trim(),
      order: Number.isFinite(Number(d.order)) ? Number(d.order) : 999,
    }))
    .sort((a, b) => (a.order - b.order) || a.title.localeCompare(b.title, 'pt-BR'));
}

const pesquisas = readPesquisas();

const header = [
  '// AUTO-GERADO por scripts/generate-pesquisas.mjs — não edite manualmente.',
  '// Para atualizar: cadastre/edite as pesquisas no CMS (content/pesquisas/*.md)',
  '// e rode npm run generate:content (ou npm run build).',
].join('\n');

fs.writeFileSync(outPath, `${header}\n\nexport const PESQUISAS = ${JSON.stringify(pesquisas, null, 2)};\n`);
console.log(`Generated pesquisas-data.js with ${pesquisas.length} pesquisas.`);
