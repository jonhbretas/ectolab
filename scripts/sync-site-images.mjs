import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const configPath = path.join(root, 'content', 'site', 'images.json');
const sourceDirs = ['assets', 'pages', 'content'];
const imagePattern = /(?:"|')(?<quoted>\/[^"']+\.(?:png|jpe?g|webp|gif|svg))(?:"|')|(?:src|content|href)=["'](?<attr>\/[^"']+\.(?:png|jpe?g|webp|gif|svg))["']|(?:coverImage|image):\s*(?<yaml>\/[^\s"']+\.(?:png|jpe?g|webp|gif|svg))|url\(["']?(?<css>\/[^"')]+\.(?:png|jpe?g|webp|gif|svg))["']?\)/gi;
const ignoredPrefixes = ['/assets/', '/uploads/'];
const ignoredFiles = new Set([
  'content/site/images.json',
]);

function walk(dir) {
  if (!fs.existsSync(dir)) return [];

  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name === 'dist') return [];
      return walk(fullPath);
    }

    if (!/\.(html|jsx?|css|md|json)$/i.test(entry.name)) return [];
    return [fullPath];
  });
}

function pageLabel(file) {
  const rel = path.relative(root, file).replace(/\\/g, '/');
  if (rel === 'index.html') return 'Global / Logo e navegação';
  if (rel === 'assets/chrome.js') return 'Global / Logo e navegação';
  if (rel === 'vite.config.js') return 'Global / SEO e favicon';
  if (rel.startsWith('content/blog/')) return `Blog / ${path.basename(rel, path.extname(rel))}`;
  if (rel.startsWith('pages/')) return `Página / ${path.basename(rel, path.extname(rel))}`;
  if (rel.startsWith('assets/')) return `Componente / ${path.basename(rel, path.extname(rel))}`;
  if (rel.startsWith('public/')) return `Legado / ${rel.replace(/^public\//, '')}`;
  return rel;
}

function folderFor(file) {
  const rel = path.relative(root, file).replace(/\\/g, '/');
  if (rel === 'index.html') return 'global';
  if (rel === 'assets/chrome.js' || rel === 'vite.config.js') return 'global';
  if (rel.startsWith('content/blog/')) return `blog/${path.basename(rel, path.extname(rel))}`;
  if (rel.startsWith('pages/')) return `pages/${path.basename(rel, path.extname(rel))}`;
  if (rel.startsWith('assets/')) return `components/${path.basename(rel, path.extname(rel))}`;
  if (rel.startsWith('public/')) return `legacy/${path.dirname(rel.replace(/^public\//, ''))}`.replace(/\/\.$/, '');
  return 'outros';
}

function titleFor(imagePath) {
  const file = path.basename(imagePath);
  if (file.toLowerCase().includes('logo')) return 'Logo';
  if (file.toLowerCase().includes('favicon')) return 'Favicon';
  return file
    .replace(/\.(png|jpe?g|webp|gif|svg)$/i, '')
    .replace(/[-_]+/g, ' ')
    .trim();
}

function readExisting() {
  if (!fs.existsSync(configPath)) return new Map();
  const parsed = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  const existing = new Map();

  (parsed.pages || []).forEach((page) => {
    (page.images || []).forEach((image) => {
      if (image.originalPath) existing.set(image.originalPath, image);
    });
  });

  return existing;
}

const files = sourceDirs.flatMap((dir) => walk(path.join(root, dir)));
files.push(path.join(root, 'vite.config.js'));
files.push(path.join(root, 'index.html'));

const existing = readExisting();
const grouped = new Map();

files.forEach((file) => {
  const rel = path.relative(root, file).replace(/\\/g, '/');
  if (ignoredFiles.has(rel)) return;

  const text = fs.readFileSync(file, 'utf8');
  for (const match of text.matchAll(imagePattern)) {
    const originalPath = match.groups.quoted || match.groups.attr || match.groups.yaml || match.groups.css;
    if (!originalPath || ignoredPrefixes.some((prefix) => originalPath.startsWith(prefix))) continue;

    const key = folderFor(file);
    if (!grouped.has(key)) {
      grouped.set(key, {
        page: pageLabel(file),
        folder: key,
        images: [],
      });
    }

    const previous = existing.get(originalPath);
    const images = grouped.get(key).images;
    if (images.some((item) => item.originalPath === originalPath)) continue;

    images.push({
      label: previous?.label || titleFor(originalPath),
      originalPath,
      image: previous?.image || originalPath,
      alt: previous?.alt || '',
      notes: previous?.notes || 'Preferir WEBP otimizado para melhor desempenho.',
    });
  }
});

const pages = [...grouped.values()]
  .map((page) => ({
    ...page,
    images: page.images.sort((a, b) => a.label.localeCompare(b.label, 'pt-BR')),
  }))
  .sort((a, b) => a.page.localeCompare(b.page, 'pt-BR'));

fs.mkdirSync(path.dirname(configPath), { recursive: true });
fs.writeFileSync(configPath, JSON.stringify({ pages }, null, 2) + '\n');
console.log(`Synced ${pages.reduce((count, page) => count + page.images.length, 0)} site image slots.`);
