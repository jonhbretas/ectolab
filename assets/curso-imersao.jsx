import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <>
      <section className="section" style={{ paddingTop: '80px', paddingBottom: '64px', background: 'var(--white)' }}>
        <div className="wrap">
          <div className="breadcrumb" style={{ marginBottom: 24, fontSize: 13, color: 'var(--ink-3)' }}>
            <a href="/pages/cursos.html" style={{ textDecoration: 'underline' }}>Cursos</a> / Imersão em Ectoplasmia
          </div>
          <div className="grid g2 gap-48">
            <div>
              <div className="eyebrow"><span className="dot"></span>MARATONA ECTOPLÁSMICA &nbsp;·&nbsp; 27 HORAS</div>
              <h1 className="h1" style={{ marginTop: 16 }}>
                Imersão em Ectoplasmia.
              </h1>
              <p className="lede" style={{ marginTop: 24 }}>
                Um final de semana imersivo no holopensene de ectoplasmologia e paracirurgia. 
                São 27 horas de atividades contínuas em ambiente hoteleiro, acompanhando as pesquisas mais recentes da especialidade.
              </p>
              
              <div className="prose" style={{ marginTop: 40, marginLeft: 0 }}>
                <h3>Atividades da Imersão</h3>
                
                <h4>Campo Bioenergético Interassistencial</h4>
                <p>Vivencie a mobilização e a ampliação do seu campo energético em um ambiente otimizado para interassistência. Essa prática visa o fortalecimento do equilíbrio energético pessoal e a troca de energias saudáveis.</p>
                
                <h4>Oficinas de Autocriticidade e Mentalsomaticidade</h4>
                <p>Explore técnicas e reflexões avançadas para desenvolver a autocriticidade lúcida e ampliar a utilização do mentalsoma.</p>
                
                <h4>Metodologia Científica</h4>
                <p>Participe de atividades que buscam esclarecer sobre o pensamento científico, técnico e objetivo através de oficinas, aulas e pesquisa antes, durante e após o curso.</p>
                
                <h4>Fitoectoplasma (Atividade ao ar livre)</h4>
                <p>Conecte-se com a natureza e explore a interação energética com as plantas. Essa prática promove o desbloqueio energético e a revitalização do holossoma.</p>
                
                <h4>Participação na Dinâmica Interassistencial de Paracirurgia (DIP)</h4>
                <p>Participe de uma experiência prática de assistência energética avançada, utilizando técnicas parapsíquicas para auxiliar na reconstituição de consciências em situações complexas.</p>
                
                <h4>Debates com Professores e Pesquisadores</h4>
                <p>Interaja com especialistas em discussões enriquecedoras. Os debates abordam temas evolutivos avançados, promovendo aprofundamento teórico e prático.</p>
              </div>
            </div>
            <div>
              <div className="glass-orange" style={{ padding: 32, position: 'sticky', top: 100, borderRadius: 'var(--r-lg)' }}>
                <span className="tag dark" style={{ marginBottom: 16 }}>O desperto antecipa</span>
                <h3 className="h3" style={{ color: 'var(--ink)', marginBottom: 16 }}>Garantir Vaga com Desconto</h3>
                <p style={{ fontSize: 14.5, color: 'var(--ink-2)', marginBottom: 24, lineHeight: 1.6 }}>
                  Aproveite nossos lotes promocionais para adquirir sua vaga com desconto. 
                  O curso é imersivo, dentro de hotel e conta com participação de 30 voluntários para que o evento possa acontecer.
                </p>
                <div className="col gap-16" style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: 24 }}>
                  {[
                    ['Modalidade', 'Presencial Hoteleiro'],
                    ['Duração', '27 Horas'],
                    ['Dias', 'Sexta, Sábado e Domingo'],
                    ['Vagas', 'Limitadas a capacidade do Hotel']
                  ].map(([k, v]) => (
                    <div key={k} className="flex between" style={{ borderBottom: '1px dashed rgba(0,0,0,0.1)', paddingBottom: 12 }}>
                      <span className="specimen" style={{ color: 'var(--ink-2)' }}>{k}</span>
                      <span style={{ fontSize: 14.5, color: 'var(--ink)', fontWeight: 500, textAlign: 'right' }}>{v}</span>
                    </div>
                  ))}
                </div>
                <a href="#" className="btn btn-primary" style={{ marginTop: 32, width: '100%', justifyContent: 'center' }}>Quero me inscrever <span className="arrow">→</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("app")).render(<App />);