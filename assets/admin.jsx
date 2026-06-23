import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom/client';

// ─── Helpers ─────────────────────────────────────────────────────────────────

function fmtDate(iso) {
  if (!iso) return '—';
  const [, m, d] = (iso || '').split('-');
  const months = ['', 'JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];
  return `${d}/${months[Number(m)] || m}`;
}

function displayTitle(ev) {
  return ev.tituloHome || ev.title || `Evento sem título`;
}

function sortedPinned(events) {
  return events
    .filter(e => e.pinHome)
    .slice()
    .sort((a, b) => (a.homeOrdem || 999) - (b.homeOrdem || 999));
}

// ─── Row ─────────────────────────────────────────────────────────────────────

function EventRow({ ev, index, onChange }) {
  return (
    <div className={`admin-row${ev.pinHome ? ' is-pinned' : ''}`}>
      <div className="admin-row__date">{fmtDate(ev.date)}</div>

      <div className="admin-row__info">
        <span className="admin-row__title">{displayTitle(ev)}</span>
        <span className="admin-row__model">{ev.model || ev.category || '—'}</span>
      </div>

      <label className="admin-check" title="Fixar na seção Próximas Atividades da Home">
        <input
          type="checkbox"
          checked={Boolean(ev.pinHome)}
          onChange={e => onChange(index, 'pinHome', e.target.checked)}
        />
        <span style={{ fontSize: 12, color: 'var(--ink-2)' }}>Destaque na home</span>
      </label>

      <div className="admin-order">
        <input
          type="number"
          min="1"
          max="5"
          value={ev.homeOrdem ?? ''}
          placeholder="—"
          disabled={!ev.pinHome}
          title="Ordem de exibição na Home, de 1 a 5 (menor = primeiro)"
          onChange={e => {
            const parsed = parseInt(e.target.value, 10) || 1;
            const v = e.target.value === '' ? null : Math.min(5, Math.max(1, parsed));
            onChange(index, 'homeOrdem', v);
          }}
        />
      </div>

      <div style={{ fontSize: 12, color: ev.status === 'Realizado' ? 'var(--ink-3)' : 'var(--teal)' }}>
        {ev.status || '—'}
      </div>
    </div>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────

function App() {
  const [events, setEvents]   = useState(null);   // raw events array from events.json
  const [dirty, setDirty]     = useState(false);
  const [status, setStatus]   = useState(null);   // null | { type: 'ok'|'err'|'loading', msg: string }
  const [apiOk, setApiOk]     = useState(true);

  // Load events.json from the dev API
  useEffect(() => {
    fetch('/api/admin/events')
      .then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then(data => setEvents(data.events || []))
      .catch(() => {
        setApiOk(false);
        setEvents([]);
      });
  }, []);

  const handleChange = useCallback((index, field, value) => {
    setEvents(prev => {
      const next = prev.map((ev, i) => i === index ? { ...ev, [field]: value } : ev);
      return next;
    });
    setDirty(true);
    setStatus(null);
  }, []);

  const handleSave = useCallback(async () => {
    if (!events) return;
    setStatus({ type: 'loading', msg: 'Salvando…' });
    try {
      const res = await fetch('/api/admin/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ events }, null, 2),
      });
      const data = await res.json();
      if (data.ok) {
        setStatus({ type: 'ok', msg: `✓ Salvo! ${data.log || ''}` });
        setDirty(false);
      } else {
        setStatus({ type: 'err', msg: `Erro: ${data.error}` });
      }
    } catch (e) {
      setStatus({ type: 'err', msg: `Falha na requisição: ${e.message}` });
    }
  }, [events]);

  // ── Render ────────────────────────────────────────────────────────────────

  const pinned = events ? sortedPinned(events) : [];

  return (
    <div className="admin-wrap">
      {/* Header */}
      <div className="admin-header">
        <div>
          <span className="admin-header__brand">Ectolab</span>
          <h1>Admin de Eventos</h1>
        </div>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <button
            className="btn btn-teal btn-sm"
            onClick={handleSave}
            disabled={!dirty || !apiOk || events === null}
          >
            Salvar tudo →
          </button>
        </div>
      </div>

      {/* Dev banner */}
      <div className="admin-devbanner">
        ⚠ Esta página só funciona durante o desenvolvimento local (<code>npm run dev</code>).
        Após salvar, o arquivo <code>agenda-data.js</code> é regenerado automaticamente.
      </div>

      {/* API unavailable */}
      {!apiOk && (
        <div style={{ background: '#fee2e2', borderRadius: 'var(--r-md)', padding: '16px 20px', color: '#991b1b', marginBottom: 24 }}>
          <strong>API de administração não encontrada.</strong><br />
          Certifique-se de que o servidor está rodando com <code>npm run dev</code>.
        </div>
      )}

      {/* Loading */}
      {apiOk && events === null && (
        <p style={{ color: 'var(--ink-3)', fontStyle: 'italic' }}>Carregando eventos…</p>
      )}

      {/* Table */}
      {events !== null && events.length > 0 && (
        <>
          <p style={{ fontSize: 13, color: 'var(--ink-2)', marginBottom: 16 }}>
            Marque <strong>Home</strong> para exibir o evento na seção <em>Próximas Atividades</em>.
            Use o campo <strong>Ordem</strong> para definir a sequência (1 = primeiro).
          </p>

          <div className="admin-table">
            <div className="admin-table__head">
              <span>Data</span>
              <span>Evento</span>
              <span>Home</span>
              <span>Ordem</span>
              <span>Status</span>
            </div>
            {events.map((ev, i) => (
              <EventRow key={i} ev={ev} index={i} onChange={handleChange} />
            ))}
          </div>
        </>
      )}

      {/* Save status */}
      {status && (
        <div className="admin-actions">
          <span className={`admin-status ${status.type}`}>{status.msg}</span>
        </div>
      )}
      {!status && dirty && (
        <div className="admin-actions">
          <span className="admin-status loading">Alterações não salvas — clique em "Salvar tudo"</span>
        </div>
      )}

      {/* Preview */}
      {events !== null && (
        <div className="admin-preview" style={{ marginTop: 36 }}>
          <h3>Prévia — Próximas Atividades da Home</h3>
          {pinned.length === 0
            ? <p className="admin-preview__empty">Nenhum evento marcado para a Home.</p>
            : pinned.map((ev, i) => (
                <div key={i} className="admin-preview__item">
                  <span className="admin-preview__num">{i + 1}.</span>
                  <span className="admin-preview__date">{fmtDate(ev.date)}</span>
                  <span className="admin-preview__text">{displayTitle(ev)}</span>
                </div>
              ))
          }
        </div>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
