import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <>
      <section className="section" style={{ paddingTop: '80px', paddingBottom: '64px', background: 'var(--white)' }}>
        <div className="wrap">
          <div className="breadcrumb" style={{ marginBottom: 24, fontSize: 13, color: 'var(--ink-3)' }}>
            <a href="/pages/cursos.html" style={{ textDecoration: 'underline' }}>Cursos</a> / PROEP
          </div>
          <div className="grid g2 gap-48">
            <div>
              <div className="eyebrow"><span className="dot"></span>PROGRAMA PRESENCIAL INÉDITO &nbsp;·&nbsp; 04 VAGAS POR TURMA</div>
              <h1 className="h1" style={{ marginTop: 16 }}>
                PROEP — Programa de Estimulação Parapsíquica Ectoplásmica.
              </h1>
              <p className="lede" style={{ marginTop: 24 }}>
                Uma atividade conscienciológica teática e aprofundada, com foco na estimulação lúcida do 
                parapsiquismo ectoplásmico e na qualificação das práticas interassistenciais.
              </p>
              
              <div className="prose" style={{ marginTop: 40, marginLeft: 0 }}>
                <h3>Proposta Didático-Vivencial</h3>
                <p>
                  A metodologia do PROEP combina atividades teóricas, vivências práticas, uso de tecnologia aplicada à autopesquisa e momentos de preceptoria individual. O cronograma é organizado para favorecer a mobilização energética contínua, o aprofundamento autoinvestigativo e o reequilíbrio holossomático.
                </p>
                
                <h3>Objetivos</h3>
                <ul>
                  <li>Introdução à Ectoplasmologia</li>
                  <li>Fisiologia Energética Humana</li>
                  <li>Homeostase Bioenergética</li>
                  <li>Criticidade Parapercetiva</li>
                  <li>Experimentação Paracirúrgica</li>
                  <li>Autocognição Parapsíquica Ectoplásmica</li>
                </ul>

                <h3>Principais Atividades</h3>
                <h4>Sexta-feira – Abertura e Avaliação Inicial</h4>
                <ul>
                  <li>Mobilização Básica das Energias (MBE)</li>
                  <li>Fundamentos da ectoplasmologia e autoavaliação holossomática</li>
                  <li>Aplicação de experimentos de eletrosomatografia</li>
                  <li>Encaminhamento para dinâmica interassistencial de Paracirurgia</li>
                </ul>
                
                <h4>Sábado – Autopesquisa e Intervenções Energéticas</h4>
                <ul>
                  <li>Oficina do Parapercepciograma (com notebook)</li>
                  <li>Ectoplasmologia Avançada e uso do energodispêndiograma</li>
                  <li>Estímulos com fotoestimulador e estimulação vagal auricular</li>
                  <li>Oficina Mentalsomática I</li>
                </ul>

                <h4>Domingo – Integração, Debate e Preceptoria</h4>
                <ul>
                  <li>Oficina Mentalsomática II e Oficina de Ectoplasmologia</li>
                  <li>Nova experimentação de eletrosomatografia</li>
                  <li>Debate grupal e feedback individual</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="glass-teal" style={{ padding: 32, position: 'sticky', top: 100, borderRadius: 'var(--r-lg)' }}>
                <h3 className="h3" style={{ color: 'var(--white)', marginBottom: 24 }}>Informações</h3>
                <div className="col gap-16">
                  {[
                    ['Modalidade', 'Presencial (Apenas 4 vagas)'],
                    ['Dias', 'Sexta, Sábado e Domingo'],
                    ['Horários', 'Sex 14h-22h | Sáb 08h-17h30 | Dom 08h-17h'],
                    ['Local', 'Lab de Ectoplasmologia – CEAEC'],
                    ['Equipe', '2 professores, 1 monitor, suporte médico'],
                    ['Valor', 'R$1.000 (Até 10x sem Juros)']
                  ].map(([k, v]) => (
                    <div key={k} className="flex between" style={{ borderBottom: '1px dashed rgba(255,255,255,0.2)', paddingBottom: 12 }}>
                      <span className="specimen" style={{ color: 'var(--gold)' }}>{k}</span>
                      <span style={{ fontSize: 14.5, textAlign: 'right', maxWidth: '60%', color: 'var(--white)' }}>{v}</span>
                    </div>
                  ))}
                </div>
                <a href="https://store.conscienciologia.org.br/loja/ectolab/?s=programa+de+estimula%C3%A7%C3%A3o+para" className="btn btn-gold" style={{ marginTop: 32, width: '100%', justifyContent: 'center' }}>Quero fazer minha inscrição <span className="arrow">→</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
ReactDOM.createRoot(document.getElementById("app")).render(<App />);