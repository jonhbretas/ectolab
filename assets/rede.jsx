import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <section className="section bg-white" style={{ paddingTop: '80px', paddingBottom: '64px' }}>
      <div className="wrap">
        <div className="breadcrumb" style={{ marginBottom: 24, fontSize: 13, color: 'var(--ink-3)' }}>
          <a href="/pages/atividades.html" style={{ textDecoration: 'underline' }}>Atividades</a> / Rede Interassistencial
        </div>
        <div className="grid g2 gap-48">
          <div>
            <div className="eyebrow"><span className="dot"></span>VOLUNTARIADO À DISTÂNCIA</div>
            <h1 className="h1" style={{ marginTop: 16 }}>
              Rede Interassistencial de Cirurgia Invisível a Distância.
            </h1>
            <p className="lede" style={{ marginTop: 24 }}>
              Integre nossa rede de tenepessistas veteranos em um contexto macro de interassistência multidimensional, atuando na sua própria residência.
            </p>
            
            <div className="prose" style={{ marginTop: 40, marginLeft: 0 }}>
              <h3>Critérios para Participação</h3>
              <ul>
                <li><strong>Tenepessismo Veterano:</strong> Ter 3 anos de atividade (acoplamento profundo).</li>
                <li><strong>Dupla evolutiva:</strong> Preferencialmente ter dupla evolutiva (evitação da carência afetiva).</li>
                <li><strong>Experiência de Campo:</strong> Ter participado presencialmente de no mínimo três DIPs.</li>
                <li><strong>Persistência:</strong> Manter rotina de participação à distância na dinâmica.</li>
              </ul>

              <h3>Orientações: Antes da DIP</h3>
              <p>Ocorre às sextas-feiras das 19h às 22h. Evite aborrecimentos, coma alimentos leves até 1h antes e procure estar em casa com antecedência para acalmar o soma e psicossoma.</p>

              <h3>Durante a DIP</h3>
              <p>No quarto ou local da tenepes. Penumbra, sem ruídos e em temperatura agradável/fria. Desligue aparelhos, evite plantas/animais e não utilize acessórios místicos. Realize intensa Mobilização Básica de Energias (MBE) e mantenha passividade atenta para registros.</p>

              <h3>Após a DIP</h3>
              <p>Promova a Desassimilação (Desassim) com exteriorização intensa. Evite viagens dirigindo logo após e evite comentar os atendimentos percebidos (sigilo assistencial). Preencha seu relatório.</p>
            </div>
          </div>
          <div>
            <div className="glass-teal" style={{ padding: 32, position: 'sticky', top: 100, borderRadius: 'var(--r-lg)' }}>
              <h3 className="h3" style={{ color: 'var(--white)', marginBottom: 24 }}>Participe</h3>
              <p style={{ fontSize: 14.5, color: 'rgba(255,255,255,0.8)' }}>
                Tenepessistas interessados devem submeter sua aplicação. Após o envio, a coordenação da Ectolab fará contato para confirmar o credenciamento.
              </p>
              <div className="col gap-16" style={{ margin: '24px 0' }}>
                <div className="flex between" style={{ borderBottom: '1px dashed rgba(255,255,255,0.2)', paddingBottom: 12 }}>
                  <span className="specimen" style={{ color: 'var(--gold)' }}>Dia</span>
                  <span style={{ fontSize: 14.5, color: 'var(--white)' }}>Sexta-feira</span>
                </div>
                <div className="flex between" style={{ borderBottom: '1px dashed rgba(255,255,255,0.2)', paddingBottom: 12 }}>
                  <span className="specimen" style={{ color: 'var(--gold)' }}>Horário</span>
                  <span style={{ fontSize: 14.5, color: 'var(--white)' }}>19h00 – 22h00</span>
                </div>
                <div className="flex between" style={{ borderBottom: '1px dashed rgba(255,255,255,0.2)', paddingBottom: 12 }}>
                  <span className="specimen" style={{ color: 'var(--gold)' }}>Valor</span>
                  <span style={{ fontSize: 14.5, color: 'var(--white)' }}>Gratuito</span>
                </div>
              </div>
              <a href="mailto:contato@ectolab.org" className="btn btn-gold" style={{ width: '100%', justifyContent: 'center', marginBottom: 12 }}>Solicitar Cadastro <span className="arrow">→</span></a>
              <a href="mailto:contato@ectolab.org" className="btn btn-ghost" style={{ width: '100%', justifyContent: 'center', color: 'var(--white)', borderColor: 'rgba(255,255,255,0.4)' }}>Enviar Relatório <span className="arrow">→</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
ReactDOM.createRoot(document.getElementById("app")).render(<App />);