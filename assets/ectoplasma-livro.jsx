import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BOOK, FAQ_LIVRO, FAQ_TEMA } from './ectoplasma-data.js';

const SPECS = [
  ['Título', `${BOOK.title}: ${BOOK.subtitle}`],
  ['Organizadores', BOOK.authors.join(' & ')],
  ['Editora', BOOK.publisher],
  ['Ano de publicação', BOOK.year],
  ['Edição', BOOK.edition],
  ['Idioma', BOOK.language],
  ['Páginas', String(BOOK.pages)],
  ['Encadernação', BOOK.binding],
  ['Dimensões', BOOK.dimensions],
  ['Peso', BOOK.weight],
  ['ISBN-13', BOOK.isbn13],
  ['ISBN-10', BOOK.isbn10],
  ['Código de barras', BOOK.barcode],
];

const PT_FEATURES = [
  '207 páginas, brochura, 21 × 16 cm',
  'Edição impressa pela Editora Ectolab',
  'Envio para todo o Brasil pela Shopcons / Epígrafe',
  `ISBN ${BOOK.isbn13}`,
];

const EN_FEATURES = [
  'Versão digital em inglês para leitura global',
  'Leia em Kindle, tablet, celular ou desktop',
  'Entrega imediata após a compra',
  'Ideal para pesquisadores fora do Brasil',
];

/* ---------- Cartão de compra ---------- */
function BuyCard({ badge, title, priceMain, priceSub, features, cta, dark }) {
  return (
    <div
      className="card"
      style={{
        padding: 0,
        borderRadius: 'var(--r-lg)',
        boxShadow: '0 22px 60px -34px rgba(8,34,43,0.4)',
      }}
    >
      <div style={{ padding: 'clamp(24px, 3vw, 34px)', display: 'flex', flexDirection: 'column', gap: 22, height: '100%' }}>
        {/* Cabeçalho */}
        <div className="flex between" style={{ gap: 16, alignItems: 'flex-start' }}>
          <h3 className="h4" style={{ fontSize: 19 }}>{title}</h3>
          <span
            className="mono"
            style={{
              fontSize: 10.5,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--ink-3)',
              whiteSpace: 'nowrap',
              paddingTop: 4,
            }}
          >
            {badge}
          </span>
        </div>

        <div style={{ height: 1, background: 'var(--line)' }} />

        {/* Preço / nome */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
          <span style={{ fontFamily: 'var(--display)', fontWeight: 600, fontSize: 'clamp(30px, 4vw, 40px)', color: 'var(--teal)', letterSpacing: '-0.02em' }}>
            {priceMain}
          </span>
          {priceSub && (
            <span className="mono" style={{ fontSize: 13, color: 'var(--ink-3)' }}>{priceSub}</span>
          )}
        </div>

        {/* Diferenciais */}
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
          {features.map((f) => (
            <li key={f} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 14.5, color: 'var(--ink-2)', lineHeight: 1.5 }}>
              <span style={{ color: 'var(--orange)', fontSize: 11, lineHeight: 1.6, flex: 'none' }}>◆</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={cta.href}
          target="_blank"
          rel="noreferrer"
          className={dark ? 'btn btn-primary' : 'btn btn-orange'}
          style={{ marginTop: 'auto', justifyContent: 'center', width: '100%' }}
        >
          {cta.label} <span className="arrow">→</span>
        </a>
      </div>
    </div>
  );
}

function PurchaseSection() {
  return (
    <section id="comprar" className="section-sm" style={{ background: 'var(--paper)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div className="wrap">
        {/* Cabeçalho da seção */}
        <div className="grid g2 gap-48" style={{ alignItems: 'end', marginBottom: 44 }}>
          <div>
            <div className="eyebrow"><span className="dot"></span>ONDE COMPRAR</div>
            <h2 className="h2" style={{ marginTop: 18 }}>Duas edições,<br />dois idiomas.</h2>
          </div>
          <p style={{ fontSize: 16, color: 'var(--ink-2)', lineHeight: 1.7, margin: 0 }}>
            A edição física em português é vendida pela <strong>{BOOK.vendorPt}</strong>. A versão em
            inglês está disponível como <strong>e-book na Amazon</strong>, para leitores do mundo todo.
          </p>
        </div>

        {/* Cartões */}
        <div className="grid g2 gap-24" style={{ alignItems: 'stretch' }}>
          <BuyCard
            dark
            title="Edição física — Português"
            badge="PT-BR · Brochura"
            priceMain={BOOK.priceBRL}
            priceSub="à vista"
            features={PT_FEATURES}
            cta={{ label: 'Comprar na Shopcons', href: BOOK.shopcons }}
          />
          <BuyCard
            title="E-book — English"
            badge="EN · Kindle / E-book"
            priceMain="Amazon"
            priceSub="e-book"
            features={EN_FEATURES}
            cta={{ label: 'Comprar na Amazon', href: BOOK.amazon }}
          />
        </div>

        {!BOOK.amazonAvailable && (
          <p className="mono" style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 22, marginBottom: 0 }}>
            ◆ O e-book em inglês está em processo de publicação na Amazon.
          </p>
        )}
      </div>
    </section>
  );
}

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div
      className="card"
      style={{ cursor: 'pointer', padding: 0, borderColor: isOpen ? 'var(--teal)' : 'var(--line)' }}
      onClick={onToggle}
    >
      <div className="flex between center" style={{ padding: '18px 22px', gap: 16 }}>
        <h3 className="h4" style={{ color: isOpen ? 'var(--teal)' : 'var(--ink)', fontSize: 16 }}>{item.q}</h3>
        <span style={{ color: 'var(--teal)', fontSize: 22, lineHeight: 1, flex: 'none', transform: isOpen ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
      </div>
      {isOpen && (
        <p style={{ padding: '0 22px 20px', fontSize: 15.5, color: 'var(--ink-2)', lineHeight: 1.65, margin: 0 }}>{item.a}</p>
      )}
    </div>
  );
}

function FaqColumn({ title, faqs, openKey, setOpenKey, group }) {
  return (
    <div>
      <h3 className="specimen" style={{ fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 18 }}>{title}</h3>
      <div className="col gap-12">
        {faqs.map((item, i) => {
          const key = `${group}-${i}`;
          return <FaqItem key={key} item={item} isOpen={openKey === key} onToggle={() => setOpenKey(openKey === key ? null : key)} />;
        })}
      </div>
    </div>
  );
}

function App() {
  const [openKey, setOpenKey] = useState('livro-0');

  return (
    <>
      {/* Hero do livro */}
      <section className="section bg-white" style={{ background: 'var(--white)', paddingTop: '80px', paddingBottom: '64px' }}>
        <div className="wrap">
          <div className="breadcrumb" style={{ marginBottom: 24, fontSize: 13, color: 'var(--ink-3)' }}>
            <a href="/pages/materiais.html" style={{ textDecoration: 'underline' }}>Materiais</a> / Livro Ectoplasma
          </div>
          <div className="grid g2 gap-48" style={{ alignItems: 'center' }}>
            {/* Capas do livro sobre painel decorativo */}
            <div
              style={{
                position: 'relative',
                borderRadius: 'var(--r-lg)',
                padding: 'clamp(28px, 4vw, 48px)',
                background: 'linear-gradient(150deg, var(--paper) 0%, var(--paper-2) 100%)',
                border: '1px solid var(--line)',
                overflow: 'hidden',
              }}
            >
              <span aria-hidden="true" style={{ position: 'absolute', top: -60, right: -60, width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(240,160,48,0.16), transparent 70%)' }} />
              <div className="flex center" style={{ gap: 'clamp(18px, 3vw, 32px)', flexWrap: 'wrap', justifyContent: 'center', position: 'relative' }}>
                <figure style={{ margin: 0, textAlign: 'center' }}>
                  <img
                    src={BOOK.coverPt}
                    alt="Capa do livro Ectoplasma: Panorama Contemporâneo das Pesquisas sobre Ectoplasmia, da Ectolab"
                    width="320" height="453" loading="eager" fetchpriority="high" decoding="async"
                    style={{ width: 'min(260px, 62vw)', height: 'auto', borderRadius: 'var(--r-sm)', boxShadow: '0 30px 60px -18px rgba(8,34,43,0.55)' }}
                  />
                  <figcaption className="mono" style={{ fontSize: 11, color: 'var(--ink-3)', marginTop: 14, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Edição em português</figcaption>
                </figure>
                <figure style={{ margin: 0, textAlign: 'center' }}>
                  <img
                    src={BOOK.coverEn}
                    alt="Cover of the book Ectoplasm: A Contemporary Panorama of the Research on Ectoplasmy, by Ectolab"
                    width="320" height="453" loading="lazy" decoding="async"
                    onError={(e) => { e.currentTarget.closest('figure').style.display = 'none'; }}
                    style={{ width: 'min(200px, 50vw)', height: 'auto', borderRadius: 'var(--r-sm)', boxShadow: '0 22px 46px -18px rgba(8,34,43,0.4)' }}
                  />
                  <figcaption className="mono" style={{ fontSize: 11, color: 'var(--ink-3)', marginTop: 14, letterSpacing: '0.06em', textTransform: 'uppercase' }}>English e-book edition</figcaption>
                </figure>
              </div>
            </div>

            {/* Texto + CTAs */}
            <div>
              <div className="eyebrow"><span className="dot"></span>GESCON PRINCIPAL DA ECTOLAB</div>
              <h1 className="h-display" style={{ marginTop: 20 }}>
                <strong style={{ color: 'var(--teal)', fontWeight: 700 }}>Ectoplasma</strong>
              </h1>
              <p className="lede" style={{ marginTop: 12, fontWeight: 500 }}>
                {BOOK.subtitle}
              </p>
              <p className="mono" style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 10 }}>
                Org. {BOOK.authors.join(' & ')}
              </p>
              <p style={{ marginTop: 24, fontSize: 16.5, color: 'var(--ink-2)', lineHeight: 1.7 }}>
                {BOOK.synopsis}
              </p>

              {/* CTAs de compra */}
              <div className="flex" style={{ gap: 14, marginTop: 32, flexWrap: 'wrap' }}>
                <a href="#comprar" className="btn btn-orange">
                  Onde comprar <span className="arrow">↓</span>
                </a>
                <a href={BOOK.shopcons} target="_blank" rel="noreferrer" className="btn btn-ghost">
                  Comprar versão física (PT) <span className="arrow">↗</span>
                </a>
              </div>
              <p className="mono" style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 14 }}>
                Versão física em português pela {BOOK.vendorPt} · E-book em inglês pela Amazon
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Onde comprar — duas edições */}
      <PurchaseSection />

      {/* Ficha técnica */}
      <section className="section-sm bg-white" style={{ background: 'var(--white)' }}>
        <div className="wrap">
          <div className="glass-teal" style={{ padding: 'clamp(24px, 3vw, 36px)', borderRadius: 'var(--r-lg)' }}>
            <h2 className="h4" style={{ color: 'var(--white)', marginBottom: 24 }}>Ficha técnica</h2>
            <div className="grid g2 gap-24">
              {SPECS.map(([label, val]) => (
                <div key={label} className="flex between" style={{ borderBottom: '1px dashed rgba(255,255,255,0.2)', paddingBottom: 12, gap: 16, alignItems: 'baseline' }}>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 12, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--gold)', flex: 'none' }}>{label}</span>
                  <span style={{ fontSize: 14, color: 'var(--white)', textAlign: 'right', wordBreak: 'break-word' }}>{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo rico para ranqueamento */}
      <section className="section-sm" style={{ background: 'var(--paper-2)' }}>
        <div className="wrap">
          <div className="prose" style={{ marginLeft: 0 }}>
            <h2>Um livro sobre ectoplasma e ectoplasmia</h2>
            <p>
              <strong>Ectoplasma</strong> é a obra de referência da Ectolab sobre <strong>ectoplasmia</strong> — o estudo
              experimental do ectoplasma e dos chamados <strong>efeitos físicos</strong> do parapsiquismo. Procurando um
              <em> livro sobre ectoplasma</em>, um <em>livro sobre ectoplasmia</em> ou um <em>livro sobre efeitos físicos</em>?
              Esta é uma fonte contemporânea, escrita a partir da pesquisa direta do fenômeno.
            </p>
            <h3>Da Metapsíquica à autopesquisa participativa</h3>
            <p>
              Desde os estudos da Metapsíquica, o ectoplasma foi tratado como objeto de dúvida do pesquisador-espectador
              externo. O livro propõe uma mudança de paradigma: quando a ectoplasmia é vivenciada pelo lado de dentro,
              na condição de epicentro ou produtor do fenômeno, o ectoplasma se torna matéria objetiva, perceptível e concreta.
            </p>
            <h3>Para quem é este livro</h3>
            <p>
              Para pesquisadores, estudantes da Conscienciologia, autopesquisadores e qualquer pessoa interessada em
              compreender cientificamente o ectoplasma, a ectoplasmia, a paracirurgia e os fenômenos ectoplásmicos
              com método, registro técnico e o Princípio da Descrença.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ duplo */}
      <section className="section">
        <div className="wrap">
          <div className="eyebrow"><span className="dot"></span>PERGUNTAS FREQUENTES</div>
          <h2 className="h2" style={{ marginTop: 16, marginBottom: 40 }}>Tire suas dúvidas sobre o livro e o tema</h2>
          <div className="grid g2 gap-48" style={{ alignItems: 'start' }}>
            <FaqColumn title="Sobre o livro" faqs={FAQ_LIVRO} group="livro" openKey={openKey} setOpenKey={setOpenKey} />
            <FaqColumn title="Sobre ectoplasma & ectoplasmia" faqs={FAQ_TEMA} group="tema" openKey={openKey} setOpenKey={setOpenKey} />
          </div>
        </div>
      </section>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
