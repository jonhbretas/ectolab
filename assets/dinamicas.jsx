import React from 'react';
import ReactDOM from 'react-dom/client';

// Localidades agrupadas por país. O `loc` casa com o banco de dados de
// dinamica.jsx (página de detalhe de cada cidade).
const COUNTRIES = [
  {
    flag: '🇧🇷',
    name: 'Brasil',
    cities: [
      { loc: 'foz', name: 'Foz do Iguaçu', tag: 'Sede', tagClass: 'tag gold', desc: 'Sede da Ectolab, no Polo Discernimentum. DIPs semanais às sextas-feiras.' },
      { loc: 'sp', name: 'São Paulo', tag: 'SP', tagClass: 'tag soft', desc: 'Encontros mensais no Policons São Paulo, bairro Paraíso. Vagas limitadas.' },
      { loc: 'rj', name: 'Rio de Janeiro', tag: 'RJ', tagClass: 'tag soft', desc: 'Dinâmicas mensais em Copacabana, com poucas vagas por turma.' },
      { loc: 'curitiba', name: 'Curitiba', tag: 'PR', tagClass: 'tag soft', desc: 'Encontros mensais no Centro, com somente 40 vagas por edição.' },
      { loc: 'floripa', name: 'Florianópolis', tag: 'SC', tagClass: 'tag soft', desc: 'Dinâmicas mensais na sala da Orthocognitivus, no Centro.' },
      { loc: 'brasilia', name: 'Brasília', tag: 'DF', tagClass: 'tag soft', desc: 'Edições na Asa Sul, no Embassy Tower, em datas selecionadas.' },
    ],
  },
  {
    flag: '🇵🇹',
    name: 'Portugal',
    cities: [
      { loc: 'portugal', name: 'Portugal', tag: 'PT', tagClass: 'tag ghost', desc: 'Edições no Porto (Sta. M. da Feira) e em Madalena, Ilha do Pico (Açores).' },
    ],
  },
  {
    flag: '🇩🇪',
    name: 'Alemanha',
    cities: [
      { loc: 'alemanha', name: 'Frankfurt', tag: 'DE', tagClass: 'tag ghost', desc: 'Dinâmica no Ibis Frankfurt Messe West. Poucas vagas por edição.' },
    ],
  },
];

const TOTAL_CIDADES = COUNTRIES.reduce((acc, c) => acc + c.cities.length, 0);

function LocationCard({ city }) {
  return (
    <a
      href={`/pages/dinamica.html?loc=${city.loc}`}
      className="card"
      style={{ padding: 24, textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
    >
      <div style={{ marginBottom: 12, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
        <span className={city.tagClass}>{city.tag}</span>
      </div>
      <h3 className="h4" style={{ color: 'var(--teal)' }}>{city.name}</h3>
      <p style={{ fontSize: 14, color: 'var(--ink-2)', marginTop: 10, marginBottom: 20, flex: 1 }}>{city.desc}</p>
      <span className="link-arrow" style={{ alignSelf: 'flex-start' }}>Ver datas e inscrição →</span>
    </a>
  );
}

function App() {
  return (
    <>
      {/* Hero + descrição breve */}
      <section className="section" style={{ paddingTop: '80px', paddingBottom: '48px' }}>
        <div className="wrap">
          <div className="eyebrow"><span className="dot"></span>DINÂMICAS INTERASSISTENCIAIS — DIP</div>
          <h1 className="h-display" style={{ marginTop: 24 }}>
            Dinâmicas <br />
            <strong style={{ color: 'var(--teal)', fontWeight: 700 }}>(DIP)</strong>.
          </h1>
          <p className="lede" style={{ maxWidth: 760, marginTop: 28 }}>
            A DIP — Dinâmica Interassistencial Paracirúrgica — é um experimento presencial de mobilização
            de energias com base no ectoplasma, voltado ao desenvolvimento parapsíquico e à interassistência.
            Hoje a DIP acontece em <strong>{TOTAL_CIDADES} localidades</strong>, em <strong>{COUNTRIES.length} países</strong>.
            Escolha a cidade mais próxima para ver datas, horários e inscrição.
          </p>
        </div>
      </section>

      {/* Cards por país */}
      {COUNTRIES.map((country, i) => (
        <section
          key={country.name}
          className="section-sm"
          style={{ background: i % 2 !== 0 ? 'var(--paper-2)' : 'var(--white)' }}
        >
          <div className="wrap">
            <h2 className="h2" style={{ marginBottom: 32, display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ fontSize: '0.9em' }}>{country.flag}</span> {country.name}
            </h2>
            <div className="grid g3 gap-24">
              {country.cities.map(city => <LocationCard key={city.loc} city={city} />)}
            </div>
          </div>
        </section>
      ))}

      {/* CTA — levar a DIP para a sua cidade */}
      <section className="section">
        <div className="wrap">
          <div className="glass-teal" style={{ padding: '48px 40px', borderRadius: 'var(--r-lg)', textAlign: 'center' }}>
            <div className="eyebrow" style={{ justifyContent: 'center', color: 'var(--gold)' }}>
              <span className="dot"></span>EXPANDA A REDE
            </div>
            <h2 className="h2" style={{ color: 'var(--white)', marginTop: 16, maxWidth: 640, marginInline: 'auto' }}>
              Quer levar a DIP para a sua cidade?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 17, marginTop: 16, maxWidth: 620, marginInline: 'auto', lineHeight: 1.6 }}>
              Se você tem interesse em sediar uma Dinâmica Interassistencial Paracirúrgica na sua localidade,
              fale com a equipe da Ectolab. Vamos orientar sobre estrutura, equipe e os próximos passos.
            </p>
            <div className="flex center" style={{ gap: 16, marginTop: 32, flexWrap: 'wrap', justifyContent: 'center' }}>
              <a
                href={`https://wa.me/554599999999?text=${encodeURIComponent('Olá, tenho interesse em levar a DIP para a minha cidade.')}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-gold"
              >
                Quero levar para minha cidade <span className="arrow">→</span>
              </a>
              <a
                href="/pages/contato.html"
                className="btn"
                style={{ background: 'transparent', color: 'var(--white)', border: '1px solid rgba(255,255,255,0.5)' }}
              >
                Falar com a Ectolab
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
