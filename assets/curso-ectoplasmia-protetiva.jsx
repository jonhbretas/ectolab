import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <section className="section" style={{ paddingTop: '80px', paddingBottom: '64px', background: 'var(--white)' }}>
      <div className="wrap">
        <div className="breadcrumb" style={{ marginBottom: 24, fontSize: 13, color: 'var(--ink-3)' }}>
          <a href="/pages/cursos.html" style={{ textDecoration: 'underline' }}>Cursos</a> / Ectoplasmia Protetiva
        </div>
        <div className="grid g2 gap-48">
          <div>
            <div className="eyebrow"><span className="dot"></span>ONLINE AO VIVO &nbsp;·&nbsp; TRADUÇÃO SIMULTÂNEA</div>
            <h1 className="h1" style={{ marginTop: 16 }}>
              Ectoplasmia Protetiva.
            </h1>
            <p className="lede" style={{ marginTop: 24 }}>
              A ectoplasmia como fator multidimensional de risco ou proteção. Como fenômenos parapsíquicos
              e energias podem interferir na programação existencial — e o que fazer a respeito.
            </p>

            <div className="prose" style={{ marginTop: 40, marginLeft: 0 }}>
              <h3>Sobre o Curso</h3>
              <p>
                Curso sobre a ectoplasmia como fator multidimensional de risco ou proteção. Aborda como fenômenos
                parapsíquicos e energias podem interferir na programação existencial, destacando ações profiláticas,
                holopensene pessoal e atitudes multidimensionais para proteção individual e coletiva.
              </p>

              <h3>Objetivos</h3>
              <ul>
                <li>Apresentar o conceito de ectoplasmia protetiva.</li>
                <li>Abordar situações em que o ectoplasma pode ser fator de risco.</li>
                <li>Apontar situações em que o ectoplasma pode ser fator protetivo.</li>
                <li>Apresentar estudos de caso.</li>
                <li>Trabalhar o conceito de ectoplasta cobaia.</li>
                <li>Indicar ações profiláticas para proteção individual e coletiva.</li>
              </ul>

              <h3>Formato e Acesso</h3>
              <p>
                Curso ao vivo (online síncrono) com replay disponível por <strong>30 dias</strong> após a
                realização. Tradução simultânea para <strong>espanhol e inglês</strong> incluída.
              </p>
            </div>

            <blockquote style={{ marginTop: 40, padding: 24, background: 'var(--paper-2)', borderLeft: '4px solid var(--orange)', borderRadius: '0 var(--r-md) var(--r-md) 0' }}>
              <p style={{ margin: 0, fontStyle: 'italic', color: 'var(--ink)' }}>
                "Quando o ectoplasma pode ser perigoso e quando pode ser protetivo? Vai depender dos efeitos que ele gera em cada caso específico."
              </p>
              <cite className="specimen" style={{ display: 'block', marginTop: 12, color: 'var(--ink-3)' }}>— Live Diálogos Online: Ectoplasmia Protetiva</cite>
            </blockquote>
          </div>

          <div>
            <div className="glass-teal" style={{ padding: 32, position: 'sticky', top: 100, borderRadius: 'var(--r-lg)' }}>
              <h3 className="h3" style={{ color: 'var(--white)', marginBottom: 24 }}>Informações</h3>
              <div className="col gap-16">
                {[
                  ['Modalidade', 'Online ao vivo (síncrono)'],
                  ['Replay', 'Disponível por 30 dias'],
                  ['Tradução', 'Espanhol e inglês'],
                  ['Professores', 'Laênio Loche, Celeste Silveira, Máris Polo Paz, André Shataloff, Myriam Sanches e Lucas Rinaldi'],
                  ['Investimento', 'R$ 150,00'],
                ].map(([k, v]) => (
                  <div key={k} style={{ borderBottom: '1px dashed rgba(255,255,255,0.2)', paddingBottom: 12 }}>
                    <span className="specimen" style={{ color: 'var(--gold)', display: 'block', marginBottom: 4 }}>{k}</span>
                    <span style={{ fontSize: 14.5, color: 'var(--white)' }}>{v}</span>
                  </div>
                ))}
              </div>
              <a
                href="https://store.conscienciologia.org.br/sku/304395/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-gold"
                style={{ marginTop: 32, width: '100%', justifyContent: 'center' }}
              >
                Fazer minha inscrição <span className="arrow">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
