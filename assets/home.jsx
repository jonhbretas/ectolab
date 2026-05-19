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
              FUNDADA EM 2003 &nbsp;·&nbsp; FOZ DO IGUAÇU, BR &nbsp;·&nbsp; INST. CONSCIENCIOCÊNTRICA
            </div>
            <h1 className="h-display" style={{ marginTop: 24 }}>
              Pesquisa laboratorial<br />
              em <strong style={{ color: "var(--teal)", fontWeight: 700 }}>ectoplasmologia</strong>{" "}
              e <strong style={{ color: "var(--teal)", fontWeight: 700 }}>paracirurgia</strong>.
            </h1>
            <p className="lede" style={{ maxWidth: 620, marginTop: 28 }}>
              A Ectolab é uma associação internacional, sem fins lucrativos, que congrega pesquisadores
              dedicados à qualificação da <strong>interassistência parapsíquica</strong> e ao estudo
              técnico do <strong>ectoplasma</strong> — energia semimaterial usada em paracirurgias e
              assistência paraterapêutica.
            </p>
            <div className="flex gap-12" style={{ marginTop: 36, flexWrap: "wrap" }}>
              <a href="pages/paracirurgia.html#solicitar" className="btn btn-orange">
                Solicitar paracirurgia <span className="arrow">→</span>
              </a>
              <a href="pages/trilha.html" className="btn btn-ghost">
                Quero pesquisar — comece pela Trilha
              </a>
            </div>
          </div>
          <aside className="hero-card">
            <div className="hero-card__top">
              <span className="specimen">FICHA Nº 01 / INSTITUCIONAL</span>
              <span className="specimen">2026</span>
            </div>
            <div className="hero-card__title">
              Resumo&nbsp;<span className="aster">*</span>&nbsp;ECTOLAB
            </div>
            <dl className="hero-card__list">
              <div><dt>Natureza</dt><dd>Assoc. internacional, conscienciocêntrica, sem fins lucrativos</dd></div>
              <div><dt>Especialidades</dt><dd>Ectoplasmologia &middot; Paracirurgia &middot; Bioenergologia</dd></div>
              <div><dt>Base científica</dt><dd>Conscienciologia (W. Vieira, 1981)</dd></div>
              <div><dt>Princípio</dt><dd>Da Descrença — nada por fé, tudo por experimentação</dd></div>
              <div><dt>Sede</dt><dd>Foz do Iguaçu, Paraná &middot; BR</dd></div>
              <div><dt>Regime</dt><dd>100% voluntariado</dd></div>
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
          ECTOLAB &nbsp;·&nbsp; ASSOC. INT. DE PESQUISA EM ECTOPLASMIA E PARACIRURGIA &nbsp;·&nbsp; EST. 2003
        </div>
        <h1 className="h-display center-title">
          Onde o invisível<br />
          <strong style={{ color: "var(--teal)", fontWeight: 700 }}>se torna técnica</strong>.
        </h1>
        <p className="lede center-lede">
          Investigamos o ectoplasma, a paracirurgia e os fenômenos parapsíquicos com método científico,
          rigor cosmoético e o <em style={{ fontStyle: "normal", fontWeight: 600 }}>Princípio da Descrença</em> —
          não acredite em nada, experimente.
        </p>
        <div className="flex gap-12 center-cta">
          <a href="pages/paracirurgia.html#solicitar" className="btn btn-orange">
            Solicitar paracirurgia <span className="arrow">→</span>
          </a>
          <a href="pages/trilha.html" className="btn btn-ghost">
            Quero pesquisar
          </a>
        </div>

        <div className="quadrant">
          <div className="quadrant__cell">
            <span className="specimen">I.</span>
            <h3 className="h3">Pesquisar</h3>
            <p>Laboratórios de Paracirurgia, Bioenergologia e Ectoplasmologia abertos a voluntários qualificados.</p>
          </div>
          <div className="quadrant__cell">
            <span className="specimen">II.</span>
            <h3 className="h3">Ensinar</h3>
            <p>5 programas regulares — PROEP, EPPI, Imersão em Ectoplasmia, Fitoectoplasmia e Ciclo Vital do Ectoplasta.</p>
          </div>
          <div className="quadrant__cell">
            <span className="specimen">III.</span>
            <h3 className="h3">Assistir</h3>
            <p>Solicitação de Paracirurgia à distância e Dinâmicas Interassistenciais (DIPs) presenciais em 6 cidades.</p>
          </div>
          <div className="quadrant__cell">
            <span className="specimen">IV.</span>
            <h3 className="h3">Publicar</h3>
            <p>Verbetes, blog técnico e relatórios de pesquisa abertos. 124 artigos e 28 autores.</p>
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
              da consciência — onde nada se pede por fé.
            </p>
            <div className="ousada-cta">
              <a href="pages/paracirurgia.html#solicitar" className="btn btn-orange btn-big">
                Solicitar paracirurgia <span className="arrow">↗</span>
              </a>
              <a href="pages/trilha.html" className="btn-text">
                Primeira vez aqui? Comece pela Trilha.
              </a>
            </div>
          </div>

          <div className="ousada-strip">
            <div><span className="stat">5</span><span className="stat-label">cursos regulares</span></div>
            <div><span className="stat">410</span><span className="stat-label">campos paracirúrgicos</span></div>
            <div><span className="stat">312</span><span className="stat-label">voluntários ativos</span></div>
            <div><span className="stat">47</span><span className="stat-label">países &middot; alcance</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PRINCÍPIO DA DESCRENÇA — pillar banner
   ============================================================ */

function PrincipioDescrenca() {
  return (
    <section className="descrenca">
      <div className="wrap">
        <div className="descrenca-card glass-teal">
          <div className="descrenca-grid">
            <div className="descrenca-eye">
              <div className="eyebrow" style={{ color: "var(--orange)" }}><span className="dot" style={{ background: "var(--orange)" }}></span>NOSSO PILAR FILOSÓFICO</div>
              <span className="descrenca-aster">*</span>
            </div>
            <div>
              <h2 className="descrenca-h2">Princípio da Descrença</h2>
              <p className="descrenca-lede">
                <strong>Não acredite em nada do que está aqui.</strong> Submeta toda informação à
                experimentação pessoal, ao registro disciplinado e ao ceticismo científico.
              </p>
              <p className="descrenca-body">
                Esta é a pedra angular do nosso trabalho. Não somos religião, não pedimos fé, não
                temos lideranças carismáticas. O que pedimos é honestidade na observação. O Princípio
                da Descrença atravessa cada curso, cada paracirurgia, cada artigo, cada relatório.
              </p>
            </div>
          </div>
        </div>

        <div className="paths-grid">
          <a href="pages/paracirurgia.html#solicitar" className="path-card path-card--orange">
            <span className="specimen">CAMINHO 01</span>
            <h3 className="h2 path-h">Busco assistência</h3>
            <p>Quero solicitar uma paracirurgia para mim, terceiros ou animais. Vou ao Portal do Assistido para entender preparo, prazos e relatório.</p>
            <span className="link-arrow">Solicitar paracirurgia →</span>
          </a>
          <a href="pages/trilha.html" className="path-card path-card--teal">
            <span className="specimen">CAMINHO 02</span>
            <h3 className="h2 path-h">Quero pesquisar</h3>
            <p>Quero entender o ectoplasma, participar de uma Dinâmica Interassistencial (DIP), fazer cursos e — se for o caso — formar-me pesquisador.</p>
            <span className="link-arrow">Começar pela Trilha →</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SHARED HOME SECTIONS
   ============================================================ */

function Marquee() {
  const items = ["Ectoplasma", "Paracirurgia", "Interassistencialidade", "Cosmoética", "Pensene", "Holossomática", "Ectoplasmologia", "Bioenergologia", "Tenepes", "Estado Vibracional"];
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
    { num: "01", title: "Paracirurgia à distância", text: "Atendimento paraterapêutico em equipe, à distância, com protocolo de preparo, sessão e relatório pós-atendimento. Submissões até sexta às 12h30.", link: "pages/paracirurgia.html" },
    { num: "02", title: "Dinâmicas Interassistenciais", text: "Trabalhos grupais (DIPs) em São Paulo, Curitiba, Foz do Iguaçu, Recife, Lisboa e Madri. Voluntariado consciencial em campo bioenergético.", link: "pages/atividades.html" },
    { num: "03", title: "Laboratórios técnicos", text: "Paracirurgia, Bioenergologia e Ectoplasmologia. Experimentos individuais e em equipe, com preenchimento de parapercepiogramas.", link: "pages/atividades.html#laboratorios" },
    { num: "04", title: "Formação & Pesquisa", text: "PROEP, EPPI, Imersão em Ectoplasmia, Fitoectoplasmia. Verbetes, relatórios e blog técnico em produção contínua.", link: "pages/cursos.html" },
  ];
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow"><span className="dot"></span>O QUE FAZEMOS</div>
            <h2 className="h1" style={{ marginTop: 16, maxWidth: 820 }}>
              Quatro frentes, uma única missão:
              <strong style={{ color: "var(--teal)", fontWeight: 700 }}> qualificar a interassistência parapsíquica</strong>.
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
              Porque o invisível também<br />
              <strong style={{ color: "var(--orange)", fontWeight: 700 }}>merece laboratório</strong>.
            </h2>
          </div>
          <div className="manifesto-right">
            <p className="lede">
              A história da ciência é a história do que aprendemos a observar.
              O <strong>ectoplasma</strong> — substância energética semimaterial, viscosa, emitida pela
              consciência em estados específicos — é hoje, para nós, o que o magnetismo era para
              Faraday em 1820: real, replicável, mas ainda mal compreendido.
            </p>
            <p>
              A Ectolab existe para mudar isso. Não pelo dogma, nem pela fé — mas pela observação
              cuidadosa, registro disciplinado e revisão entre pares. Trabalhamos sob o
              <strong> Código Grupal de Cosmoética (CGC)</strong>: interassistencialidade,
              rigor científico, imparcialidade, confidencialidade e cooperação.
            </p>
            <p>
              A base teórica é a <a href="pages/conscienciologia.html">Conscienciologia</a>,
              ciência proposta por Waldo Vieira em 1981 que estuda a consciência de forma
              <em style={{ fontStyle: "normal", fontWeight: 600 }}> holossomática, multidimensional e multiexistencial</em>.
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
    { n: "01", title: "Entenda o vocabulário", text: "Glossário ilustrado com os termos essenciais — ectoplasma, paracirurgia, pensene, cosmoética, EV.", link: "pages/conscienciologia.html", time: "10 min de leitura" },
    { n: "02", title: "Participe de uma DIP", text: "Dinâmica Interassistencial da Paracirurgia. Atividade gratuita em SP, Curitiba, Foz, Recife e online.", link: "pages/atividades.html", time: "Próxima: SP, 21/jun" },
    { n: "03", title: "Faça o EPPI ou Imersão", text: "Cursos de campo. Imersão em Ectoplasmia 2026 — 27h em ambiente hoteleiro, com fitoectoplasma.", link: "pages/cursos.html", time: "Inscrições abertas" },
    { n: "04", title: "Aprofunde no PROEP", text: "Programa de Estimulação Parapsíquica. Presencial em Foz, 4 vagas/turma. Inclui estimulação vagal e eletrossomatografia.", link: "pages/curso-proep.html", time: "4 vagas · turma 2026.2" },
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
    { sigla: "PROEP", nome: "Programa de Estimulação Parapsíquica", duracao: "Presencial · Foz", nivel: "Avançado", preco: "4 vagas", color: "var(--teal-soft)" },
    { sigla: "EPPI", nome: "Ectoplasmia Projetiva Paracirúrgica Ectoplásmica Interassistencial", duracao: "Curso de campo", nivel: "Intermediário", preco: "Inscrições abertas", color: "var(--orange-soft)" },
    { sigla: "IMERSÃO", nome: "Imersão em Ectoplasmia 2026", duracao: "27h · hoteleiro", nivel: "Intermediário", preco: "Vagas limitadas", color: "var(--teal-soft)" },
    { sigla: "FITO", nome: "Fitoectoplasmia Interassistencial", duracao: "Curso de campo", nivel: "Avançado", preco: "Em breve", color: "var(--paper-2)" },
  ];
  return (
    <section className="section" style={{ background: "var(--white)" }}>
      <div className="wrap">
        <div className="section-head between">
          <div>
            <div className="eyebrow"><span className="dot"></span>CURSOS &amp; PROGRAMAS</div>
            <h2 className="h1" style={{ marginTop: 16 }}>Formação em parapsiquismo ectoplasmático.</h2>
          </div>
          <a href="pages/cursos.html" className="btn btn-ghost hide-mobile">Ver todos os cursos →</a>
        </div>

        <div className="cursos-grid">
          {cursos.map((c, i) => (
            <a href={i === 0 ? "pages/curso-proep.html" : "pages/cursos.html"} key={c.sigla} className="curso-card" style={{ "--bg": c.color }}>
              <div className="curso-card__viz">
                <span className="curso-card__sigla">{c.sigla}</span>
                <span className="specimen curso-card__lvl">{c.nivel}</span>
              </div>
              <div className="curso-card__body">
                <h3 className="h3">{c.nome}</h3>
                <div className="curso-card__meta">
                  <span>{c.duracao}</span>
                  <span className="mono" style={{ color: "var(--teal)" }}>{c.preco}</span>
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
    { data: "21 JUN", titulo: "DIP — Dinâmica Interassistencial da Paracirurgia · São Paulo", local: "Sede SP · Vila Mariana", tipo: "ATIVIDADE GRATUITA" },
    { data: "28 JUN", titulo: "DIP — Dinâmica Interassistencial · Curitiba", local: "Sede Curitiba · Centro", tipo: "ATIVIDADE GRATUITA" },
    { data: "05 JUL", titulo: "Imersão em Ectoplasmia 2026 — turma única", local: "Foz do Iguaçu · hoteleiro", tipo: "CURSO INTENSIVO" },
  ];
  const posts = [
    { tag: "ECTOPLASMIA", titulo: "Qualificação dos pensenes do ectoplasta: 7 práticas diárias.", autor: "Dra. Lívia M. Ferraz", min: "8 min" },
    { tag: "SÍNDROMES", titulo: "Síndrome Ectoplásmica: como reconhecer e tratar o descontrole bioenergético.", autor: "Dr. André Salgado", min: "12 min" },
    { tag: "TÉCNICAS", titulo: "Técnica Arco Voltaico Craniochacral — energização da região encefálica.", autor: "Prof. R. Caldeira", min: "10 min" },
  ];
  return (
    <section className="section eventos-blog">
      <div className="wrap">
        <div className="grid g2 gap-48">
          <div>
            <div className="eyebrow"><span className="dot"></span>PRÓXIMAS DINÂMICAS</div>
            <h2 className="h2" style={{ marginTop: 12 }}>Agenda aberta.</h2>
            <ul className="agenda">
              {eventos.map((e, i) => (
                <li key={i}>
                  <span className="agenda__date mono">{e.data}</span>
                  <span className="col" style={{ flex: 1, gap: 4 }}>
                    <span className="specimen" style={{ color: "var(--teal)" }}>{e.tipo}</span>
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
    { t: "Ectoplasma", d: "Energia semimaterial, viscosa, esbranquiçada, emitida pela consciência em estados específicos. Matéria-prima de fenômenos de materialização e paraterapia.", aka: "do gr. ektós (fora) + plásma (forma)" },
    { t: "Paracirurgia", d: "Intervenção energética paraterapêutica que visa desbloqueios psicossomáticos. Não substitui medicina convencional — subcampo científico da Consciencioterapia.", aka: "para- + cirurgia" },
    { t: "Pensene", d: "Unidade pensênica que reúne pensamento + sentimento + energia. Tudo o que a consciência manifesta é pensene.", aka: "pen + sen + ene · neologismo conscienciológico" },
    { t: "Cosmoética", d: "Ética cósmica, multidimensional, multimilenar. Princípio condutor do CGC — Código Grupal de Cosmoética da Ectolab.", aka: "cosmo- (universo) + ética" },
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
    { q: "Isto é religião ou seita?", a: "Não. A Ectolab é uma associação conscienciocêntrica, sem fins lucrativos, dedicada à pesquisa. Não há rituais, dogmas, lideranças carismáticas ou cobrança de fé. Trabalhamos sob o Princípio da Descrença: nada por fé, tudo por experimentação." },
    { q: "Vocês 'curam' à distância?", a: "Não. A Paracirurgia é uma intervenção energética paraterapêutica que visa desbloqueios psicossomáticos — não substitui medicina, psicologia ou terapia regulamentada. Assistidos relatam alívio em diferentes graus; isso vira dado de pesquisa, não promessa." },
    { q: "Como funciona a Solicitação de Paracirurgia?", a: "Você preenche o formulário até sexta-feira, 12h30. O atendimento ocorre à distância no fim de semana, enquanto você permanece em repouso em casa, em ambiente silencioso, sem eletrônicos, incensos ou músicas. Até domingo à meia-noite você envia o relatório de parapercepções." },
    { q: "Preciso 'acreditar' para participar?", a: "Não, pelo contrário: o Princípio da Descrença pede o oposto. O que pedimos é honestidade na observação — registrar o que se percebe, sem inflar nem reduzir. O ceticismo educado é bem-vindo." },
    { q: "Cirurgia espiritual e paracirurgia são a mesma coisa?", a: "Não. A 'cirurgia espiritual' brasileira é um fenômeno mediúnico tradicional, com forte componente religioso e dependência de entidades externas. A paracirurgia da Ectolab é laica, em equipe (Epicon, Acopladores, Energizadores, Doadores, Pesquisadores) e baseada no parapsiquismo do próprio voluntário." },
  ];
  const [open, setOpen] = useState(0);
  return (
    <section className="section faq">
      <div className="wrap">
        <div className="grid g2 gap-48" style={{ alignItems: "start" }}>
          <div style={{ position: "sticky", top: 100 }}>
            <div className="eyebrow"><span className="dot"></span>VISITANTE DE PRIMEIRA VEZ</div>
            <h2 className="h1" style={{ marginTop: 16 }}>
              Cinco perguntas que <strong style={{ color: "var(--teal)", fontWeight: 700 }}>todo mundo</strong> faz.
            </h2>
            <p className="lede" style={{ marginTop: 16 }}>
              Respondemos com a clareza que gostaríamos de ter recebido quando entramos.
            </p>
            <a href="pages/paracirurgia.html#faq" className="btn btn-primary" style={{ marginTop: 24 }}>
              FAQ técnico completo <span className="arrow">→</span>
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
    { quote: "Entrei cética. Achei que era mais uma promessa de cura. O que encontrei foi um instituto que pede que você NÃO acredite — só observe. Mudou minha forma de pesquisar.", autor: "Dra. Lívia M. Ferraz", role: "Pesquisadora-titular · PhD Psicologia" },
    { quote: "O Princípio da Descrença não é uma frase de efeito — é uma disciplina diária. Pesquisar com ele dá trabalho. Pesquisar sem ele é só repetir crença.", autor: "Prof. R. Caldeira", role: "Co-fundador da Ectolab · Epicon" },
    { quote: "23 anos depois, ainda chego em cada DIP sem saber o que vou observar. É a beleza do voluntariado conscienciocêntrico.", autor: "Marta Olinda", role: "Acopladora · 16 anos de campo" },
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
                Receba <strong style={{ color: "var(--orange)", fontWeight: 700 }}>O Parafato</strong>, todo mês.
              </h2>
              <p className="lede" style={{ marginTop: 12, color: "rgba(255,255,255,0.78)" }}>
                Resumo de pesquisa, calendário de DIPs, e um verbete novo por mês.
                4.200 leitores em 47 países.
              </p>
            </div>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input className="input" type="email" placeholder="seu@email.com" />
              <button className="btn btn-orange" type="submit">Assinar <span className="arrow">→</span></button>
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
      <PrincipioDescrenca />
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
