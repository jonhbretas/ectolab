import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { eventos as todosEventos } from './agenda-data.js';

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
              ECTOLAB &nbsp;·&nbsp; ASSOCIAÇÃO INTERNACIONAL DE PESQUISA LABORATORIAL EM ECTOPLASMIA E PARACIRURGIA
            </div>
            <h1 className="h-display" style={{ marginTop: 24 }}>
              Pesquisa técnica<br />
              <em>em fenômenos ectoplásmicos</em>
            </h1>
            <p className="lede" style={{ maxWidth: 620, marginTop: 28 }}>
              A Ectolab é a Associação Internacional de Pesquisa Laboratorial em Ectoplasmia e Paracirurgia.
              Investigamos o ectoplasma, a paracirurgia e os fenômenos ectoplásmicos com método,
              registro técnico e compromisso interassistencial.
            </p>
            <div className="flex gap-12" style={{ marginTop: 36, flexWrap: "wrap" }}>
              <a href="https://dip-ectolab.org.br/pedido-paracirurgia" target="_blank" rel="noreferrer" className="btn btn-orange">
                Solicitar paracirurgia <span className="arrow">↗</span>
              </a>
              <a href="pages/trilha.html" className="btn btn-ghost">
                Consultar a Trilha do Saber
              </a>
            </div>
          </div>
          <aside className="hero-card">
            <div className="hero-card__top">
              <span className="specimen">FICHA INSTITUCIONAL</span>
              <span className="specimen">2026</span>
            </div>
            <div className="hero-card__title">
              Resumo&nbsp;<span className="aster">*</span>&nbsp;ECTOLAB
            </div>
            <dl className="hero-card__list">
              <div><dt>Natureza</dt><dd>Associação internacional de pesquisa, sem fins lucrativos.</dd></div>
              <div><dt>Especialidades</dt><dd>Ectoplasmologia &middot; Paracirurgia </dd></div>
              <div><dt>Base científica</dt><dd>Conscienciologia (W. Vieira, 1981)</dd></div>
              <div><dt>Princípio</dt><dd>Descrença lúcida, experimentação pessoal e registro crítico</dd></div>
              <div><dt>Sede</dt><dd>Foz do Iguaçu, Paraná &middot; BR</dd></div>
              <div><dt>Regime</dt><dd>100% voluntariado</dd></div>
            </dl>
            <a href="pages/quem-somos.html" className="link-arrow" style={{ marginTop: 18, display: "inline-flex" }}>
              Ler ficha completa →
            </a>
          </aside>
        </div>

        <div className="quadrant h-scroll">
          <div className="quadrant__cell">
            <span className="specimen">I.</span>
            <h3 className="h3">Pesquisar</h3>
            <p>Investigação da consciência, dos fenômenos ectoplásmicos e das interações energéticas.</p>
          </div>
          <div className="quadrant__cell">
            <span className="specimen">II.</span>
            <h3 className="h3">Ensinar</h3>
            <p>Aprendizagem orientada pela pesquisa e retribuição do conhecimento pela docência.</p>
          </div>
          <div className="quadrant__cell">
            <span className="specimen">III.</span>
            <h3 className="h3">Assistir</h3>
            <p>Interassistência através de Pesquisa, Dinâmicas Parapsíquicas, Cursos e Laboratórios.</p>
          </div>
          <div className="quadrant__cell">
            <span className="specimen">IV.</span>
            <h3 className="h3">Publicar</h3>
            <p>Livros, artigos, verbetes, blog técnico e resultados de pesquisas institucionais.</p>
          </div>
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
          ECTOLAB &nbsp;·&nbsp; ASSOCIAÇÃO INTERNACIONAL DE PESQUISA LABORATORIAL EM ECTOPLASMIA E PARACIRURGIA &nbsp;·&nbsp; EST. 2013
        </div>
        <h1 className="h-display center-title">
          Pesquisa em ectoplasmia,<br />
          <strong style={{ color: "var(--teal)", fontWeight: 700 }}>paracirurgia e interassistência</strong>.
        </h1>
        <p className="lede center-lede">
          A Ectolab é a Associação Internacional de Pesquisa Laboratorial em Ectoplasmia e Paracirurgia.
          Desenvolvemos investigação técnica e experimental sobre fenômenos ectoplásmicos,
          formação de voluntários e práticas interassistenciais.
        </p>
        <div className="flex gap-12 center-cta">
          <a href="https://dip-ectolab.org.br/pedido-paracirurgia" target="_blank" rel="noreferrer" className="btn btn-orange">
            Solicitar paracirurgia <span className="arrow">↗</span>
          </a>
          <a href="pages/trilha.html" className="btn btn-ghost">
            Buscar conhecimento
          </a>
        </div>

        <div className="quadrant h-scroll">
          <div className="quadrant__cell">
            <span className="specimen">I.</span>
            <h3 className="h3">Pesquisar</h3>
            <p>Investigação da consciência, dos fenômenos ectoplásmicos e das interações energéticas.</p>
          </div>
          <div className="quadrant__cell">
            <span className="specimen">II.</span>
            <h3 className="h3">Ensinar</h3>
            <p>Aprendizagem orientada pela pesquisa e retribuição do conhecimento pela docência.</p>
          </div>
          <div className="quadrant__cell">
            <span className="specimen">III.</span>
            <h3 className="h3">Assistir</h3>
            <p>Dinâmicas em Brasília, Curitiba, Foz do Iguaçu, São Paulo, Rio de Janeiro, Florianópolis, Portugal e Alemanha.</p>
          </div>
          <div className="quadrant__cell">
            <span className="specimen">IV.</span>
            <h3 className="h3">Publicar</h3>
            <p>Livros, artigos, verbetes, blog técnico e resultados de pesquisas institucionais.</p>
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
            <span className="line">Pesquisa</span>
            <span className="line line--gold">ecto&shy;plásmica</span>
            <span className="line">&amp; para&shy;</span>
            <span className="line line--outline">cirurgia.</span>
          </h1>
          <div className="ousada-row2">
            <p className="ousada-lede">
              A Ectolab é a Associação Internacional de Pesquisa em Ectoplasmia e Paracirurgia.
              Desde 2013 desenvolve protocolos de observação, formação e assistência para
              o estudo técnico dos fenômenos ectoplásmicos.
            </p>
            <div className="ousada-cta">
              <a href="https://dip-ectolab.org.br/pedido-paracirurgia" target="_blank" rel="noreferrer" className="btn btn-orange btn-big">
                Solicitar paracirurgia <span className="arrow">↗</span>
              </a>
              <a href="pages/trilha.html" className="btn-text">
                Primeira vez aqui? Consulte a Trilha do Saber.
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
                <i>"Não acredite em nada, nem mesmo no que lhe informarem aqui. Experimente. Tenha suas experiências pessoais."</i>
              </p>
              <p className="descrenca-body">
                O Princípio da Descrença é a premissa central da Conscienciologia, uma proposta filosófica que orienta a não aceitar nenhuma ideia de forma dogmática, mística ou cega.
              </p>
            </div>
          </div>
        </div>

        <div className="paths-grid">
          <a href="https://dip-ectolab.org.br/pedido-paracirurgia" target="_blank" rel="noreferrer" className="path-card path-card--orange">
            <span className="specimen">CAMINHO 01</span>
            <h3 className="h2 path-h">Busco assistência</h3>
            <p>Quero solicitar paracirurgia para mim, terceiros ou animais e compreender preparo, prazos e registro pós-atendimento.</p>
            <span className="link-arrow">Solicitar paracirurgia ↗</span>
          </a>
          <a href="pages/trilha.html" className="path-card path-card--teal">
            <span className="specimen">CAMINHO 02</span>
            <h3 className="h2 path-h">Quero aprender</h3>
            <p>Quero entender ectoplasmia, conhecer a formação inicial, participar de atividades práticas e avançar na pesquisa.</p>
            <span className="link-arrow">Consultar a Trilha do Saber →</span>
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
  const items = ["Ectoplasma", "Paracirurgia", "Interassistencialidade", "Pesquisa", "Consciência", "Ectoplasmologia", "Bioenergologia", "Experimentação", "Docência", "Produção científica"];
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
    { num: "01", title: "Pesquisa", text: "Investigação técnica sobre ectoplasmia, consciência, interações energéticas e efeitos interassistenciais observáveis.", link: "pages/parcerias.html" },
    { num: "02", title: "Cursos", text: "Cursos e imersões que conectam estudo, observação, prática orientada e retribuição pela docência.", link: "pages/cursos.html" },
    { num: "03", title: "Paracirurgia", text: "Dinâmicas em 8 cidades e 3 Países. Laboratório de Paracirurgia replicável para qualquer Campus Conscienciológico.", link: "pages/paracirurgia.html" },
    { num: "04", title: "Qualificação", text: "Formação de voluntários, parcerias institucionais, produção científica e continuidade de pesquisa.", link: "pages/atividades.html" },
  ];
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow"><span className="dot"></span>O QUE FAZEMOS</div>
            <h2 className="h1" style={{ marginTop: 16, maxWidth: 820 }}>
              Quatro frentes, uma única missão:
              <strong style={{ color: "var(--teal)", fontWeight: 700 }}> interassistência</strong>.
            </h2>
          </div>
        </div>

        <div className="ofaz-grid h-scroll">
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
              A história da ciência avança quando fenômenos complexos passam a ser observados
              com linguagem, método e documentação. O <strong>ectoplasma</strong> é estudado pela
              Ectolab como hipótese e objeto de investigação técnica, em contextos de assistência,
              formação e experimentação grupal.
            </p>
            <p>
              A Ectolab organiza esse campo de estudo por meio de observação cuidadosa, registro
              disciplinado, revisão crítica e cooperação entre voluntários, docentes e pesquisadores.
              O <strong>Código Grupal de Cosmoética (CGC)</strong> orienta confidencialidade,
              responsabilidade interassistencial e seriedade institucional.
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
    { n: "01", title: "Entenda o Vocabulário", text: "Conceitos essenciais sobre ectoplasmia, paracirurgia, interassistência e investigação da consciência.", link: "pages/conscienciologia.html", time: "Entenda" },
    { n: "02", title: "Participe de uma DIP", text: "Formação de entrada para organizar linguagem, postura pesquisística e bases da prática interassistencial.", link: "pages/cursos.html", time: "Experimente" },
    { n: "03", title: "Faça um Curso", text: "Aprofundamento técnico em fenômenos ectoplásmicos, registro de experiência e qualificação energética.", link: "pages/cursos.html", time: "Desenvolva" },
    { n: "04", title: "Imersão Ectoplásmica", text: "Participação em curso de campo imersivo com observação, assistência e pesquisa aplicada.", link: "pages/atividades.html", time: "Aprofunde" },
  ];
  return (
    <section className="section trilha-mini">
      <div className="wrap">
        <div className="section-head between">
          <div>
            <div className="eyebrow"><span className="dot"></span>POR ONDE COMEÇAR</div>
            <h2 className="h1" style={{ marginTop: 16 }}>A Trilha do Saber, em 4 passos.</h2>
          </div>
          <a href="pages/trilha.html" className="btn btn-ghost hide-mobile">Ver Trilha do Saber completa →</a>
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
    { sigla: "PROEP", nome: "Programa Exclusivo Presencial em Foz", duracao: "Presencial", nivel: "Avançado", preco: "04 Alunos por Turma", color: "var(--teal-soft)", link: "pages/curso-proep.html" },
    { sigla: "IMERSÃO", nome: "Imersão em Ectoplasmia 2027", duracao: "Prática intensiva", nivel: "Campo de pesquisa", preco: "Vagas limitadas", color: "var(--teal-soft)", link: "pages/curso-imersao.html" },
    { sigla: "GRAVADO", nome: "Ectoplasmia Interassistencial", duracao: "Módulos gravados", nivel: "EaD", preco: "Acesso imediato", color: "var(--orange-soft)", link: "pages/curso-ectoplasmia-interassistencial.html" },
    { sigla: "PARCERIA", nome: "Materializações Interassistenciais", duracao: "Curso temático", nivel: "Aprofundamento", preco: "Em breve", color: "var(--paper-2)", link: "pages/cursos.html" },
  ];
  return (
    <section className="section" style={{ background: "var(--white)" }}>
      <div className="wrap">
        <div className="section-head between">
          <div>
            <div className="eyebrow"><span className="dot"></span>CURSOS &amp; PROGRAMAS</div>
            <h2 className="h1" style={{ marginTop: 16 }}>Formação, pesquisa e produção científica.</h2>
            <p className="lede" style={{ marginTop: 12, maxWidth: 760 }}>
              Programas para quem busca ambiente pesquisístico, imersões técnicas, parcerias com
              universidades e desenvolvimento de produção científica em ectoplasmia e paracirurgia.
            </p>
          </div>
          <a href="pages/cursos.html" className="btn btn-ghost hide-mobile">Ver todos os cursos →</a>
        </div>

        <div className="cursos-grid h-scroll">
          {cursos.map((c, i) => (
            <a href={c.link} key={c.sigla} className="curso-card" style={{ "--bg": c.color }}>
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

function ProximosEventos() {
  const proximos = todosEventos
    .filter(e => e.pinHome)
    .sort((a, b) => (a.homeOrdem || 999) - (b.homeOrdem || 999))
    .slice(0, 4);
  return (
    <section className="prox-eventos">
      <div className="wrap">
        <div className="prox-eventos__head">
          <div className="eyebrow"><span className="dot"></span>PRÓXIMAS ATIVIDADES</div>
          <a href="pages/agenda.html" className="link-arrow">Ver agenda completa →</a>
        </div>
        <div className="prox-eventos__rail">
          {proximos.map((e, i) => (
            <a href={e.href} key={i} className="prox-evento">
              <div className="prox-evento__date">
                <strong>{e.dia}</strong>
                <span>{e.mes}</span>
              </div>
              <div className="prox-evento__body">
                <span className="specimen prox-evento__tipo">{e.tipo}{e.gratuito ? " · GRATUITO" : ""}</span>
                <span className="h4 prox-evento__titulo">{e.titulo}</span>
                <span className="prox-evento__local">{e.local}</span>
              </div>
              <span className="agenda__arr">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function EventosBlog() {
  const showEventos = false;
  const eventos = [
    { data: "21 JUN", titulo: "DIP — Dinâmica Interassistencial da Paracirurgia · São Paulo", local: "Sede SP · Vila Mariana", tipo: "ATIVIDADE GRATUITA" },
    { data: "28 JUN", titulo: "DIP — Dinâmica Interassistencial · Curitiba", local: "Sede Curitiba · Centro", tipo: "ATIVIDADE GRATUITA" },
    { data: "05 JUL", titulo: "Imersão em Ectoplasmia 2027 — turma única", local: "Foz do Iguaçu · ambiente pesquisístico", tipo: "CURSO INTENSIVO" },
  ];
  const posts = [
    {
      tag: "AUTOPESQUISA",
      titulo: "A Técnica Arco Voltaico Craniochacral e Paracirurgia",
      autor: "ECTOLAB",
      data: "26 OUT 2025",
      href: "/tecnica-arco-voltaico-craniochacral-e-paracirurgia/",
    },
    {
      tag: "AUTOQUALIFICAÇÃO",
      titulo: "Qualificação dos pensenes do ectoplasta",
      autor: "ECTOLAB",
      data: "22 SET 2025",
      href: "/qualificacao-dos-pensenes-do-ectoplasta/",
    },
    {
      tag: "SAÚDE ENERGÉTICA",
      titulo: "Saúde Energética: O que é? Como desenvolver?",
      autor: "ECTOLAB",
      data: "22 JUN 2025",
      href: "/saude-energetica-o-que-e-como-desenvolver/",
    },
    {
      tag: "PARACIRURGIA",
      titulo: "Paracirurgia e Ectoplasmia: qual a relação com o ECTOLAB?",
      autor: "ECTOLAB",
      data: "01 MAI 2025",
      href: "/paracirurgia-ectoplasmia/",
    },
  ];
  return (
    <section className="section eventos-blog">
      <div className="wrap">
        <div className={showEventos ? "grid g2 gap-48" : "blog-home-panel"}>
          {showEventos && (
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
          )}
          <div>
            <div className="eyebrow"><span className="dot"></span>DO BLOG</div>
            <h2 className="h2" style={{ marginTop: 12 }}>Últimos artigos publicados.</h2>
            <p className="lede" style={{ marginTop: 12, maxWidth: 720 }}>
              Conteúdos do acervo real da Ectolab sobre ectoplasmia, paracirurgia,
              saúde energética e autopesquisa.
            </p>
            <ul className="agenda agenda--blog">
              {posts.map((p, i) => (
                <li key={i} onClick={() => { window.location.href = p.href; }}>
                  <span className="col" style={{ flex: 1, gap: 6 }}>
                    <span className="tag" style={{ alignSelf: "flex-start" }}>{p.tag}</span>
                    <span className="h4">{p.titulo}</span>
                    <span className="muted" style={{ fontSize: 13 }}>{p.autor} &middot; {p.data}</span>
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
    { t: "Ectoplasma", d: "Substância ou energia semimaterial exteriorizada pela consciência, associada a fenômenos parapsíquicos de materialização e efeitos físicos.", aka: "do gr. ektós (fora) + plásma (forma)" },

{ t: "Ectoplasmia", d: "Conjunto de práticas interassistenciais fundamentadas na exteriorização lúcida e controlada do ectoplasma com finalidade assistencial e paraterapêutica.", aka: "ectoplasma + -ia (processo, ação)" },

{ t: "Ectoplasta", d: "Consciência capaz de produzir e exteriorizar ectoplasma de modo lúcido, atuando em atividades interassistenciais energéticas.", aka: "ectoplasma + -sta (agente, executor)" },

{ t: "Ectoplastia", d: "Processo técnico de utilização do ectoplasma na recomposição, modelagem ou intervenção energética em estruturas somáticas ou extrafísicas.", aka: "ectoplasma + plastia (modelagem, formação)" },
  ];
  return (
    <section className="section glossario">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow"><span className="dot"></span>GLOSSÁRIO RÁPIDO</div>
            <h2 className="h1" style={{ marginTop: 16, maxWidth: 700 }}>
              Os 4 termos que adentram a especialidade.
            </h2>
          </div>
        </div>
        <div className="glossario-grid h-scroll">
          {terms.map((t, i) => (
            <div className="gloss" key={i}>
              <span className="specimen">Termo Nº {String(i + 1).padStart(2, "0")}</span>
              <h3 className="serif gloss__t">{t.t}</h3>
              <p className="gloss__d">{t.d}</p>
              <p className="mono gloss__aka">{t.aka}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 40, textAlign: "center" }}>
          <a href="pages/conscienciologia.html" className="btn btn-ghost">
            Saiba mais →
          </a>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const qs = [
    { q: "A Ectolab é uma instituição religiosa?", a: "Não. A Ectolab é uma associação sem fins lucrativos dedicada à pesquisa, ao ensino e à interassistência. O trabalho é conduzido com linguagem técnica, voluntariado, confidencialidade e compromisso institucional." },
    { q: "A paracirurgia substitui tratamento médico?", a: "Não. A paracirurgia é uma prática interassistencial de base energética e não substitui medicina, psicologia ou qualquer cuidado regulamentado. Relatos e resultados são tratados como dados de acompanhamento, não como promessa." },
    { q: "Como funciona a solicitação de paracirurgia?", a: "A pessoa preenche o formulário, recebe orientações de preparo e participa à distância em horário indicado. Depois, pode registrar percepções e efeitos observados para apoiar o acompanhamento e a pesquisa institucional." },
    { q: "Preciso ter alguma crença para participar?", a: "Não. A participação exige abertura para observar, registrar e avaliar a própria experiência com honestidade. O Princípio da Descrença orienta análise crítica e autonomia do pesquisador ou participante." },
    { q: "Qual é a diferença entre cirurgia espiritual e paracirurgia?", a: "A Ectolab trabalha com a paracirurgia como prática técnica, laica e interassistencial, organizada por equipe, preparo, protocolo e registro. A abordagem institucional evita linguagem devocional e foca qualificação da assistência." },
  ];
  const [open, setOpen] = useState(0);
  return (
    <section className="section faq">
      <div className="wrap">
        <div className="grid g2 gap-48" style={{ alignItems: "start" }}>
          <div className="faq-left">
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
    { quote: "Encontrei uma instituição que organiza experiência, linguagem e registro. Isso mudou minha forma de estudar os fenômenos ectoplásmicos.", autor: "ECTOLAB", role: "Pesquisa institucional" },
    { quote: "O Princípio da Descrença, quando aplicado com método, transforma curiosidade em investigação e experiência em responsabilidade.", autor: "ECTOLAB", role: "Pesquisa institucional" },
    { quote: "A dinâmica interassistencial exige preparo, cooperação e atenção ao detalhe. É nesse conjunto que a pesquisa começa a ganhar forma.", autor: "Marta Olinda", role: "Voluntária · 16 anos de campo" },
  ];
  return (
    <section className="section depo">
      <div className="wrap">
        <div className="eyebrow"><span className="dot"></span>VOZES DA ECTOLAB</div>
        <div className="depo-grid h-scroll">
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
                Receba <strong style={{ color: "var(--orange)", fontWeight: 700 }}>novidades da Ectolab</strong>, todo mês.
              </h2>
              <p className="lede" style={{ marginTop: 12, color: "rgba(255,255,255,0.78)" }}>
                Resumo de pesquisa, calendário de dinâmicas, artigos e novos verbetes.
                conteúdos, agenda e publicações institucionais.
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
      <ProximosEventos />
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

