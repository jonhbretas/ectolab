import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <>
      <section className="section" style={{ paddingTop: '80px', paddingBottom: '64px', background: 'var(--white)' }}>
        <div className="wrap">
          <div className="breadcrumb" style={{ marginBottom: 24, fontSize: 13, color: 'var(--ink-3)' }}>
            <a href="/pages/cursos.html" style={{ textDecoration: 'underline' }}>Cursos</a> / Campo Paracirúrgico
          </div>
          <div className="grid g2 gap-48">
            <div>
              <div className="eyebrow"><span className="dot"></span>CURSO DE CAMPO PRESENCIAL</div>
              <h1 className="h1" style={{ marginTop: 16 }}>
                Campo Interassistencial Paracirúrgico.
              </h1>
              <p className="lede" style={{ marginTop: 24 }}>
                Uma imersão dedicada ao reequilíbrio bioenergético e ao fomento do desenvolvimento da 
                ectoplasmia interassistencial. Sem pré-requisito.
              </p>
              <div className="prose" style={{ marginTop: 40, marginLeft: 0 }}>
                <h3>Benefícios do Curso</h3>
                <ul>
                  <li>Propiciar o reequilíbrio bioenergético;</li>
                  <li>Fomentar o desenvolvimento da ectoplasmia interassistencial;</li>
                  <li>Contribuir para a redução do estresse consciencial;</li>
                  <li>Oportunizar a vivência multidimensional lúcida;</li>
                  <li>Auxiliar para a qualificação da tenepes;</li>
                  <li>Promover a saúde holossomática.</li>
                </ul>
                <h3>Objetivos do Curso</h3>
                <ul>
                  <li>Debater sobre a Fisiologia do ectoplasta;</li>
                  <li>Estudar o desenvolvimento da ectoplasmia;</li>
                  <li>Promover a homeostase holossomática;</li>
                  <li>Aplicar técnicas energéticas assistenciais;</li>
                  <li>Experimentar a paracirurgia.</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="glass-teal" style={{ padding: 32, position: 'sticky', top: 100, borderRadius: 'var(--r-lg)' }}>
                <h3 className="h3" style={{ color: 'var(--white)', marginBottom: 24 }}>Informações</h3>
                <div className="col gap-16">
                  {[
                    ['Modalidade', 'Presencial'],
                    ['Dias', 'Sexta, Sábado e Domingo'],
                    ['Horários', 'Consultar próximas turmas'],
                    ['Local', 'Consultar próximas turmas'],
                    ['Turmas', 'Consultar próximas turmas']
                  ].map(([k, v]) => (
                    <div key={k} className="flex between" style={{ borderBottom: '1px dashed rgba(255,255,255,0.2)', paddingBottom: 12 }}>
                      <span className="specimen" style={{ color: 'var(--gold)' }}>{k}</span>
                      <span style={{ fontSize: 14.5, color: 'var(--white)' }}>{v}</span>
                    </div>
                  ))}
                </div>
                <a href="#" className="btn btn-gold" style={{ marginTop: 32, width: '100%', justifyContent: 'center' }}>Consultar Próximas Turmas <span className="arrow">→</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
ReactDOM.createRoot(document.getElementById("app")).render(<App />);