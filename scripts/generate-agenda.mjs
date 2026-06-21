import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const agendaPagePath = path.join(root, 'pages', 'agenda.html');
const eventsPath = path.join(root, 'content', 'agenda', 'events.json');
const eventModelsPath = path.join(root, 'content', 'agenda', 'event-models.json');

const eventsStart = '<!-- CMS AGENDA EVENTS START -->';
const eventsEnd = '<!-- CMS AGENDA EVENTS END -->';
const featuredStart = '<!-- CMS AGENDA FEATURED START -->';
const featuredEnd = '<!-- CMS AGENDA FEATURED END -->';

const monthOrder = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
const monthNames = {
  jan: 'Janeiro',
  fev: 'Fevereiro',
  mar: 'Março',
  abr: 'Abril',
  mai: 'Maio',
  jun: 'Junho',
  jul: 'Julho',
  ago: 'Agosto',
  set: 'Setembro',
  out: 'Outubro',
  nov: 'Novembro',
  dez: 'Dezembro',
};
const weekdayNames = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'];
const categoryLabels = {
  palestra: 'Palestra',
  oficina: 'Oficina',
  'curso-campo': 'Curso de Campo',
  'curso-hibrido': 'Curso Híbrido',
  'curso-presencial': 'Curso Presencial',
  'curso-online': 'Curso Online',
  verbete: 'Verbete',
  artigo: 'Artigo',
  simposio: 'Simpósio',
  forum: 'Fórum',
  dinamica: 'Dinâmica',
  encontro: 'Encontro',
};

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function dateValue(event) {
  return new Date(`${event.date}T00:00:00Z`);
}

function todayUtc() {
  const now = new Date();
  return new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
}

function hasValue(value) {
  return value !== undefined && value !== null && value !== '';
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function readEventModels() {
  if (!fs.existsSync(eventModelsPath)) return new Map();

  const parsed = JSON.parse(fs.readFileSync(eventModelsPath, 'utf8'));
  const models = new Map();
  (parsed.models || []).forEach((model) => {
    if (model.id) models.set(model.id, model);
  });

  return models;
}

function applyEventModel(event, models) {
  const model = models.get(event.model);
  if (!model) return event;

  const merged = { ...model };
  Object.entries(event).forEach(([key, value]) => {
    if (hasValue(value)) merged[key] = value;
  });

  return merged;
}

function addDays(date, days) {
  const next = new Date(date);
  next.setUTCDate(next.getUTCDate() + days);
  return next;
}

function dateParts(value) {
  const isoDate = String(value || '').slice(0, 10);
  const match = isoDate.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return null;

  const [, year, monthNumber, day] = match;
  const monthIndex = Number(monthNumber) - 1;
  const date = new Date(Date.UTC(Number(year), monthIndex, Number(day)));

  return {
    year,
    month: monthOrder[monthIndex],
    monthLabel: monthNames[monthOrder[monthIndex]],
    day,
    weekday: weekdayNames[date.getUTCDay()],
    date,
  };
}

function datePartsFromDate(date) {
  const month = monthOrder[date.getUTCMonth()];
  return {
    year: String(date.getUTCFullYear()),
    month,
    monthLabel: monthNames[month],
    day: String(date.getUTCDate()).padStart(2, '0'),
    weekday: weekdayNames[date.getUTCDay()],
    date,
  };
}

function durationDays(value) {
  const duration = Number.parseInt(value, 10);
  return Number.isFinite(duration) && duration > 0 ? duration : 0;
}

function eventDateRange(event) {
  const start = dateParts(event.date);
  if (!start) return null;

  const duration = durationDays(event.durationDays);
  const end = duration > 0 ? datePartsFromDate(addDays(start.date, duration)) : start;

  return { start, end, duration };
}

function formatFeaturedDate(event) {
  const range = eventDateRange(event);
  if (!range) return event.date || '';

  const { start, end, duration } = range;
  if (duration === 0) return `${start.day} ${start.month.toUpperCase()} ${start.year}`;
  if (start.year === end.year && start.month === end.month) {
    return `${start.day}–${end.day} ${start.month.toUpperCase()} ${start.year}`;
  }

  return `${start.day} ${start.month.toUpperCase()} ${start.year}–${end.day} ${end.month.toUpperCase()} ${end.year}`;
}

function formatRowDate(event) {
  const range = eventDateRange(event);
  if (!range) return { day: event.day || '', weekday: event.weekday || '' };

  const { start, end, duration } = range;
  if (duration === 0) return { day: start.day, weekday: start.weekday };

  return {
    day: `${start.day}–${end.day}`,
    weekday: `${start.weekday}–${end.weekday}`,
  };
}

function normalizeStatus(value) {
  const status = String(value || '').trim().toLowerCase();
  if (!status) return 'Em breve';
  if (status.includes('realizado')) return 'Realizado';
  if (status.includes('breve') || status.includes('programado') || status.includes('disponivel') || status.includes('disponível') || status.includes('publicado')) return 'Em breve';
  if (status.includes('inscri') || status.includes('sem inscrição') || status.includes('sem inscricao') || status.includes('vaga') || status.includes('chamada')) return 'Inscrições Abertas';

  return 'Inscrições Abertas';
}

function statusForEvent(event) {
  const range = eventDateRange(event);
  if (range && range.end.date < todayUtc()) return 'Realizado';

  return normalizeStatus(event.status);
}

function standardTitle(event) {
  if (event.acronym && event.fullName) return `${event.acronym} - ${event.fullName}`;
  return event.title || '';
}

function titleComplement(event, base) {
  let complement = String(event.title || '').trim();
  if (!complement || !base) return complement;

  const acronym = String(event.acronym || '').trim();
  const fullName = String(event.fullName || '').trim();
  complement = complement
    .replace(new RegExp(`^${escapeRegExp(base)}\\s*[·:–—-]?\\s*`, 'i'), '')
    .trim();

  if (acronym && fullName) {
    complement = complement
      .replace(new RegExp(`^${escapeRegExp(acronym)}\\s*[–—-]\\s*${escapeRegExp(fullName)}\\s*[·:–—-]?\\s*`, 'i'), '')
      .replace(new RegExp(`^${escapeRegExp(acronym)}\\s*[–—-]\\s*`, 'i'), '')
      .replace(new RegExp(`^${escapeRegExp(fullName)}\\s*[·:–—-]?\\s*`, 'i'), '')
      .trim();
  }

  if (event.model === 'dip') {
    complement = complement.replace(/^Campo Paracirúrgico Público\s*[–—-]\s*/i, '').trim();
  }

  if (event.model === 'palestra-tertulia') {
    complement = complement
      .replace(/^Tertúlia\s*[·:–—-]?\s*/i, '')
      .replace(/^de\s+/i, '')
      .trim();
  }

  if (event.model === 'simposio') {
    complement = complement
      .replace(/^([IVXLCDM]+)\s+Simpósio Ectolab\s*[–—-]\s*/i, '$1 - ')
      .replace(/^([IVXLCDM]+)\s+Simpósio Ectolab\s*/i, '$1 ')
      .trim();
  }

  return complement;
}

function displayTitle(event) {
  const base = standardTitle(event);
  const complement = titleComplement(event, base);

  if (!base) return complement;
  if (!complement || complement === base) return base;
  if (complement.toLowerCase().startsWith(base.toLowerCase())) return complement;

  return `${base} · ${complement}`;
}

function normalizeEvent(rawEvent, monthGroup = {}, models = new Map()) {
  const event = applyEventModel(rawEvent, models);
  const parts = dateParts(event.date) || {};
  const category = event.category || 'palestra';
  const price = event.price || (event.free ? 'Gratuito' : '');
  const duration = durationDays(event.durationDays);
  const status = statusForEvent({ ...event, durationDays: duration });

  return {
    ...event,
    title: displayTitle(event),
    year: parts.year || event.year || monthGroup.year,
    month: parts.month || event.month || monthGroup.month,
    monthLabel: parts.monthLabel || event.monthLabel || monthGroup.monthLabel,
    day: parts.day || event.day || '',
    weekday: parts.weekday || event.weekday || '',
    durationDays: duration,
    category,
    tag: event.tag || categoryLabels[category] || category,
    description: event.description || '',
    location: event.location || '',
    time: event.time || '',
    price,
    free: Boolean(event.free || String(price).toLowerCase().includes('gratuito')),
    status,
    href: event.href || '/pages/atividades.html',
    buttonLabel: event.buttonLabel || event.ctaLabel || 'Ver detalhes',
  };
}

function isPast(event) {
  return String(event.status || '').toLowerCase().includes('realizado');
}

function monthId(year, month) {
  return year === '2026' ? `m-${month}` : `m${String(year).slice(2)}-${month}`;
}

function readEvents() {
  const parsed = JSON.parse(fs.readFileSync(eventsPath, 'utf8'));
  const models = readEventModels();

  if (Array.isArray(parsed.months)) {
    return parsed.months
      .flatMap((monthGroup) => {
        const events = Array.isArray(monthGroup.events) ? monthGroup.events : [];
        return events.map((event) => normalizeEvent(event, monthGroup, models));
      })
      .filter((event) => event.title && event.date)
      .sort((a, b) => dateValue(a) - dateValue(b));
  }

  return (parsed.events || [])
    .map((event) => normalizeEvent(event, {}, models))
    .filter((event) => event.title && event.date)
    .slice()
    .sort((a, b) => dateValue(a) - dateValue(b));
}

function renderFeatured(events) {
  const featured = events.filter((event) => event.featured).slice(0, 3);
  return `${featuredStart}
${featured.map((event) => {
    const style = event.featuredStyle && event.featuredStyle !== 'default' ? ` ${event.featuredStyle}` : '';
    return `          <button type="button" class="feat${escapeHtml(style)}" data-year="${escapeHtml(event.year)}" data-month="${escapeHtml(event.month)}">
            <div class="feat__top"><span class="feat__year">${escapeHtml(event.year)}</span><span class="feat__cat">${escapeHtml(event.featuredCategory || event.tag)}</span></div>
            <h3>${escapeHtml(event.title)}</h3>
            <p>${escapeHtml(event.description)}</p>
            <div class="feat__foot"><span class="feat__date">${escapeHtml(event.featuredDate || formatFeaturedDate(event))}</span><span class="feat__go">Ver na agenda</span></div>
          </button>`;
  }).join('\n')}
${featuredEnd}`;
}

function renderRow(event) {
  const rowPast = isPast(event) ? ' is-past' : '';
  const stateClass = event.status === 'Inscrições Abertas' ? 'state open' : 'state';
  const priceClass = event.free ? 'price free' : 'price';
  const buttonLabel = event.buttonLabel || 'Ver detalhes';
  const rowDate = formatRowDate(event);

  return `          <a class="agenda-row${rowPast}" data-cat="${escapeHtml(event.category)}" data-month="${escapeHtml(event.month)}" href="${escapeHtml(event.href || '/pages/atividades.html')}">
            <div class="agenda-row__date"><strong>${escapeHtml(rowDate.day)}</strong><span>${escapeHtml(rowDate.weekday)}</span></div>
            <div class="agenda-row__body">
              <span class="agenda-tag ${escapeHtml(event.category)}">${escapeHtml(event.tag)}</span>
              <h3>${escapeHtml(event.title)}</h3>
              <p>${escapeHtml(event.description)}</p>
            </div>
            <div class="agenda-row__meta">
              <span><span class="ico">◆</span> ${escapeHtml(event.location || '')}</span>
              <span><span class="ico">◆</span> ${escapeHtml(event.time || '')}</span>
            </div>
            <div class="agenda-row__status"><span class="${priceClass}">${escapeHtml(event.price)}</span><span class="${stateClass}">${escapeHtml(event.status)}</span></div>
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

function updatePage(events) {
  let html = fs.readFileSync(agendaPagePath, 'utf8');
  const featuredHtml = renderFeatured(events);
  const eventsHtml = renderEvents(events);

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

  fs.writeFileSync(agendaPagePath, html);
}

const events = readEvents();

if (events.length === 0) {
  throw new Error('No events found in content/agenda/events.json.');
}

updatePage(events);
console.log(`Generated agenda page with ${events.length} events.`);
