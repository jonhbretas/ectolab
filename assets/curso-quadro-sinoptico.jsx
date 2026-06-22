import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <section className="section" style={{ paddingTop: '80px', paddingBottom: '64px', background: 'var(--white)' }}>
      <div className="wrap">
        <div className="breadcrumb" style={{ marginBottom: 24, fontSize: 13, color: 'var(--ink-3)' }}>
          <a href="/pages/cursos.html" style={{ textDecoration: 'underline' }}>Cursos</a> / Quadro Sinóptico Parapesquisístico
        </div>
        <div className="grid g2 gap-48">
          <div>
            <div className="eyebrow"><span className="dot"></span>CURSO GRAVADO &nbsp;·&nbsp; ONLINE</div>
            <h1 className="h1" style={{ marginTop: 16 }}>
              Quadro Sinóptico<br />Parapesquisístico.
            </h1>
            <p className="lede" style={{ marginTop: 24 }}>
              Ferramenta de análise parapesquisística desenvolvida pelo Prof. Hernande Leite e voluntários da ECTOLAB,
              considerada pelo Prof. Waldo Vieira uma das gescons mais avançadas já desenvolvidas pela instituição.
            </p>

            <div className="prose" style={{ marginTop: 40, marginLeft: 0 }}>
              <h3>Sobre o Curso</h3>
              <p>
                O Quadro Sinóptico Parapesquisístico é uma ferramenta de análise desenvolvida colaborativamente pelo
                Prof. Hernande Leite e voluntários da ECTOLAB. O material foi apresentado ao Prof. Waldo Vieira,
                fundador da Conscienciologia, que o considerou uma das gescons mais avançadas já produzidas pela instituição.
              </p>
              <p>
                No curso, o professor utiliza um relato real como base para destrinchar a análise pelo quadro sinóptico
                parapesquisístico, demonstrando na prática como aplicar a ferramenta em situações concretas de pesquisa.
              </p>

              <h3>O que você vai aprender</h3>
              <ul>
                <li>O que é e como surgiu o Quadro Sinóptico Parapesquisístico.</li>
                <li>Como estruturar a análise de relatos e experiências parapesquisísticas.</li>
                <li>Aplicação prática da ferramenta sobre um estudo de caso real.</li>
                <li>Critérios de avaliação e qualificação pesquisística.</li>
                <li>Debate com o professor ao final da exposição.</li>
              </ul>

              <h3>Formato</h3>
              <p>
                Aula gravada de <strong>1h30</strong> seguida de sessão de debate. Acesso imediato após a inscrição
                diretamente pela plataforma da Conscienciologia.
              </p>
            </div>
          </div>

          <div>
            <div className="glass-teal" style={{ padding: 32, position: 'sticky', top: 100, borderRadius: 'var(--r-lg)' }}>
              <h3 className="h3" style={{ color: 'var(--white)', marginBottom: 24 }}>Informações</h3>
              <div className="col gap-16">
                {[
                  ['Modalidade', 'Gravado (Online)'],
                  ['Professor', 'Prof. Hernande Leite'],
                  ['Duração', '1h30 + debate'],
                  ['Acesso', 'Imediato'],
                  ['Investimento', 'R$ 75,00'],
                ].map(([k, v]) => (
                  <div key={k} className="flex between" style={{ borderBottom: '1px dashed rgba(255,255,255,0.2)', paddingBottom: 12 }}>
                    <span className="specimen" style={{ color: 'var(--gold)' }}>{k}</span>
                    <span style={{ fontSize: 14.5, textAlign: 'right', maxWidth: '60%', color: 'var(--white)' }}>{v}</span>
                  </div>
                ))}
              </div>
              <a
                href="https://store.conscienciologia.org.br/product/quadro-sinoptico-parapesquisistico/"
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
