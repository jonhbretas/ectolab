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
            <div className="eyebrow"><span className="dot"></span>CURSO PRESENCIAL INÉDITO &nbsp;·&nbsp; SOMENTE 40 VAGAS</div>
            <h1 className="h1" style={{ marginTop: 16 }}>
              Ectoplasmia Protetiva.
            </h1>
            <p className="lede" style={{ marginTop: 24 }}>
              Permitir ao aluno conhecer e identificar as situações adversas ou traumáticas que um ectoplasta pode vivenciar, colocando em risco a proéxis e a própria vida.
            </p>
            
            <div className="prose" style={{ marginTop: 40, marginLeft: 0 }}>
              <h3>O que o curso pretende?</h3>
              <p>Apresentar a hipótese de que é possível tomarmos decisões profiláticas e conhecer melhor os fenômenos parapsíquicos, principalmente os protetivos.</p>
              
              <h3>Objetivos</h3>
              <ul>
                <li>Conceituar a Ectoplasmia Protetiva.</li>
                <li>Apresentar os fatores de riscos e protetivos.</li>
                <li>Estudos de casos práticos.</li>
                <li>Cobaiagem assistencial.</li>
                <li>Instalação de Campo Ectoplásmico.</li>
              </ul>
            </div>

            <blockquote style={{ marginTop: 40, padding: 24, background: 'var(--paper-2)', borderLeft: '4px solid var(--orange)', borderRadius: '0 var(--r-md) var(--r-md) 0' }}>
              <p style={{ margin: 0, fontStyle: 'italic', color: 'var(--ink)' }}>
                "Quando o ectoplasma pode ser perigoso e quando pode ser protetivo? Hipótese: vai depender dos efeitos que ele gera em cada caso específico."
              </p>
              <cite className="specimen" style={{ display: 'block', marginTop: 12, color: 'var(--ink-3)' }}>— Live Diálogos Online: Ectoplasmia Protetiva</cite>
            </blockquote>

            <div style={{ marginTop: 48 }}>
              <h3 className="h4" style={{ marginBottom: 16 }}>Depoimentos sobre o tema:</h3>
              <div className="col gap-12">
                {[
                  { a: "Kaka Amui", t: "Muito bom! Parabéns aos idealizadores e ao professor Loche que trouxe muitas casuísticas interessantes." },
                  { a: "Gabriel Dorcino", t: "Muito bom!! Show!!" },
                  { a: "Kelly Lopes", t: "Parabéns Loche. Muito interessante!!!" }
                ].map((d, i) => (
                  <div key={i} className="glass" style={{ padding: '16px 20px', borderRadius: 'var(--r-md)' }}>
                    <p style={{ margin: '0 0 8px', fontSize: 15, color: 'var(--ink-2)' }}>"{d.t}"</p>
                    <span className="specimen">— {d.a}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <div className="glass-teal" style={{ padding: 32, position: 'sticky', top: 100, borderRadius: 'var(--r-lg)' }}>
              <h3 className="h3" style={{ color: 'var(--white)', marginBottom: 24 }}>Informações</h3>
              <div className="col gap-16">
                {[
                  ['Modalidade', 'Presencial (Apenas 40 vagas)'],
                  ['Data', '22 e 23 de outubro'],
                  ['Horários', 'Sáb 9h–17h30 | Dom 8h30–17h'],
                  ['Local', 'Auditorium – CEAEC'],
                  ['Professores', 'Laênio Loche e Marcelo Silva'],
                  ['Valor', 'R$ 600,00 (Até 10x)']
                ].map(([k, v]) => (
                  <div key={k} className="flex between" style={{ borderBottom: '1px dashed rgba(255,255,255,0.2)', paddingBottom: 12 }}>
                    <span className="specimen" style={{ color: 'var(--gold)' }}>{k}</span>
                    <span style={{ fontSize: 14.5, textAlign: 'right', maxWidth: '60%', color: 'var(--white)' }}>{v}</span>
                  </div>
                ))}
              </div>
              <a href="https://loja.ectolab.org" target="_blank" rel="noreferrer" className="btn btn-gold" style={{ marginTop: 32, width: '100%', justifyContent: 'center' }}>Quero fazer minha inscrição <span className="arrow">→</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
ReactDOM.createRoot(document.getElementById("app")).render(<App />);