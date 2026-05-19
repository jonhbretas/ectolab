/* global React, ReactDOM */
const { useState, useEffect } = React;

/* ============================================================
   HERO VARIATIONS
   ============================================================ */

function HeroConservadora() {
  return (
    <section className="hero hero--conservadora">
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-left">
            <div className="eyebrow">
              <span className="dot"></span>
              FUNDADA EM 2003 &nbsp;·&nbsp; FOZ DO IGUAÇU, BR
            </div>
            <h1 className="h-display" style={{ marginTop: 24 }}>
              Pesquisa laboratorial<br />
              em <em style={{ color: "var(--blue)", fontWeight: 700 }}>ectoplasmia</em>{" "}
              e <em style={{ color: "var(--blue)", fontWeight: 700 }}>paracirurgia</em>.
            </h1>
            <p className="lede" style={{ maxWidth: 620, marginTop: 28 }}>
              A Ectolab investiga, com método e rigor, os fenômenos da consciência além do corpo
              físico — em especial o <strong>ectoplasma</strong>, suas aplicações terapêuticas
              e as paracirurgias assistenciais.
            </p>
            <div className="flex gap-12" style={{ marginTop: 36, flexWrap: "wrap" }}>
              <a href="pages/trilha.html" className="btn btn-primary">
                Comece pela Trilha do Saber <span className="arrow">→</span>
              </a>
              <a href="pages/conscienciologia.html" className="btn btn-ghost">
                O que é Conscienciologia?
              </a>
            </div>
          </div>
          <aside className="hero-card">
            <div className="hero-card__top">
              <span className="specimen">FICHA Nº 01 / SÉRIE INSTITUCIONAL</span>
              <span className="specimen">2026</span>
            </div>
            <div className="hero-card__title">
              Resumo&nbsp;<span className="aster">*</span>&nbsp;ECTOLAB
            </div>
            <dl className="hero-card__list">
              <div><dt>Natureza</dt><dd>Instituto de pesquisa, sem fins lucrativos</dd></div>
              <div><dt>Campo</dt><dd>Ectoplasmia &middot; Paracirurgia &middot; Assistencialidade</dd></div>
              <div><dt>Base científica</dt><dd>Conscienciologia (W. Vieira, 1981)</dd></div>
              <div><dt>Sede</dt><dd>Foz do Iguaçu, Paraná &middot; BR</dd></div>
              <div><dt>Pesquisadores</dt><dd>312 voluntários ativos</dd></div>
              <div><dt>Cursos ativos</dt><dd>5 programas regulares</dd></div>
            </dl>
            <a href="pages/quem-somos.html" className="link-arrow" style={{ marginTop: 18, display: "inline-flex" }}>
              Ler ficha completa →
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}

function HeroEquilibrada() {
  return (
    <section className="hero hero--equilibrada">
      <div className="wrap">
        <div className="eyebrow center-eye">
          <span className="dot"></span>
          ECTOLAB &nbsp;·&nbsp; ASSOC. INT. DE PESQUISA &nbsp;·&nbsp; EST. 2003
        </div>
        <h1 className="h-display center-title">
          O laboratório onde a<br />
          consciência <em style={{ fontWeight: 700, color: "var(--blue)" }}>se observa</em><br />
          a si mesma.
        </h1>
        <p className="lede center-lede">
          Investigamos o ectoplasma, a paracirurgia e os campos paraperceptivos
          com a paciência da ciência e a abertura da experiência direta.
        </p>
        <div className="flex gap-12 center-cta">
          <a href="pages/trilha.html" className="btn btn-gold">
            Começar a Trilha do Saber <span className="arrow">→</span>
          </a>
          <a href="#manifesto" className="btn-text">
            Ler o manifesto
          </a>
        </div>

        <div className="quadrant">
          <div className="quadrant__cell">
            <span className="specimen">I.</span>
            <h3 className="h3">Pesquisar</h3>
            <p>Reuniões laboratoriais semanais documentadas e revisadas por pares conscienciológicos.</p>
          </div>
          <div className="quadrant__cell">
            <span className="specimen">II.</span>
            <h3 className="h3">Ensinar</h3>
            <p>5 programas regulares — do contato inicial à formação de paracirurgião pesquisador.</p>
          </div>
          <div className="quadrant__cell">
            <span className="specimen">III.</span>
            <h3 className="h3">Assistir</h3>
            <p>Campos paracirúrgicos abertos ao público, gratuitos, semanais.</p>
          </div>
          <div className="quadrant__cell">
            <span className="specimen">IV.</span>
            <h3 className="h3">Publicar</h3>
            <p>Verbetes, artigos e relatos de caso na base internacional da Conscienciologia.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroOusada() {
  return (
    <section className="hero hero--ousada">
      <div className="wrap">
        <div className="ousada-stack">
          <div className="ousada-row1">
            <span className="ousada-num mono">N.º 01</span>
            <span className="specimen ousada-tag">EDIÇÃO 2026 &nbsp;·&nbsp; VOL. XXIII</span>
          </div>
          <h1 className="ousada-display">
            <span className="line">Ecto&shy;</span>
            <span className="line line--gold">plasma</span>
            <span className="line">&amp; para&shy;</span>
            <span className="line line--outline">cirurgia.</span>
          </h1>
          <div className="ousada-row2">
            <p className="ousada-lede">
              Há 23 anos a Ectolab transforma fenômenos antes chamados de mágicos
              em <u>protocolos de pesquisa replicáveis</u>. Bem-vindo ao laboratório
              da consciência.
            </p>
            <div className="ousada-cta">
              <a href="pages/trilha.html" className="btn btn-primary btn-big">
                Inscrição aberta — Trilha 2026 <span className="arrow">↗</span>
              </a>
              <a href="pages/conscienciologia.html" className="btn-text">
                Primeira vez aqui? Comece por aqui.
              </a>
            </div>
          </div>

          <div className="ousada-strip">
            <div><span className="stat">5</span><span className="stat-label">cursos regulares</span></div>
            <div><span className="stat">312</span><span className="stat-label">pesquisadores</span></div>
            <div><span className="stat">2.840</span><span className="stat-label">horas/laboratório</span></div>
            <div><span className="stat">47</span><span className="stat-label">países &middot; alcance</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SHARED HOME SECTIONS
   ============================================================ */

function Marquee() {
  const items = ["Ectoplasma", "Paracirurgia", "Assistencialidade", "Projeção da Consciência", "Bioenergia", "Holopensene", "Parafenômenos", "Conscienciologia"];
  const line = (
    <span>
      {items.map((t, i) => (
        <React.Fragment key={i}>
          <span>{t}</span>
          <span className="sep">◆</span>
        </React.Fragment>
      ))}
    </span>
  );
  return (
    <div className="marquee">
      <div className="marquee__track">
        {line}{line}{line}
      </div>
    </div>
  );
}

function OQueFazemos() {
  const cells = [
    { num: "01", title: "Pesquisa laboratorial", text: "Tertúlias e reuniões de pesquisa em ectoplasmia e paracirurgia, documentadas e abertas a voluntários qualificados.", link: "pages/quem-somos.html" },
    { num: "02", title: "Cursos formativos", text: "Da introdução (DIP) à imersão intensiva — 5 programas para diferentes estágios de pesquisador.", link: "pages/cursos.html" },
    { num: "03", title: "Campos paracirúrgicos", text: "Atividades assistenciais semanais, gratuitas, conduzidas por equipes de paracirurgiões pesquisadores.", link: "pages/atividades.html" },
    { num: "04", title: "Publicação e verbetes", text: "Contribuições para a Enciclopédia da Conscienciologia e periódicos científicos da área.", link: "pages/blog.html" },
  ];
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow"><span className="dot"></span>O QUE FAZEMOS</div>
            <h2 className="h1" style={{ marginTop: 16, maxWidth: 820 }}>
              Quatro frentes de trabalho, uma única vocação:
              <em style={{ color: "var(--blue)", fontWeight: 700 }}> investigar o que está além do corpo</em>.
            </h2>
          </div>
        </div>

        <div className="ofaz-grid">
          {cells.map((c) => (
            <a href={c.link} key={c.num} className="ofaz">
              <div className="ofaz__num mono">/{c.num}</div>
              <h3 className="h3 ofaz__title">{c.title}</h3>
              <p className="ofaz__text">{c.text}</p>
              <span className="link-arrow">Conhecer →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section className="section manifesto" id="manifesto">
      <div className="wrap">
        <div className="manifesto-grid">
          <div className="manifesto-left">
            <div className="eyebrow"><span className="dot"></span>POR QUE FAZEMOS</div>
            <h2 className="h1" style={{ marginTop: 16 }}>
              Porque o invisível também merece um <em style={{ fontWeight: 700, color: "var(--blue)" }}>laboratório</em>.
            </h2>
          </div>
          <div className="manifesto-right">
            <p className="lede">
              A história da ciência é a história do que aprendemos a observar.
              O <strong>ectoplasma</strong> — substância energética densa, emitida pela consciência
              em estados específicos — é hoje, para nós, o que o magnetismo era para Faraday no início do século XIX:
              real, replicável, mas ainda mal compreendido.
            </p>
            <p>
              A Ectolab existe para mudar isso. Não pelo dogma, nem pela fé — mas pela observação
              cuidadosa, registro disciplinado e revisão entre pares. Acreditamos que o método
              científico, aplicado com honestidade aos parafenômenos, é a melhor ferramenta que temos
              para distinguir o real do imaginado, o útil do supersticioso.
            </p>
            <p>
              Trabalhamos com a base teórica da <a href="pages/conscienciologia.html">Conscienciologia</a>,
              ciência proposta por Waldo Vieira em 1981 e desenvolvida desde então
              por centenas de institutos no Brasil e no mundo.
            </p>
            <a href="pages/historia.html" className="link-arrow" style={{ marginTop: 12, display: "inline-flex" }}>
              Ler a história completa →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function PorOndeComecar() {
  const steps = [
    { n: "01", title: "Entenda o vocabulário", text: "Glossário ilustrado com os 8 termos essenciais — ectoplasma, paracirurgia, holopensene, projeção…", link: "pages/conscienciologia.html", time: "10 min de leitura" },
    { n: "02", title: "Faça o DIP", text: "Dinâmica Introdutória de Parapsíquica — 4 encontros, presencial ou online, gratuito.", link: "pages/cursos.html", time: "Próxima turma: 14/jun" },
    { n: "03", title: "Visite um Campo", text: "Atividade pública, semanal, sem inscrição. Você observa, sente, pergunta.", link: "pages/atividades.html", time: "Quartas, 19h30" },
    { n: "04", title: "Aprofunde no PROEP", text: "Programa de Estudos em Paracirurgia — formação de 18 meses, em 6 módulos.", link: "pages/cursos.html", time: "Inscrições abertas" },
  ];
  return (
    <section className="section trilha-mini">
      <div className="wrap">
        <div className="section-head between">
          <div>
            <div className="eyebrow"><span className="dot"></span>POR ONDE COMEÇAR</div>
            <h2 className="h1" style={{ marginTop: 16 }}>A Trilha do Saber, em 4 passos.</h2>
          </div>
          <a href="pages/trilha.html" className="btn btn-ghost hide-mobile">Ver trilha completa →</a>
        </div>

        <div className="trilha-rail">
          <div className="trilha-line"></div>
          <div className="trilha-grid">
            {steps.map((s, i) => (
              <a href={s.link} key={s.n} className="trilha-step">
                <div className="trilha-step__bullet">
                  <span className="mono">{s.n}</span>
                </div>
                <div className="trilha-step__body">
                  <h3 className="h3">{s.title}</h3>
                  <p>{s.text}</p>
                  <div className="specimen" style={{ marginTop: 8 }}>{s.time}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CursosDestaque() {
  const cursos = [
    { sigla: "DIP", nome: "Dinâmica Introdutória de Parapsíquica", duracao: "4 encontros · 8h", nivel: "Iniciante", preco: "Gratuito", color: "var(--blue-soft)" },
    { sigla: "PROEP", nome: "Programa de Estudos em Paracirurgia", duracao: "18 meses · 6 módulos", nivel: "Avançado", preco: "Anuidade", color: "var(--gold-soft)" },
    { sigla: "EPPI", nome: "Estudos em Projeção Parapsíquica Intensiva", duracao: "Imersão · 5 dias", nivel: "Intermediário", preco: "R$ 1.480", color: "var(--blue-soft)" },
    { sigla: "IECTO", nome: "Imersão em Ectoplasmia", duracao: "Imersão · 7 dias", nivel: "Avançado", preco: "R$ 2.240", color: "var(--paper-2)" },
  ];
  return (
    <section className="section" style={{ background: "var(--white)" }}>
      <div className="wrap">
        <div className="section-head between">
          <div>
            <div className="eyebrow"><span className="dot"></span>CURSOS &amp; PROGRAMAS</div>
            <h2 className="h1" style={{ marginTop: 16 }}>Formação em pesquisa parapsíquica.</h2>
          </div>
          <a href="pages/cursos.html" className="btn btn-ghost hide-mobile">Ver todos os cursos →</a>
        </div>

        <div className="cursos-grid">
          {cursos.map((c, i) => (
            <a href={i === 1 ? "pages/curso-proep.html" : "pages/cursos.html"} key={c.sigla} className="curso-card" style={{ "--bg": c.color }}>
              <div className="curso-card__viz">
                <span className="curso-card__sigla">{c.sigla}</span>
                <span className="specimen curso-card__lvl">{c.nivel}</span>
              </div>
              <div className="curso-card__body">
                <h3 className="h3">{c.nome}</h3>
                <div className="curso-card__meta">
                  <span>{c.duracao}</span>
                  <span className="mono" style={{ color: "var(--blue)" }}>{c.preco}</span>
                </div>
                <span className="link-arrow" style={{ marginTop: 4 }}>Detalhes →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function EventosBlog() {
  const eventos = [
    { data: "14 JUN", titulo: "Campo Paracirúrgico Público — Edição 412", local: "Sede Foz · Auditório A", tipo: "ATIVIDADE GRATUITA" },
    { data: "22 JUN", titulo: "Tertúlia: Ectoplasma e Mediunidade Brasileira", local: "Online · Zoom + YouTube", tipo: "TERTÚLIA" },
    { data: "05 JUL", titulo: "Imersão em Ectoplasmia — IECTO 2026.2", local: "Sede Foz · Lab. 03", tipo: "CURSO" },
  ];
  const posts = [
    { tag: "ECTOPLASMA", titulo: "O que é o ectoplasma, afinal? Uma definição em 1.200 palavras.", autor: "Dra. Lívia M. Ferraz", min: "8 min" },
    { tag: "PARACIRURGIA", titulo: "Diferença entre cirurgia espiritual e paracirurgia conscienciológica.", autor: "Prof. R. Caldeira", min: "12 min" },
    { tag: "PESQUISA", titulo: "Notas sobre o campo paracirúrgico nº 410 — 21 voluntários.", autor: "Equipe Ectolab", min: "6 min" },
  ];
  return (
    <section className="section eventos-blog">
      <div className="wrap">
        <div className="grid g2 gap-48">
          <div>
            <div className="eyebrow"><span className="dot"></span>PRÓXIMOS EVENTOS</div>
            <h2 className="h2" style={{ marginTop: 12 }}>Calendário aberto.</h2>
            <ul className="agenda">
              {eventos.map((e, i) => (
                <li key={i}>
                  <span className="agenda__date mono">{e.data}</span>
                  <span className="col" style={{ flex: 1, gap: 4 }}>
                    <span className="specimen" style={{ color: "var(--blue)" }}>{e.tipo}</span>
                    <span className="h4">{e.titulo}</span>
                    <span className="muted" style={{ fontSize: 13 }}>{e.local}</span>
                  </span>
                  <span className="agenda__arr">→</span>
                </li>
              ))}
            </ul>
            <a href="pages/atividades.html" className="link-arrow" style={{ marginTop: 24, display: "inline-flex" }}>
              Agenda completa →
            </a>
          </div>
          <div>
            <div className="eyebrow"><span className="dot"></span>DO BLOG</div>
            <h2 className="h2" style={{ marginTop: 12 }}>Para entender o tema.</h2>
            <ul className="agenda agenda--blog">
              {posts.map((p, i) => (
                <li key={i}>
                  <span className="tag" style={{ marginRight: 12, flex: "none" }}>{p.tag}</span>
                  <span className="col" style={{ flex: 1, gap: 4 }}>
                    <span className="h4">{p.titulo}</span>
                    <span className="muted" style={{ fontSize: 13 }}>{p.autor} &middot; {p.min} de leitura</span>
                  </span>
                  <span className="agenda__arr">→</span>
                </li>
              ))}
            </ul>
            <a href="pages/blog.html" className="link-arrow" style={{ marginTop: 24, display: "inline-flex" }}>
              Ler o blog →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Glossario() {
  const terms = [
    { t: "Ectoplasma", d: "Substância energética densa, semi-física, emitida pela consciência em estados específicos. É a 'matéria-prima' da paracirurgia.", aka: "do gr. ektós (fora) + plásma (forma)" },
    { t: "Paracirurgia", d: "Intervenção terapêutica realizada no parácorpo (corpo energético) por uma equipe de paracirurgiões. Não substitui medicina convencional.", aka: "para- + cirurgia" },
    { t: "Holopensene", d: "Conjunto de pensamentos, sentimentos e energias que impregnam um ambiente, pessoa ou grupo.", aka: "holo- (total) + pensene (pen+sen+ene)" },
    { t: "Projeção", d: "Estado em que a consciência se observa fora do corpo físico, com lucidez. Base experimental da Projeciologia.", aka: "lat. proiectio, lançar adiante" },
  ];
  return (
    <section className="section glossario">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow"><span className="dot"></span>GLOSSÁRIO RÁPIDO</div>
            <h2 className="h1" style={{ marginTop: 16, maxWidth: 700 }}>
              Os 4 termos que abrem todas as portas.
            </h2>
          </div>
        </div>
        <div className="glossario-grid">
          {terms.map((t, i) => (
            <div className="gloss" key={i}>
              <span className="specimen">VERBETE Nº {String(i + 1).padStart(2, "0")}</span>
              <h3 className="serif gloss__t">{t.t}</h3>
              <p className="gloss__d">{t.d}</p>
              <p className="mono gloss__aka">{t.aka}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 40, textAlign: "center" }}>
          <a href="pages/conscienciologia.html" className="btn btn-ghost">
            Glossário completo (47 verbetes) →
          </a>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const qs = [
    { q: "Isto é religião?", a: "Não. A Ectolab é uma instituição de pesquisa. Não temos rituais, dogmas, lideranças carismáticas ou cobrança de fé. Trabalhamos com método: hipótese, experimentação, registro, revisão por pares." },
    { q: "Vocês 'curam'?", a: "Não substituímos medicina, psicologia ou qualquer terapia regulamentada. Os campos paracirúrgicos são pesquisas assistenciais — pessoas relatam alívio em diferentes graus, mas nada substitui acompanhamento de saúde formal." },
    { q: "Preciso 'acreditar' para participar?", a: "Não. Pelo contrário: o ceticismo educado é bem-vindo. O que pedimos é honestidade na observação — registrar o que se percebe, sem inflar nem reduzir." },
    { q: "Quanto custa começar?", a: "O contato inicial é gratuito: DIP, Campos Paracirúrgicos e Tertúlias não cobram inscrição. Cursos avançados têm anuidade ou taxa de imersão." },
    { q: "Cirurgia espiritual e paracirurgia é a mesma coisa?", a: "Não. A 'cirurgia espiritual' brasileira é um fenômeno mediúnico tradicional, com forte componente religioso. A paracirurgia conscienciológica é laica, baseada em equipe e em registro técnico. Há sobreposição no fenômeno, não na cosmovisão." },
  ];
  const [open, setOpen] = useState(0);
  return (
    <section className="section faq">
      <div className="wrap">
        <div className="grid g2 gap-48" style={{ alignItems: "start" }}>
          <div style={{ position: "sticky", top: 100 }}>
            <div className="eyebrow"><span className="dot"></span>VISITANTE DE PRIMEIRA VEZ</div>
            <h2 className="h1" style={{ marginTop: 16 }}>
              Cinco perguntas que <em style={{ fontWeight: 700, color: "var(--blue)" }}>todo mundo</em> faz.
            </h2>
            <p className="lede" style={{ marginTop: 16 }}>
              Respondemos com a clareza que gostaríamos de ter recebido quando entramos.
            </p>
            <a href="pages/contato.html" className="btn btn-primary" style={{ marginTop: 24 }}>
              Fale com a Ectolab <span className="arrow">→</span>
            </a>
          </div>
          <div className="faq-list">
            {qs.map((item, i) => (
              <div key={i} className={`faq-item ${open === i ? "open" : ""}`} onClick={() => setOpen(open === i ? -1 : i)}>
                <button className="faq-q">
                  <span className="mono faq-num">/{String(i + 1).padStart(2, "0")}</span>
                  <span className="faq-text">{item.q}</span>
                  <span className="faq-toggle">{open === i ? "−" : "+"}</span>
                </button>
                {open === i && <p className="faq-a">{item.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Depoimentos() {
  const ts = [
    { quote: "Entrei cético, com a expectativa de desmascarar. Saí pesquisador. O que me convenceu não foi um discurso — foi a disciplina laboratorial.", autor: "Dr. André Salgado", role: "Neurologista, pesquisador associado desde 2018" },
    { quote: "É o único lugar que conheço onde posso falar de ectoplasma sem precisar pedir desculpas — e onde, ao mesmo tempo, ninguém aceita uma afirmação sem evidência.", autor: "Lívia M. Ferraz", role: "Pesquisadora-titular, autora de 14 verbetes" },
    { quote: "Vinte e três anos depois, ainda chego em cada reunião sem saber o que vamos descobrir. Esta é a beleza do trabalho.", autor: "Prof. R. Caldeira", role: "Co-fundador da Ectolab" },
  ];
  return (
    <section className="section depo">
      <div className="wrap">
        <div className="eyebrow"><span className="dot"></span>VOZES DA ECTOLAB</div>
        <div className="depo-grid">
          {ts.map((t, i) => (
            <figure key={i} className="depo-card">
              <span className="aster" style={{ fontSize: 32 }}>*</span>
              <blockquote className="serif depo-q">{t.quote}</blockquote>
              <figcaption>
                <div className="h4">{t.autor}</div>
                <div className="specimen" style={{ marginTop: 4 }}>{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="section newsletter">
      <div className="wrap">
        <div className="newsletter-card">
          <div className="newsletter-grid">
            <div>
              <div className="eyebrow"><span className="dot"></span>BOLETIM MENSAL</div>
              <h2 className="h1" style={{ marginTop: 16, color: "var(--white)" }}>
                Receba <em style={{ color: "var(--gold)", fontWeight: 700 }}>O Parafato</em>, todo mês.
              </h2>
              <p className="lede" style={{ marginTop: 12, color: "rgba(255,255,255,0.78)" }}>
                Resumo de pesquisa, calendário de atividades, e um verbete novo por mês.
                4.200 leitores em 47 países.
              </p>
            </div>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input className="input" type="email" placeholder="seu@email.com" />
              <button className="btn btn-gold" type="submit">Assinar <span className="arrow">→</span></button>
              <p className="mono" style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginTop: 12 }}>
                Sem spam. Cancele quando quiser.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   ROOT
   ============================================================ */

const HERO_VARIANTS = {
  conservadora: HeroConservadora,
  equilibrada: HeroEquilibrada,
  ousada: HeroOusada,
};

function App() {
  // Read initial tweak from defaults block
  const initial = (window.__TWEAKS__ && window.__TWEAKS__.hero) || "equilibrada";
  const [hero, setHero] = useState(initial);

  useEffect(() => {
    function onMsg(e) {
      const d = e.data || {};
      if (d.type === "__activate_edit_mode") setPanelOpen(true);
      if (d.type === "__deactivate_edit_mode") setPanelOpen(false);
      if (d.type === "__tweaks_set" && d.edits && d.edits.hero) setHero(d.edits.hero);
    }
    window.addEventListener("message", onMsg);
    window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", onMsg);
  }, []);

  const [panelOpen, setPanelOpen] = useState(false);
  const Hero = HERO_VARIANTS[hero] || HeroEquilibrada;

  function applyTweak(key, val) {
    if (key === "hero") setHero(val);
    window.parent.postMessage({ type: "__edit_mode_set_keys", edits: { [key]: val } }, "*");
  }

  function closePanel() {
    setPanelOpen(false);
    window.parent.postMessage({ type: "__edit_mode_dismissed" }, "*");
  }

  return (
    <>
      <Hero />
      <Marquee />
      <OQueFazemos />
      <Manifesto />
      <PorOndeComecar />
      <CursosDestaque />
      <EventosBlog />
      <Glossario />
      <FAQ />
      <Depoimentos />
      <Newsletter />
      {panelOpen && <TweaksPanel hero={hero} setHero={(v) => applyTweak("hero", v)} onClose={closePanel} />}
    </>
  );
}

function TweaksPanel({ hero, setHero, onClose }) {
  const variants = [
    { id: "conservadora", label: "Conservadora", sub: "Instituto clássico" },
    { id: "equilibrada", label: "Equilibrada", sub: "Editorial + lab" },
    { id: "ousada", label: "Ousada", sub: "Tipografia gigante" },
  ];
  return (
    <div className="tweaks-panel">
      <div className="tweaks-panel__head">
        <span className="mono" style={{ fontSize: 11, letterSpacing: "0.14em" }}>TWEAKS</span>
        <button onClick={onClose} aria-label="Fechar">×</button>
      </div>
      <div className="tweaks-panel__body">
        <p className="mono" style={{ fontSize: 10, letterSpacing: "0.14em", color: "var(--ink-3)", textTransform: "uppercase", marginBottom: 14 }}>
          Direção da Home
        </p>
        <div className="tweaks-options">
          {variants.map((v) => (
            <button key={v.id} className={`tweak-opt ${hero === v.id ? "on" : ""}`} onClick={() => setHero(v.id)}>
              <span className="h4">{v.label}</span>
              <span className="specimen" style={{ marginTop: 4 }}>{v.sub}</span>
            </button>
          ))}
        </div>
        <p className="mono" style={{ fontSize: 10, letterSpacing: "0.1em", color: "var(--ink-3)", marginTop: 18, lineHeight: 1.5 }}>
          As 3 variações compartilham o mesmo sistema visual — só o hero/abertura muda.
          As páginas internas usam o estilo "Equilibrada".
        </p>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
