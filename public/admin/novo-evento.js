// Cadastro guiado de eventos da agenda (/admin/novo-evento.html).
// Formulário em etapas com pré-visualização ao vivo do evento no lugar do site.
// Login: mesmo serviço OAuth do Sveltia CMS (base_url do config.yml).
// Publicação: cria content/agenda/events/<arquivo>.json no GitHub — igual ao CMS.
import {
  buildEventTypes,
  buildModels,
  normalizeEvent,
  formatFeaturedDate,
  eventWarnings,
  nestEvent,
  slugify,
  hasValue,
  EVENT_GROUPS,
} from './agenda-core.js';
import { renderEventPreview, PREVIEW_CSS } from './agenda-view.js';

// ─── Utilitários ────────────────────────────────────────────────────────────
function el(tag, props, ...children) {
  const node = document.createElement(tag);
  let value;
  if (props) {
    for (const [key, val] of Object.entries(props)) {
      if (val == null || val === false || key === 'key') continue;
      if (key === 'className') node.className = val;
      else if (key === 'value') value = val;
      else if (key === 'checked') node.checked = Boolean(val);
      else if (key === 'htmlFor') node.htmlFor = val;
      else if (key.startsWith('on') && typeof val === 'function') node.addEventListener(key.slice(2).toLowerCase(), val);
      else node.setAttribute(key, val === true ? '' : String(val));
    }
  }
  const add = (child) => {
    if (child == null || child === false || child === '') return;
    if (Array.isArray(child)) child.forEach(add);
    else node.append(child instanceof Node ? child : String(child));
  };
  children.forEach(add);
  if (value !== undefined) node.value = value;
  return node;
}

const $ = (sel) => document.querySelector(sel);
const storage = {
  get(store, key) { try { return window[store].getItem(key); } catch { return null; } },
  set(store, key, val) { try { window[store].setItem(key, val); } catch { /* sem armazenamento */ } },
  del(store, key) { try { window[store].removeItem(key); } catch { /* sem armazenamento */ } },
};

function toBase64(text) {
  const bytes = new TextEncoder().encode(text);
  let bin = '';
  bytes.forEach((b) => { bin += String.fromCharCode(b); });
  return btoa(bin);
}
function fromBase64(b64) {
  return new TextDecoder().decode(Uint8Array.from(atob(String(b64).replace(/\s/g, '')), (c) => c.charCodeAt(0)));
}

// ─── Configuração e login ───────────────────────────────────────────────────
const TOKEN_KEY = 'ectolab-gh-token';
const DRAFT_KEY = 'ectolab-novo-evento-rascunho';
const EVENTS_DIR = 'content/agenda/events';
const config = { repo: '', branch: 'main', baseUrl: '' };
let token = null;
let ctx = { models: new Map(), eventTypes: buildEventTypes([]), rawModels: [] };

async function loadConfig() {
  const text = await (await fetch('/admin/config.yml', { cache: 'no-cache' })).text();
  config.repo = (text.match(/^\s*repo:\s*(\S+)/m) || [])[1] || '';
  config.branch = (text.match(/^\s*branch:\s*(\S+)/m) || [])[1] || 'main';
  config.baseUrl = ((text.match(/^\s*base_url:\s*(\S+)/m) || [])[1] || '').replace(/\/$/, '');
}

// Reaproveita o login do Sveltia CMS (mesmo site), se houver.
function storedToken() {
  const own = storage.get('sessionStorage', TOKEN_KEY);
  if (own) return own;
  try {
    for (let i = 0; i < localStorage.length; i += 1) {
      const key = localStorage.key(i);
      if (!/sveltia/i.test(key || '')) continue;
      try {
        const val = JSON.parse(localStorage.getItem(key));
        const found = val && (val.token || (val.user && val.user.token));
        if (typeof found === 'string' && found) return found;
      } catch { /* não é JSON */ }
    }
  } catch { /* sem localStorage */ }
  return null;
}

function loginPopup() {
  return new Promise((resolve, reject) => {
    if (!config.baseUrl) { reject(new Error('Serviço de login não configurado (base_url no config.yml).')); return; }
    const authOrigin = new URL(config.baseUrl).origin;
    const url = `${config.baseUrl}/auth?provider=github&site_id=${encodeURIComponent(location.hostname)}&scope=repo`;
    const popup = window.open(url, 'ectolab-auth', 'width=600,height=720');
    if (!popup) { reject(new Error('O navegador bloqueou a janela de login. Permita pop-ups para este site e tente de novo.')); return; }

    const SUCCESS = 'authorization:github:success:';
    const ERROR = 'authorization:github:error:';
    const timer = setInterval(() => { if (popup.closed) { cleanup(); reject(new Error('A janela de login foi fechada.')); } }, 700);
    function cleanup() { window.removeEventListener('message', onMessage); clearInterval(timer); }
    function onMessage(event) {
      if (event.origin !== authOrigin) return;
      const data = String(event.data || '');
      if (data === 'authorizing:github') { event.source?.postMessage(data, event.origin); return; }
      if (data.startsWith(SUCCESS)) {
        cleanup();
        try { resolve(JSON.parse(data.slice(SUCCESS.length)).token); } catch (err) { reject(err); }
      } else if (data.startsWith(ERROR)) {
        cleanup();
        let msg = 'Não foi possível entrar.';
        try { msg = JSON.parse(data.slice(ERROR.length)).error || msg; } catch { /* mantém padrão */ }
        reject(new Error(msg));
      }
    }
    window.addEventListener('message', onMessage);
  });
}

function gh(path, opts = {}) {
  return fetch(`https://api.github.com${path}`, {
    ...opts,
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${token}`,
      'X-GitHub-Api-Version': '2022-11-28',
      ...(opts.body ? { 'Content-Type': 'application/json' } : {}),
    },
  });
}

async function apiError(res) {
  if (res.status === 401) return new Error('Sua sessão do GitHub expirou. Recarregue a página e entre de novo.');
  if (res.status === 403 || res.status === 404) return new Error('Sua conta não tem permissão para publicar neste repositório.');
  let detail = '';
  try { detail = (await res.json()).message || ''; } catch { /* sem corpo */ }
  return new Error(`O GitHub recusou a operação (${res.status}). ${detail}`.trim());
}

async function checkAccess() {
  const userRes = await gh('/user');
  if (!userRes.ok) return null;
  const user = await userRes.json();
  const repoRes = await gh(`/repos/${config.repo}`);
  if (!repoRes.ok) throw await apiError(repoRes);
  const repo = await repoRes.json();
  if (!repo.permissions || !repo.permissions.push) throw new Error(`A conta @${user.login} não tem permissão de escrita em ${config.repo}.`);
  return user;
}

async function readRepoJson(path) {
  const res = await gh(`/repos/${config.repo}/contents/${path}?ref=${encodeURIComponent(config.branch)}`);
  if (!res.ok) throw await apiError(res);
  return JSON.parse(fromBase64((await res.json()).content));
}

// Modelos e tipos direto do GitHub (sempre atualizados); cópia do build como reserva.
async function loadModels() {
  let models = [];
  let types = [];
  try {
    [models, types] = await Promise.all([
      readRepoJson('content/agenda/event-models.json').then((d) => d.models || []),
      readRepoJson('content/agenda/event-types.json').then((d) => d.types || []),
    ]);
  } catch {
    try {
      const data = await (await fetch('/admin/agenda-models.json', { cache: 'no-cache' })).json();
      models = data.models || [];
      types = data.types || [];
    } catch { /* segue sem modelos */ }
  }
  ctx = { models: buildModels(models), eventTypes: buildEventTypes(types), rawModels: models };
}

// ─── Estado ─────────────────────────────────────────────────────────────────
const state = { step: 0, maxStep: 0, ev: {}, errors: {}, publishing: false, result: null, publishError: '' };

function saveDraft() {
  storage.set('localStorage', DRAFT_KEY, JSON.stringify({ ev: state.ev, step: state.step, maxStep: state.maxStep }));
}
function clearDraft() { storage.del('localStorage', DRAFT_KEY); }
function loadDraft() {
  try {
    const draft = JSON.parse(storage.get('localStorage', DRAFT_KEY) || 'null');
    if (draft && draft.ev && Object.keys(draft.ev).length) return draft;
  } catch { /* rascunho inválido */ }
  return null;
}

const model = () => ctx.models.get(state.ev.model);
const fromModel = (key) => { const m = model(); return m && hasValue(m[key]) ? m[key] : ''; };
const normalized = () => normalizeEvent(state.ev, ctx.models, ctx.eventTypes);

function setField(key, val) {
  if (val === '' || val == null) delete state.ev[key];
  else state.ev[key] = val;
  if (state.errors[key]) { delete state.errors[key]; const f = document.querySelector(`[data-field="${key}"]`); f?.classList.remove('invalid'); f?.querySelector('.err-msg')?.remove(); }
  saveDraft();
  refreshLive();
}

// ─── Campos ─────────────────────────────────────────────────────────────────
function fieldWrap(key, label, control, { optional = true, help } = {}) {
  const err = state.errors[key];
  return el('div', { className: `field${err ? ' invalid' : ''}`, 'data-field': key },
    el('label', { htmlFor: `f-${key}` }, label, optional ? el('span', { className: 'opt' }, '(opcional)') : null),
    control,
    help ? el('span', { className: 'help' }, help) : null,
    err ? el('span', { className: 'err-msg' }, err) : null);
}

function inheritHelp(key, extra) {
  const inherited = fromModel(key);
  const parts = [];
  if (inherited !== '') parts.push(`Vazio = usa o do modelo (${inherited}).`);
  if (extra) parts.push(extra);
  return parts.join(' ') || undefined;
}

function textField(key, label, { example = '', multiline = false, type = 'text', extra, optional = true } = {}) {
  const inherited = fromModel(key);
  const props = {
    id: `f-${key}`,
    value: state.ev[key] ?? '',
    placeholder: inherited !== '' ? String(inherited) : example,
    onInput: (e) => setField(key, e.target.value),
  };
  const control = multiline ? el('textarea', props) : el('input', { ...props, type });
  return fieldWrap(key, label, control, { optional, help: inheritHelp(key, extra) });
}

function numberField(key, label, { min, max, extra } = {}) {
  const inherited = fromModel(key);
  return fieldWrap(key, label, el('input', {
    id: `f-${key}`, type: 'number', inputmode: 'numeric', min, max,
    value: state.ev[key] ?? '',
    placeholder: inherited !== '' ? String(inherited) : '',
    onInput: (e) => setField(key, e.target.value === '' ? '' : Number.parseInt(e.target.value, 10)),
  }), { help: inheritHelp(key, extra) });
}

function toggleField(key, label, sub, { rerender = false } = {}) {
  return el('label', { className: 'toggle', htmlFor: `f-${key}` },
    el('span', null, label, sub ? el('small', null, sub) : null),
    el('input', {
      id: `f-${key}`, type: 'checkbox', checked: Boolean(state.ev[key]),
      onChange: (e) => { setField(key, e.target.checked ? true : ''); if (rerender) renderStep(); },
    }));
}

function choiceField(key, label, options, { help, rerender = false } = {}) {
  const current = state.ev[key] ?? '';
  return el('div', { className: 'field', 'data-field': key },
    el('span', { className: 'label' }, label),
    el('div', { className: 'choices', role: 'radiogroup' },
      ...options.map(([val, text]) => el('button', {
        type: 'button', role: 'radio', 'aria-checked': String(current === val),
        className: `choice${current === val ? ' on' : ''}`,
        onClick: () => { setField(key, val); if (rerender) { renderStep(); return; } renderStep(); },
      }, text))),
    help ? el('span', { className: 'help' }, help) : null);
}

// ─── Etapas ─────────────────────────────────────────────────────────────────
const STEPS = [
  {
    title: 'Qual evento?',
    lead: 'Escolha o modelo e a data. O modelo já preenche quase tudo — nas próximas etapas você só muda o que for diferente.',
    render() {
      const m = model();
      return [
        el('div', { className: 'field', 'data-field': 'model' },
          el('span', { className: 'label' }, 'Modelo'),
          el('div', { className: 'model-pick' },
            ...ctx.rawModels.map((mod) => el('button', {
              type: 'button', className: `model-card${state.ev.model === mod.id ? ' on' : ''}`,
              onClick: () => { setField('model', mod.id); renderStep(); },
            }, el('b', null, mod.acronym || mod.id.toUpperCase()), el('span', null, mod.label))),
            el('button', {
              type: 'button', className: `model-card none${!state.ev.model ? ' on' : ''}`,
              onClick: () => { setField('model', ''); renderStep(); },
            }, el('b', null, 'SEM MODELO'), el('span', null, 'Evento avulso — preencho tudo'))),
          m && m.description ? el('span', { className: 'help' }, m.description) : null),
        el('div', { className: 'row2' },
          fieldWrap('date', 'Data de início', el('input', {
            id: 'f-date', type: 'date', value: state.ev.date || '',
            onInput: (e) => setField('date', e.target.value),
          }), { optional: false }),
          numberField('durationDays', 'Dias a mais', { min: 0, extra: '0 = um dia · 2 = sexta a domingo.' })),
        el('p', { className: 'muted', 'data-live': 'period' }),
      ];
    },
    validate(ev) {
      const errors = {};
      if (!ev.date) errors.date = 'Informe a data de início.';
      return errors;
    },
  },
  {
    title: 'Nome e status',
    lead: 'Com modelo, o nome oficial entra sozinho. Escreva só o complemento, se houver.',
    render() {
      const m = model();
      const base = m ? (m.acronym && m.fullName ? `${m.acronym} - ${m.fullName}` : m.title) : '';
      return [
        textField('title', m ? 'Complemento do título' : 'Título do evento', {
          example: m ? 'Ex.: Turma 2027, Edição 412' : 'Ex.: Encontro de Voluntários',
          optional: Boolean(m),
          extra: m ? `Base do modelo: “${base}”.` : undefined,
        }),
        el('p', { className: 'muted' }, 'Vai aparecer como: ', el('strong', { 'data-live': 'title' })),
        choiceField('status', 'Status', [
          ['', m && m.status ? `Do modelo (${m.status})` : 'Padrão (Em breve)'],
          ['Em breve', 'Em breve'],
          ['Inscrições Abertas', 'Inscrições abertas'],
          ['Vagas preenchidas', 'Vagas preenchidas'],
        ], { help: 'Depois da data final, o site mostra “Realizado” sozinho.' }),
      ];
    },
    validate(ev) {
      const errors = {};
      if (!ev.model && !hasValue(ev.title)) errors.title = 'Sem modelo, o título é obrigatório.';
      return errors;
    },
  },
  {
    title: 'Textos do card',
    lead: 'Tudo opcional. Campos vazios usam o texto do modelo (aparece em cinza dentro do campo).',
    render() {
      const types = ctx.eventTypes.types;
      return [
        textField('description', 'Descrição curta', { multiline: true, example: 'Uma ou duas frases sobre o evento.' }),
        textField('location', 'Local', { example: 'Ex.: Foz do Iguaçu - PR · CEAEC' }),
        el('div', { className: 'row2' },
          textField('time', 'Horário', { example: 'Ex.: 19h30 às 21h30' }),
          textField('vacancies', 'Vagas', { example: 'Ex.: 20 vagas' })),
        el('details', { className: 'more', open: Boolean(state.ev.tag || state.ev.category || state.ev.categoryCustom) },
          el('summary', null, 'Mais opções (etiqueta e tipo)'),
          textField('tag', 'Etiqueta do card', { example: 'Texto da etiqueta colorida' }),
          fieldWrap('category', 'Tipo (filtro da agenda)', el('select', {
            id: 'f-category', value: state.ev.category || '',
            onChange: (e) => setField('category', e.target.value),
          },
          el('option', { value: '' }, fromModel('category') ? `Do modelo (${ctx.eventTypes.byValue.get(fromModel('category'))?.label || fromModel('category')})` : '—'),
          ...types.map((t) => el('option', { value: t.value }, t.label)))),
          textField('categoryCustom', 'Tipo novo', { example: 'Ex.: Semana de Verbetes', extra: 'Só se o tipo não existir na lista. Vira filtro sozinho.' })),
      ];
    },
    validate(ev) {
      const errors = {};
      if (/^\s*\d+\s*$/.test(String(ev.time || ''))) errors.time = 'Escreva o horário por extenso (ex.: 19h30 às 21h30). Para a duração, use “Dias a mais” na etapa 1.';
      return errors;
    },
  },
  {
    title: 'Preço e inscrição',
    lead: 'Para onde o card leva e quanto custa.',
    render() {
      const mods = Array.isArray(state.ev.modalidades) ? state.ev.modalidades : [];
      const updateMod = (i, prop, val) => {
        const list = (state.ev.modalidades || []).map((m) => ({ ...m }));
        list[i][prop] = val;
        state.ev.modalidades = list;
        saveDraft();
        refreshLive();
      };
      return [
        el('div', { className: 'row2' },
          textField('price', 'Preço', { example: 'Ex.: R$ 1.000' }),
          el('div', { className: 'field' }, el('span', { className: 'label' }, ' '), toggleField('free', 'Gratuito', 'Mostra a etiqueta GRATUITO'))),
        textField('page', 'Página do evento no site', { example: '/pages/curso-proep.html', extra: 'Se preenchida, o card leva para ela (o link externo e os botões de modalidade não aparecem no card).' }),
        textField('href', 'Link externo / inscrição', { type: 'url', example: 'https://…', extra: 'Loja, Sympla etc. Usado quando não há página.' }),
        textField('buttonLabel', 'Texto do botão', { example: 'Ex.: Inscrever-se' }),
        el('div', { className: 'field' },
          el('span', { className: 'label' }, 'Modalidades', el('span', { className: 'opt' }, '(opcional)')),
          el('span', { className: 'help' }, 'Só quando presencial e online têm preço e link diferentes. Mínimo 2.'),
          el('div', { className: 'mods' },
            ...mods.map((m, i) => el('div', { className: 'mod' },
              el('button', { type: 'button', className: 'rm', onClick: () => { state.ev.modalidades = mods.filter((_, j) => j !== i); if (!state.ev.modalidades.length) delete state.ev.modalidades; saveDraft(); renderStep(); } }, 'Remover'),
              el('input', { type: 'text', placeholder: 'Nome (ex.: Presencial)', value: m.label || '', onInput: (e) => updateMod(i, 'label', e.target.value) }),
              el('input', { type: 'text', placeholder: 'Preço (ex.: R$ 500)', value: m.price || '', onInput: (e) => updateMod(i, 'price', e.target.value) }),
              el('input', { type: 'url', className: 'full', placeholder: 'Link de inscrição', value: m.href || '', onInput: (e) => updateMod(i, 'href', e.target.value) }),
              el('input', { type: 'text', className: 'full', placeholder: 'Texto do botão (ex.: Inscrever presencial)', value: m.buttonLabel || '', onInput: (e) => updateMod(i, 'buttonLabel', e.target.value) })))),
          el('button', { type: 'button', className: 'btn small', onClick: () => { state.ev.modalidades = [...mods, { label: '', price: '', href: '', buttonLabel: '' }]; saveDraft(); renderStep(); } }, '+ Adicionar modalidade')),
      ];
    },
    validate() { return {}; },
  },
  {
    title: 'Destaque e Home',
    lead: 'Onde mais o evento aparece além da agenda. Veja o efeito na prévia ao lado.',
    render() {
      return [
        toggleField('featured', 'Destacar', 'Principais eventos da agenda + destaques da Home (até 3)', { rerender: true }),
        state.ev.featured ? el('div', { style: 'margin-top:14px' },
          choiceField('featuredStyle', 'Estilo do destaque', [['', 'Padrão (claro)'], ['dark', 'Escuro'], ['gold', 'Dourado'], ['highlight', 'Super destaque']],
            { help: 'Super destaque tem borda animada — use só no evento principal.' }),
          el('div', { className: 'row2' },
            textField('featuredDate', 'Texto da data', { example: 'Automático' }),
            textField('featuredCategory', 'Texto da categoria', { example: 'Usa a etiqueta' }))) : null,
        el('div', { style: 'height:14px' }),
        toggleField('pinHome', 'Fixar na Home', 'Seção Próximas atividades', { rerender: true }),
        state.ev.pinHome ? el('div', { style: 'margin-top:14px' },
          choiceField('homeOrdem', 'Posição na Home', [['', 'Fim da fila'], ...[1, 2, 3, 4, 5].map((n) => [n, `${n}º`])])) : null,
      ];
    },
    validate() { return {}; },
  },
  {
    title: 'Revisar e publicar',
    lead: 'Confira. Ao publicar, o evento é salvo no GitHub e entra no site no próximo deploy (alguns minutos).',
    render() {
      if (state.result) {
        return [
          el('div', { className: 'notice ok' }, el('strong', null, 'Evento publicado!'), ' Ele aparece no site assim que o deploy terminar (alguns minutos).'),
          el('div', { className: 'choices' },
            el('a', { className: 'btn primary', href: `/admin/#/collections/eventos/entries/${state.result.name}` }, 'Abrir no CMS'),
            state.result.commitUrl ? el('a', { className: 'btn', href: state.result.commitUrl, target: '_blank', rel: 'noreferrer' }, 'Ver no GitHub') : null,
            el('button', { type: 'button', className: 'btn go', onClick: resetAll }, 'Cadastrar outro evento')),
        ];
      }
      const ev = normalized();
      const warnings = eventWarnings(state.ev, ctx.models);
      const rows = [
        ['Modelo', state.ev.model ? (model()?.label || state.ev.model) : 'Sem modelo'],
        ['Título', ev.title],
        ['Período', state.ev.date ? formatFeaturedDate(ev) : ''],
        ['Status', ev.status, !state.ev.status],
        ['Local', ev.location, !state.ev.location],
        ['Horário', ev.time, !state.ev.time],
        ['Preço', ev.price, !state.ev.price && !(state.ev.modalidades || []).length],
        ['Card leva para', ev.page || ev.href, !state.ev.page && !state.ev.href],
        ['Destaque', state.ev.featured ? `Sim · ${({ dark: 'escuro', gold: 'dourado', highlight: 'super destaque' })[state.ev.featuredStyle] || 'padrão'}` : 'Não'],
        ['Home', state.ev.pinHome ? `Fixado · posição ${state.ev.homeOrdem || 'fim da fila'}` : 'Não fixado'],
      ];
      return [
        warnings.length ? el('div', { className: 'notice warn' }, el('strong', null, 'Atenção'), el('ul', null, ...warnings.map((w) => el('li', null, w)))) : null,
        state.publishError ? el('div', { className: 'notice err' }, state.publishError) : null,
        el('dl', { className: 'review' }, ...rows.flatMap(([label, val, inherited]) => [
          el('dt', null, label),
          el('dd', { className: inherited ? 'inh' : '' }, val || '—', inherited && val ? ' (do modelo)' : ''),
        ])),
      ];
    },
    validate() { return {}; },
  },
];

// ─── Renderização ───────────────────────────────────────────────────────────
function refreshLive() {
  const ev = normalized();
  const period = document.querySelector('[data-live="period"]');
  if (period) period.textContent = state.ev.date ? `Período: ${formatFeaturedDate(ev)}${ev.durationDays ? ` (${ev.durationDays + 1} dias)` : ' (um dia)'}` : '';
  const title = document.querySelector('[data-live="title"]');
  if (title) title.textContent = ev.title || '—';
  const frame = $('#preview-frame');
  if (frame) frame.replaceChildren(renderEventPreview(el, state.ev, ctx));
}

function validateUpTo(target) {
  for (let i = 0; i < target; i += 1) {
    const errors = STEPS[i].validate(state.ev);
    if (Object.keys(errors).length) { state.errors = errors; return i; }
  }
  state.errors = {};
  return target;
}

function goTo(target) {
  const reached = validateUpTo(target);
  state.step = reached;
  state.maxStep = Math.max(state.maxStep, reached);
  state.publishError = '';
  saveDraft();
  renderStep();
  $('#form-panel')?.scrollIntoView({ block: 'start', behavior: 'smooth' });
}

function renderSteps() {
  $('#steps').replaceChildren(...STEPS.map((s, i) => el('button', {
    type: 'button',
    className: `step${i === state.step ? ' on' : ''}${i < state.step || i <= state.maxStep ? ' done' : ''}`,
    'aria-current': i === state.step ? 'step' : null,
    onClick: () => goTo(i),
  }, el('b', null, i < state.step ? '✓' : String(i + 1)), s.title)));
}

function renderStep() {
  const step = STEPS[state.step];
  const last = state.step === STEPS.length - 1;
  renderSteps();
  $('#form-panel').replaceChildren(...[
    el('p', { className: 'eyebrow' }, `Etapa ${state.step + 1} de ${STEPS.length}`),
    el('h1', null, step.title),
    el('p', { className: 'lead' }, step.lead),
    ...step.render(),
    state.result ? null : el('div', { className: 'nav' },
      state.step > 0 ? el('button', { type: 'button', className: 'btn', onClick: () => goTo(state.step - 1) }, '← Voltar') : el('button', { type: 'button', className: 'btn', onClick: resetAll }, 'Começar do zero'),
      last
        ? el('button', { type: 'button', className: 'btn go', id: 'publish', disabled: state.publishing, onClick: publish }, state.publishing ? 'Publicando…' : 'Publicar evento')
        : el('button', { type: 'button', className: 'btn primary', onClick: () => goTo(state.step + 1) }, 'Próximo →')),
  ].filter(Boolean));
  refreshLive();
}

function resetAll() {
  state.step = 0; state.maxStep = 0; state.ev = {}; state.errors = {}; state.result = null; state.publishError = '';
  clearDraft();
  renderStep();
}

// ─── Publicação ─────────────────────────────────────────────────────────────
const KEY_ORDER = ['model', 'date', 'durationDays', 'title', 'status', ...EVENT_GROUPS.card, ...EVENT_GROUPS.inscricao, ...EVENT_GROUPS.destaque];

function cleanEvent(ev) {
  const out = {};
  KEY_ORDER.forEach((key) => {
    let val = ev[key];
    if (typeof val === 'string') val = val.trim();
    if (key === 'modalidades') {
      val = (val || [])
        .map((m) => Object.fromEntries(Object.entries(m).map(([k, v]) => [k, String(v || '').trim()]).filter(([, v]) => v)))
        .filter((m) => Object.keys(m).length);
    }
    if (val === '' || val == null || val === false || (Array.isArray(val) && !val.length)) return;
    out[key] = val;
  });
  return out;
}

async function publish() {
  const reached = validateUpTo(STEPS.length - 1);
  if (reached < STEPS.length - 1) { state.step = reached; renderStep(); return; }

  state.publishing = true;
  state.publishError = '';
  renderStep();
  try {
    const flat = cleanEvent(state.ev);
    const base = `${flat.date}-${flat.model || slugify(flat.title).slice(0, 40)}`;
    let name = base;
    for (let n = 2; ; n += 1) {
      const res = await gh(`/repos/${config.repo}/contents/${EVENTS_DIR}/${name}.json?ref=${encodeURIComponent(config.branch)}`);
      if (res.status === 404) break;
      if (!res.ok) throw await apiError(res);
      if (n > 30) throw new Error('Já existem muitos eventos com este nome nesta data.');
      name = `${base}-${n}`;
    }
    const title = normalizeEvent(flat, ctx.models, ctx.eventTypes).title;
    const res = await gh(`/repos/${config.repo}/contents/${EVENTS_DIR}/${name}.json`, {
      method: 'PUT',
      body: JSON.stringify({
        message: `Novo evento na agenda: ${title} (${flat.date})`,
        content: toBase64(`${JSON.stringify(nestEvent(flat), null, 2)}\n`),
        branch: config.branch,
      }),
    });
    if (!res.ok) throw await apiError(res);
    const data = await res.json();
    state.result = { name, commitUrl: data.commit && data.commit.html_url };
    clearDraft();
  } catch (err) {
    state.publishError = err.message || String(err);
  } finally {
    state.publishing = false;
    renderStep();
  }
}

// ─── Inicialização ──────────────────────────────────────────────────────────
function showUser(user) {
  const box = $('#user');
  box.classList.remove('hidden');
  box.replaceChildren(el('span', { className: 'chip-user' },
    el('img', { src: user.avatar_url, alt: '' }), `@${user.login}`),
  ' ',
  el('button', { type: 'button', className: 'linkbtn', onClick: () => { storage.del('sessionStorage', TOKEN_KEY); location.reload(); } }, 'Sair'));
}

function mountEditor() {
  const style = document.createElement('style');
  style.textContent = PREVIEW_CSS;
  document.head.append(style);

  $('#app').replaceChildren(
    el('nav', { id: 'steps', className: 'steps', 'aria-label': 'Etapas' }),
    el('div', { className: 'layout' },
      el('section', { id: 'form-panel', className: 'panel' }),
      el('aside', { className: 'preview', id: 'preview' },
        el('div', { className: 'preview__bar' }, el('i'), 'Prévia ao vivo — como fica no site',
          el('button', { type: 'button', className: 'btn small toggle-preview', style: 'margin-left:auto', onClick: () => $('#preview').classList.toggle('collapsed') }, 'Mostrar/ocultar')),
        el('div', { className: 'preview__frame', id: 'preview-frame' }))),
  );

  const draft = loadDraft();
  if (draft) {
    state.ev = draft.ev;
    state.step = Math.min(draft.step || 0, STEPS.length - 1);
    state.maxStep = draft.maxStep || state.step;
  }
  renderStep();
  if (draft) {
    $('#form-panel').prepend(el('div', { className: 'notice warn' }, 'Rascunho recuperado de onde você parou. ',
      el('button', { type: 'button', className: 'linkbtn', style: 'color:inherit', onClick: resetAll }, 'Começar do zero')));
  }
}

async function start(candidate) {
  token = candidate;
  const user = await checkAccess();
  if (!user) return false;
  storage.set('sessionStorage', TOKEN_KEY, token);
  showUser(user);
  await loadModels();
  mountEditor();
  return true;
}

async function init() {
  const msg = $('#gate-msg');
  const btn = $('#login');
  try {
    await loadConfig();
  } catch {
    msg.textContent = 'Não foi possível ler a configuração do CMS.';
    btn.disabled = true;
    return;
  }

  const existing = storedToken();
  if (existing) {
    msg.textContent = 'Verificando seu acesso…';
    btn.disabled = true;
    try {
      if (await start(existing)) return;
    } catch (err) {
      msg.textContent = err.message;
    }
    storage.del('sessionStorage', TOKEN_KEY);
    btn.disabled = false;
    if (msg.textContent === 'Verificando seu acesso…') msg.textContent = 'Entre com a mesma conta do GitHub que você usa no CMS.';
  }

  btn.addEventListener('click', async () => {
    btn.disabled = true;
    msg.textContent = 'Abrindo o login do GitHub…';
    try {
      const fresh = await loginPopup();
      if (!(await start(fresh))) throw new Error('Não foi possível validar o login.');
    } catch (err) {
      msg.textContent = err.message || String(err);
      btn.disabled = false;
    }
  });
}

init();
