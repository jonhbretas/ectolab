import React from 'react';
import ReactDOM from 'react-dom/client';

const CALENDARIO = [
  { data: '12 de fevereiro' },
  { data: '12 de março' },
  { data: '09 de abril' },
  { data: '14 de maio' },
  { data: '11 de junho' },
  { data: '09 de julho' },
  { data: '13 de agosto' },
  { data: '10 de setembro' },
  { data: '08 de outubro' },
  { data: '12 de novembro' },
];

function App() {
  return (
    <>
      <section className="section" style={{ paddingTop: '80px', paddingBottom: '64px', background: 'var(--white)' }}>
        <div className="wrap">
          <div className="breadcrumb" style={{ marginBottom: 24, fontSize: 13, color: 'var(--ink-3)' }}>
            <a href="/pages/cursos.html" style={{ textDecoration: 'underline' }}>Cursos</a> / Oficina de Ectoplasmologia
          </div>
          <div className="grid g2 gap-48">
            <div>
              <div className="eyebrow"><span className="dot"></span>OFICINA PRESENCIAL &nbsp;·&nbsp; GRATUITA &nbsp;·&nbsp; FLORIANÓPOLIS</div>
              <h1 className="h1" style={{ marginTop: 16 }}>
                Oficina de<br />Ectoplasmologia.
              </h1>
              <p className="lede" style={{ marginTop: 24 }}>
                Atividade prática e gratuita para vivenciar e aplicar técnicas bioenergéticas, conduzida por docente
                especializado em Ectoplasmologia dentro da Conscienciologia.
              </p>

              <div className="prose" style={{ marginTop: 40, marginLeft: 0 }}>
                <h3>Sobre a Oficina</h3>
                <p>
                  A Oficina de Ectoplasmologia é uma atividade prática e gratuita que oferece a oportunidade de
                  vivenciar e aplicar técnicas bioenergéticas em ambiente seguro e assistencial. Conduzida por
                  docente especializado em Ectoplasmologia dentro da Conscienciologia, é voltada a pessoas
                  interessadas em aprimorar habilidades energéticas e expandir parapercepções de maneira
                  consciente e assistencial.
                </p>

                <h3>Objetivo</h3>
                <p>
                  Promover a autoexperimentação da ectoplasmia interassistencial, proporcionando autoconhecimento
                  e desenvolvimento das capacidades energéticas dos participantes.
                </p>

                <h3>Pré-requisito</h3>
                <p>
                  Ter participado de pelo menos um evento de Conscienciologia e ter noções básicas do paradigma
                  consciencial.
                </p>

                <h3>Informações importantes</h3>
                <ul>
                  <li>Inscrição gratuita e obrigatória.</li>
                  <li>Número de participantes limitado.</li>
                  <li>Chegar com antecedência.</li>
                  <li>Inscritos têm 15 minutos de tolerância para entrada na sala.</li>
                  <li>Acompanhantes também precisam se inscrever e seguir as recomendações.</li>
                </ul>

                <h3>Calendário 2026</h3>
                <p>As oficinas ocorrem mensalmente às <strong>quintas-feiras, das 19h30 às 21h30</strong>:</p>
              </div>

              <div className="grid g2 gap-12" style={{ marginTop: 24 }}>
                {CALENDARIO.map((item, i) => (
                  <div key={i} className="glass" style={{ padding: '12px 20px', borderRadius: 'var(--r-md)', display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span className="specimen" style={{ color: 'var(--teal)', fontSize: 12 }}>2026</span>
                    <span style={{ fontSize: 15, color: 'var(--ink)' }}>{item.data}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="glass-teal" style={{ padding: 32, position: 'sticky', top: 100, borderRadius: 'var(--r-lg)' }}>
                <h3 className="h3" style={{ color: 'var(--white)', marginBottom: 24 }}>Informações</h3>
                <div className="col gap-16">
                  {[
                    ['Tipo', 'Oficina presencial'],
                    ['Investimento', 'Gratuito'],
                    ['Periodicidade', 'Mensal (quintas-feiras)'],
                    ['Horário', '19h30 às 21h30'],
                    ['Local', 'Av. Rio Branco, 380\nSala 602 · Centro\nFlorianópolis, SC'],
                    ['WhatsApp', '(48) 99845-9931'],
                  ].map(([k, v]) => (
                    <div key={k} style={{ borderBottom: '1px dashed rgba(255,255,255,0.2)', paddingBottom: 12 }}>
                      <span className="specimen" style={{ color: 'var(--gold)', display: 'block', marginBottom: 4 }}>{k}</span>
                      <span style={{ fontSize: 14.5, color: 'var(--white)', whiteSpace: 'pre-line' }}>{v}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="https://wa.me/5548998459931"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-gold"
                  style={{ marginTop: 32, width: '100%', justifyContent: 'center' }}
                >
                  Inscrever-se via WhatsApp <span className="arrow">↗</span>
                </a>
                <p style={{ marginTop: 16, fontSize: 13, color: 'rgba(255,255,255,0.6)', textAlign: 'center' }}>
                  Inscrição gratuita e obrigatória. Vagas limitadas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
