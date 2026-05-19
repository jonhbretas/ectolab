import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <section className="section" style={{ paddingTop: '80px', paddingBottom: '64px', background: 'var(--white)' }}>
      <div className="wrap">
        <div className="breadcrumb" style={{ marginBottom: 24, fontSize: 13, color: 'var(--ink-3)' }}>
          <a href="/pages/atividades.html" style={{ textDecoration: 'underline' }}>Atividades</a> / Orientação Gratuita (OGB)
        </div>
        <div className="grid g2 gap-48">
          <div>
            <div className="eyebrow"><span className="dot"></span>ATENDIMENTO INDIVIDUAL GRATUITO</div>
            <h1 className="h1" style={{ marginTop: 16 }}>
              Orientação Gratuita em Bioenergologia (OGB).
            </h1>
            <p className="lede" style={{ marginTop: 24 }}>
              Atendimento individual online que visa orientar e esclarecer dúvidas quanto ao processo parapsíquico e a ectoplasmia.
            </p>
            <div className="prose" style={{ marginTop: 40, marginLeft: 0 }}>
              <h3>Objetivos da Orientação</h3>
              <ul>
                <li>Prestar esclarecimentos sobre parapsiquismo e ectoplasmia.</li>
                <li>Verificar o nível de equilíbrio holossomático individual.</li>
                <li>Indicar atividades auxiliares ao equilíbrio energético pessoal.</li>
              </ul>
              <div className="tag soft" style={{ marginTop: 16 }}>Atividade sem pré-requisito</div>
            </div>
          </div>
          
          <div>
            <div className="glass-teal" style={{ padding: 32, position: 'sticky', top: 100, borderRadius: 'var(--r-lg)' }}>
              <h3 className="h3" style={{ color: 'var(--white)', marginBottom: 24 }}>Informações</h3>
              <div className="col gap-16" style={{ marginBottom: 32 }}>
                <div className="flex between" style={{ borderBottom: '1px dashed rgba(255,255,255,0.2)', paddingBottom: 12 }}>
                  <span className="specimen" style={{ color: 'var(--gold)' }}>Modalidade</span>
                  <span style={{ fontSize: 14.5, color: 'var(--white)' }}>Online</span>
                </div>
                <div className="flex between" style={{ borderBottom: '1px dashed rgba(255,255,255,0.2)', paddingBottom: 12 }}><span className="specimen" style={{ color: 'var(--gold)' }}>Data / Horário</span><span style={{ fontSize: 14.5, color: 'var(--white)', textAlign: 'right' }}>Disponibilidade da Preceptora</span></div>
                <div className="flex between" style={{ borderBottom: '1px dashed rgba(255,255,255,0.2)', paddingBottom: 12 }}><span className="specimen" style={{ color: 'var(--gold)' }}>Preceptora</span><span style={{ fontSize: 14.5, color: 'var(--white)' }}>Ana Paula do Prado</span></div>
                <div className="flex between" style={{ borderBottom: '1px dashed rgba(255,255,255,0.2)', paddingBottom: 12 }}><span className="specimen" style={{ color: 'var(--gold)' }}>Valor</span><span style={{ fontSize: 14.5, color: 'var(--white)' }}>Gratuito</span></div>
              </div>
              <a href="https://cal.com/ectolab/60min" target="_blank" className="btn btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
                Agendar orientação <span className="arrow">→</span>
              </a>
              <div style={{ marginTop: 24, paddingTop: 24, borderTop: '1px dashed rgba(255,255,255,0.2)' }}>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', margin: 0 }}>
                  <strong>Dificuldades para Agendamento?</strong><br />
                  Envie um e-mail para: <a href="mailto:bioenergologia@ectolab.org" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>bioenergologia@ectolab.org</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
ReactDOM.createRoot(document.getElementById("app")).render(<App />);