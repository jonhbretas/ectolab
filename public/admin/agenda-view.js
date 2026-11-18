// Pré-visualização do evento "no lugar" do site: linha na agenda do mês,
// card em Principais Eventos / Destaques da Home e item em Próximas Atividades.
// Compartilhado pelo preview do Sveltia CMS (preview.js) e pelo cadastro guiado
// (novo-evento.js). Recebe uma função h(tag, props, ...filhos) — a do CMS ou a do DOM.
import {
  normalizeEvent,
  formatRowDate,
  formatFeaturedDate,
  eventWarnings,
  flattenEvent,
  hasValue,
} from './agenda-core.js';

const CATEGORY_ORANGE = new Set(['oficina', 'programa', 'dinamica', 'verbete']);

function stateClass(status) {
  if (status === 'Inscrições Abertas') return 'ev-state open';
  if (status === 'Vagas preenchidas') return 'ev-state closed';
  return 'ev-state';
}

function ghostRow(h, key) {
  return h('div', { key, className: 'ev-row ev-ghost', 'aria-hidden': 'true' },
    h('div', { className: 'ev-row__date' }, h('i', { className: 'ev-bar w30' }), h('i', { className: 'ev-bar w20' })),
    h('div', { className: 'ev-row__body' }, h('i', { className: 'ev-bar w25' }), h('i', { className: 'ev-bar w70 tall' }), h('i', { className: 'ev-bar w50' })),
    h('div', { className: 'ev-row__meta' }, h('i', { className: 'ev-bar w60' }), h('i', { className: 'ev-bar w40' })),
    h('div', { className: 'ev-row__price' }, h('i', { className: 'ev-bar w50' })));
}

function ghostCard(h, key, className) {
  return h('div', { key, className: `${className} ev-ghost`, 'aria-hidden': 'true' },
    h('i', { className: 'ev-bar w30' }), h('i', { className: 'ev-bar w80 tall' }), h('i', { className: 'ev-bar w60' }));
}

function sectionHead(h, where, title, note) {
  return h('div', { className: 'ev-sec__head' },
    h('span', { className: 'ev-sec__where' }, where),
    h('strong', null, title),
    note ? h('span', { className: 'ev-sec__note' }, note) : null);
}

function agendaRow(h, ev, raw) {
  const row = formatRowDate(ev);
  const showMods = ev.modalidades.length >= 2 && !ev.page;
  const tagClass = `ev-tag${CATEGORY_ORANGE.has(ev.category) ? ' orange' : ''}`;
  return h('div', { className: `ev-row ev-mine${ev.status === 'Realizado' ? ' is-past' : ''}`, 'data-cat': ev.category },
    h('span', { className: 'ev-mine__flag' }, 'Seu evento'),
    h('div', { className: 'ev-row__date' }, h('strong', null, row.day || '—'), h('span', null, row.weekday || '')),
    h('div', { className: 'ev-row__body' },
      h('div', { className: 'ev-row__labels' },
        h('span', { className: tagClass }, ev.tag),
        h('span', { className: stateClass(ev.status) }, ev.status),
        ev.vacancies ? h('span', { className: 'ev-vac' }, ev.vacancies) : null),
      h('h3', { className: ev.title ? '' : 'ev-missing' }, ev.title || 'Título do evento'),
      ev.description ? h('p', null, ev.description) : null),
    h('div', { className: 'ev-row__meta' },
      h('span', null, '◆ ', ev.location || '—'),
      h('span', null, '◆ ', ev.time || '—')),
    showMods
      ? h('div', { className: 'ev-row__mods' }, ...ev.modalidades.map((m, i) => h('span', { key: i, className: 'ev-mod' },
          h('span', null, m.buttonLabel || m.label), h('b', null, m.price || ''), '→')))
      : h('div', { className: 'ev-row__price' }, h('span', { className: ev.free ? 'free' : '' }, ev.price || (raw.model ? '—' : 'Preço'))));
}

function featCard(h, ev, raw) {
  const style = raw.featuredStyle && raw.featuredStyle !== 'default' ? ` ${raw.featuredStyle}` : '';
  return h('div', { className: `ev-feat${style} ev-mine-card` },
    h('div', { className: 'ev-feat__tags' },
      h('span', { className: 'ev-feat__cat' }, raw.featuredCategory || ev.tag),
      ev.free ? h('span', { className: 'ev-feat__free' }, 'Gratuito') : null),
    h('h3', null, ev.title || 'Título do evento'),
    ev.description ? h('p', null, ev.description) : null,
    h('div', { className: 'ev-feat__foot' },
      h('span', { className: 'ev-feat__date' }, raw.featuredDate || formatFeaturedDate(ev)),
      h('span', { className: 'ev-feat__go' }, 'Ver na agenda →')));
}

function homeFeatCard(h, ev, raw) {
  return h('div', { className: `ev-hfeat${raw.featuredStyle === 'highlight' ? ' highlight' : ''} ev-mine-card` },
    h('div', { className: 'ev-feat__tags' },
      h('span', { className: 'ev-feat__cat' }, ev.tag),
      ev.free ? h('span', { className: 'ev-feat__free' }, 'Gratuito') : null),
    h('h3', null, ev.title || 'Título do evento'),
    h('span', { className: 'ev-feat__date' }, formatFeaturedDate(ev)),
    ev.location ? h('span', { className: 'ev-hfeat__local' }, ev.location) : null,
    h('span', { className: 'ev-feat__go' }, 'Ver na agenda →'));
}

function proxItem(h, ev) {
  return h('div', { className: 'ev-prox ev-mine-card' },
    h('div', { className: 'ev-prox__date' }, h('strong', null, ev.day || '—'), h('span', null, (ev.month || '').toUpperCase())),
    h('div', { className: 'ev-prox__body' },
      h('span', { className: 'ev-prox__tipo' }, `${ev.tag}${ev.free ? ' · GRATUITO' : ''}`),
      h('span', { className: 'ev-prox__titulo' }, ev.title || 'Título do evento'),
      h('span', { className: 'ev-prox__local' }, ev.location)),
    h('span', { className: 'ev-prox__arr' }, '→'));
}

export function renderEventPreview(h, event, { models, eventTypes }) {
  const raw = flattenEvent(event);
  const model = models.get(raw.model);
  const warnings = eventWarnings(raw, models);
  const ev = normalizeEvent(raw, models, eventTypes);
  const link = ev.page || ev.href;
  const inherited = model
    ? [['title', 'título'], ['description', 'descrição'], ['location', 'local'], ['time', 'horário'], ['price', 'preço'],
       ['href', 'link'], ['status', 'status'], ['durationDays', 'duração'], ['tag', 'etiqueta'], ['vacancies', 'vagas']]
        .filter(([key]) => !hasValue(raw[key]) && hasValue(model[key])).map(([, label]) => label)
    : [];

  return h('div', { className: 'ev-pv' },
    warnings.length
      ? h('div', { className: 'ev-warn' }, h('strong', null, 'Atenção'), h('ul', null, ...warnings.map((w, i) => h('li', { key: i }, w))))
      : null,

    // 1. Agenda — linha no mês
    h('section', { className: 'ev-sec' },
      sectionHead(h, 'Página Agenda', ev.monthLabel ? `${ev.monthLabel} ${ev.year}` : 'Mês do evento', 'lista do mês'),
      h('div', { className: 'ev-month' },
        h('div', { className: 'ev-month__head' },
          h('h2', null, ev.monthLabel || 'Mês'), h('span', { className: 'ev-yr' }, ev.year || ''),
          h('span', { className: 'ev-mcount' }, 'agenda do mês')),
        ghostRow(h, 'g1'),
        agendaRow(h, ev, raw),
        ghostRow(h, 'g2'))),

    // 2. Destaques
    raw.featured
      ? h('section', { className: 'ev-sec' },
          sectionHead(h, 'Agenda + Home', 'Principais eventos / Destaques', 'até 3 aparecem'),
          h('div', { className: 'ev-feat-grid' }, featCard(h, ev, raw), ghostCard(h, 'gf1', 'ev-feat'), ghostCard(h, 'gf2', 'ev-feat')),
          h('div', { className: 'ev-feat-grid home' }, homeFeatCard(h, ev, raw), ghostCard(h, 'gh1', 'ev-hfeat'), ghostCard(h, 'gh2', 'ev-hfeat')))
      : null,

    // 3. Home — Próximas atividades
    raw.pinHome
      ? h('section', { className: 'ev-sec' },
          sectionHead(h, 'Home', 'Próximas atividades', `posição ${hasValue(raw.homeOrdem) ? raw.homeOrdem : '— (fim da fila)'}`),
          h('div', { className: 'ev-rail' }, proxItem(h, ev), ghostCard(h, 'gp1', 'ev-prox'), ghostCard(h, 'gp2', 'ev-prox')))
      : null,

    !raw.featured && !raw.pinHome
      ? h('p', { className: 'ev-tip' }, 'Este evento aparece só na página Agenda. Para mostrar também nos destaques ou na Home, use o bloco “Destaque e Home”.')
      : null,

    h('dl', { className: 'ev-facts' },
      h('dt', null, 'Período'), h('dd', null, ev.date ? formatFeaturedDate(ev) : '—'),
      h('dt', null, 'Card leva para'), h('dd', null, link ? h('a', { href: link, target: '_blank', rel: 'noreferrer' }, link) : '—',
        ev.page ? h('small', null, ' (página do evento)') : null),
      model ? h('dt', null, 'Vem do modelo') : null,
      model ? h('dd', null, inherited.length ? inherited.join(', ') : 'nada — tudo foi preenchido') : null));
}

export const PREVIEW_CSS = `
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Manrope:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap");
.ev-pv {
  --ink:#08222b; --ink-2:#1a3d4a; --ink-3:#56707a; --line:#d8e3e8; --line-2:#bfd0d7; --paper:#eef5f8; --white:#fff;
  --teal:#155366; --teal-2:#0e3e4d; --teal-3:#082831; --teal-soft:#d4e3e8; --teal-soft2:#aac7d0; --teal-glow:#1f87a8; --teal-glow2:#2da3c4;
  --orange:#f0a030; --orange-2:#d68915; --orange-soft:#ffe1b2; --orange-soft2:#f5c878;
  --display:"Space Grotesk", system-ui, sans-serif; --sans:"Manrope", system-ui, sans-serif; --mono:"JetBrains Mono", ui-monospace, monospace;
  font-family: var(--sans); color: var(--ink); background: var(--paper); padding: 20px; display: flex; flex-direction: column; gap: 22px; min-height: 100%; box-sizing: border-box;
}
.ev-pv *, .ev-pv *::before, .ev-pv *::after { box-sizing: border-box; }
.ev-warn { background:#fff4e0; border:1px solid var(--orange-soft2); border-radius:10px; padding:12px 16px; font-size:13.5px; }
.ev-warn ul { margin:6px 0 0; padding-left:18px; }
.ev-sec { display:flex; flex-direction:column; gap:10px; }
.ev-sec__head { display:flex; align-items:baseline; gap:10px; flex-wrap:wrap; }
.ev-sec__where { font:600 10px/1 var(--mono); letter-spacing:.14em; text-transform:uppercase; color:var(--white); background:var(--teal); padding:5px 8px; border-radius:4px; }
.ev-sec__head strong { font:600 15px/1.2 var(--display); }
.ev-sec__note { margin-left:auto; font:11px/1 var(--mono); color:var(--ink-3); }
.ev-month { background: var(--paper); }
.ev-month__head { display:flex; align-items:baseline; gap:14px; padding-bottom:12px; margin-bottom:4px; border-bottom:2px solid var(--ink); }
.ev-month__head h2 { font:600 30px/1 var(--display); letter-spacing:-.028em; margin:0; }
.ev-yr, .ev-mcount { font:12px/1 var(--mono); letter-spacing:.14em; color:var(--ink-3); text-transform:uppercase; }
.ev-mcount { margin-left:auto; font-size:10.5px; }
.ev-row { position:relative; display:grid; grid-template-columns:70px minmax(0,1fr) 170px 120px; align-items:center; gap:18px; padding:18px 0 18px 14px; border-bottom:1px solid var(--line); border-left:3px solid var(--line-2); }
.ev-row.ev-mine { background:var(--white); border-left-color:var(--orange); box-shadow:0 0 0 2px var(--orange), 0 14px 30px -18px rgba(8,34,43,.35); border-radius:6px; padding-right:14px; margin:6px 0; }
.ev-row.is-past { opacity:.6; }
.ev-mine__flag { position:absolute; top:-10px; right:12px; font:700 9.5px/1 var(--mono); letter-spacing:.12em; text-transform:uppercase; background:var(--orange); color:var(--ink); padding:4px 8px; border-radius:99px; }
.ev-row__date { display:flex; flex-direction:column; line-height:1; }
.ev-row__date strong { font:500 32px/1 var(--display); letter-spacing:-.03em; }
.ev-row__date span { font:10px/1 var(--mono); letter-spacing:.16em; color:var(--ink-3); margin-top:6px; }
.ev-row__body { display:flex; flex-direction:column; gap:7px; min-width:0; }
.ev-row__labels { display:flex; flex-wrap:wrap; gap:6px; align-items:center; }
.ev-tag { display:inline-flex; align-items:center; gap:6px; font:500 9.5px/1.4 var(--mono); letter-spacing:.14em; text-transform:uppercase; padding:3px 9px; border-radius:99px; border:1px solid var(--teal-soft2); color:var(--teal); background:rgba(31,135,168,.08); }
.ev-tag::before { content:""; width:6px; height:6px; border-radius:50%; background:currentColor; }
.ev-tag.orange { color:var(--orange-2); border-color:var(--orange-soft2); background:rgba(240,160,48,.08); }
.ev-state, .ev-vac { font:600 9.5px/1.4 var(--mono); letter-spacing:.1em; text-transform:uppercase; padding:3px 8px; border-radius:99px; border:1px solid var(--line); color:var(--ink-3); }
.ev-state.open { color:#11694f; background:#e3f4ee; border-color:#b9e2d3; }
.ev-state.closed { color:#9b2c2c; background:#fdeaea; border-color:#f3c2c2; }
.ev-row h3 { font:600 18px/1.2 var(--display); letter-spacing:-.015em; margin:0; }
.ev-row p { font-size:13px; line-height:1.45; color:var(--ink-2); margin:0; }
.ev-missing { color:var(--ink-3) !important; font-style:italic; }
.ev-row__meta { display:flex; flex-direction:column; gap:4px; font:11.5px/1.4 var(--mono); color:var(--ink-3); }
.ev-row__price { text-align:right; font:700 15px/1.2 var(--display); }
.ev-row__price .free { color:var(--orange-2); }
.ev-row__mods { display:flex; flex-direction:column; gap:6px; }
.ev-mod { display:grid; grid-template-columns:1fr auto auto; gap:6px; align-items:center; padding:6px 10px; border:1px solid var(--line-2); border-radius:8px; font-size:12px; background:var(--white); }
.ev-mod b { color:var(--teal); }
.ev-feat-grid { display:grid; grid-template-columns:1.2fr 1fr 1fr; gap:12px; }
.ev-feat-grid.home { margin-top:4px; }
.ev-feat, .ev-hfeat { position:relative; overflow:hidden; display:flex; flex-direction:column; gap:10px; border:1px solid var(--line); border-radius:8px; background:var(--white); padding:18px 18px 14px; min-height:170px; }
.ev-hfeat { min-height:140px; }
.ev-hfeat::before { content:""; position:absolute; top:0; left:0; right:0; height:3px; background:linear-gradient(90deg, var(--orange), var(--teal-glow)); }
.ev-mine-card { box-shadow:0 0 0 2px var(--orange); }
.ev-feat__tags { display:flex; gap:6px; flex-wrap:wrap; }
.ev-feat__cat, .ev-feat__free { font:600 9px/1.4 var(--mono); letter-spacing:.1em; text-transform:uppercase; padding:3px 9px; border-radius:99px; border:1px solid var(--teal-soft2); color:var(--teal); background:var(--teal-soft); white-space:nowrap; }
.ev-feat__free { color:var(--orange-2); background:var(--orange-soft); border-color:var(--orange-soft2); }
.ev-feat h3, .ev-hfeat h3 { font:600 18px/1.12 var(--display); letter-spacing:-.02em; margin:0; }
.ev-feat p { font-size:12.5px; line-height:1.45; color:var(--ink-2); margin:0; }
.ev-feat__foot { margin-top:auto; display:flex; justify-content:space-between; gap:8px; padding-top:10px; border-top:1px dashed var(--line); }
.ev-feat__date { display:inline-flex; align-items:center; gap:7px; font:700 12px/1.2 var(--mono); }
.ev-feat__date::before { content:""; width:7px; height:7px; border-radius:2px; background:var(--orange); }
.ev-feat__go { font:10px/1.2 var(--mono); letter-spacing:.12em; text-transform:uppercase; color:var(--ink-3); }
.ev-hfeat .ev-feat__go { margin-top:auto; }
.ev-hfeat__local { font:11.5px/1.3 var(--mono); color:var(--ink-3); }
.ev-feat.dark { background:linear-gradient(160deg, var(--teal-2), var(--teal-3)); border-color:var(--teal-3); color:var(--paper); }
.ev-feat.dark h3, .ev-feat.dark .ev-feat__date { color:var(--white); }
.ev-feat.dark p { color:rgba(255,255,255,.78); }
.ev-feat.dark .ev-feat__cat { color:var(--white); background:rgba(255,255,255,.12); border-color:rgba(255,255,255,.25); }
.ev-feat.dark .ev-feat__foot { border-top-color:rgba(255,255,255,.2); }
.ev-feat.gold { background:linear-gradient(160deg, #fbf2dd, #f3e3bf); border-color:var(--orange-soft2); }
.ev-feat.highlight, .ev-hfeat.highlight { border-color:transparent; background:linear-gradient(var(--white), var(--white)) padding-box, linear-gradient(120deg, var(--orange), var(--teal-glow), var(--orange-2), var(--teal-glow2)) border-box; border:2px solid transparent; }
.ev-rail { display:grid; grid-template-columns:1.2fr 1fr 1fr; gap:10px; }
.ev-prox { display:grid; grid-template-columns:auto 1fr auto; align-items:center; gap:12px; padding:12px 14px; background:var(--white); border:1px solid var(--line); border-radius:8px; min-height:74px; }
.ev-prox__date { display:flex; flex-direction:column; line-height:1; }
.ev-prox__date strong { font:600 24px/1 var(--display); }
.ev-prox__date span { font:10px/1 var(--mono); letter-spacing:.14em; color:var(--ink-3); margin-top:4px; }
.ev-prox__body { display:flex; flex-direction:column; gap:3px; min-width:0; }
.ev-prox__tipo { font:600 9px/1.3 var(--mono); letter-spacing:.12em; text-transform:uppercase; color:var(--teal); }
.ev-prox__titulo { font:600 14px/1.2 var(--display); }
.ev-prox__local { font:11px/1.3 var(--mono); color:var(--ink-3); }
.ev-prox__arr { color:var(--ink-3); }
.ev-ghost { opacity:.55; pointer-events:none; }
.ev-ghost.ev-row { background:transparent; }
.ev-bar { display:block; height:8px; border-radius:4px; background:var(--line); margin:3px 0; }
.ev-bar.tall { height:14px; }
.ev-bar.w20{width:20%} .ev-bar.w25{width:25%} .ev-bar.w30{width:30%} .ev-bar.w40{width:40%} .ev-bar.w50{width:50%} .ev-bar.w60{width:60%} .ev-bar.w70{width:70%} .ev-bar.w80{width:80%}
.ev-ghost.ev-feat, .ev-ghost.ev-hfeat, .ev-ghost.ev-prox { display:flex; flex-direction:column; justify-content:center; }
.ev-tip { margin:0; padding:12px 14px; border:1px dashed var(--line-2); border-radius:8px; font-size:13px; color:var(--ink-2); background:var(--white); }
.ev-facts { display:grid; grid-template-columns:130px 1fr; gap:8px 14px; margin:0; padding:14px 16px; background:var(--white); border:1px solid var(--line); border-radius:8px; font-size:13px; }
.ev-facts dt { font:600 10px/1.7 var(--mono); letter-spacing:.08em; text-transform:uppercase; color:var(--ink-3); }
.ev-facts dd { margin:0; word-break:break-word; }
.ev-facts a { color:var(--teal); }
.ev-facts small { color:var(--ink-3); }
@container (max-width: 640px) { .ev-row { grid-template-columns:56px minmax(0,1fr); } .ev-row__meta, .ev-row__price, .ev-row__mods { grid-column:2; } .ev-row__price { text-align:left; } .ev-feat-grid, .ev-rail { grid-template-columns:1fr; } .ev-ghost.ev-feat, .ev-ghost.ev-hfeat, .ev-ghost.ev-prox { display:none; } }
@media (max-width: 640px) { .ev-row { grid-template-columns:56px minmax(0,1fr); } .ev-row__meta, .ev-row__price, .ev-row__mods { grid-column:2; } .ev-row__price { text-align:left; } .ev-feat-grid, .ev-rail { grid-template-columns:1fr; } .ev-ghost.ev-feat, .ev-ghost.ev-hfeat, .ev-ghost.ev-prox { display:none; } .ev-facts { grid-template-columns:1fr; } }
`;
