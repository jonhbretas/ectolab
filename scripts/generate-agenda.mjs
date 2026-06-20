import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const agendaPagePath = path.join(root, 'pages', 'agenda.html');
const eventsPath = path.join(root, 'content', 'agenda', 'events.json');

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

function isPast(event) {
  return String(event.status || '').toLowerCase().includes('realizado');
}

function monthId(year, month) {
  return year === '2026' ? `m-${month}` : `m${String(year).slice(2)}-${month}`;
}

function readEvents() {
  const parsed = JSON.parse(fs.readFileSync(eventsPath, 'utf8'));

  if (Array.isArray(parsed.months)) {
    return parsed.months
      .flatMap((monthGroup) => {
        const events = Array.isArray(monthGroup.events) ? monthGroup.events : [];
        return events.map((event) => ({
          ...event,
          year: event.year || monthGroup.year,
          month: event.month || monthGroup.month,
          monthLabel: event.monthLabel || monthGroup.monthLabel,
        }));
      })
      .filter((event) => event.title && event.date)
      .sort((a, b) => dateValue(a) - dateValue(b));
  }

  return (parsed.events || [])
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
            <div class="feat__foot"><span class="feat__date">${escapeHtml(event.featuredDate || event.date)}</span><span class="feat__go">Ver na agenda</span></div>
          </button>`;
  }).join('\n')}
${featuredEnd}`;
}

function renderRow(event) {
  const rowPast = isPast(event) ? ' is-past' : '';
  const stateClass = isPast(event) ? 'state' : 'state open';
  const priceClass = event.free ? 'price free' : 'price';
  const buttonLabel = event.buttonLabel || event.ctaLabel || 'Ver detalhes';

  return `          <a class="agenda-row${rowPast}" data-cat="${escapeHtml(event.category)}" data-month="${escapeHtml(event.month)}" href="${escapeHtml(event.href || '/pages/atividades.html')}">
            <div class="agenda-row__date"><strong>${escapeHtml(event.day)}</strong><span>${escapeHtml(event.weekday)}</span></div>
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
