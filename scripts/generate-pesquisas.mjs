import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

/**
 * Lê as pesquisas cadastradas no CMS (content/pesquisas/*.md) e:
 *   1) injeta os cards renderizados (SSR) em pages/pesquisas.html, entre os
 *      marcadores CMS PESQUISAS START/END — assim o conteúdo é indexável por
 *      buscadores (não depende de JS no cliente);
 *   2) gera assets/pesquisas-data.js, consumido pelo seoPlugin (vite.config.js)
 *      para montar o JSON-LD (ItemList) da página.
 * A interatividade (filtros, modal) é feita por JS vanilla dentro da página.
 */

const root = process.cwd();
const contentDir = path.join(root, 'content', 'pesquisas');
const outDataPath = path.join(root, 'assets', 'pesquisas-data.js');
const pagePath = path.join(root, 'pages', 'pesquisas.html');
const START = '<!-- CMS PESQUISAS START -->';
const END = '<!-- CMS PESQUISAS END -->';

const STATUS = ['preparacao', 'aberto', 'concluida'];
const STATUS_LABEL = { preparacao: 'Em preparação', aberto: 'Recrutamento aberto', concluida: 'Coleta concluída' };
const STATUS_CLS = { preparacao: 'st-prep', aberto: 'st-open', concluida: 'st-done' };

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function initials(name) {
  const parts = String(name || '').trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return '?';
  return (parts[0][0] + (parts[1] ? parts[1][0] : '')).toUpperCase();
}

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

function metaRow(label, value) {
  if (!value) return '';
  return `<div class="pesq-meta__row"><span>${escapeHtml(label)}</span><span>${escapeHtml(value)}</span></div>`;
}

function renderCard(p) {
  const media = p.coverImage
    ? `<img src="${escapeHtml(p.coverImage)}" alt="Imagem da pesquisa ${escapeHtml(p.title)}" loading="lazy" decoding="async" />`
    : '<div class="pesq-card__ph"><span>Pesquisa Ectolab</span></div>';
  const codeBadge = p.code ? `<span class="pesq-card__code">${escapeHtml(p.code)}</span>` : '';
  const note = p.statusNote ? `<p class="pesq-note">${escapeHtml(p.statusNote)}</p>` : '';
  const summary = p.summary ? `<p class="pesq-card__summary">${escapeHtml(p.summary)}</p>` : '';
  const researcher = p.researcher
    ? `<div class="pesq-researcher">${p.researcherPhoto
        ? `<img src="${escapeHtml(p.researcherPhoto)}" alt="Foto de ${escapeHtml(p.researcher)}" loading="lazy" decoding="async" />`
        : `<span class="pesq-researcher__ph">${escapeHtml(initials(p.researcher))}</span>`}<span><b>${escapeHtml(p.researcher)}</b><small>Responsável</small></span></div>`
    : '';
  const rows = [metaRow('Perfil', p.profile), metaRow('Modalidade', p.modality), metaRow('Formato', p.format), metaRow('Linha', p.line)].filter(Boolean).join('');
  const meta = rows ? `<div class="pesq-meta">${rows}</div>` : '';
  const tags = (p.tags && p.tags.length)
    ? `<div class="pesq-tags">${p.tags.map((t) => `<span class="pesq-tag">${escapeHtml(t)}</span>`).join('')}</div>`
    : '';
  const details = p.details
    ? `<div class="pesq-actions"><button type="button" class="btn btn-ghost pesq-details-btn" data-details="${escapeHtml(p.details)}">Ver detalhes <span class="arrow">→</span></button></div>`
    : '';

  return `      <article class="pesq-card" data-status="${escapeHtml(p.status)}">
        <div class="pesq-card__media">${media}${codeBadge}</div>
        <div class="pesq-card__body">
          <span class="pesq-status ${STATUS_CLS[p.status]}">${escapeHtml(STATUS_LABEL[p.status])}</span>
          ${note}
          <h3>${escapeHtml(p.title)}</h3>
          ${summary}
          ${researcher}
          ${meta}
          ${tags}
          ${details}
        </div>
      </article>`;
}

const pesquisas = readPesquisas();

const header = [
  '// AUTO-GERADO por scripts/generate-pesquisas.mjs — não edite manualmente.',
  '// Para atualizar: cadastre/edite as pesquisas no CMS (content/pesquisas/*.md)',
  '// e rode npm run generate:content (ou npm run build).',
].join('\n');
fs.writeFileSync(outDataPath, `${header}\n\nexport const PESQUISAS = ${JSON.stringify(pesquisas, null, 2)};\n`);

if (fs.existsSync(pagePath) && fs.readFileSync(pagePath, 'utf8').includes(START)) {
  let html = fs.readFileSync(pagePath, 'utf8');
  const cards = pesquisas.map(renderCard).join('\n');
  html = html.replace(new RegExp(`${START}[\\s\\S]*?${END}`), `${START}\n${cards}\n      ${END}`);
  fs.writeFileSync(pagePath, html);
}

console.log(`Generated pesquisas-data.js and injected ${pesquisas.length} cards into pesquisas.html.`);
