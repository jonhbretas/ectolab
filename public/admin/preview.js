// Pré-visualização dos eventos da agenda no Sveltia CMS.
// Mostra o evento no lugar onde ele aparece no site (agenda do mês, destaques, Home),
// com a mesma lógica do gerador — ver agenda-view.js e agenda-core.js.
import { buildEventTypes, buildModels } from './agenda-core.js';
import { renderEventPreview, PREVIEW_CSS } from './agenda-view.js';

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
const context = { models: buildModels(rawModels), eventTypes: buildEventTypes(rawTypes) };

function EventPreview({ entry }) {
  const data = entry && entry.getIn ? entry.getIn(['data']) : null;
  return renderEventPreview(h, data && data.toJS ? data.toJS() : {}, context);
}

if (CMS && h) {
  CMS.registerPreviewStyle(PREVIEW_CSS, { raw: true });
  CMS.registerPreviewTemplate('eventos', EventPreview);
}
