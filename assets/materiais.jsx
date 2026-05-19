import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const LISTA_VERBETES = ["Acoplador Paracirúrgico", "Acuponto", "Acupuntura", "Ádito ideativo cosmovisiológico", "Conscin ectoplasta", "Decênio Interassistencial Paracirúrgico", "Dinâmica Interassistencial de Paracirurgia", "Ectolab", "Ectoplasma", "Exílio terapêutico", "Interação monitoria intrafísica–parassegurança", "Jovem Ectoplasta", "Kit de dinâmica parapsíquica", "Laboratório conscienciológico da ectoplasmia", "Olorização", "Paracablagem interassistencial", "Paracirurgia", "Parapercepciograma", "Requinte da ectoplasmia", "Síndrome ectoplásmica", "Subjetividade objetiva parapsíquica", "Tenepessista ectoplasta"];

const FAQS = [
  { q: "Posso solicitar uma paracirurgia para quem está no hospital?", a: "Sim. Nesses casos, um parente ou responsável deve preencher o formulário e sintonizar mentalmente durante o horário do campo vibracional, servindo de 'ponte'." },
  { q: "Posso me alimentar antes da Paracirurgia?", a: "Pode sim. Cerca de 2h antes, faça um lanche leve e ingira pouco líquido, evitando cafeína, chá ou estimulantes. Ao final, poderá fazer outro lanche leve." },
  { q: "Preciso crer em algo para fazer a paracirurgia ou para que ela tenha efeito?", a: "Não. A paracirurgia atua de forma energética (física-sutil), baseada na doação e aplicação de ectoplasma. Funciona independente de crença ou religião." },
  { q: "Há diferença entre as cirurgias espirituais e a paracirurgia da ECTOLAB?", a: "A 'cirurgia espiritual' brasileira tem forte viés místico e religioso. A paracirurgia da Ectolab é laica, baseada em método laboratorial e realizada por equipe técnica intrafísica parapsíquica, e não mediúnica de submissão." },
  { q: "É possível pedir paracirurgia no mesmo dia, para vários moradores da casa?", a: "Sim, os moradores devem permanecer separados ou em absoluto silêncio num mesmo ambiente durante o horário de repouso (Domingo, 15h às 16h)." },
  { q: "É possível pedir cirurgia para meu animal de estimação?", a: "Sim. Para animais, solicitamos que o tutor responsável repouse ao lado do animal, acariciando ou mantendo conexão afetuosa no horário da intervenção." }
];

function App() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section bg-white" style={{ paddingTop: '80px', paddingBottom: '64px' }}>
      <div className="wrap">
        <div className="eyebrow"><span className="dot"></span>ACERVO DE PESQUISA & FAQ</div>
        <h1 className="h-display" style={{ marginTop: 24, marginBottom: 48 }}>Materiais Publicados.</h1>
        
        <div className="grid g2 gap-48">
          <div className="col gap-32">
            <div className="card" style={{ padding: 32 }}>
              <h3 className="h3" style={{ color: 'var(--teal)' }}>Artigos Acadêmicos</h3>
              <ul className="prose" style={{ marginTop: 16, fontSize: 15 }}>
                <li><a href="#">Paracirurgia e Reurbeux (Revista Reurbanisatus)</a></li>
                <li><a href="#">Rede Interassistencial de Cirurgia Invisível a Distância</a></li>
                <li><a href="#">Proposta de Descrição e Categorização da Síndrome de Godot</a></li>
              </ul>
            </div>
            
            <div className="card" style={{ padding: 32 }}>
              <h3 className="h3" style={{ color: 'var(--teal)' }}>Dicionário de Argumentos</h3>
              <ul className="prose" style={{ marginTop: 16, fontSize: 15 }}>
                <li>Ectoplastologia</li>
                <li>Fitoectoplasmologia</li>
                <li>Grafoectoplasmologia</li>
              </ul>
            </div>

            <div className="card" style={{ padding: 32, background: 'var(--paper)' }}>
              <h3 className="h3" style={{ color: 'var(--teal)' }}>Lista de Verbetes</h3>
              <p style={{ fontSize: 14, color: 'var(--ink-2)' }}>Termos pesquisados e enciclopedicamente documentados por nossa equipe de pesquisadores.</p>
              <div className="flex" style={{ flexWrap: 'wrap', gap: 6, marginTop: 16 }}>
                {LISTA_VERBETES.map(v => (
                  <span key={v} className="tag ghost" style={{ fontSize: 10, padding: '4px 8px', textTransform: 'none' }}>{v}</span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="glass-teal" style={{ padding: 32, borderRadius: 'var(--r-lg)' }}>
              <h2 className="h2" style={{ color: 'var(--white)' }}>Perguntas Frequentes</h2>
              <p style={{ fontSize: 14.5, color: 'rgba(255,255,255,0.8)', marginTop: 8, marginBottom: 24 }}>
                Tem alguma dúvida que não consta? Ajude-nos escrevendo para <a href="mailto:contato@ectolab.org" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>contato@ectolab.org</a>
              </p>
              
              <div className="col gap-12">
                {FAQS.map((item, i) => (
                  <div key={i} className="card" style={{ cursor: 'pointer', background: 'transparent', borderColor: open === i ? 'var(--gold)' : 'rgba(255,255,255,0.2)' }} onClick={() => setOpen(open === i ? -1 : i)}>
                    <div className="flex between center" style={{ padding: '16px 20px', gap: 16 }}>
                      <h4 className="h4" style={{ color: open === i ? 'var(--gold)' : 'var(--white)', fontSize: 15 }}>{item.q}</h4>
                      <span className="mono" style={{ fontSize: '20px', color: 'var(--white)' }}>{open === i ? '−' : '+'}</span>
                    </div>
                    {open === i && (
                      <div style={{ padding: '0 20px 20px', color: 'rgba(255,255,255,0.9)', fontSize: '14px', lineHeight: 1.6 }}>
                        {item.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
ReactDOM.createRoot(document.getElementById("app")).render(<App />);