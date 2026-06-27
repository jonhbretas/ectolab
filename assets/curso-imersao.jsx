import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const atividades = [
    { num: '01', titulo: 'Campo Bioenergético Interassistencial', texto: 'Vivencie a mobilização e a ampliação do seu campo energético em um ambiente otimizado para interassistência. Fortalecimento do equilíbrio energético pessoal e troca de energias saudáveis.' },
    { num: '02', titulo: 'Oficinas de Autocriticidade e Mentalsomaticidade', texto: 'Explore técnicas e reflexões avançadas para desenvolver a autocriticidade lúcida e ampliar a utilização do mentalsoma.' },
    { num: '03', titulo: 'Metodologia Científica', texto: 'Participe de atividades que buscam esclarecer sobre o pensamento científico, técnico e objetivo através de oficinas, aulas e pesquisa antes, durante e após o curso.' },
    { num: '04', titulo: 'Fitoectoplasma (Atividade ao ar livre)', texto: 'Conecte-se com a natureza e explore a interação energética com as plantas. Essa prática promove o desbloqueio energético e a revitalização do holossoma.' },
    { num: '05', titulo: 'Participação na DIP (Dinâmica Interassistencial de Paracirurgia)', texto: 'Participe de uma experiência prática de assistência energética avançada, utilizando técnicas parapsíquicas para auxiliar na reconstituição de consciências em situações complexas.' },
    { num: '06', titulo: 'Debates com Professores e Pesquisadores', texto: 'Interaja com especialistas em discussões enriquecedoras. Os debates abordam temas evolutivos avançados, promovendo aprofundamento teórico e prático.' },
  ];

  const pilares = [
    { num: '01', titulo: 'Pesquisa na quinta-feira voluntariada', texto: 'Antes do curso, no dia 18 de março, os voluntários realizam pesquisas práticas mediante agendamento. Os professores analisam os parapercepciogramas e os dados de condutibilidade elétrica coletados com o Vega Teste.', destaque: '18 Mar · Pesquisa' },
    { num: '02', titulo: 'Neoconceitos em Ectoplasmologia e Paracirurgiologia', texto: 'Apresentação de novos conceitos desenvolvidos pela pesquisa da Ectolab, conectando ectoplasmia, paracirurgia e a fisiologia do interstício celular.', destaque: 'Neoconceitos' },
    { num: '03', titulo: 'Criticidade Parapsíquica e Cientificidade', texto: 'Desenvolvimento da postura pesquisística: observar, registrar, comparar e revisar. Cada vivência vira dado, cada dado vira evidência.', destaque: 'Criticidade' },
    { num: '04', titulo: 'Parafisiologia e Interação TENEPES-Ectoplasmia-Parambulatorial', texto: 'Estudo da hipótese do ectoplasma como líquido intersticial em estado plasmático funcional e sua conexão com o trabalho parambulatorial durante o sono.', destaque: 'Parafisiologia' },
  ];

  const marcos = [
    { titulo: 'Histórico das Pesquisas', texto: 'A cronologia dos estudos iniciados em 2012, da transição de testes com eletroencefalografia e termografia para o Vega Teste, equipamento alemão eficaz em captar alterações na condutibilidade elétrica do corpo durante fenômenos parapsíquicos.' },
    { titulo: 'Sistema Energético e o Interstício', texto: 'A correlação entre os meridianos da Medicina Tradicional Chinesa e a região do interstício celular. A malha dinâmica que interconecta todas as células e como a vontade altera a arquitetura de colágeno.' },
    { titulo: 'Metodologia Científica e Resultados', texto: 'Estudos randomizados com grupo controle, onde a mobilização de energia pelos voluntários apresentou variações significativas na condutibilidade elétrica, validando a eficácia da medição.' },
    { titulo: 'Hipótese da Origem do Ectoplasma', texto: 'A hipótese de que o ectoplasma seria o líquido intersticial passando por um processo semelhante à eletrólise, mudando de estado líquido para plasmático funcional, sob organização do campo energético da consciência.' },
    { titulo: 'Assistência e Parambulatório', texto: 'A natureza organizadora do ectoplasma conectada à prática da assistência: como o parambulatório atua reorganizando ambientes e consciências em desequilíbrio.' },
  ];

  const diferencas = [
    { titulo: 'TENEPES', texto: 'Focada na exteriorização de energias pelo assistente intrafísico em estado de vigília.' },
    { titulo: 'Parambulatório', texto: 'Trabalho realizado durante o sono (projeção lúcida), onde a consciência atua como num consultório extrafísico. Exige maior domínio do psicossoma e profundidade no esclarecimento (Tares).' },
  ];

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="section" style={{ paddingTop: '80px', paddingBottom: '64px', background: 'var(--white)' }}>
        <div className="wrap">
          <div className="breadcrumb" style={{ marginBottom: 24, fontSize: 13, color: 'var(--ink-3)' }}>
            <a href="/pages/cursos.html" style={{ textDecoration: 'underline' }}>Cursos</a> / Imersão em Ectoplasmia
          </div>
          <div className="grid g2 gap-48">
            <div>
              <div className="eyebrow"><span className="dot"></span>MARATONA ECTOPLÁSMICA &nbsp;·&nbsp; 27 HORAS &nbsp;·&nbsp; PARAMBULATORIAL</div>
              <h1 className="h1" style={{ marginTop: 16 }}>
                Imersão em Ectoplasmia <span style={{ color: 'var(--orange)', fontWeight: 700 }}>Parambulatorial</span>.
              </h1>
              <p className="lede" style={{ marginTop: 24 }}>
                Um final de semana imersivo no holopensene de ectoplasmologia e paracirurgia.
                São 27 horas de atividades contínuas em ambiente hoteleiro, acompanhando as pesquisas mais recentes da especialidade.
              </p>

              <div style={{ marginTop: 32, position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: 'var(--r-lg)', border: '1px solid var(--line)' }}>
                <iframe
                  src="https://www.youtube.com/embed/jcD9CuhR1L0?si=4lycleLunHr_5-vT"
                  title="Imersão em Ectoplasmia Parambulatorial"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                />
              </div>
            </div>

            {/* ===== SIDEBAR INSCRIÇÃO ===== */}
            <div>
              <div className="glass-orange" style={{ padding: 32, position: 'sticky', top: 100, borderRadius: 'var(--r-lg)' }}>
                <span className="tag dark" style={{ marginBottom: 16 }}>Parambulatorial · O desperto antecipa</span>
                <h3 className="h3" style={{ color: 'var(--ink)', marginBottom: 16 }}>Garantir Vaga com Desconto</h3>
                <p style={{ fontSize: 14.5, color: 'var(--ink-2)', marginBottom: 24, lineHeight: 1.6 }}>
                  Aproveite nossos lotes promocionais para adquirir sua vaga com desconto.
                  O curso é imersivo, dentro de hotel e conta com participação de 30 voluntários para que o evento possa acontecer.
                </p>
                <div className="col gap-16" style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: 24 }}>
                  {[
                    ['Modalidade', 'Híbrida (Presencial e Online)'],
                    ['Data', '19, 20 e 21 de Março de 2027'],
                    ['Duração', '27 Horas'],
                    ['Vagas', 'Até 80 Alunos'],
                  ].map(([k, v]) => (
                    <div key={k} className="flex between" style={{ borderBottom: '1px dashed rgba(0,0,0,0.1)', paddingBottom: 12 }}>
                      <span className="specimen" style={{ color: 'var(--ink-2)' }}>{k}</span>
                      <span style={{ fontSize: 14.5, color: 'var(--ink)', fontWeight: 500, textAlign: 'right' }}>{v}</span>
                    </div>
                  ))}
                </div>
                <div className="col gap-16" style={{ marginTop: 20, padding: '14px 16px', background: 'rgba(255,255,255,0.55)', borderRadius: 'var(--r-sm)', border: '1px dashed rgba(0,0,0,0.12)' }}>
                  <p style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.5, margin: 0 }}>
                    <strong style={{ color: 'var(--ink)' }}>18 de Março</strong> — Pesquisa não obrigatória, mediante agendamento. Exclusivo para alunos do curso na modalidade presencial.
                  </p>
                </div>
                <div className="col gap-12" style={{ marginTop: 24 }}>
                  <a href="https://store.conscienciologia.org.br/sku/311521/" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Participar Presencial <span className="arrow">→</span></a>
                  <a href="https://store.conscienciologia.org.br/sku/311520/" className="btn btn-ghost" style={{ width: '100%', justifyContent: 'center' }}>Participar Online <span className="arrow">→</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PILARES DA IMERSÃO (timeline visual) ===== */}
      <section className="section" style={{ background: 'var(--paper)' }}>
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow"><span className="dot"></span>O QUE TORNA ESTA IMERSÃO ÚNICA</div>
              <h2 className="h1" style={{ marginTop: 16, maxWidth: 820 }}>
                Quatro pilares de uma <strong style={{ color: 'var(--teal)', fontWeight: 700 }}>pesquisa viva</strong>.
              </h2>
              <p className="lede" style={{ marginTop: 12, maxWidth: 720 }}>
                Não é um curso teórico. É um laboratório híbrido onde pesquisa, assistência e formação caminham juntas durante um final de semana inteiro.
              </p>
            </div>
          </div>

          {/* Cards dos pilares */}
          <div className="grid g2 gap-24" style={{ marginTop: 40 }}>
            {pilares.map((p) => (
              <div key={p.num} style={{
                padding: '28px 26px',
                border: '1px solid var(--line)',
                borderRadius: 'var(--r-md)',
                background: 'var(--white)',
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span className="mono" style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: 'var(--teal)',
                    letterSpacing: '0.04em',
                  }}>/{p.num}</span>
                  <span className="specimen" style={{ color: 'var(--orange-2)' }}>{p.destaque}</span>
                </div>
                <h3 className="h3" style={{ fontSize: 19, lineHeight: 1.2, margin: 0 }}>{p.titulo}</h3>
                <p style={{ fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.6, margin: 0 }}>{p.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ATIVIDADES ===== */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow"><span className="dot"></span>PROGRAMAÇÃO &nbsp;·&nbsp; 27 HORAS</div>
              <h2 className="h1" style={{ marginTop: 16 }}>
                Seis frentes de <strong style={{ color: 'var(--orange)', fontWeight: 700 }}>vivência e pesquisa</strong>.
              </h2>
            </div>
          </div>
          <div className="grid g3 gap-24" style={{ marginTop: 40 }}>
            {atividades.map((a) => (
              <div key={a.num} style={{
                padding: '28px 24px',
                border: '1px solid var(--line)',
                borderRadius: 'var(--r-md)',
                background: 'var(--paper)',
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
              }}>
                <span className="mono" style={{ fontSize: 13, color: 'var(--teal)', fontWeight: 600, letterSpacing: '0.04em' }}>/{a.num}</span>
                <h3 className="h3" style={{ fontSize: 18 }}>{a.titulo}</h3>
                <p style={{ fontSize: 14.5, color: 'var(--ink-2)', lineHeight: 1.55, margin: 0 }}>{a.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PESQUISA E PARAFISIOLOGIA (vídeo) ===== */}
      <section className="section" style={{ background: 'var(--teal-3)', color: 'var(--white)' }}>
        <div className="wrap">
          <div className="grid g2 gap-48" style={{ alignItems: 'center' }}>
            <div>
              <div className="eyebrow" style={{ color: 'var(--orange)' }}>
                <span className="dot" style={{ background: 'var(--orange)' }}></span>PESQUISA &amp; PARAFISIOLOGIA
              </div>
              <h2 className="h1" style={{ marginTop: 16, color: 'var(--white)' }}>
                A ciência por trás <br />
                <strong style={{ color: 'var(--orange)', fontWeight: 700 }}>do ectoplasma</strong>.
              </h2>
              <p style={{ marginTop: 24, fontSize: 16, lineHeight: 1.65, color: 'rgba(255,255,255,0.82)' }}>
                O professor Ismael Pinheiro apresenta a linha de pesquisa da Ectolab: do histórico iniciado em 2012
                com eletroencefalografia e termografia até o Vega Teste, que captura alterações na condutibilidade
                elétrica do corpo durante fenômenos parapsíquicos. A hipótese central: o ectoplasma como
                líquido intersticial em estado plasmático funcional, organizado pelo campo energético da consciência.
              </p>
              <div style={{ marginTop: 28, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <span className="tag" style={{ background: 'rgba(255,255,255,0.12)', color: 'var(--orange-soft)', border: '1px solid rgba(255,255,255,0.2)' }}>Vega Teste</span>
                <span className="tag" style={{ background: 'rgba(255,255,255,0.12)', color: 'var(--orange-soft)', border: '1px solid rgba(255,255,255,0.2)' }}>Interstício Celular</span>
                <span className="tag" style={{ background: 'rgba(255,255,255,0.12)', color: 'var(--orange-soft)', border: '1px solid rgba(255,255,255,0.2)' }}>Eletrólise</span>
                <span className="tag" style={{ background: 'rgba(255,255,255,0.12)', color: 'var(--orange-soft)', border: '1px solid rgba(255,255,255,0.2)' }}>Grupo Controle</span>
              </div>
            </div>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: 'var(--r-lg)' }}>
              <iframe
                src="https://www.youtube.com/embed/GQDDAOP392U?si=MQSd5MkxtPJru4ZB"
                title="Pesquisa e Parafisiologia"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== MARCOS DA PESQUISA (cards) ===== */}
      <section className="section" style={{ background: 'var(--paper)' }}>
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow"><span className="dot"></span>MARCOS DA PESQUISA</div>
              <h2 className="h1" style={{ marginTop: 16, maxWidth: 760 }}>
                Os marcos da investigação <strong style={{ color: 'var(--teal)', fontWeight: 700 }}>em ectoplasmia</strong>.
              </h2>
            </div>
          </div>
          <div className="grid g3 gap-24" style={{ marginTop: 40 }}>
            {marcos.map((m, i) => (
              <div key={i} style={{
                padding: '28px 24px',
                border: '1px solid var(--line)',
                borderRadius: 'var(--r-md)',
                background: 'var(--white)',
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                position: 'relative',
              }}>
                <span className="mono" style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: 'var(--orange-2)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}>Marco {String(i + 1).padStart(2, '0')}</span>
                <h3 className="h3" style={{ fontSize: 18, lineHeight: 1.2 }}>{m.titulo}</h3>
                <p style={{ fontSize: 14.5, color: 'var(--ink-2)', lineHeight: 1.6, margin: 0 }}>{m.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PARAMBULATÓRIO vs TENEPES ===== */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow"><span className="dot"></span>PARAMBULATÓRIO &nbsp;·&nbsp; A DIFERENCIAÇÃO</div>
              <h2 className="h1" style={{ marginTop: 16, maxWidth: 760 }}>
                TENEPES e Parambulatório: <br />
                <strong style={{ color: 'var(--orange)', fontWeight: 700 }}>duas dimensões da assistência</strong>.
              </h2>
              <p className="lede" style={{ marginTop: 12, maxWidth: 680 }}>
                Entender essa diferença é fundamental para quem entra na Imersão. O parambulatório exige
                maior domínio do psicossoma e profundidade no esclarecimento (Tares).
              </p>
            </div>
          </div>
          <div className="grid g2 gap-24" style={{ marginTop: 40 }}>
            {diferencas.map((d, i) => (
              <div key={i} style={{
                padding: '32px 28px',
                borderRadius: 'var(--r-lg)',
                background: i === 0 ? 'var(--paper)' : 'linear-gradient(160deg, var(--teal-2), var(--teal-3))',
                color: i === 0 ? 'var(--ink)' : 'var(--white)',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                minHeight: 200,
              }}>
                <span className="specimen" style={{ color: i === 0 ? 'var(--ink-3)' : 'var(--orange)' }}>
                  {i === 0 ? 'Em vigília' : 'Durante o sono'}
                </span>
                <h3 className="h2" style={{ margin: 0, fontSize: 28, color: i === 0 ? 'var(--ink)' : 'var(--white)' }}>
                  {d.titulo}
                </h3>
                <p style={{ fontSize: 15.5, lineHeight: 1.6, margin: 0, color: i === 0 ? 'var(--ink-2)' : 'rgba(255,255,255,0.85)' }}>
                  {d.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="cta-band" style={{ background: 'linear-gradient(135deg, var(--orange), var(--orange-2))' }}>
        <div className="wrap cta-band__inner" style={{ textAlign: 'center', flexDirection: 'column', gap: 20 }}>
          <h2 style={{ color: 'var(--ink)', fontSize: 'clamp(28px, 4vw, 44px)', fontFamily: 'var(--display)', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.05, margin: 0 }}>
            O desperto antecipa. <br />
            <span style={{ fontWeight: 400 }}>Garanta sua vaga na Imersão.</span>
          </h2>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="https://store.conscienciologia.org.br/sku/311521/" className="btn btn-primary" style={{ background: 'var(--ink)', color: 'var(--white)' }}>
              Participar Presencial <span className="arrow">→</span>
            </a>
            <a href="https://store.conscienciologia.org.br/sku/311520/" className="btn btn-ghost" style={{ background: 'var(--white)', borderColor: 'var(--ink)', color: 'var(--ink)' }}>
              Participar Online <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
