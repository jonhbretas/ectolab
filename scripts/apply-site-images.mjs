import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const configPath = path.join(root, 'content', 'site', 'images.json');
const distPath = path.join(root, 'dist');
const siteUrl = 'https://ectolab.org';
const textExtensions = new Set(['.html', '.js', '.css', '.json', '.xml', '.webmanifest']);

function walk(dir) {
  if (!fs.existsSync(dir)) return [];

  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(fullPath);
    if (!textExtensions.has(path.extname(entry.name).toLowerCase())) return [];
    return [fullPath];
  });
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

if (!fs.existsSync(configPath)) {
  console.log('No site image config found. Skipping image replacements.');
  process.exit(0);
}

if (!fs.existsSync(distPath)) {
  console.log('No dist directory found. Skipping image replacements.');
  process.exit(0);
}

const parsed = JSON.parse(fs.readFileSync(configPath, 'utf8'));
const replacements = [];

(parsed.pages || []).forEach((page) => {
  (page.images || []).forEach((image) => {
    if (!image.originalPath || !image.image || image.originalPath === image.image) return;
    replacements.push([image.originalPath, image.image]);
    if (image.originalPath.startsWith('/') && image.image.startsWith('/')) {
      replacements.push([`${siteUrl}${image.originalPath}`, `${siteUrl}${image.image}`]);
    }
  });
});

if (replacements.length === 0) {
  console.log('No site image replacements configured.');
  process.exit(0);
}

let changedFiles = 0;
let changes = 0;

walk(distPath).forEach((file) => {
  let text = fs.readFileSync(file, 'utf8');
  const before = text;

  replacements.forEach(([from, to]) => {
    const pattern = new RegExp(escapeRegExp(from), 'g');
    const matches = text.match(pattern);
    if (matches) {
      changes += matches.length;
      text = text.replace(pattern, to);
    }
  });

  if (text !== before) {
    fs.writeFileSync(file, text);
    changedFiles += 1;
  }
});

console.log(`Applied ${changes} site image replacements in ${changedFiles} files.`);
