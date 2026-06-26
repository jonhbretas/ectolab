import React from 'react';
import ReactDOM from 'react-dom/client';
import { eventos } from './agenda-data.js';

function agruparPorMes(lista) {
  const map = new Map();
  lista.forEach((e) => {
    const chave = `${e.mesNome} ${e.ano}`;
    if (!map.has(chave)) map.set(chave, []);
    map.get(chave).push(e);
  });
  return [...map.entries()].map(([label, events]) => ({ label, events }));
}

function tagStyle(tipo) {
  if (tipo.includes("IMERSÃO") || tipo.includes("CURSO")) return { background: "var(--ink)", color: "var(--paper)", borderColor: "var(--ink)" };
  if (tipo.includes("SIMPÓSIO")) return { background: "var(--gold)", color: "var(--ink)", borderColor: "var(--gold-2)" };
  return {};
}

function EventoRow({ e }) {
  const hasModalidades = e.modalidades && e.modalidades.length >= 2;
  return (
    <article className="timeline-event">
      <div className="agenda-date">
        <span className="agenda-date__dia">{e.dia}</span>
        <span className="agenda-date__mes">{e.mes} {e.ano}</span>
      </div>

      <div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 10 }}>
          <span className="tag" style={tagStyle(e.tipo)}>{e.tipo}</span>
          {e.gratuito && (
            <span className="tag" style={{ background: "var(--teal-soft)", color: "var(--teal)", borderColor: "var(--blue-soft2)" }}>
              GRATUITO
            </span>
          )}
        </div>
        <h3 style={{ margin: "0 0 8px", fontSize: 20, fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
          {e.titulo}
        </h3>
        <p style={{ margin: 0, fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.04em", color: "var(--ink-3)", lineHeight: 1.6 }}>
          {[e.local, e.horario, e.detalhe].filter(Boolean).join(" · ")}
        </p>
        {hasModalidades ? (
          <div className="agenda-event-foot" style={{ flexDirection: "column", alignItems: "stretch", gap: 8 }}>
            {e.modalidades.map((m, i) => (
              <a key={i} href={m.href || e.href} className="link-arrow" style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                <span>{m.buttonLabel || m.label} →</span>
                {m.price && <span className="agenda-price" style={{ position: "static" }}>{m.price}</span>}
              </a>
            ))}
          </div>
        ) : (
          <div className="agenda-event-foot">
            <a href={e.href} className="link-arrow">
              {e.gratuito ? "Detalhes →" : "Inscrições →"}
            </a>
            {!e.gratuito && (
              <span className="agenda-price">
                {e.preco}{e.precoExtra ? ` · ${e.precoExtra}` : ""}
              </span>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

function MesBloco({ label, events, first }) {
  return (
    <div style={{ marginBottom: 0 }}>
      <div className={`agenda-sep${first ? " agenda-sep--first" : ""}`}>
        <span className="agenda-sep__label">{label}</span>
        <span className="agenda-sep__count">
          {events.length} {events.length === 1 ? "atividade" : "atividades"}
        </span>
      </div>
      <div className="timeline">
        {events.map((e, i) => <EventoRow key={i} e={e} />)}
      </div>
    </div>
  );
}

function AgendaPage() {
  const grupos = agruparPorMes(eventos);

  return (
    <main>
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
                Consulte as próximas atividades e escolha o melhor caminho
                para começar ou aprofundar.
              </p>
            </div>
            <dl className="meta-grid">
              <div><dt>Dinâmicas </dt><dd>Quartas · 19h30</dd></div>
              <div><dt>Verbetes</dt><dd>Sextas · 20h</dd></div>
              <div><dt>Cursos</dt><dd>Foz do Iguaçu</dd></div>
              <div><dt>Oficinas</dt><dd>Zoom + YouTube</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          {grupos.map((g, i) => (
            <MesBloco key={i} label={g.label} events={g.events} first={i === 0} />
          ))}

          <div style={{ marginTop: 8, paddingTop: 40, borderTop: "1px solid var(--line)", textAlign: "center" }}>
            <p className="lede" style={{ marginBottom: 24, color: "var(--ink-2)" }}>
              Agenda em atualização contínua — novas atividades são confirmadas mensalmente.
            </p>
            <a href="/pages/atividades.html" className="btn btn-ghost">
              Ver também: Campos Paracirúrgicos regulares →
            </a>
          </div>
        </div>
      </section>

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
