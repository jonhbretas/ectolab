import React, { useState, useMemo, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { PESQUISAS } from './pesquisas-data.js';

const CONTACT_EMAIL = 'contato@ectolab.org';

const STATUS_META = {
  preparacao: { label: 'Em preparação', cls: 'st-prep' },
  aberto: { label: 'Recrutamento aberto', cls: 'st-open' },
  concluida: { label: 'Coleta concluída', cls: 'st-done' },
};

const FILTERS = [
  { value: 'all', label: 'Todas' },
  { value: 'preparacao', label: 'Em preparação' },
  { value: 'aberto', label: 'Recrutamento aberto' },
  { value: 'concluida', label: 'Coleta concluída' },
];

function initials(name) {
  const parts = String(name || '').trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return '?';
  return (parts[0][0] + (parts[1] ? parts[1][0] : '')).toUpperCase();
}

function MetaRow({ label, value }) {
  if (!value) return null;
  return (
    <div className="pesq-meta__row"><span>{label}</span><span>{value}</span></div>
  );
}

function ResearchCard({ p, onInterest, onDetails }) {
  const st = STATUS_META[p.status] || STATUS_META.preparacao;
  const showInterest = p.status !== 'concluida';
  const interestLabel = p.status === 'preparacao' ? 'Quero ser avisado' : 'Manifestar interesse';

  return (
    <article className="pesq-card">
      <div className="pesq-card__media">
        {p.coverImage
          ? <img src={p.coverImage} alt={`Imagem da pesquisa ${p.title}`} loading="lazy" decoding="async" />
          : <div className="pesq-card__ph"><span>Pesquisa Ectolab</span></div>}
        {p.code && <span className="pesq-card__code">{p.code}</span>}
      </div>
      <div className="pesq-card__body">
        <span className={`pesq-status ${st.cls}`}>{st.label}</span>
        {p.statusNote && <p className="pesq-note">{p.statusNote}</p>}
        <h3>{p.title}</h3>
        {p.summary && <p className="pesq-card__summary">{p.summary}</p>}

        {p.researcher && (
          <div className="pesq-researcher">
            {p.researcherPhoto
              ? <img src={p.researcherPhoto} alt={`Foto de ${p.researcher}`} loading="lazy" decoding="async" />
              : <span className="pesq-researcher__ph">{initials(p.researcher)}</span>}
            <span><b>{p.researcher}</b><small>Responsável</small></span>
          </div>
        )}

        {(p.profile || p.modality || p.format || p.line) && (
          <div className="pesq-meta">
            <MetaRow label="Perfil" value={p.profile} />
            <MetaRow label="Modalidade" value={p.modality} />
            <MetaRow label="Formato" value={p.format} />
            <MetaRow label="Linha" value={p.line} />
          </div>
        )}

        {p.tags && p.tags.length > 0 && (
          <div className="pesq-tags">
            {p.tags.map((t) => <span className="pesq-tag" key={t}>{t}</span>)}
          </div>
        )}

        <div className="pesq-actions">
          {showInterest
            ? <button type="button" className="btn btn-orange" onClick={() => onInterest(p, interestLabel)}>{interestLabel}</button>
            : <span className="btn btn-ghost" aria-disabled="true" style={{ opacity: .7, cursor: 'default', pointerEvents: 'none' }}>Coleta concluída</span>}
          {p.details && (
            <button type="button" className="btn btn-ghost pesq-details-btn" aria-label="Ver detalhes da pesquisa" title="Ver detalhes" onClick={() => onDetails(p.details)}>﹢</button>
          )}
        </div>
      </div>
    </article>
  );
}

function InterestModal({ open, research, onClose, onToast }) {
  const nameRef = useRef(null);

  if (!open) return null;

  const isPrep = research?.status === 'preparacao';

  function submit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const subject = isPrep
      ? `Interesse futuro na pesquisa — ${research.title}`
      : `Interesse em participar da pesquisa — ${research.title}`;
    const body = [
      'Olá, equipe da Ectolab,',
      '',
      isPrep
        ? `Gostaria de ser avisado(a) quando esta pesquisa abrir recrutamento: ${research.title}.`
        : `Gostaria de manifestar interesse em participar da pesquisa: ${research.title}.`,
      '',
      `Nome: ${data.nome || ''}`,
      `E-mail: ${data.email || ''}`,
      `Telefone/WhatsApp: ${data.telefone || 'Não informado'}`,
      `Cidade: ${data.cidade || 'Não informada'}`,
      `Mensagem: ${data.mensagem || 'Sem mensagem adicional'}`,
      '',
      'Estou ciente de que esta manifestação de interesse não garante minha inclusão na pesquisa e que a equipe poderá realizar uma triagem.',
      '',
    ].join('\n');
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    onClose();
    onToast('Abrindo seu aplicativo de e-mail com a mensagem preenchida.');
  }

  return (
    <div className="pesq-overlay open" onClick={onClose}>
      <div className="pesq-modal" role="dialog" aria-modal="true" aria-label="Manifestar interesse" onClick={(e) => e.stopPropagation()}>
        <div className="pesq-modal__head">
          <div>
            <h2>Manifestar interesse</h2>
            <p>{research?.title}</p>
          </div>
          <button type="button" className="pesq-close" aria-label="Fechar" onClick={onClose}>✕</button>
        </div>
        <form className="pesq-form" onSubmit={submit}>
          <div className="pesq-form__grid">
            <div className="pesq-field"><label htmlFor="pf-name">Nome completo</label><input id="pf-name" ref={nameRef} name="nome" autoComplete="name" required /></div>
            <div className="pesq-field"><label htmlFor="pf-email">E-mail</label><input id="pf-email" name="email" type="email" autoComplete="email" required /></div>
            <div className="pesq-field"><label htmlFor="pf-phone">WhatsApp ou telefone</label><input id="pf-phone" name="telefone" autoComplete="tel" /></div>
            <div className="pesq-field"><label htmlFor="pf-city">Cidade</label><input id="pf-city" name="cidade" autoComplete="address-level2" /></div>
            <div className="pesq-field full"><label htmlFor="pf-msg">Mensagem opcional</label><textarea id="pf-msg" name="mensagem" placeholder="Escreva uma dúvida ou informação que considere importante."></textarea></div>
          </div>
          <label className="pesq-consent"><input type="checkbox" required /><span>Autorizo o uso destes dados exclusivamente para contato sobre esta pesquisa e declaro estar ciente da política de privacidade.</span></label>
          <div className="pesq-modal__actions">
            <button type="button" className="btn btn-ghost" onClick={onClose}>Cancelar</button>
            <button type="submit" className="btn btn-orange">Enviar manifestação</button>
          </div>
          <p className="pesq-form__note">O envio abre o seu aplicativo de e-mail com a mensagem já preenchida, endereçada a {CONTACT_EMAIL}.</p>
        </form>
      </div>
    </div>
  );
}

function App() {
  const [filter, setFilter] = useState('all');
  const [modal, setModal] = useState({ open: false, research: null });
  const [toast, setToast] = useState('');
  const toastTimer = useRef(null);

  const showToast = (msg) => {
    setToast(msg);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(''), 3400);
  };

  const list = useMemo(
    () => (filter === 'all' ? PESQUISAS : PESQUISAS.filter((p) => p.status === filter)),
    [filter]
  );

  return (
    <>
      <div className="pesq-filters" role="group" aria-label="Filtrar pesquisas por status">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            type="button"
            className="pesq-filter"
            aria-pressed={filter === f.value}
            onClick={() => setFilter(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>

      {list.length === 0 ? (
        <div className="pesq-empty show">Nenhuma pesquisa cadastrada neste status no momento.</div>
      ) : (
        <div className="pesq-grid">
          {list.map((p) => (
            <ResearchCard
              key={p.code || p.title}
              p={p}
              onInterest={(research) => setModal({ open: true, research })}
              onDetails={(msg) => showToast(msg)}
            />
          ))}
        </div>
      )}

      <InterestModal
        open={modal.open}
        research={modal.research}
        onClose={() => setModal({ open: false, research: null })}
        onToast={showToast}
      />

      <div className={`pesq-toast${toast ? ' show' : ''}`} role="status" aria-live="polite">{toast}</div>
    </>
  );
}

const mount = document.getElementById('pesquisas-app');
if (mount) ReactDOM.createRoot(mount).render(<App />);
