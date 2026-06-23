import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <section className="section" style={{ paddingTop: '80px', paddingBottom: '64px', background: 'var(--white)' }}>
      <div className="wrap">
        <div className="breadcrumb" style={{ marginBottom: 24, fontSize: 13, color: 'var(--ink-3)' }}>
          <a href="/pages/cursos.html" style={{ textDecoration: 'underline' }}>Cursos</a> / Ectoplasmia Interassistencial (EaD)
        </div>
        <div className="grid g2 gap-48">
          <div>
            <div className="eyebrow"><span className="dot"></span>CURSO GRAVADO &nbsp;·&nbsp; ONLINE</div>
            <h1 className="h1" style={{ marginTop: 16 }}>
              Ectoplasmia Interassistencial.
            </h1>
            <p className="lede" style={{ marginTop: 24 }}>
              Fundamentos da assistência com ectoplasma. Aprenda os princípios da bioenergologia, 
              paraterapêutica e metodologia de pesquisa no seu próprio ritmo.
            </p>
            
            <div className="prose" style={{ marginTop: 40, marginLeft: 0 }}>
              <h3>Cronograma e Apresentação do Curso</h3>
              <p>A estrutura didática abrange 5 módulos fundamentais focados na prática e teoria da ectoplasmia interassistencial.</p>
              
              <h4>Módulo I. Fundamentos da Conscienciologia</h4>
              <ul>
                <li><strong>Aula 01:</strong> Paradigma consciencial.</li>
                <li><strong>Aula 02:</strong> Bioenergologia.</li>
              </ul>

              <h4>Módulo II. Paraterapêutica ectoplásmica</h4>
              <ul>
                <li><strong>Aula 03:</strong> Ectoplasma.</li>
                <li><strong>Aula 04:</strong> Paracirurgia.</li>
              </ul>

              <h4>Módulo III. Saúde e ectoplasmia</h4>
              <ul>
                <li><strong>Aula 05:</strong> Síndrome ectoplásmica.</li>
                <li><strong>Aula 06:</strong> Homeostase holossomática.</li>
              </ul>

              <h4>Módulo IV. Paraepistemologia</h4>
              <ul>
                <li><strong>Aula 07:</strong> Metodologia de Pesquisa.</li>
                <li><strong>Aula 08:</strong> Pesquisa de campo.</li>
              </ul>

              <h4>Módulo V. Pesquisa Instrumental</h4>
              <ul>
                <li><strong>Aula 09:</strong> Experimentos laboratoriais.</li>
                <li><strong>Aula 10:</strong> Bioimpedância.</li>
              </ul>

              <h4>Encerramento</h4>
              <ul>
                <li>Aula de Encerramento e Avaliação.</li>
                <li>Encerramento Geral do Curso.</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="glass-teal" style={{ padding: 32, position: 'sticky', top: 100, borderRadius: 'var(--r-lg)' }}>
              <h3 className="h3" style={{ color: 'var(--white)', marginBottom: 24 }}>Informações</h3>
              <div className="col gap-16">
                {[
                  ['Modalidade', 'EaD (Gravado)'],
                  ['Acesso', 'Imediato'],
                  ['Módulos', '5 Módulos (10 aulas)'],
                  ['Valor', 'Consultar na Loja']
                ].map(([k, v]) => (
                  <div key={k} className="flex between" style={{ borderBottom: '1px dashed rgba(255,255,255,0.2)', paddingBottom: 12 }}>
                    <span className="specimen" style={{ color: 'var(--gold)' }}>{k}</span>
                    <span style={{ fontSize: 14.5, color: 'var(--white)', textAlign: 'right' }}>{v}</span>
                  </div>
                ))}
              </div>
              <a href="https://store.conscienciologia.org.br/product/ectoplasmia-interassistencial-23-09/" target="_blank" rel="noreferrer" className="btn btn-gold" style={{ marginTop: 32, width: '100%', justifyContent: 'center' }}>
                Adquirir Curso <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
