import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const root = process.cwd();
const blogDir = path.join(root, 'content', 'blog');
const imagePattern = /<img\b[^>]*\bsrc=["'](?<html>\/[^"']+\.(?:png|jpe?g|webp|gif|svg))["'][^>]*>|!\[[^\]]*]\((?<md>\/[^)\s]+\.(?:png|jpe?g|webp|gif|svg))\)/gi;

function titleFor(imagePath) {
  return path.basename(imagePath)
    .replace(/\.(png|jpe?g|webp|gif|svg)$/i, '')
    .replace(/[-_]+/g, ' ')
    .trim();
}

function extractAlt(tag) {
  const match = String(tag || '').match(/\balt=["']([^"']*)["']/i);
  return match?.[1] || '';
}

if (!fs.existsSync(blogDir)) {
  console.log('No blog content directory found. Skipping blog image sync.');
  process.exit(0);
}

let changed = 0;
let slots = 0;

fs.readdirSync(blogDir)
  .filter((name) => name.endsWith('.md'))
  .forEach((name) => {
    const file = path.join(blogDir, name);
    const parsed = matter.read(file);
    const previous = new Map((parsed.data.bodyImages || []).map((image) => [image.originalPath, image]));
    const found = [];

    for (const match of parsed.content.matchAll(imagePattern)) {
      const originalPath = match.groups.html || match.groups.md;
      if (!originalPath || found.some((image) => image.originalPath === originalPath)) continue;

      const existing = previous.get(originalPath);
      found.push({
        label: existing?.label || titleFor(originalPath),
        originalPath,
        image: existing?.image || originalPath,
        alt: existing?.alt || extractAlt(match[0]),
        notes: existing?.notes || 'Preferir WEBP otimizado para melhor desempenho.',
      });
    }

    slots += found.length;

    const current = JSON.stringify(parsed.data.bodyImages || []);
    const next = JSON.stringify(found);
    if (current === next) return;

    const data = { ...parsed.data };
    if (found.length > 0) {
      data.bodyImages = found;
    } else {
      delete data.bodyImages;
    }

    fs.writeFileSync(file, matter.stringify(parsed.content, data));
    changed += 1;
  });

console.log(`Synced ${slots} blog body image slots in ${changed} posts.`);
