import React from 'react';
import ReactDOM from 'react-dom/client';
import { eventos } from './agenda-data.js';

/* Agrupa eventos por mês+ano mantendo a ordem de inserção */
function agruparPorMes(lista) {
  const map = new Map();
  lista.forEach((e) => {
    const chave = `${e.mesNome} ${e.ano}`;
    if (!map.has(chave)) map.set(chave, []);
    map.get(chave).push(e);
  });
  return [...map.entries()].map(([label, events]) => ({ label, events }));
}

/* Classe CSS da tag baseada no tipo */
function tagClass(tipo) {
  if (tipo.includes("IMERSÃO") || tipo.includes("CURSO")) return "dark";
  if (tipo.includes("SIMPÓSIO"))                           return "gold";
  return "";
}

function TagEvento({ tipo, gratuito }) {
  return (
    <>
      <span className={`tag ${tagClass(tipo)}`.trim()}>{tipo}</span>
      {gratuito && (
        <span className="tag" style={{ background: "var(--teal-soft)", color: "var(--teal)", borderColor: "var(--blue-soft2)" }}>
          GRATUITO
        </span>
      )}
    </>
  );
}

function EventoRow({ e }) {
  return (
    <a href={e.href} className="agenda-row">
      <div className="agenda-row__date">
        <strong>{e.dia}</strong>
        <span>{e.mes}</span>
      </div>

      <div className="agenda-row__body">
        <div className="agenda-row__top">
          <TagEvento tipo={e.tipo} gratuito={e.gratuito} />
        </div>
        <h3 className="agenda-row__titulo">{e.titulo}</h3>
        <div className="agenda-row__meta">
          {e.local   && <span>{e.local}</span>}
          {e.horario && <span>{e.horario}{e.detalhe ? ` · ${e.detalhe}` : ""}</span>}
        </div>
      </div>

      <div className="agenda-row__side">
        <span className="agenda-row__price">{e.preco}</span>
        {e.precoExtra && <span className="agenda-row__sub">{e.precoExtra}</span>}
        <span className="link-arrow">{e.gratuito ? "Detalhes →" : "Inscrições →"}</span>
      </div>
    </a>
  );
}

function MesBloco({ label, events }) {
  return (
    <div className="agenda-month-block">
      <div className="agenda-month-head">
        <span className="agenda-month-label">{label}</span>
        <span className="agenda-month-count">
          {events.length} {events.length === 1 ? "atividade" : "atividades"}
        </span>
      </div>
      <div className="agenda-timeline">
        <div className="agenda-rail"></div>
        {events.map((e, i) => <EventoRow key={i} e={e} />)}
      </div>
    </div>
  );
}

function AgendaPage() {
  const grupos = agruparPorMes(eventos);

  return (
    <main>
      {/* ── Hero ───────────────────────────────────────── */}
      <section className="page-hero">
        <div className="wrap">
          <div className="breadcrumb">
            <a href="/index.html">Ectolab</a>
            <span className="sep">◆</span>
            <a href="/pages/atividades.html">Atividades</a>
            <span className="sep">◆</span>
            <span>Agenda</span>
          </div>
          <div className="page-hero__inner">
            <div>
              <div className="eyebrow"><span className="dot"></span>CALENDÁRIO 2026 &nbsp;·&nbsp; JUN → DEZ</div>
              <h1 className="h-display" style={{ marginTop: 24 }}>
                Agenda de<br />
                <strong style={{ color: "var(--blue)", fontWeight: 700 }}>atividades</strong>.
              </h1>
              <p className="lede" style={{ marginTop: 24, maxWidth: 560 }}>
                Campos paracirúrgicos, tertúlias, imersões e simpósios.
                Muitas atividades são gratuitas e abertas ao público —
                venha observar antes de decidir aprofundar.
              </p>
            </div>
            <dl className="meta-grid">
              <div><dt>Campos públicos</dt><dd>Quartas · 19h30</dd></div>
              <div><dt>Tertúlias</dt><dd>Sextas · 20h</dd></div>
              <div><dt>Sede</dt><dd>Foz do Iguaçu</dd></div>
              <div><dt>Online</dt><dd>Zoom + YouTube</dd></div>
            </dl>
          </div>
        </div>
      </section>

      {/* ── Timeline ───────────────────────────────────── */}
      <section className="section">
        <div className="wrap">
          {grupos.map((g, i) => (
            <MesBloco key={i} label={g.label} events={g.events} />
          ))}

          <div style={{ marginTop: 8, paddingTop: 40, borderTop: "1px solid var(--line)", textAlign: "center" }}>
            <p className="lede" style={{ marginBottom: 24, color: "var(--ink-2)" }}>
              Agenda em atualização contínua — novos campos e tertúlias são confirmados mensalmente.
            </p>
            <a href="/pages/atividades.html" className="btn btn-ghost">
              Ver também: Campos Paracirúrgicos regulares →
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────── */}
      <section className="cta-band">
        <div className="wrap cta-band__inner">
          <h2>
            Campos públicos toda quarta.{" "}
            <strong style={{ color: "var(--blue)", fontWeight: 700 }}>19h30 · Entrada franca.</strong>
          </h2>
          <a href="/pages/contato.html" className="btn btn-primary">
            Como chegar à sede <span className="arrow">→</span>
          </a>
        </div>
      </section>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("app")).render(<AgendaPage />);
