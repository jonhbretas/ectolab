import React from 'react';
import ReactDOM from 'react-dom/client';

// Banco de Dados Dinâmico de todas as Cidades da DIP
const DIP_LOCATIONS = {
  alemanha: {
    name: "Alemanha", title: "DIP na Alemanha", vagas: "Poucas vagas",
    dates: ["17/05/2026"], time: "12h00 – 17h00",
    local: "Ibis Hotel Frankfurt Messe West – Breitenbachstrabe 7, 60487 Frankfurt com o U-Bahn U6 e U7 até “Industriehof”.",
    price: "€ 25,00", contact: "(+49) 176 6111-3114"
  },
  portugal: {
    name: "Portugal", title: "DIP em Portugal", vagas: "Poucas vagas",
    places: [
      { subtitle: "Porto – Sta M da Feira", dates: ["14/03/2026"], time: "12h00 às 17h00", price: "€ 25,00" },
      { subtitle: "Madalena (Açores) – Ilha do Pico", dates: ["18/04/2026"], time: "12h00 às 17h00", local: "Auditório Municipal da Madalena – Rua 8 de Março 9950-332, Madalena, Ilha do Pico – Açores.", contact: "+351 919452388", price: "€ 25,00" }
    ]
  },
  brasilia: {
    name: "Brasília (DF)", title: "DIP em Brasília (DF)", vagas: "Poucas vagas",
    dates: ["26/06/2026", "21/08/2026", "13/11/2026"], time: "19h00 – 22h00",
    local: "Ed. Embassy Tower, Sala 525 SRTVS, Bloco K – Asa Sul, Brasília/DF",
    price: "R$ 90,00", contact: "(61) 98282-0111", link: "www.cursosonline.iipc.org"
  },
  curitiba: {
    name: "Curitiba (PR)", title: "DIP em Curitiba (PR)", vagas: "Somente 40 vagas",
    dates: ["27/02/2026", "27/03/2026", "24/04/2026", "29/05/2026", "26/06/2026", "31/07/2026", "28/08/2026", "18/09/2026", "30/10/2026", "27/11/2026"], time: "18h30 – 22h00",
    local: "Ed. Gallery, Rua Visconde de Nácar, 1505, Piso L – Centro, Curitiba / PR",
    price: "R$ 95,00", link: "store.conscienciologia.org.br"
  },
  floripa: {
    name: "Florianópolis (SC)", title: "DIP em Florianópolis (SC)", vagas: "Poucas vagas",
    dates: ["27/02/2026", "27/03/2026", "24/04/2026", "29/05/2026", "26/06/2026", "31/07/2026", "28/08/2026", "25/09/2026", "30/10/2026", "27/11/2026", "18/12/2026"], time: "19h00 às 22h00",
    local: "Sala da Orthocognitivus – Av. Rio Branco, nº 380, Sala 602 – Ed. Barra Sul, Centro – Florianópolis",
    price: "R$ 90,00", link: "orthocognitivus.org/loja"
  },
  foz: {
    name: "Foz do Iguaçu (PR)", title: "DIP em Foz do Iguaçu (PR)", vagas: "",
    dates: ["Sexta-feiras"], time: "19h00 – 22h00",
    local: "CEAC – Polo Discernimentum. Av. Felipe Wandscheer, 5511 – Bairro Cognópolis – Foz do Iguaçu, PR",
    price: "R$ 40,00 (avulso)",
    recomenda: [
      "Aos participantes de primeira vez, indicamos a chegada com pelo menos 30 minutos de antecedência para orientações específicas.",
      "Prepare-se para ficar 2 horas em ambiente fechado e na penumbra durante os experimentos.",
      "Utilize roupas confortáveis, preferencialmente claras. Traga agasalho/manta, devido à baixa temperatura.",
      "Evite uso de produtos perfumados e sapatos de salto alto.",
      "A equipe disponibilizará folhas; ou traga seu caderno pessoal.",
      "Não frequente se apresentar sintomas de doença infecto-contagiosa."
    ]
  },
  rj: {
    name: "Rio de Janeiro (RJ)", title: "DIP no Rio de Janeiro (RJ)", vagas: "Poucas vagas",
    dates: ["06/03/2026", "10/04/2026", "08/05/2026", "12/06/2026", "03/07/2026", "07/08/2026", "11/09/2026", "06/11/2026"], time: "19h00 – 22h00",
    local: "Av. Nossa Sra. de Copacabana, 919 – Sala 201 – Copacabana – RJ",
    price: "R$ 90,00", contact: "(22) 9 9224-7211", link: "store.conscienciologia.org.br"
  },
  sp: {
    name: "São Paulo (SP)", title: "DIP em São Paulo", vagas: "Somente 35 vagas",
    dates: ["16/01/2026", "06/02/2026", "06/03/2026", "10/04/2026", "08/05/2026", "12/06/2026", "03/07/2026", "14/08/2026", "11/09/2026", "02/10/2026", "13/11/2026", "04/12/2026"], time: "19h15 – 22h00 (Chegar até 19:10)",
    local: "Policons São Paulo – Rua Estela, 515 – Bloco F – CJ161 – Bairro Paraíso. São Paulo – SP",
    price: "R$ 90,00", contact: "+55 (11) 99777-9616", email: "policonssp@policonssp.org"
  }
};

function App() {
  // Define a cidade via parâmetro da URL (ex: ?loc=sp)
  const urlParams = new URLSearchParams(window.location.search);
  const locCode = urlParams.get('loc') || 'foz';
  const data = DIP_LOCATIONS[locCode] || DIP_LOCATIONS['foz'];

  return (
    <>
      <section className="section bg-white" style={{ paddingTop: '80px', paddingBottom: '64px' }}>
        <div className="wrap">
          <div className="breadcrumb" style={{ marginBottom: 24, fontSize: 13, color: 'var(--ink-3)' }}>
            <a href="/pages/atividades.html" style={{ textDecoration: 'underline' }}>Atividades</a> / DIP {data.name}
          </div>
          <div className="grid g2 gap-48">
            <div>
              <div className="eyebrow"><span className="dot"></span>ATIVIDADE PRESENCIAL</div>
              <h1 className="h1" style={{ marginTop: 16 }}>{data.title}</h1>
              {data.vagas && <div className="tag soft" style={{ marginTop: 16 }}>{data.vagas}</div>}
              
              {data.recomenda && (
                <div className="prose" style={{ marginTop: 40, marginLeft: 0 }}>
                  <h3 style={{ color: 'var(--orange-2)' }}>⚠ Recomendações</h3>
                  <ul>{data.recomenda.map((r, i) => <li key={i}>{r}</li>)}</ul>
                </div>
              )}

              <div className="prose" style={{ marginTop: 40, marginLeft: 0 }}>
                <h3>O que a DIP pretende?</h3>
                <p>A paracirurgia é uma intervenção energética de caráter paraterapêutico que visa realizar desbloqueios psicossomáticos e reestabelecer o bem-estar e a saúde das consciências intrafísicas e extrafísicas assistidas tendo por base o ectoplasma.</p>
                <p>Aqueles que desejam aprimorar seu parapsiquismo participando da DIP presencialmente como doadores de energia e/ou acopladores podem se inscrever em nossa loja.</p>

                <h3>Pré-requisito</h3>
                <p>Estar familiarizado com a técnica de mobilização das energias e instalação do estado vibracional.</p>
              </div>
            </div>
            
            <div>
              <div className="glass-teal" style={{ padding: 32, position: 'sticky', top: 100, borderRadius: 'var(--r-lg)' }}>
                <h3 className="h3" style={{ color: 'var(--white)', marginBottom: 24 }}>Informações Importantes</h3>
                
                {data.places ? (
                  <div className="col gap-24">
                    {data.places.map((place, i) => (
                      <div key={i} style={{ borderBottom: i !== data.places.length - 1 ? '1px dashed rgba(255,255,255,0.2)' : 'none', paddingBottom: 16 }}>
                        <h4 className="specimen" style={{ color: 'var(--gold)', marginBottom: 12 }}>{place.subtitle}</h4>
                        <div className="col gap-12">
                          {place.dates && <InfoRow label="Próximas DIPs" val={<DateBoxes dates={place.dates} />} />}
                          {place.time && <InfoRow label="Horário" val={place.time} />}
                          {place.local && <InfoRow label="Local" val={place.local} />}
                          {place.contact && <InfoRow label="Contato" val={<ContactLink phone={place.contact} city={data.name} />} />}
                          {place.price && <InfoRow label="Valor" val={place.price} />}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="col gap-16">
                    {data.dates && <InfoRow label="Datas" val={<DateBoxes dates={data.dates} />} />}
                    {data.time && <InfoRow label="Horário" val={data.time} />}
                    {data.local && <InfoRow label="Local" val={data.local} />}
                    {data.contact && <InfoRow label="Contato" val={<ContactLink phone={data.contact} city={data.name} />} />}
                    {data.email && <InfoRow label="E-mail" val={data.email} />}
                    {data.price && <InfoRow label="Valor" val={data.price} />}
                    <InfoRow label="Modalidade" val="Presencial" />
                  </div>
                )}
                
                <a href={data.link ? `https://${data.link}` : "https://store.conscienciologia.org.br/product-brand/ectolab/"} target="_blank" className="btn btn-gold" style={{ marginTop: 32, width: '100%', justifyContent: 'center' }}>
                  Quero fazer minha inscrição <span className="arrow">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm" style={{ background: 'var(--paper-2)' }}>
        <div className="wrap">
          <div className="grid g2 gap-48 center">
            <div>
              <div className="eyebrow"><span className="dot"></span>ATENÇÃO</div>
              <p className="lede" style={{ marginTop: 16 }}>
                O antendimento paracirurgico é <strong>GRATUITO e realizado à distância</strong>, sendo somente cobrada a inscrição para aqueles que desejam investir assistencialmente no desenvolvimento parapsíquico e realizar a tarefa de doadores presencialmente no local.
              </p>
            </div>
            <blockquote style={{ margin: '0', padding: '32px', background: 'var(--white)', borderLeft: '4px solid var(--orange)', borderRadius: '0 var(--r-md) var(--r-md) 0' }}>
              <p className="serif" style={{ fontSize: '18px', color: 'var(--ink)', marginBottom: '12px', lineHeight: '1.4' }}>
                "A predisposição íntima a interassistência paracirurgica denota maturidade afetiva, magnanimidade e superação dos traços fracos da consciência minipeça do maximecanismo interassistêncial."
              </p>
              <cite className="specimen" style={{ fontStyle: 'normal', color: 'var(--ink-3)' }}>— Verbete Paracirurgia</cite>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="eyebrow"><span className="dot"></span>DEPOIMENTOS & VÍDEO EXPLICATIVO</div>
          <div className="grid g3 gap-24" style={{ marginTop: 24, marginBottom: 80 }}>
            {[
              { a: "Almir Santos", t: "Parabéns pessoal!" },
              { a: "Eulalia Souza", t: "Obrigada, professora pelos esclarecimentos. Excelente live." },
              { a: "Monica Dias de Oliveira", t: "Muito obrigada pelos esclarecimentos!!" }
            ].map((d, i) => (
              <div key={i} className="card" style={{ padding: 24 }}>
                <p style={{ fontSize: 16, color: 'var(--ink-2)', fontStyle: 'italic', marginBottom: 16 }}>"{d.t}"</p>
                <span className="specimen">{d.a}</span>
              </div>
            ))}
          </div>
          <div className="card" style={{ padding: 8, background: 'var(--paper-2)', maxWidth: 800, margin: '0 auto' }}>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: 'var(--r-md)' }}>
              <iframe src="https://www.youtube.com/embed/ooaHsmZIows" title="Vídeo DIP" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }} allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function InfoRow({ label, val }) {
  return (
    <div className="flex between" style={{ borderBottom: '1px dashed rgba(255,255,255,0.2)', paddingBottom: 14, alignItems: 'center', gap: 16 }}>
      <span style={{ fontFamily: 'var(--mono)', fontSize: '13px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--gold)', flex: 'none' }}>{label}</span>
      <span style={{ fontSize: 14.5, color: 'var(--white)', textAlign: 'right', wordBreak: 'break-word' }}>{val}</span>
    </div>
  );
}

function DateBoxes({ dates }) {
  return (
    <div className="flex" style={{ gap: '6px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
      {dates.map((d, i) => (
        <span key={i} className="mono" style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 'var(--r-sm)', padding: '4px 8px', fontSize: '12.5px', color: 'var(--white)' }}>
          {d}
        </span>
      ))}
    </div>
  );
}

function ContactLink({ phone, city }) {
  const cleanPhone = phone.replace(/\D/g, ''); // Remove tudo que não for número
  const msg = encodeURIComponent(`Olá, gostaria de saber mais sobre a DIP em ${city}.`);
  return (
    <a href={`https://wa.me/${cleanPhone}?text=${msg}`} target="_blank" rel="noreferrer" style={{ textDecoration: 'underline' }}>
      {phone} ↗
    </a>
  );
}

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
