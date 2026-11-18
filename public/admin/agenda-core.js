// Núcleo da agenda — fonte única da lógica de eventos.
// Usado por scripts/generate-agenda.mjs (build) e por public/admin/preview.js
// (pré-visualização no CMS), para que o preview mostre exatamente o que o site gera.
// Módulo ES puro, sem dependências: roda no Node e no navegador.

export const monthOrder = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
export const monthNames = {
  jan: 'Janeiro', fev: 'Fevereiro', mar: 'Março', abr: 'Abril', mai: 'Maio', jun: 'Junho',
  jul: 'Julho', ago: 'Agosto', set: 'Setembro', out: 'Outubro', nov: 'Novembro', dez: 'Dezembro',
};
export const weekdayNames = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'];

export const defaultEventTypes = [
  { value: 'palestra', label: 'Palestra', plural: 'Palestras' },
  { value: 'oficina', label: 'Oficina', plural: 'Oficinas' },
  { value: 'programa', label: 'Programa', plural: 'Programas' },
  { value: 'curso-campo', label: 'Curso de Campo', plural: 'Cursos de Campo' },
  { value: 'curso-hibrido', label: 'Curso Híbrido', plural: 'Cursos Híbridos' },
  { value: 'curso-presencial', label: 'Curso Presencial', plural: 'Cursos Presenciais' },
  { value: 'curso-online', label: 'Curso Online', plural: 'Cursos Online' },
  { value: 'verbete', label: 'Verbete', plural: 'Verbetes' },
  { value: 'artigo', label: 'Artigo', plural: 'Artigos' },
  { value: 'simposio', label: 'Simpósio', plural: 'Simpósios' },
  { value: 'forum', label: 'Fórum', plural: 'Fóruns' },
  { value: 'dinamica', label: 'Dinâmica', plural: 'Dinâmicas' },
  { value: 'encontro', label: 'Encontro', plural: 'Encontros' },
];

export function hasValue(value) {
  return value !== undefined && value !== null && value !== '';
}

export function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function slugify(value) {
  const slug = String(value || '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return slug || 'evento';
}

export function todayUtc(now = new Date()) {
  return new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
}

// Tipos: lista do CMS + padrões, sem duplicatas.
export function buildEventTypes(rawTypes = []) {
  const byValue = new Map();
  const types = [];
  [...rawTypes, ...defaultEventTypes].forEach((type) => {
    const label = String(type.label || type.value || '').trim();
    const value = slugify(type.value || label);
    if (!label || byValue.has(value)) return;
    const normalized = { value, label, plural: String(type.plural || label).trim() };
    byValue.set(value, normalized);
    types.push(normalized);
  });
  return { types, byValue };
}

export function buildModels(rawModels = []) {
  const models = new Map();
  rawModels.forEach((model) => { if (model && model.id) models.set(model.id, model); });
  return models;
}

// Campos booleanos em que "false" significa "não marcado" (herda do modelo),
// porque o CMS grava false mesmo quando ninguém mexeu no campo.
const INHERIT_WHEN_FALSE = new Set(['free']);

export function applyEventModel(event, models) {
  const model = models.get(event.model);
  if (!model) return { ...event };

  const merged = { ...model };
  Object.entries(event).forEach(([key, value]) => {
    if (!hasValue(value)) return;
    if (Array.isArray(value) && value.length === 0) return;
    if (value === false && INHERIT_WHEN_FALSE.has(key)) return;
    merged[key] = value;
  });
  return merged;
}

export function addDays(date, days) {
  const next = new Date(date);
  next.setUTCDate(next.getUTCDate() + days);
  return next;
}

export function dateParts(value) {
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

export function datePartsFromDate(date) {
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

export function durationDays(value) {
  const duration = Number.parseInt(value, 10);
  return Number.isFinite(duration) && duration > 0 ? duration : 0;
}

export function eventDateRange(event) {
  const start = dateParts(event.date);
  if (!start) return null;
  const duration = durationDays(event.durationDays);
  const end = duration > 0 ? datePartsFromDate(addDays(start.date, duration)) : start;
  return { start, end, duration };
}

export function formatFeaturedDate(event) {
  const range = eventDateRange(event);
  if (!range) return event.date || '';
  const { start, end, duration } = range;
  if (duration === 0) return `${start.day} ${start.month.toUpperCase()} ${start.year}`;
  if (start.year === end.year && start.month === end.month) {
    return `${start.day}–${end.day} ${start.month.toUpperCase()} ${start.year}`;
  }
  if (start.year === end.year) {
    return `${start.day} ${start.month.toUpperCase()} – ${end.day} ${end.month.toUpperCase()} ${start.year}`;
  }
  return `${start.day} ${start.month.toUpperCase()} ${start.year} – ${end.day} ${end.month.toUpperCase()} ${end.year}`;
}

export function formatRowDate(event) {
  const range = eventDateRange(event);
  if (!range) return { day: event.day || '', weekday: event.weekday || '' };
  const { start, end, duration } = range;
  if (duration === 0) return { day: start.day, weekday: start.weekday };
  return { day: `${start.day}–${end.day}`, weekday: `${start.weekday}–${end.weekday}` };
}

export function normalizeStatus(value) {
  const status = String(value || '').trim().toLowerCase();
  if (!status) return 'Em breve';
  if (status.includes('realizado')) return 'Realizado';
  if (
    status.includes('vagas preenchidas') || status.includes('vaga preenchida') ||
    status.includes('vagas fechadas') || status.includes('vaga fechada') ||
    status.includes('esgotad') || status.includes('lotad') || status.includes('sem vagas')
  ) return 'Vagas preenchidas';
  if (status.includes('breve') || status.includes('programado') || status.includes('disponivel') || status.includes('disponível') || status.includes('publicado')) return 'Em breve';
  return 'Inscrições Abertas';
}

export function statusForEvent(event, today = todayUtc()) {
  const range = eventDateRange(event);
  if (range && range.end.date < today) return 'Realizado';
  return normalizeStatus(event.status);
}

export function standardTitle(event) {
  if (event.acronym && event.fullName) return `${event.acronym} - ${event.fullName}`;
  return event.title || '';
}

export function titleComplement(event, base) {
  let complement = String(event.title || '').trim();
  if (!complement || !base) return complement;

  const acronym = String(event.acronym || '').trim();
  const fullName = String(event.fullName || '').trim();
  complement = complement.replace(new RegExp(`^${escapeRegExp(base)}\\s*[·:–—-]?\\s*`, 'i'), '').trim();

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
    complement = complement.replace(/^Tertúlia\s*[·:–—-]?\s*/i, '').replace(/^de\s+/i, '').trim();
  }
  if (event.model === 'simposio') {
    complement = complement
      .replace(/^([IVXLCDM]+)\s+Simpósio Ectolab\s*[–—-]\s*/i, '$1 - ')
      .replace(/^([IVXLCDM]+)\s+Simpósio Ectolab\s*/i, '$1 ')
      .trim();
  }
  return complement;
}

export function displayTitle(event) {
  const base = standardTitle(event);
  const complement = titleComplement(event, base);
  if (!base) return complement;
  if (!complement || complement === base) return base;
  if (complement.toLowerCase().startsWith(base.toLowerCase())) return complement;
  return `${base} · ${complement}`;
}

export function normalizeModalidades(event) {
  const list = Array.isArray(event.modalidades) ? event.modalidades : [];
  const clean = list
    .map((m) => ({
      label: String(m.label || '').trim(),
      price: String(m.price || '').trim(),
      href: String(m.href || '').trim(),
      buttonLabel: String(m.buttonLabel || m.label || 'Inscrever-se').trim(),
    }))
    .filter((m) => m.label || m.href || m.price);
  return clean.length >= 2 ? clean : [];
}

export function eventSlug(event) {
  return slugify(`${event.date || ''}-${event.title || ''}`);
}

// Evento cru do CMS -> evento final (modelo aplicado, título, datas, status, preço).
export function normalizeEvent(rawEvent, models = new Map(), eventTypes = buildEventTypes(), today = todayUtc()) {
  const event = applyEventModel(rawEvent, models);
  const parts = dateParts(event.date) || {};
  const customCategory = String(event.categoryCustom || '').trim();
  const category = customCategory ? slugify(customCategory) : event.category || 'palestra';
  const categoryLabel = customCategory || eventTypes.byValue.get(category)?.label || category;
  const modalidades = normalizeModalidades(event);
  const price = modalidades.length
    ? modalidades.map((m) => m.price).filter(Boolean).join(' · ')
    : (event.price || (event.free ? 'Gratuito' : ''));
  const duration = durationDays(event.durationDays);
  const status = statusForEvent({ ...event, durationDays: duration }, today);

  return {
    ...event,
    slug: eventSlug(event),
    title: displayTitle(event),
    year: parts.year || '',
    month: parts.month || '',
    monthLabel: parts.monthLabel || '',
    day: parts.day || '',
    weekday: parts.weekday || '',
    durationDays: duration,
    category,
    categoryCustom: customCategory,
    tag: event.tag || categoryLabel,
    description: event.description || '',
    location: event.location || '',
    time: event.time || '',
    price,
    modalidades,
    vacancies: event.vacancies || '',
    free: Boolean(event.free || String(price).toLowerCase().includes('gratuito')),
    status,
    page: event.page || '',
    href: event.href || '/pages/atividades.html',
    buttonLabel: event.buttonLabel || 'Ver detalhes',
  };
}

export function isPast(event) {
  return String(event.status || '').toLowerCase().includes('realizado');
}

export function isUpcoming(event, today = todayUtc()) {
  if (isPast(event)) return false;
  const range = eventDateRange(event);
  if (!range) return true;
  return range.end.date >= today;
}

// Problemas comuns de preenchimento, mostrados no preview do CMS.
export function eventWarnings(rawEvent, models) {
  const warnings = [];
  if (!rawEvent.date) warnings.push('Falta a Data de início — o evento não aparece no site sem ela.');
  if (rawEvent.model && !models.has(rawEvent.model)) warnings.push(`O modelo "${rawEvent.model}" não existe mais em Modelos de eventos.`);
  if (!rawEvent.model && !hasValue(rawEvent.title)) warnings.push('Sem modelo e sem título — o evento não aparece no site. Escolha um modelo ou preencha o título.');
  if (/^\s*\d+\s*$/.test(String(rawEvent.time || ''))) warnings.push(`Horário "${rawEvent.time}" parece um número solto. Para duração, use o campo Duração em dias.`);
  const mods = Array.isArray(rawEvent.modalidades) ? rawEvent.modalidades.filter((m) => m && (m.label || m.href || m.price)) : [];
  if (mods.length === 1) warnings.push('Só 1 modalidade cadastrada — são necessárias 2 ou mais; com 1 o site ignora as modalidades.');
  if (mods.length >= 2 && hasValue(rawEvent.page)) warnings.push('Há Página do evento: o card leva para ela e os botões das Modalidades não aparecem na agenda (a inscrição fica na página do curso). Para mostrar os botões, apague a Página do evento.');
  if (rawEvent.pinHome && !hasValue(rawEvent.homeOrdem)) warnings.push('Fixado na Home sem Ordem na Home — vai para o fim da fila.');
  return warnings;
}
