// Pré-visualização dos eventos da agenda no Sveltia CMS.
// Usa a mesma lógica do gerador (agenda-core.js): o card mostrado aqui é o que o site vai exibir.
import {
  buildEventTypes,
  buildModels,
  normalizeEvent,
  formatRowDate,
  formatFeaturedDate,
  eventWarnings,
  hasValue,
  flattenEvent,
} from './agenda-core.js';

const CMS = window.CMS;
const h = window.h;

// Modelos e tipos: cópia gerada no build (scripts/generate-agenda.mjs).
let rawModels = [];
let rawTypes = [];
try {
  const res = await fetch('/admin/agenda-models.json', { cache: 'no-cache' });
  if (res.ok) {
    const data = await res.json();
    rawModels = data.models || [];
    rawTypes = data.types || [];
  }
} catch {
  // Sem a cópia, o preview ainda funciona — só não aplica os padrões do modelo.
}
const models = buildModels(rawModels);
const eventTypes = buildEventTypes(rawTypes);

const INHERITABLE = [
  ['title', 'Título'], ['category', 'Tipo'], ['tag', 'Etiqueta'], ['status', 'Status'],
  ['description', 'Descrição'], ['location', 'Local'], ['time', 'Horário'], ['vacancies', 'Vagas'],
  ['price', 'Preço'], ['href', 'Link'], ['buttonLabel', 'Botão'], ['durationDays', 'Duração'],
];

function toPlain(entry) {
  const data = entry && entry.getIn ? entry.getIn(['data']) : null;
  return flattenEvent(data && data.toJS ? data.toJS() : {});
}

function stateClass(status) {
  if (status === 'Inscrições Abertas') return 'state open';
  if (status === 'Vagas preenchidas') return 'state closed';
  if (status === 'Realizado') return 'state past';
  return 'state';
}

function EventPreview({ entry }) {
  const raw = toPlain(entry);
  const model = models.get(raw.model);
  const warnings = eventWarnings(raw, models);
  const ev = normalizeEvent(raw, models, eventTypes);
  const row = formatRowDate(ev);
  const link = ev.page || ev.href;
  const visible = Boolean(ev.title && ev.date);

  const inherited = model
    ? INHERITABLE.filter(([key]) => !hasValue(raw[key]) && hasValue(model[key])).map(([, label]) => label)
    : [];

  return h('div', { className: 'pv' },
    h('p', { className: 'pv-kicker' }, 'Pré-visualização · card da agenda'),

    warnings.length
      ? h('div', { className: 'pv-warn' },
          h('strong', null, 'Atenção'),
          h('ul', null, ...warnings.map((w) => h('li', null, w))))
      : null,

    visible
      ? h('article', { className: `pv-row${ev.status === 'Realizado' ? ' is-past' : ''}` },
          h('div', { className: 'pv-date' },
            h('strong', null, row.day || '—'),
            h('span', null, row.weekday || ''),
            h('em', null, ev.monthLabel ? `${ev.monthLabel} ${ev.year}` : '')),
          h('div', { className: 'pv-body' },
            h('div', { className: 'pv-labels' },
              h('span', { className: 'pv-tag' }, ev.tag),
              h('span', { className: stateClass(ev.status) }, ev.status),
              ev.vacancies ? h('span', { className: 'pv-vac' }, ev.vacancies) : null,
              ev.free ? h('span', { className: 'pv-free' }, 'Gratuito') : null),
            h('h3', null, ev.title),
            ev.description ? h('p', null, ev.description) : null,
            h('div', { className: 'pv-meta' },
              ev.location ? h('span', null, '◆ ', ev.location) : null,
              ev.time ? h('span', null, '◆ ', ev.time) : null)),
          h('div', { className: 'pv-side' },
            ev.modalidades.length && !ev.page
              ? ev.modalidades.map((m, i) => h('a', { key: i, className: 'pv-mod', href: m.href || '#', target: '_blank', rel: 'noreferrer' },
                  h('span', null, m.buttonLabel || m.label), h('b', null, m.price || ''), '→'))
              : h('span', { className: `pv-price${ev.free ? ' free' : ''}` }, ev.price || '—')))
      : h('div', { className: 'pv-empty' }, 'Escolha um modelo (ou escreva um título) e a data de início para ver o card.'),

    h('dl', { className: 'pv-facts' },
      h('dt', null, 'Período'), h('dd', null, ev.date ? formatFeaturedDate(ev) : '—'),
      h('dt', null, 'Card leva para'), h('dd', null, link
        ? h('a', { href: link, target: '_blank', rel: 'noreferrer' }, link)
        : '—', ev.page ? h('small', null, ' (Página do evento)') : null),
      h('dt', null, 'Destaque'), h('dd', null, raw.featured ? `Sim · estilo ${raw.featuredStyle || 'padrão'}` : 'Não'),
      h('dt', null, 'Home'), h('dd', null, raw.pinHome ? `Fixado · ordem ${hasValue(raw.homeOrdem) ? raw.homeOrdem : '— (fim da fila)'}` : 'Não fixado'),
      model ? h('dt', null, 'Herdado do modelo') : null,
      model ? h('dd', null, inherited.length ? inherited.join(', ') : 'nada — todos os campos foram preenchidos') : null),
  );
}

const css = `
  :root { --ink:#0b2530; --ink-2:#2b4a55; --ink-3:#5d7680; --line:#d8e3e6; --blue:#0f5d73; --teal:#127a7a; --gold:#c99a2e; --paper:#f6f4ee; }
  body { margin:0; background:var(--paper); color:var(--ink); font:15px/1.5 system-ui, -apple-system, "Segoe UI", sans-serif; }
  .pv { padding:24px; max-width:860px; }
  .pv-kicker { margin:0 0 14px; font:600 11px/1 ui-monospace, monospace; letter-spacing:.12em; text-transform:uppercase; color:var(--ink-3); }
  .pv-warn { background:#fff4e0; border:1px solid #f0c674; border-radius:10px; padding:12px 16px; margin-bottom:16px; font-size:14px; }
  .pv-warn ul { margin:6px 0 0; padding-left:18px; }
  .pv-row { display:grid; grid-template-columns:86px 1fr 200px; gap:20px; align-items:start; background:#fff; border:1px solid var(--line); border-left:3px solid var(--gold); border-radius:12px; padding:18px; box-shadow:0 8px 24px rgba(8,34,43,.06); }
  .pv-row.is-past { opacity:.6; border-left-color:var(--line); }
  .pv-date strong { display:block; font-size:26px; line-height:1; letter-spacing:-.02em; color:var(--blue); }
  .pv-date span, .pv-date em { display:block; margin-top:4px; font:500 11px/1.2 ui-monospace, monospace; letter-spacing:.08em; color:var(--ink-3); font-style:normal; }
  .pv-labels { display:flex; flex-wrap:wrap; gap:6px; margin-bottom:8px; }
  .pv-labels > span { font:600 10px/1 ui-monospace, monospace; letter-spacing:.08em; text-transform:uppercase; padding:5px 8px; border-radius:99px; border:1px solid var(--line); color:var(--ink-2); }
  .pv-tag { background:var(--blue); color:#fff !important; border-color:var(--blue) !important; }
  .state.open { background:#e3f4ee; color:#11694f !important; border-color:#b9e2d3 !important; }
  .state.closed { background:#fdeaea; color:#9b2c2c !important; border-color:#f3c2c2 !important; }
  .state.past { background:#eee; }
  .pv-free { background:#e6f3f3; color:var(--teal) !important; }
  .pv-body h3 { margin:0 0 6px; font-size:19px; line-height:1.25; letter-spacing:-.01em; }
  .pv-body p { margin:0 0 10px; color:var(--ink-2); font-size:14px; }
  .pv-meta { display:flex; flex-direction:column; gap:2px; font:12px/1.5 ui-monospace, monospace; color:var(--ink-3); }
  .pv-side { display:flex; flex-direction:column; gap:8px; align-items:stretch; }
  .pv-price { font-weight:700; font-size:16px; text-align:right; }
  .pv-price.free { color:var(--teal); }
  .pv-mod { display:grid; grid-template-columns:1fr auto auto; gap:8px; align-items:center; padding:8px 12px; border:1px solid var(--line); border-radius:10px; color:var(--ink); text-decoration:none; font-size:13px; background:#fff; }
  .pv-mod b { color:var(--blue); }
  .pv-empty { padding:28px; text-align:center; border:2px dashed var(--line); border-radius:12px; color:var(--ink-3); background:#fff; }
  .pv-facts { display:grid; grid-template-columns:150px 1fr; gap:8px 16px; margin:20px 0 0; padding:16px; background:#fff; border:1px solid var(--line); border-radius:12px; font-size:14px; }
  .pv-facts dt { color:var(--ink-3); font:600 11px/1.6 ui-monospace, monospace; letter-spacing:.06em; text-transform:uppercase; }
  .pv-facts dd { margin:0; word-break:break-word; }
  .pv-facts a { color:var(--blue); }
  .pv-facts small { color:var(--ink-3); }
  @media (max-width: 640px) {
    .pv { padding:16px; }
    .pv-row { grid-template-columns:64px 1fr; }
    .pv-side { grid-column:1 / -1; }
    .pv-facts { grid-template-columns:1fr; }
  }
`;

if (CMS && h) {
  CMS.registerPreviewStyle(css, { raw: true });
  CMS.registerPreviewTemplate('eventos', EventPreview);
}
