import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <>
      <section className="section" style={{ paddingTop: '80px', paddingBottom: '64px', background: 'var(--white)' }}>
        <div className="wrap">
          <div className="breadcrumb" style={{ marginBottom: 24, fontSize: 13, color: 'var(--ink-3)' }}>
            <a href="/pages/cursos.html" style={{ textDecoration: 'underline' }}>Cursos</a> / EPPI
          </div>
          <div className="grid g2 gap-48">
            <div>
              <div className="eyebrow"><span className="dot"></span>CURSO DE CAMPO PRESENCIAL</div>
              <h1 className="h1" style={{ marginTop: 16 }}>
                EPPI — Ectoplasmia Projetiva Paracirúrgica Interassistencial.
              </h1>
              <p className="lede" style={{ marginTop: 24 }}>
                O curso objetiva favorecer a vivência da projeção consciente com objetivos interassistenciais e paracirúrgicos, 
                a partir da instalação de campos ectoplásmicos. Sem pré-requisito.
              </p>
              <div className="prose" style={{ marginTop: 40, marginLeft: 0 }}>
                <h3>Sobre o Curso</h3>
                <p>
                  Oportuniza a vivência de técnicas potencializadoras da ectoplasmia pessoal e o aprofundamento da relação 
                  da projetabilidade lúcida com as especialidades Ectoplasmologia, Projeciologia e Paracirurgia.
                </p>
                <h3>Principais Tópicos</h3>
                <ul>
                  <li>Apresentar a relação da Ectoplasmia com a Projeção Consciente;</li>
                  <li>Correlacionar a Ectoplasmia interassistencial com a Paracirurgia;</li>
                  <li>Evocar as equipes extrafísicas de amparadores especializados;</li>
                  <li>Estudar o uso da ectoplasmia de projetores nas Reurbanizações extrafísicas;</li>
                  <li>Exemplificar as paraestruturas: Para-Hospitais e Parambulatórios Paracirúrgicos;</li>
                  <li>Exercitar técnica para instalação de campos ectoplásmicos, paracirúrgicos, projetivos;</li>
                  <li>Aplicar técnicas projetivas com instalador de campo ectoplásmico individual.</li>
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