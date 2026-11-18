import fs from 'node:fs';
import path from 'node:path';
import {
  monthOrder,
  monthNames,
  buildEventTypes,
  buildModels,
  normalizeEvent,
  eventDateRange,
  formatFeaturedDate,
  formatRowDate,
  isPast,
  isUpcoming,
  todayUtc,
} from '../public/admin/agenda-core.js';

// Lógica de eventos (modelo, título, datas, status, preço) vive em
// public/admin/agenda-core.js — compartilhada com o preview do CMS.

const root = process.cwd();
const agendaPagePath = path.join(root, 'pages', 'agenda.html');
const eventsDir = path.join(root, 'content', 'agenda', 'events');
const eventModelsPath = path.join(root, 'content', 'agenda', 'event-models.json');
const eventTypesPath = path.join(root, 'content', 'agenda', 'event-types.json');
const agendaDataPath = path.join(root, 'assets', 'agenda-data.js');
// Cópia de modelos/tipos para o preview do CMS (gerada; ignorada no git).
const adminModelsPath = path.join(root, 'public', 'admin', 'agenda-models.json');

const eventsStart = '<!-- CMS AGENDA EVENTS START -->';
const eventsEnd = '<!-- CMS AGENDA EVENTS END -->';
const featuredStart = '<!-- CMS AGENDA FEATURED START -->';
const featuredEnd = '<!-- CMS AGENDA FEATURED END -->';

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function readJson(filePath, fallback) {
  if (!fs.existsSync(filePath)) return fallback;
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function dateValue(event) {
  return new Date(`${event.date}T00:00:00Z`);
}

function monthId(year, month) {
  return year === '2026' ? `m-${month}` : `m${String(year).slice(2)}-${month}`;
}

// Um arquivo .json por evento em content/agenda/events/ (coleção de pastas do CMS).
function readRawEvents() {
  if (!fs.existsSync(eventsDir)) throw new Error(`Pasta de eventos não encontrada: ${eventsDir}`);

  return fs.readdirSync(eventsDir)
    .filter((file) => file.endsWith('.json'))
    .sort()
    .map((file) => {
      try {
        return JSON.parse(fs.readFileSync(path.join(eventsDir, file), 'utf8'));
      } catch (error) {
        throw new Error(`JSON inválido em content/agenda/events/${file}: ${error.message}`);
      }
    });
}

function readEvents(models, eventTypes, today) {
  return readRawEvents()
    .map((event) => normalizeEvent(event, models, eventTypes, today))
    .filter((event) => event.title && event.date)
    .sort((a, b) => dateValue(a) - dateValue(b));
}

function renderFeatured(events) {
  // Não destaca eventos cuja data já passou (mesmo critério da Home).
  const featured = events.filter((event) => event.featured && !isPast(event)).slice(0, 3);
  return `${featuredStart}
${featured.map((event) => {
    const style = event.featuredStyle && event.featuredStyle !== 'default' ? ` ${event.featuredStyle}` : '';
    const freeTag = event.free ? '<span class="feat__free">Gratuito</span>' : '';
    const range = eventDateRange(event);
    const endIso = range ? range.end.date.toISOString().slice(0, 10) : '';
    return `          <button type="button" class="feat${escapeHtml(style)}" data-year="${escapeHtml(event.year)}" data-month="${escapeHtml(event.month)}" data-enddate="${endIso}">
            <div class="feat__tags"><span class="feat__cat">${escapeHtml(event.featuredCategory || event.tag)}</span>${freeTag}</div>
            <h3>${escapeHtml(event.title)}</h3>
            <p>${escapeHtml(event.description)}</p>
            <div class="feat__foot"><span class="feat__date">${escapeHtml(event.featuredDate || formatFeaturedDate(event))}</span><span class="feat__go">Ver na agenda →</span></div>
          </button>`;
  }).join('\n')}
${featuredEnd}`;
}

function renderCategoryControls(eventTypes, events) {
  const usedCategories = new Map();
  events.forEach((event) => {
    if (!event.category || usedCategories.has(event.category)) return;
    usedCategories.set(event.category, {
      value: event.category,
      label: event.categoryCustom || eventTypes.byValue.get(event.category)?.plural || eventTypes.byValue.get(event.category)?.label || event.tag || event.category,
    });
  });

  const controls = [
    ...eventTypes.types.map((type) => ({ value: type.value, label: type.plural || type.label })),
    ...[...usedCategories.values()].filter((type) => !eventTypes.byValue.has(type.value)),
  ];

  return `<!-- CMS AGENDA CATEGORIES START -->
              <button class="cat-chip on" data-cat="all"><span class="dot"></span>Tudo <span class="count">0</span></button>
${controls.map((type) => `              <button class="cat-chip" data-cat="${escapeHtml(type.value)}"><span class="dot"></span>${escapeHtml(type.label)} <span class="count">0</span></button>`).join('\n')}
<!-- CMS AGENDA CATEGORIES END -->`;
}

function renderRow(event) {
  const rowPast = isPast(event) ? ' is-past' : '';
  const stateClass = event.status === 'Inscrições Abertas' ? 'state open' : event.status === 'Vagas preenchidas' ? 'state closed' : 'state';
  const priceClass = event.free ? 'price free' : 'price';
  const buttonLabel = event.buttonLabel || 'Ver detalhes';
  const rowDate = formatRowDate(event);
  const vacancies = event.vacancies ? `<span class="vacancies">${escapeHtml(event.vacancies)}</span>` : '';
  // Com Página do evento, o card leva à página do curso (não à loja) — modalidades ficam na página.
  const hasModalidades = event.modalidades && event.modalidades.length >= 2 && !event.page;
  const linkTarget = event.page || event.href || '/pages/atividades.html';

  if (hasModalidades) {
    const modalidadesHtml = event.modalidades.map((m) => {
      const btnLabel = m.buttonLabel || m.label || 'Inscrever-se';
      return `              <a href="${escapeHtml(m.href || event.href || '/pages/atividades.html')}" class="agenda-modal-btn">
                <span class="agenda-modal-btn__label">${escapeHtml(btnLabel)}</span>
                <span class="agenda-modal-btn__price">${escapeHtml(m.price || '')}</span>
                <span class="agenda-modal-btn__arrow">→</span>
              </a>`;
    }).join('\n');

    return `          <div class="agenda-row agenda-row--multi${rowPast}" data-cat="${escapeHtml(event.category)}" data-month="${escapeHtml(event.month)}" data-slug="${escapeHtml(event.slug)}">
            <div class="agenda-row__date"><strong>${escapeHtml(rowDate.day)}</strong><span>${escapeHtml(rowDate.weekday)}</span></div>
            <div class="agenda-row__body">
              <div class="agenda-row__labels"><span class="agenda-tag ${escapeHtml(event.category)}">${escapeHtml(event.tag)}</span><span class="${stateClass}">${escapeHtml(event.status)}</span>${vacancies}</div>
              <h3>${escapeHtml(event.title)}</h3>
              <p>${escapeHtml(event.description)}</p>
            </div>
            <div class="agenda-row__meta">
              <span><span class="ico">◆</span> ${escapeHtml(event.location || '')}</span>
              <span><span class="ico">◆</span> ${escapeHtml(event.time || '')}</span>
            </div>
            <div class="agenda-row__status agenda-row__status--multi">
${modalidadesHtml}
            </div>
          </div>`;
  }

  return `          <a class="agenda-row${rowPast}" data-cat="${escapeHtml(event.category)}" data-month="${escapeHtml(event.month)}" data-slug="${escapeHtml(event.slug)}" href="${escapeHtml(linkTarget)}">
            <div class="agenda-row__date"><strong>${escapeHtml(rowDate.day)}</strong><span>${escapeHtml(rowDate.weekday)}</span></div>
            <div class="agenda-row__body">
              <div class="agenda-row__labels"><span class="agenda-tag ${escapeHtml(event.category)}">${escapeHtml(event.tag)}</span><span class="${stateClass}">${escapeHtml(event.status)}</span>${vacancies}</div>
              <h3>${escapeHtml(event.title)}</h3>
              <p>${escapeHtml(event.description)}</p>
            </div>
            <div class="agenda-row__meta">
              <span><span class="ico">◆</span> ${escapeHtml(event.location || '')}</span>
              <span><span class="ico">◆</span> ${escapeHtml(event.time || '')}</span>
            </div>
            <div class="agenda-row__status"><span class="${priceClass}">${escapeHtml(event.price)}</span></div>
            <span class="agenda-row__arr" aria-label="${escapeHtml(buttonLabel)}" title="${escapeHtml(buttonLabel)}">→</span>
          </a>`;
}

function renderMonthBlock(year, month, events) {
  const blockPast = events.every(isPast) ? ' is-past' : '';
  const label = events[0]?.monthLabel || monthNames[month] || month;

  return `        <!-- ============ ${label.toUpperCase()} ${year} ============ -->
        <div class="month-block${blockPast}" data-year="${escapeHtml(year)}" data-month="${escapeHtml(month)}" id="${monthId(year, month)}">
          <div class="month-head">
            <h2>${escapeHtml(label)}</h2><span class="yr">${escapeHtml(year)}</span>
            <span class="mcount"><b>0</b> atividades</span>
          </div>
${events.map(renderRow).join('\n')}
        </div>`;
}

function renderEvents(events) {
  const groups = new Map();
  events.forEach((event) => {
    const key = `${event.year}:${event.month}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(event);
  });

  const keys = [...groups.keys()].sort((a, b) => {
    const [yearA, monthA] = a.split(':');
    const [yearB, monthB] = b.split(':');
    if (yearA !== yearB) return Number(yearA) - Number(yearB);
    return monthOrder.indexOf(monthA) - monthOrder.indexOf(monthB);
  });

  return `${eventsStart}
${keys.map((key) => {
    const [year, month] = key.split(':');
    return renderMonthBlock(year, month, groups.get(key));
  }).join('\n\n')}
${eventsEnd}`;
}

function updatePage(events, eventTypes) {
  let html = fs.readFileSync(agendaPagePath, 'utf8');
  const featuredHtml = renderFeatured(events);
  const eventsHtml = renderEvents(events);
  const categoryControlsHtml = renderCategoryControls(eventTypes, events);

  if (html.includes(featuredStart) && html.includes(featuredEnd)) {
    html = html.replace(new RegExp(`${featuredStart}[\\s\\S]*?${featuredEnd}`), featuredHtml);
  } else {
    html = html.replace(
      /(<div class="feat-grid">\s*)[\s\S]*?(\s*<\/div>\s*<\/div>\s*<\/section>\s*<!-- ============================================================\s*STICKY CONTROLS)/,
      `$1${featuredHtml}$2`
    );
  }

  if (html.includes(eventsStart) && html.includes(eventsEnd)) {
    html = html.replace(new RegExp(`${eventsStart}[\\s\\S]*?${eventsEnd}`), eventsHtml);
  } else {
    html = html.replace(
      /(\s*<div class="wrap" id="agenda">\s*)[\s\S]*?(\s*<!-- Empty state -->)/,
      `$1${eventsHtml}\n\n$2`
    );
  }

  if (html.includes('<!-- CMS AGENDA CATEGORIES START -->') && html.includes('<!-- CMS AGENDA CATEGORIES END -->')) {
    html = html.replace(/<!-- CMS AGENDA CATEGORIES START -->[\s\S]*?<!-- CMS AGENDA CATEGORIES END -->/, categoryControlsHtml);
  } else {
    html = html.replace(
      /(<div class="cat-chips" id="catChips" role="group" aria-label="Filtrar por categoria">\s*)[\s\S]*?(\s*<\/div>\s*<\/div>\s*<div class="controls-row">\s*<span class="controls-label">Mês<\/span>)/,
      `$1${categoryControlsHtml}\n$2`
    );
  }

  fs.writeFileSync(agendaPagePath, html);
}

// ─── Geração do agenda-data.js (usado pelo React na Home e Agenda) ───────────
//
// Campos de controle nos eventos do CMS (content/agenda/events/*.json):
//   featured  : true/false  — aparece na seção "Destaques" da Agenda e entra na Home
//   pinHome   : true/false  — fixa o evento na seção "Próximas Atividades" da Home
//   homeOrdem : número      — posição na Home, de 1 a 5 (menor = primeiro)
//   tituloHome: string      — título curto para exibição na Home (opcional)
//   tipoHome  : string      — label de tipo para a Home (ex: "TERTÚLIA", "CURSO · IMERSÃO")
//   detalhe   : string      — linha complementar exibida nos cards (opcional)
//   precoExtra: string      — preço secundário (ex: "estudante R$ 240") (opcional)
//
function generateAgendaDataFile(events) {
const mapped = events.map((event) => ({
    slug:      event.slug || '',
    date:      event.date || '',
    durationDays: event.durationDays || 0,
    dia:       String(event.day || '').padStart(2, '0'),
    mes:       (event.month || '').toUpperCase(),
    mesNome:   (event.monthLabel || '').toUpperCase(),
    ano:       event.year || '',
    titulo:    event.tituloHome || event.title || '',
    tipo:      event.tipoHome || event.tag || '',
    gratuito:  Boolean(event.free),
    local:     event.location || '',
    horario:   event.time || '',
    detalhe:   event.detalhe || null,
    href:      event.page || event.href || '/pages/atividades.html',
    page:      event.page || null,
    preco:     event.price || '',
    precoExtra: event.precoExtra || null,
    modalidades: (event.modalidades || []).map((m) => ({
      label:       m.label || '',
      price:       m.price || '',
      href:        m.href || '',
      buttonLabel: m.buttonLabel || m.label || 'Inscrever-se',
    })),
    status:    event.status || '',
    featured:  Boolean(event.featured),
    featuredStyle: event.featuredStyle || '',
    pinHome:   Boolean(event.pinHome),
    homeOrdem: typeof event.homeOrdem === 'number' ? event.homeOrdem : 999,
  }));

  const header = [
    '// AUTO-GERADO por scripts/generate-agenda.mjs — não edite manualmente.',
    '// Para atualizar: edite os eventos no CMS (content/agenda/events/) e execute npm run generate:content',
    '//',
    '// Controle da Home via campos no CMS:',
    '//   featured  — true/false: destaque da Agenda, também entra na Home',
    '//   pinHome   — true/false: fixar na seção "Próximas Atividades"',
    '//   homeOrdem — número de 1 a 5: ordem dos fixados na Home',
    '//   tituloHome — título curto para a Home (opcional)',
    '//   tipoHome  — label de tipo para a Home (opcional)',
  ].join('\n');

  fs.writeFileSync(agendaDataPath, `${header}\n\nexport const eventos = ${JSON.stringify(mapped, null, 2)};\n`);
}

const rawModels = readJson(eventModelsPath, { models: [] }).models || [];
const rawTypes = readJson(eventTypesPath, { types: [] }).types || [];
const models = buildModels(rawModels);
const eventTypes = buildEventTypes(rawTypes);
const today = todayUtc();
const events = readEvents(models, eventTypes, today).filter((event) => isUpcoming(event, today));

if (events.length === 0) {
  throw new Error('Nenhum evento futuro em content/agenda/events/.');
}

fs.writeFileSync(adminModelsPath, `${JSON.stringify({ models: rawModels, types: eventTypes.types }, null, 2)}\n`);

updatePage(events, eventTypes);
console.log(`Generated agenda page with ${events.length} events.`);

generateAgendaDataFile(events);
console.log(`Generated agenda-data.js with ${events.length} events (${events.filter(e => e.pinHome).length} pinned to home, ${events.filter(e => e.featured).length} featured).`);
