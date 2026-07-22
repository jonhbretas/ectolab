/**
 * @fileoverview Gerenciador Global de Interface (Menu, Footer, Tradução).
 * 
 * Centraliza elementos da interface que se repetem. Assim você evita 
 * duplicar código entre arquivos estáticos (.html) e módulos React (.jsx).
 */

(function () {
  // --- 1. Inicialização de Estado ---
  const lang = (localStorage.getItem("ecto_lang") || "PT").toUpperCase();
  const active = document.body.getAttribute("data-active") || "";

  // Usar rotas absolutas a partir da raiz para garantir consistência no carregamento de links e assets
  const P = "/";

  // --- 2. Central de Navegação (Criação de Novas Páginas) ---
  // Para registrar uma NOVA PÁGINA no menu do site, basta inserir o objeto abaixo.
  const logoPath = "/logo.webp";
  const logoWhitePath = "/logo-branca-ectolab.png";
  const logoHTML = `<img src="${logoPath}" alt="Logo Ectolab" class="brand-img" />`;

  const navItems = [
    { id: "agenda",        label: "Agenda",          href: P + "pages/agenda.html" },
    {
      id: "paracirurgia",  
      label: "Paracirurgia",    
      href: P + "pages/paracirurgia.html",
      dropdown: [
        { cat: "Assistência", links: [
          { label: "O que é a Paracirurgia", href: P + "pages/paracirurgia.html" },
          { label: "Solicitar Paracirurgia ↗", href: "https://dip-ectolab.org.br/pedido-paracirurgia", target: "_blank" },
          { label: "Enviar Relatório do Pedido", href: P + "pages/relatorio-pedido.html" },
          { label: "Pontuações ↗", href: "https://dip-ectolab.org.br/pedido-paracirurgia/pontuacoes", target: "_blank" }
        ]},
        { cat: "Rede de Paracirurgia", links: [
          { label: "Sobre a Rede Invisível", href: P + "pages/rede.html" },
          { label: "Cadastro na Rede", href: P + "pages/rede-cadastro.html" },
          { label: "Relatório da Rede", href: P + "pages/rede-relatorio.html" }
        ]},
        { cat: "Sistema", links: [
          { label: "Acessar Sistema ↗", href: "https://dip-ectolab.org.br/login", target: "_blank" }
        ]}
      ]
    },
    { id: "trilha",        label: "Trilha",          href: P + "pages/trilha.html" },
    {
      id: "cursos",
      label: "Cursos",
      href: P + "pages/cursos.html",
      dropdown: [
        { cat: "Cursos de Campo", links: [
          { label: "Imersão em Ectoplasmia", href: P + "pages/curso-imersao.html" },
          { label: "EPPI", href: P + "pages/curso-eppi.html" },
          { label: "Campo Paracirúrgico", href: P + "pages/curso-campo.html" }
        ]},
        { cat: "Presenciais", links: [
          { label: "PROEP", href: P + "pages/curso-proep.html" },
          { label: "Fitoectoplasmia Interassistencial", href: P + "pages/cursos.html#presenciais" }
        ]},
        { cat: "Gravados (Online)", links: [
          { label: "Ectoplasmia Interassistencial", href: P + "pages/curso-ectoplasmia-interassistencial.html" },
          { label: "Ectoplasmia Protetiva", href: P + "pages/curso-ectoplasmia-protetiva.html" },
          { label: "Quadro Sinóptico Parapesquisístico", href: P + "pages/curso-quadro-sinoptico.html" },
          { label: "Aplicação Prática da Ectoplasmia", href: P + "pages/curso.html?id=aplicacao" },
          { label: "Ciclo Vital do Ectoplasta", href: P + "pages/curso.html?id=ciclo" },
          { label: "Raízes da Ectoplasmia", href: P + "pages/curso.html?id=raizes" }
        ]},
        { cat: "Online (Ao Vivo / Síncrono)", links: [
          { label: "Auto-organização Bioenergética", href: P + "pages/curso.html?id=auto-org" },
          { label: "Qualificação dos Pensenes", href: P + "pages/curso.html?id=qualificacao" }
        ]},
        { cat: "Oficina", links: [
          { label: "Oficina de Ectoplasmologia", href: P + "pages/oficina-ectoplasmologia.html" }
        ]}
      ]
    },
    { 
      id: "atividades", 
      label: "Atividades", 
      href: P + "pages/atividades.html",
      dropdown: [
        { cat: "Gratuitos", links: [
          { label: "Blog", href: P + "pages/blog.html" },
          { label: "OGB - Orientação Gratuita em Bioenergologia", href: P + "pages/orientacao-gratuita.html" },
          { label: "Pedido de Tenepes", href: P + "pages/tenepes.html" },
          { label: "Diálogos Online", href: "https://www.youtube.com/playlist?list=PLpz4qwgYZyP3SxfEenlleSpxgqYMaVUhb", target: "_blank" }
        ]},
        { cat: "Eventos & Consultoria", links: [
          { label: "Agenda Completa", href: P + "pages/agenda.html" },
          { label: "Fórum Internacional (Online)", href: P + "pages/curso.html?id=forum" },
          { label: "Preceptoria em Ectoplasmia", href: P + "pages/curso.html?id=preceptoria" }
        ]},
        { cat: "Dinâmicas (DIP)", href: P + "pages/dinamicas.html", links: [
          { label: "Foz do Iguaçu (Sede)", href: P + "pages/dinamica.html?loc=foz" },
          { label: "São Paulo", href: P + "pages/dinamica.html?loc=sp" },
          { label: "Rio de Janeiro", href: P + "pages/dinamica.html?loc=rj" },
          { label: "Curitiba", href: P + "pages/dinamica.html?loc=curitiba" },
          { label: "Florianópolis", href: P + "pages/dinamica.html?loc=floripa" },
          { label: "Brasília", href: P + "pages/dinamica.html?loc=brasilia" },
          { label: "Alemanha", href: P + "pages/dinamica.html?loc=alemanha" },
          { label: "Portugal", href: P + "pages/dinamica.html?loc=portugal" }
        ]}
      ]
    },
    { 
      id: "quem", 
      label: "Ectolab", 
      href: P + "pages/quem-somos.html",
      dropdown: [
        { cat: "A Instituição", links: [
          { label: "Quem Somos & CGC", href: P + "pages/quem-somos.html" },
          { label: "Nossa História", href: P + "pages/historia.html" },
          { label: "Contato e Sede", href: P + "pages/contato.html" },
          { label: "Parcerias de Pesquisa", href: P + "pages/parcerias.html" },
          { label: "Apoie a Ectolab", href: P + "pages/apoie.html" }
        ]},
        { cat: "Laboratórios", links: [
          { label: "Laboratório de Paracirurgia", href: P + "pages/laboratorio-paracirurgia.html" },
          { label: "Espaço Bioenergologia", href: P + "pages/bioenergologia.html" },
          { label: "Laboratório de Ectoplasmologia", href: P + "pages/laboratorio-ectoplasmologia.html" }
        ]},
        { cat: "Acervo de Pesquisa", links: [
          { label: "Livro Ectoplasma", href: P + "pages/ectoplasma-livro.html" },
          { label: "Base: Conscienciologia", href: P + "pages/conscienciologia.html" },
          { label: "Materiais Publicados & FAQ", href: P + "pages/materiais.html" }
        ]}
      ]
    },
    { id: "blog",          label: "Blog",            href: P + "pages/blog.html" },
  ];

  const navHTML = navItems
    .map((n) => {
      if (n.dropdown) {
        const dropGroups = n.dropdown.map(d => `
          <div class="nav-drop-group">
            ${d.href ? `<a href="${d.href}" class="nav-drop-cat nav-drop-cat--link">${d.cat}</a>` : `<span class="nav-drop-cat">${d.cat}</span>`}
            ${d.links.map(l => `<a href="${l.href}" ${l.target ? `target="${l.target}" rel="noreferrer"` : ""}>${l.label}</a>`).join("")}
          </div>
        `).join("");
        return `
          <div class="nav-item has-drop">
            <a href="${n.href}" class="${active === n.id ? "active" : ""}">${n.label} <span class="caret">▾</span></a>
            <div class="nav-dropdown">${dropGroups}</div>
          </div>
        `;
      }
      return `<div class="nav-item"><a href="${n.href}" class="${active === n.id ? "active" : ""}" ${n.target ? `target="${n.target}" rel="noreferrer"` : ""}>${n.label}</a></div>`;
    })
    .join("");

  // Mobile drawer nav (accordion)
  const mobileNavHTML = navItems.map(n => {
    if (n.dropdown) {
      const id = `mnav-${n.id}`;
      const groups = n.dropdown.map(d => `
        <div class="mnav-group">
          ${d.href ? `<a href="${d.href}" class="mnav-cat mnav-cat--link">${d.cat}</a>` : `<span class="mnav-cat">${d.cat}</span>`}
          ${d.links.map(l => `<a href="${l.href}" class="mnav-link"${l.target ? ` target="${l.target}" rel="noreferrer"` : ""}>${l.label}</a>`).join("")}
        </div>`).join("");
      return `
        <div class="mnav-item has-sub">
          <div class="mnav-row">
            <a href="${n.href}" class="mnav-label">${n.label}</a>
            <button class="mnav-expander" aria-expanded="false" data-target="${id}">▾</button>
          </div>
          <div class="mnav-sub" id="${id}">${groups}</div>
        </div>`;
    }
    return `
      <div class="mnav-item">
        <a href="${n.href}" class="mnav-label"${n.target ? ` target="${n.target}" rel="noreferrer"` : ""}>${n.label}</a>
      </div>`;
  }).join("");

  const header = `
    <header class="site-header">
      <div class="wrap site-header__inner">
        <a href="${P}index.html" class="brand">
          ${logoHTML}
        </a>
        <nav class="nav">${navHTML}</nav>
        <div class="header-actions" aria-label="Ações rápidas">
          <a href="${P}pages/parcerias.html" class="btn btn-parcerias btn-sm">Parcerias</a>
          <a href="https://dip-ectolab.org.br/pedido-paracirurgia" target="_blank" rel="noreferrer" class="btn btn-orange btn-sm">Paracirurgia</a>
          <a href="${P}pages/tenepes.html" class="btn btn-ghost btn-sm">Tenepes</a>
        </div>
        <select class="lang-select" aria-label="Idioma">
          <option value="PT" ${lang === "PT" ? "selected" : ""}>PT</option>
          <option value="EN" ${lang === "EN" ? "selected" : ""}>EN</option>
          <option value="ES" ${lang === "ES" ? "selected" : ""}>ES</option>
        </select>
        <button class="nav-toggle" aria-label="Abrir menu" aria-expanded="false">
          <span class="nav-toggle__bar"></span>
          <span class="nav-toggle__bar"></span>
          <span class="nav-toggle__bar"></span>
        </button>
      </div>
    </header>
    <div class="nav-overlay" id="navOverlay"></div>
    <div class="nav-drawer" id="navDrawer" aria-hidden="true">
      <div class="nav-drawer__header">
        <a href="${P}index.html" class="brand">
          <img src="${logoPath}" alt="Ectolab" class="brand-img" />
        </a>
        <button class="nav-drawer__close" id="navClose" aria-label="Fechar menu">✕</button>
      </div>
      <nav class="mnav">${mobileNavHTML}</nav>
      <div class="nav-drawer__ctas">
        <div class="drawer-action-grid">
          <a href="${P}pages/parcerias.html" class="btn btn-ghost btn-sm">Parcerias</a>
          <a href="https://dip-ectolab.org.br/pedido-paracirurgia" target="_blank" rel="noreferrer" class="btn btn-orange btn-sm">Paracirurgia <span class="arrow">↗</span></a>
          <a href="${P}pages/tenepes.html" class="btn btn-ghost btn-sm">Tenepes</a>
        </div>
        <select class="lang-select" aria-label="Idioma" style="width:100%">
          <option value="PT" ${lang === "PT" ? "selected" : ""}>Português</option>
          <option value="EN" ${lang === "EN" ? "selected" : ""}>English</option>
          <option value="ES" ${lang === "ES" ? "selected" : ""}>Español</option>
        </select>
      </div>
    </div>`;

  const footer = `
    <footer class="site-footer">
      <div class="wrap">
        <div class="grid">
          <div>
            <div class="flex center gap-12" style="margin-bottom:18px">
              <img src="${logoWhitePath}" alt="Ectolab" style="height:36px;width:auto" />
            </div>
            <p style="font-size:14px;line-height:1.6;opacity:0.78;max-width:300px">
              Associação Internacional de Pesquisa Laboratorial em Paracirurgia e Ectoplasmia.
              Fundada em 2013, com sede em Foz do Iguaçu, Brasil.
            </p>
            <p class="mono" style="font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:rgba(255,255,255,0.62);margin-top:24px">
              CNPJ &nbsp;18.782.858/0001-10
            </p>
          </div>
          <div>
            <h5>Pesquisa</h5>
            <ul>
              <li><a href="${P}pages/paracirurgia.html">Paracirurgia</a></li>
              <li><a href="${P}pages/conscienciologia.html">Ciência &amp; Ectoplasmologia</a></li>
              <li><a href="${P}pages/quem-somos.html">Quem somos &middot; CGC</a></li>
              <li><a href="${P}pages/historia.html">Nossa História</a></li>
            </ul>
          </div>
          <div>
            <h5>Conteúdo</h5>
            <ul>
              <li><a href="${P}pages/trilha.html">Trilha do Saber</a></li>
              <li><a href="${P}pages/cursos.html">Cursos</a></li>
              <li><a href="${P}pages/atividades.html">Atividades &amp; Eventos</a></li>
              <li><a href="${P}pages/blog.html">Blog</a></li>
            </ul>
          </div>
          <div>
            <h5>Contato</h5>
            <ul>
              <li><strong>Sede</strong><br><a href="${P}pages/contato.html">Foz do Iguaçu</a></li>
              <li><strong>WhatsApp</strong><br><a href="https://wa.me/5545991011407" target="_blank" rel="noreferrer">+55 (45) 99101-1407</a></li>
              <li><strong>E-mail</strong><br><a href="mailto:contato@ectolab.org">contato@ectolab.org</a></li>
              <li><strong>Doações</strong><br><a href="mailto:financeiro@ectolab.org">financeiro@ectolab.org</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-apoie">
          <div class="footer-apoie__text">
            <span class="footer-apoie__label">Apoie a Ectolab</span>
            <span class="footer-apoie__sub">Pesquisa e interassistência sustentadas por voluntários. Sua contribuição mantém tudo isso vivo.</span>
          </div>
          <a href="${P}pages/apoie.html" class="btn btn-orange btn-sm">Saiba como apoiar <span class="arrow">→</span></a>
        </div>
        <div class="copy">
          <span>© 2013–2026 Ectolab. Todos os direitos reservados. &nbsp;◆&nbsp; <a href="${P}pages/politica-de-privacidade.html">Política de Privacidade</a></span>
          <span>Foz do Iguaçu · Paraná · Brasil &nbsp;◆&nbsp; 25° 32′ S · 54° 35′ W</span>
        </div>
      </div>
    </footer>`;

  // Insert
  const headerSlot = document.getElementById("__header");
  const footerSlot = document.getElementById("__footer");
  if (headerSlot) headerSlot.outerHTML = header;
  if (footerSlot) footerSlot.outerHTML = footer;

  const I18N_TEXT = {
    EN: {
      "Paracirurgia": "Parasurgery",
      "Agenda": "Schedule",
      "Sistema": "System",
      "Acessar Sistema ↗": "Access System ↗",
      "O que é a Paracirurgia": "What Parasurgery Is",
      "Solicitar Paracirurgia ↗": "Request Parasurgery ↗",
      "Enviar Relatório do Pedido": "Submit Request Report",
      "Painel de Pedidos": "Request Dashboard",
      "Rede de Paracirurgia": "Parasurgery Network",
      "Sobre a Rede Invisível": "About the Invisible Network",
      "Cadastro na Rede": "Network Registration",
      "Relatório da Rede": "Network Report",
      "Trilha": "Pathway",
      "Cursos": "Courses",
      "Cursos de Campo": "Field Courses",
      "Campo Paracirúrgico": "Parasurgical Field",
      "Imersão em Ectoplasmia": "Ectoplasmy Immersion",
      "Presenciais": "In Person",
      "Ectoplasmia Protetiva": "Protective Ectoplasmy",
      "Online (Ao Vivo / Síncrono)": "Online (Live / Synchronous)",
      "Auto-organização Bioenergética": "Bioenergetic Self-Organization",
      "Qualificação dos Pensenes": "Thosene Qualification",
      "Gravados (Online)": "Recorded (Online)",
      "Ectoplasmia Interassistencial": "Interassistantial Ectoplasmy",
      "Ectoplasmia Protetiva": "Protective Ectoplasmy",
      "Quadro Sinóptico Parapesquisístico": "Pararesearch Synoptic Table",
      "Aplicação Prática da Ectoplasmia": "Practical Application of Ectoplasmy",
      "Ciclo Vital do Ectoplasta": "Ectoplast Life Cycle",
      "Raízes da Ectoplasmia": "Roots of Ectoplasmy",
      "Fitoectoplasmia Interassistencial": "Interassistantial Phytoectoplasmy",
      "Oficina": "Workshop",
      "Oficina de Ectoplasmologia": "Ectoplasmology Workshop",
      "Atividades": "Activities",
      "Laboratórios": "Laboratories",
      "Laboratório de Paracirurgia": "Parasurgery Laboratory",
      "Espaço Bioenergologia": "Bioenergology Space",
      "Laboratório de Ectoplasmologia": "Ectoplasmology Laboratory",
      "Gratuitos": "Free",
      "OGB - Orientação Gratuita em Bioenergologia": "OGB - Free Bioenergology Guidance",
      "Pedido de Tenepes": "Tenepes Request",
      "Diálogos Online": "Online Dialogues",
      "Orientação Gratuita (OGB)": "Free Bioenergetic Guidance (OGB)",
      "Eventos & Consultoria": "Events & Consulting",
      "Fórum Internacional (Online)": "International Forum (Online)",
      "Preceptoria em Ectoplasmia": "Ectoplasmy Mentorship",
      "Dinâmicas (DIP)": "Dynamics (DIP)",
      "Foz do Iguaçu (Sede)": "Foz do Iguaçu (Headquarters)",
      "São Paulo": "Sao Paulo",
      "Rio de Janeiro": "Rio de Janeiro",
      "Curitiba": "Curitiba",
      "Florianópolis": "Florianopolis",
      "Brasília": "Brasilia",
      "Alemanha": "Germany",
      "Portugal": "Portugal",
      "Ectolab": "Ectolab",
      "A Instituição": "The Institution",
      "Quem Somos & CGC": "Who We Are & GCE",
      "Nossa História": "Our History",
      "Contato e Sede": "Contact and Headquarters",
      "Parcerias de Pesquisa": "Research Partnerships",
      "Parcerias": "Partnerships",
      "Tenepes": "Tenepes",
      "Apoie a Ectolab": "Support Ectolab",
      "Acervo de Pesquisa": "Research Collection",
      "Base: Conscienciologia": "Foundation: Conscientiology",
      "Livro Ectoplasma": "Ectoplasm Book",
      "Materiais Publicados & FAQ": "Published Materials & FAQ",
      "Blog": "Blog",
      "Apoie": "Support",
      "Acessar sistema": "Access system",
      "Solicitar paracirurgia": "Request parasurgery",
      "Paracirurgia": "Parasurgery",
      "Pesquisa": "Research",
      "Ciência & Ectoplasmologia": "Science & Ectoplasmology",
      "Quem somos · CGC": "Who we are · GCE",
      "Conteúdo": "Content",
      "Trilha do Saber": "Knowledge Pathway",
      "Atividades & Eventos": "Activities & Events",
      "Contato": "Contact",
      "Ver Local": "See Location",
      "Telefone: +55 (45) 3025-XXXX": "Phone: +55 (45) 3025-XXXX",
      "Newsletter": "Newsletter",
      "Imprensa": "Press",
      "Todos os direitos reservados.": "All rights reserved.",
      "Associação Internacional de Pesquisa Laboratorial em Paracirurgia e Ectoplasmia.": "International Association for Laboratory Research in Parasurgery and Ectoplasmy.",
      "Fundada em 2013, com sede em Foz do Iguaçu, Brasil.": "Founded in 2013, headquartered in Foz do Iguaçu, Brazil.",
      "ECTOLAB  ·  ASSOCIAÇÃO INTERNACIONAL DE PESQUISA EM ECTOPLASMIA E PARACIRURGIA": "ECTOLAB  ·  INTERNATIONAL ASSOCIATION FOR RESEARCH IN ECTOPLASMY AND PARASURGERY",
      "ECTOLAB  ·  ASSOCIAÇÃO INTERNACIONAL DE PESQUISA EM ECTOPLASMIA E PARACIRURGIA  ·  EST. 2013": "ECTOLAB  ·  INTERNATIONAL ASSOCIATION FOR RESEARCH IN ECTOPLASMY AND PARASURGERY  ·  EST. 2013",
      "Pesquisa técnica": "Technical research",
      "em fenômenos ectoplásmicos": "into ectoplasmic phenomena",
      "Pesquisa em ectoplasmia,": "Research in ectoplasmy,",
      "paracirurgia e interassistência": "parasurgery and interassistantial care",
      "A Ectolab é a Associação Internacional de Pesquisa em Ectoplasmia e Paracirurgia. Investigamos o ectoplasma, a paracirurgia e os fenômenos ectoplásmicos com método, registro técnico e compromisso interassistencial.": "Ectolab is the International Association for Research in Ectoplasmy and Parasurgery. We investigate ectoplasm, parasurgery, and ectoplasmic phenomena with method, technical records, and an interassistantial commitment.",
      "A Ectolab é a Associação Internacional de Pesquisa em Ectoplasmia e Paracirurgia. Desenvolvemos investigação técnica e experimental sobre fenômenos ectoplásmicos, formação de voluntários e práticas interassistenciais.": "Ectolab is the International Association for Research in Ectoplasmy and Parasurgery. We develop technical and experimental investigation into ectoplasmic phenomena, volunteer training, and interassistantial practices.",
      "Consultar a Trilha do Saber": "View the Knowledge Pathway",
      "Buscar conhecimento": "Explore knowledge",
      "Resumo": "Summary",
      "Natureza": "Nature",
      "Associação internacional de pesquisa, sem fins lucrativos": "International nonprofit research association",
      "Especialidades": "Specialties",
      "Ectoplasmologia · Paracirurgia · Bioenergologia": "Ectoplasmology · Parasurgery · Bioenergology",
      "Base científica": "Scientific basis",
      "Conscienciologia (W. Vieira, 1981)": "Conscientiology (W. Vieira, 1981)",
      "Princípio": "Principle",
      "Descrença lúcida, experimentação pessoal e registro crítico": "Lucid disbelief, personal experimentation, and critical records",
      "Sede": "Headquarters",
      "Foz do Iguaçu, Paraná · BR": "Foz do Iguaçu, Paraná · BR",
      "Regime": "Model",
      "100% voluntariado": "100% volunteer-based",
      "Ler ficha completa →": "Read full profile →",
      "Pesquisar": "Research",
      "Ensinar": "Teach",
      "Assistir": "Assist",
      "Publicar": "Publish",
      "Investigação da consciência, dos fenômenos ectoplásmicos e das interações energéticas.": "Investigation of consciousness, ectoplasmic phenomena, and energetic interactions.",
      "Aprendizagem orientada pela pesquisa e retribuição do conhecimento pela docência.": "Learning guided by research and giving knowledge back through teaching.",
      "Dinâmicas em Brasília, Curitiba, Foz do Iguaçu, São Paulo, Rio de Janeiro, Florianópolis, Portugal e Alemanha.": "Dynamics in Brasilia, Curitiba, Foz do Iguaçu, Sao Paulo, Rio de Janeiro, Florianopolis, Portugal, and Germany.",
      "Livros, artigos, verbetes, blog técnico e resultados de pesquisas institucionais.": "Books, articles, entries, technical blog posts, and institutional research results.",
      "NOSSO PILAR FILOSÓFICO": "OUR PHILOSOPHICAL PILLAR",
      "Princípio da Descrença": "Principle of Disbelief",
      "Toda informação deve ser submetida à experimentação pessoal, ao registro disciplinado e à análise crítica.": "Every piece of information should be submitted to personal experimentation, disciplined records, and critical analysis.",
      "Este princípio orienta a postura pesquisística da Ectolab: observar com honestidade, registrar com método, comparar evidências e revisar conclusões. Ele atravessa cursos, dinâmicas de paracirurgia, artigos e relatórios institucionais.": "This principle guides Ectolab's research posture: observe honestly, record methodically, compare evidence, and review conclusions. It runs through courses, parasurgery dynamics, articles, and institutional reports.",
      "CAMINHO 01": "PATH 01",
      "Busco assistência": "I seek assistance",
      "Quero solicitar paracirurgia para mim, terceiros ou animais e compreender preparo, prazos e registro pós-atendimento.": "I want to request parasurgery for myself, others, or animals, and understand preparation, timing, and post-service records.",
      "Solicitar paracirurgia ↗": "Request parasurgery ↗",
      "CAMINHO 02": "PATH 02",
      "Quero aprender": "I want to learn",
      "Quero entender ectoplasmia, conhecer a formação inicial, participar de atividades práticas e avançar na pesquisa.": "I want to understand ectoplasmy, learn about initial training, join practical activities, and advance in research.",
      "Consultar a Trilha do Saber →": "View the Knowledge Pathway →",
      "O QUE FAZEMOS": "WHAT WE DO",
      "Quatro frentes, uma única missão:": "Four fronts, one mission:",
      "interassistência": "interassistantial care",
      "Pesquisa aplicada": "Applied research",
      "Ensino pesquisístico": "Research-based education",
      "Desenvolvimento interassistencial": "Interassistantial development",
      "Conhecer →": "Learn more →",
      "POR QUE FAZEMOS": "WHY WE DO IT",
      "Porque o invisível também": "Because the invisible also",
      "merece laboratório": "deserves a laboratory",
      "Fenômenos ectoplásmicos": "Ectoplasmic phenomena",
      "pedem investigação técnica": "call for technical investigation",
      "Ler a história completa →": "Read the full history →",
      "POR ONDE COMEÇAR": "WHERE TO BEGIN",
      "A Trilha do Saber, em 4 passos.": "The Knowledge Pathway in 4 steps.",
      "Ver trilha →": "View pathway →",
      "Entenda o Vocabulário": "Understand the Vocabulary",
      "Participe de uma DIP": "Join a DIP",
      "Faça um Curso": "Take a Course",
      "Imersão Ectoplásmica": "Ectoplasmic Immersion",
      "Entenda": "Understand",
      "Experimente": "Experience",
      "Desenvolva": "Develop",
      "Aprofunde": "Go deeper",
      "CURSOS & PROGRAMAS": "COURSES & PROGRAMS",
      "Formação, pesquisa e produção científica.": "Training, research, and scientific production.",
      "Ver todos os cursos →": "View all courses →",
      "DO BLOG": "FROM THE BLOG",
      "Últimos artigos publicados.": "Latest published articles.",
      "Conteúdos do acervo real da Ectolab sobre ectoplasmia, paracirurgia, saúde energética e autopesquisa.": "Content from Ectolab's real archive on ectoplasmy, parasurgery, energetic health, and self-research.",
      "Ler o blog →": "Read the blog →",
      "GLOSSÁRIO RÁPIDO": "QUICK GLOSSARY",
      "Os 4 termos que adentram a especialidade.": "The 4 terms that introduce the specialty.",
      "Ectoplasma": "Ectoplasm",
      "Hipótese de substância ou energia semimaterial associada a manifestações observadas em fenômenos ectoplásmicos.": "A hypothesis of a semimaterial substance or energy associated with manifestations observed in ectoplasmic phenomena.",
      "Paracirurgia": "Parasurgery",
      "Prática interassistencial de base energética, conduzida com preparo, equipe, protocolo e registro pós-atendimento.": "An energy-based interassistantial practice conducted with preparation, team, protocol, and post-service records.",
      "Interassistência": "Interassistantiality",
      "Relação de auxílio mútuo em que assistência, aprendizagem e responsabilidade caminham juntas.": "A mutual-help relationship in which assistance, learning, and responsibility move together.",
      "Pesquisa": "Research",
      "Postura técnica de observar, registrar, comparar, revisar e transformar experiência em conhecimento comunicável.": "A technical posture of observing, recording, comparing, reviewing, and turning experience into communicable knowledge.",
      "Saiba mais →": "Learn more →",
      "PRIMEIROS PASSOS": "FIRST STEPS",
      "Cinco perguntas que": "Five questions",
      "todo mundo": "everyone",
      "faz.": "asks.",
      "Respondemos com a clareza que gostaríamos de ter recebido quando entramos.": "We answer with the clarity we wish we had received when we first arrived.",
      "FAQ técnico completo": "Full technical FAQ",
      "A Ectolab é uma instituição religiosa?": "Is Ectolab a religious institution?",
      "A paracirurgia substitui tratamento médico?": "Does parasurgery replace medical treatment?",
      "Como funciona a solicitação de paracirurgia?": "How does a parasurgery request work?",
      "Preciso ter alguma crença para participar?": "Do I need to hold any belief to participate?",
      "Qual é a diferença entre cirurgia espiritual e paracirurgia?": "What is the difference between spiritual surgery and parasurgery?",
      "VOZES DA ECTOLAB": "ECTOLAB VOICES",
      "BOLETIM MENSAL": "MONTHLY NEWSLETTER",
      "Receba": "Receive",
      "novidades da Ectolab": "Ectolab news",
      "todo mês.": "every month.",
      "Assinar": "Subscribe",
      "Sem spam. Cancele quando quiser.": "No spam. Cancel anytime.",
      "Cursos Ectolab": "Ectolab Courses",
      "Presenciais, online e campo": "In person, online, and field",
      "Vivencia assistencial": "Assistantial experience",
      "Formacao progressiva": "Progressive training",
      "Atendimento gratuito": "Free service",
      "Receba orientacao bioenergetica e conheca caminhos de estudo na Ectolab.": "Receive bioenergetic guidance and learn about study paths at Ectolab.",
      "Ver OGB": "View OGB",
      "Cursos e trilhas": "Courses and pathways",
      "Atividades": "Activities",
      "Acompanhamento tecnico": "Technical guidance",
      "Dinamicas interassistenciais": "Interassistantial dynamics",
      "Atendimento a distancia": "Remote service",
      "Outros posts": "Other posts",
      "Pesquisar mais": "Explore more",
      "Todos os artigos": "All articles",
      "Acervo completo": "Complete archive",
      "Materiais publicados": "Published materials",
      "Livros, FAQ e referencias": "Books, FAQ, and references",
      "Conscienciologia": "Conscientiology",
      "Base teorica": "Theoretical basis"
    },
    ES: {
      "Paracirurgia": "Paracirugía",
      "Agenda": "Agenda",
      "Sistema": "Sistema",
      "Acessar Sistema ↗": "Acceder al Sistema ↗",
      "O que é a Paracirurgia": "Qué es la Paracirugía",
      "Solicitar Paracirurgia ↗": "Solicitar Paracirugía ↗",
      "Enviar Relatório do Pedido": "Enviar Informe de la Solicitud",
      "Painel de Pedidos": "Panel de Solicitudes",
      "Rede de Paracirurgia": "Red de Paracirugía",
      "Sobre a Rede Invisível": "Sobre la Red Invisible",
      "Cadastro na Rede": "Registro en la Red",
      "Relatório da Rede": "Informe de la Red",
      "Trilha": "Ruta",
      "Cursos": "Cursos",
      "Cursos de Campo": "Cursos de Campo",
      "Campo Paracirúrgico": "Campo Paracirúrgico",
      "Imersão em Ectoplasmia": "Inmersión en Ectoplasmia",
      "Presenciais": "Presenciales",
      "Ectoplasmia Protetiva": "Ectoplasmia Protectora",
      "Online (Ao Vivo / Síncrono)": "En línea (en vivo / síncrono)",
      "Auto-organização Bioenergética": "Autoorganización Bioenergética",
      "Qualificação dos Pensenes": "Cualificación de los Pensenes",
      "Gravados (Online)": "Grabados (en línea)",
      "Ectoplasmia Interassistencial": "Ectoplasmia Interasistencial",
      "Ectoplasmia Protetiva": "Ectoplasmia Protectora",
      "Quadro Sinóptico Parapesquisístico": "Cuadro Sinóptico Parainvestigativo",
      "Aplicação Prática da Ectoplasmia": "Aplicación Práctica de la Ectoplasmia",
      "Ciclo Vital do Ectoplasta": "Ciclo Vital del Ectoplasta",
      "Raízes da Ectoplasmia": "Raíces de la Ectoplasmia",
      "Fitoectoplasmia Interassistencial": "Fitoectoplasmia Interasistencial",
      "Oficina": "Taller",
      "Oficina de Ectoplasmologia": "Taller de Ectoplasmología",
      "Atividades": "Actividades",
      "Laboratórios": "Laboratorios",
      "Laboratório de Paracirurgia": "Laboratorio de Paracirugía",
      "Espaço Bioenergologia": "Espacio Bioenergología",
      "Laboratório de Ectoplasmologia": "Laboratorio de Ectoplasmología",
      "Gratuitos": "Gratuitos",
      "OGB - Orientação Gratuita em Bioenergologia": "OGB - Orientación Gratuita en Bioenergología",
      "Pedido de Tenepes": "Solicitud de Tenepes",
      "Diálogos Online": "Diálogos en Línea",
      "Orientação Gratuita (OGB)": "Orientación Gratuita (OGB)",
      "Eventos & Consultoria": "Eventos y Consultoría",
      "Fórum Internacional (Online)": "Foro Internacional (en línea)",
      "Preceptoria em Ectoplasmia": "Preceptoría en Ectoplasmia",
      "Dinâmicas (DIP)": "Dinámicas (DIP)",
      "Foz do Iguaçu (Sede)": "Foz do Iguaçu (Sede)",
      "São Paulo": "São Paulo",
      "Rio de Janeiro": "Río de Janeiro",
      "Curitiba": "Curitiba",
      "Florianópolis": "Florianópolis",
      "Brasília": "Brasilia",
      "Alemanha": "Alemania",
      "Portugal": "Portugal",
      "Ectolab": "Ectolab",
      "A Instituição": "La Institución",
      "Quem Somos & CGC": "Quiénes Somos y CGC",
      "Nossa História": "Nuestra Historia",
      "Contato e Sede": "Contacto y Sede",
      "Parcerias de Pesquisa": "Alianzas de Investigación",
      "Parcerias": "Alianzas",
      "Tenepes": "Tenepes",
      "Apoie a Ectolab": "Apoye a Ectolab",
      "Acervo de Pesquisa": "Acervo de Investigación",
      "Base: Conscienciologia": "Base: Concienciología",
      "Livro Ectoplasma": "Libro Ectoplasma",
      "Materiais Publicados & FAQ": "Materiales Publicados y FAQ",
      "Blog": "Blog",
      "Apoie": "Apoye",
      "Acessar sistema": "Acceder al sistema",
      "Solicitar paracirurgia": "Solicitar paracirugía",
      "Paracirurgia": "Paracirugía",
      "Pesquisa": "Investigación",
      "Ciência & Ectoplasmologia": "Ciencia y Ectoplasmología",
      "Quem somos · CGC": "Quiénes somos · CGC",
      "Conteúdo": "Contenido",
      "Trilha do Saber": "Ruta del Saber",
      "Atividades & Eventos": "Actividades y Eventos",
      "Contato": "Contacto",
      "Ver Local": "Ver ubicación",
      "Telefone: +55 (45) 3025-XXXX": "Teléfono: +55 (45) 3025-XXXX",
      "Newsletter": "Boletín",
      "Imprensa": "Prensa",
      "Todos os direitos reservados.": "Todos los derechos reservados.",
      "Associação Internacional de Pesquisa Laboratorial em Paracirurgia e Ectoplasmia.": "Asociación Internacional de Investigación Laboratorial en Paracirugía y Ectoplasmia.",
      "Fundada em 2013, com sede em Foz do Iguaçu, Brasil.": "Fundada en 2013, con sede en Foz do Iguaçu, Brasil.",
      "ECTOLAB  ·  ASSOCIAÇÃO INTERNACIONAL DE PESQUISA EM ECTOPLASMIA E PARACIRURGIA": "ECTOLAB  ·  ASOCIACIÓN INTERNACIONAL DE INVESTIGACIÓN EN ECTOPLASMIA Y PARACIRUGÍA",
      "ECTOLAB  ·  ASSOCIAÇÃO INTERNACIONAL DE PESQUISA EM ECTOPLASMIA E PARACIRURGIA  ·  EST. 2013": "ECTOLAB  ·  ASOCIACIÓN INTERNACIONAL DE INVESTIGACIÓN EN ECTOPLASMIA Y PARACIRUGÍA  ·  EST. 2013",
      "Pesquisa técnica": "Investigación técnica",
      "em fenômenos ectoplásmicos": "en fenómenos ectoplásmicos",
      "Pesquisa em ectoplasmia,": "Investigación en ectoplasmia,",
      "paracirurgia e interassistência": "paracirugía e interasistencia",
      "A Ectolab é a Associação Internacional de Pesquisa em Ectoplasmia e Paracirurgia. Investigamos o ectoplasma, a paracirurgia e os fenômenos ectoplásmicos com método, registro técnico e compromisso interassistencial.": "Ectolab es la Asociación Internacional de Investigación en Ectoplasmia y Paracirugía. Investigamos el ectoplasma, la paracirugía y los fenómenos ectoplásmicos con método, registro técnico y compromiso interasistencial.",
      "A Ectolab é a Associação Internacional de Pesquisa em Ectoplasmia e Paracirurgia. Desenvolvemos investigação técnica e experimental sobre fenômenos ectoplásmicos, formação de voluntários e práticas interassistenciais.": "Ectolab es la Asociación Internacional de Investigación en Ectoplasmia y Paracirugía. Desarrollamos investigación técnica y experimental sobre fenómenos ectoplásmicos, formación de voluntarios y prácticas interasistenciales.",
      "Consultar a Trilha do Saber": "Consultar la Ruta del Saber",
      "Buscar conhecimento": "Buscar conocimiento",
      "Resumo": "Resumen",
      "Natureza": "Naturaleza",
      "Associação internacional de pesquisa, sem fins lucrativos": "Asociación internacional de investigación sin fines de lucro",
      "Especialidades": "Especialidades",
      "Ectoplasmologia · Paracirurgia · Bioenergologia": "Ectoplasmología · Paracirugía · Bioenergología",
      "Base científica": "Base científica",
      "Conscienciologia (W. Vieira, 1981)": "Concienciología (W. Vieira, 1981)",
      "Princípio": "Principio",
      "Descrença lúcida, experimentação pessoal e registro crítico": "Descrencia lúcida, experimentación personal y registro crítico",
      "Sede": "Sede",
      "Foz do Iguaçu, Paraná · BR": "Foz do Iguaçu, Paraná · BR",
      "Regime": "Régimen",
      "100% voluntariado": "100% voluntariado",
      "Ler ficha completa →": "Leer ficha completa →",
      "Pesquisar": "Investigar",
      "Ensinar": "Enseñar",
      "Assistir": "Asistir",
      "Publicar": "Publicar",
      "Investigação da consciência, dos fenômenos ectoplásmicos e das interações energéticas.": "Investigación de la conciencia, de los fenómenos ectoplásmicos y de las interacciones energéticas.",
      "Aprendizagem orientada pela pesquisa e retribuição do conhecimento pela docência.": "Aprendizaje orientado por la investigación y retribución del conocimiento por la docencia.",
      "Dinâmicas em Brasília, Curitiba, Foz do Iguaçu, São Paulo, Rio de Janeiro, Florianópolis, Portugal e Alemanha.": "Dinámicas en Brasilia, Curitiba, Foz do Iguaçu, São Paulo, Río de Janeiro, Florianópolis, Portugal y Alemania.",
      "Livros, artigos, verbetes, blog técnico e resultados de pesquisas institucionais.": "Libros, artículos, entradas, blog técnico y resultados de investigaciones institucionales.",
      "NOSSO PILAR FILOSÓFICO": "NUESTRO PILAR FILOSÓFICO",
      "Princípio da Descrença": "Principio de Descrencia",
      "Toda informação deve ser submetida à experimentação pessoal, ao registro disciplinado e à análise crítica.": "Toda información debe someterse a la experimentación personal, al registro disciplinado y al análisis crítico.",
      "Este princípio orienta a postura pesquisística da Ectolab: observar com honestidade, registrar com método, comparar evidências e revisar conclusões. Ele atravessa cursos, dinâmicas de paracirurgia, artigos e relatórios institucionais.": "Este principio orienta la postura investigativa de Ectolab: observar con honestidad, registrar con método, comparar evidencias y revisar conclusiones. Atraviesa cursos, dinámicas de paracirugía, artículos e informes institucionales.",
      "CAMINHO 01": "RUTA 01",
      "Busco assistência": "Busco asistencia",
      "Quero solicitar paracirurgia para mim, terceiros ou animais e compreender preparo, prazos e registro pós-atendimento.": "Quiero solicitar paracirugía para mí, para terceros o animales, y comprender la preparación, los plazos y el registro posterior a la atención.",
      "Solicitar paracirurgia ↗": "Solicitar paracirugía ↗",
      "CAMINHO 02": "RUTA 02",
      "Quero aprender": "Quiero aprender",
      "Quero entender ectoplasmia, conhecer a formação inicial, participar de atividades práticas e avançar na pesquisa.": "Quiero comprender la ectoplasmia, conocer la formación inicial, participar en actividades prácticas y avanzar en la investigación.",
      "Consultar a Trilha do Saber →": "Consultar la Ruta del Saber →",
      "O QUE FAZEMOS": "QUÉ HACEMOS",
      "Quatro frentes, uma única missão:": "Cuatro frentes, una sola misión:",
      "interassistência": "interasistencia",
      "Pesquisa aplicada": "Investigación aplicada",
      "Ensino pesquisístico": "Enseñanza investigativa",
      "Desenvolvimento interassistencial": "Desarrollo interasistencial",
      "Conhecer →": "Conocer →",
      "POR QUE FAZEMOS": "POR QUÉ LO HACEMOS",
      "Porque o invisível também": "Porque lo invisible también",
      "merece laboratório": "merece laboratorio",
      "Fenômenos ectoplásmicos": "Fenómenos ectoplásmicos",
      "pedem investigação técnica": "piden investigación técnica",
      "Ler a história completa →": "Leer la historia completa →",
      "POR ONDE COMEÇAR": "POR DÓNDE EMPEZAR",
      "A Trilha do Saber, em 4 passos.": "La Ruta del Saber, en 4 pasos.",
      "Ver trilha →": "Ver ruta →",
      "Entenda o Vocabulário": "Comprenda el vocabulario",
      "Participe de uma DIP": "Participe en una DIP",
      "Faça um Curso": "Haga un curso",
      "Imersão Ectoplásmica": "Inmersión Ectoplásmica",
      "Entenda": "Comprenda",
      "Experimente": "Experimente",
      "Desenvolva": "Desarrolle",
      "Aprofunde": "Profundice",
      "CURSOS & PROGRAMAS": "CURSOS Y PROGRAMAS",
      "Formação, pesquisa e produção científica.": "Formación, investigación y producción científica.",
      "Ver todos os cursos →": "Ver todos los cursos →",
      "DO BLOG": "DEL BLOG",
      "Últimos artigos publicados.": "Últimos artículos publicados.",
      "Conteúdos do acervo real da Ectolab sobre ectoplasmia, paracirurgia, saúde energética e autopesquisa.": "Contenidos del acervo real de Ectolab sobre ectoplasmia, paracirugía, salud energética y autoinvestigación.",
      "Ler o blog →": "Leer el blog →",
      "GLOSSÁRIO RÁPIDO": "GLOSARIO RÁPIDO",
      "Os 4 termos que adentram a especialidade.": "Los 4 términos que introducen la especialidad.",
      "Ectoplasma": "Ectoplasma",
      "Hipótese de substância ou energia semimaterial associada a manifestações observadas em fenômenos ectoplásmicos.": "Hipótesis de sustancia o energía semimaterial asociada a manifestaciones observadas en fenómenos ectoplásmicos.",
      "Prática interassistencial de base energética, conduzida com preparo, equipe, protocolo e registro pós-atendimento.": "Práctica interasistencial de base energética, conducida con preparación, equipo, protocolo y registro posterior a la atención.",
      "Interassistência": "Interasistencia",
      "Relação de auxílio mútuo em que assistência, aprendizagem e responsabilidade caminham juntas.": "Relación de ayuda mutua en la que asistencia, aprendizaje y responsabilidad avanzan juntas.",
      "Postura técnica de observar, registrar, comparar, revisar e transformar experiência em conhecimento comunicável.": "Postura técnica de observar, registrar, comparar, revisar y transformar la experiencia en conocimiento comunicable.",
      "Saiba mais →": "Sepa más →",
      "PRIMEIROS PASSOS": "PRIMEROS PASOS",
      "Cinco perguntas que": "Cinco preguntas que",
      "todo mundo": "todo el mundo",
      "faz.": "hace.",
      "Respondemos com a clareza que gostaríamos de ter recebido quando entramos.": "Respondemos con la claridad que nos habría gustado recibir al llegar.",
      "FAQ técnico completo": "FAQ técnico completo",
      "A Ectolab é uma instituição religiosa?": "¿Ectolab es una institución religiosa?",
      "A paracirurgia substitui tratamento médico?": "¿La paracirugía sustituye el tratamiento médico?",
      "Como funciona a solicitação de paracirurgia?": "¿Cómo funciona la solicitud de paracirugía?",
      "Preciso ter alguma crença para participar?": "¿Necesito tener alguna creencia para participar?",
      "Qual é a diferença entre cirurgia espiritual e paracirurgia?": "¿Cuál es la diferencia entre cirugía espiritual y paracirugía?",
      "VOZES DA ECTOLAB": "VOCES DE ECTOLAB",
      "BOLETIM MENSAL": "BOLETÍN MENSUAL",
      "Receba": "Reciba",
      "novidades da Ectolab": "novedades de Ectolab",
      "todo mês.": "cada mes.",
      "Assinar": "Suscribirse",
      "Sem spam. Cancele quando quiser.": "Sin spam. Cancele cuando quiera.",
      "Cursos Ectolab": "Cursos Ectolab",
      "Presenciais, online e campo": "Presenciales, en línea y de campo",
      "Vivencia assistencial": "Vivencia asistencial",
      "Formacao progressiva": "Formación progresiva",
      "Atendimento gratuito": "Atención gratuita",
      "Receba orientacao bioenergetica e conheca caminhos de estudo na Ectolab.": "Reciba orientación bioenergética y conozca caminos de estudio en Ectolab.",
      "Ver OGB": "Ver OGB",
      "Cursos e trilhas": "Cursos y rutas",
      "Acompanhamento tecnico": "Acompañamiento técnico",
      "Dinamicas interassistenciais": "Dinámicas interasistenciales",
      "Atendimento a distancia": "Atención a distancia",
      "Outros posts": "Otros posts",
      "Pesquisar mais": "Investigar más",
      "Todos os artigos": "Todos los artículos",
      "Acervo completo": "Acervo completo",
      "Materiais publicados": "Materiales publicados",
      "Livros, FAQ e referencias": "Libros, FAQ y referencias",
      "Conscienciologia": "Concienciología",
      "Base teorica": "Base teórica"
    }
  };

  const originalText = new WeakMap();
  let isApplyingTranslation = false;

  function translateTextNode(node, targetLang) {
    if (!node.nodeValue || !node.nodeValue.trim()) return;
    if (!originalText.has(node)) originalText.set(node, node.nodeValue);

    const original = originalText.get(node);
    const source = original.trim();
    const leading = original.match(/^\s*/)[0];
    const trailing = original.match(/\s*$/)[0];
    const dict = I18N_TEXT[targetLang] || {};
    node.nodeValue = dict[source] ? leading + dict[source] + trailing : original;
  }

  function applyTranslations(targetLang) {
    isApplyingTranslation = true;
    document.documentElement.lang = targetLang === "EN" ? "en" : targetLang === "ES" ? "es" : "pt-BR";
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || ["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => translateTextNode(node, targetLang));
    isApplyingTranslation = false;
  }

  const observer = new MutationObserver(() => {
    if (isApplyingTranslation) return;
    const currentLang = (localStorage.getItem("ecto_lang") || "PT").toUpperCase();
    if (currentLang !== "PT") requestAnimationFrame(() => applyTranslations(currentLang));
  });
  observer.observe(document.body, { childList: true, subtree: true });

  function setLanguage(v) {
    localStorage.setItem("ecto_lang", v);
    document.body.setAttribute("data-lang", v);
    document.querySelectorAll(".lang-select").forEach((select) => {
      select.value = v;
    });
    document.querySelectorAll(".lang-switch button").forEach((x) => {
      x.classList.toggle("on", x.getAttribute("data-lang") === v);
    });
    // swap text on elements with [data-i18n]
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const dict = window.__I18N__ && window.__I18N__[key];
      if (dict && dict[v]) el.innerHTML = dict[v];
    });
    applyTranslations(v);
  }

  // Language switch
  document.querySelectorAll(".lang-select").forEach((select) => {
    select.addEventListener("change", () => setLanguage(select.value));
  });
  document.querySelectorAll(".lang-switch button").forEach((b) => {
    b.addEventListener("click", () => setLanguage(b.getAttribute("data-lang")));
  });
  document.body.setAttribute("data-lang", lang);
  applyTranslations(lang);

  // --- Mobile menu ---
  const navToggleBtn = document.querySelector(".nav-toggle");
  const navDrawerEl  = document.getElementById("navDrawer");
  const navCloseBtn  = document.getElementById("navClose");
  const navOverlayEl = document.getElementById("navOverlay");

  function openMobileMenu() {
    if (!navDrawerEl) return;
    navDrawerEl.classList.add("is-open");
    navDrawerEl.setAttribute("aria-hidden", "false");
    if (navOverlayEl) navOverlayEl.classList.add("is-open");
    if (navToggleBtn) navToggleBtn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }
  function closeMobileMenu() {
    if (!navDrawerEl) return;
    navDrawerEl.classList.remove("is-open");
    navDrawerEl.setAttribute("aria-hidden", "true");
    if (navOverlayEl) navOverlayEl.classList.remove("is-open");
    if (navToggleBtn) navToggleBtn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  if (navToggleBtn) {
    navToggleBtn.addEventListener("click", () => {
      navDrawerEl && navDrawerEl.classList.contains("is-open") ? closeMobileMenu() : openMobileMenu();
    });
  }
  if (navCloseBtn)  navCloseBtn.addEventListener("click", closeMobileMenu);
  if (navOverlayEl) navOverlayEl.addEventListener("click", closeMobileMenu);

  // Close drawer when a link inside it is clicked
  if (navDrawerEl) {
    navDrawerEl.querySelectorAll("a[href]").forEach(a => {
      a.addEventListener("click", closeMobileMenu);
    });
  }

  // Accordion for mobile nav sub-menus
  document.querySelectorAll(".mnav-expander").forEach(btn => {
    btn.addEventListener("click", () => {
      const sub = document.getElementById(btn.getAttribute("data-target"));
      if (!sub) return;
      const expanded = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!expanded));
      sub.classList.toggle("is-open", !expanded);
    });
  });

  // --- Popup: Acervo Gratuito (+30 livros de Conscienciologia) ---
  // Cartão discreto após 10s de navegação. Ao clicar no botão, abre o
  // formulário (iframe Lahar). Fechar salva a decisão e silencia por 7 dias.
  (function initBooksPopup() {
    const STORAGE_KEY = "ecto_books_pop";
    const COOLDOWN_MS = 7 * 24 * 60 * 60 * 1000; // 7 dias
    const DELAY_MS = 10000; // 10s
    const FORM_SRC = "https://forms.lahar.com.br/formularios-externos/acessa/cadastreseeganhe30livrosempdf-vbtgBxFI5TcEyYNKZ4Lz";

    // Não exibir no admin/CMS nem em iframes (pré-visualizações)
    if (/\/admin($|\/)/i.test(location.pathname)) return;
    if (window.top !== window.self) return;

    let last = 0;
    try { last = parseInt(localStorage.getItem(STORAGE_KEY) || "0", 10) || 0; } catch (e) {}
    if (last && (Date.now() - last) < COOLDOWN_MS) return; // ainda em cooldown

    const ICON_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>';

    const offerHTML =
      '<button class="books-pop__close" aria-label="Fechar" type="button">✕</button>' +
      '<div class="books-pop__icon" aria-hidden="true">' + ICON_SVG + '</div>' +
      '<div class="books-pop__eyebrow"><span class="dot"></span>Acervo gratuito</div>' +
      '<h3 class="books-pop__title" id="booksPopTitle">+30 livros de Conscienciologia</h3>' +
      '<p class="books-pop__desc">Baixe o acervo completo em PDF e aprofunde seus estudos sobre a consciência e a ectoplasmia.</p>' +
      '<button class="books-pop__btn" type="button">Quero receber os livros <span aria-hidden="true">→</span></button>';

    const formHTML =
      '<div class="books-pop__form-head">' +
        '<button class="books-pop__close" aria-label="Fechar" type="button">✕</button>' +
        '<div class="books-pop__eyebrow"><span class="dot"></span>Acervo gratuito</div>' +
        '<h3 class="books-pop__form-title" id="booksPopTitle">Cadastre-se e ganhe +30 livros em PDF</h3>' +
        '<p class="books-pop__form-sub">Preencha os dados e enviaremos o acervo para seu e-mail.</p>' +
      '</div>' +
      '<iframe class="books-pop__iframe" title="Formex Cadastre-se e ganhe +30 livros em pdf!" name="iframe_formex_lahar" src="' + FORM_SRC + '" frameborder="0" allowtransparency="true" style="background:none;border:none">Seu navegador não possui suporte para iframes.</iframe>';

    function saveDismiss() {
      try { localStorage.setItem(STORAGE_KEY, String(Date.now())); } catch (e) {}
    }

    let pop, backdrop, escHandler;

    function teardown() {
      if (escHandler) document.removeEventListener("keydown", escHandler);
      if (backdrop && backdrop.parentNode) backdrop.parentNode.removeChild(backdrop);
      if (pop && pop.parentNode) pop.parentNode.removeChild(pop);
      document.body.style.overflow = "";
      pop = backdrop = escHandler = null;
    }

    function hide() {
      if (!pop) return;
      pop.classList.remove("is-in");
      pop.classList.remove("is-form");
      if (backdrop) backdrop.classList.remove("is-in");
      document.body.style.overflow = "";
      saveDismiss();
      setTimeout(teardown, 450);
    }

    function openForm() {
      if (!pop) return;
      pop.classList.add("is-form");
      if (backdrop) {
        backdrop.classList.add("is-in");
        backdrop.setAttribute("aria-hidden", "false");
      }
      document.body.style.overflow = "hidden";
      pop.innerHTML = formHTML;
      pop.setAttribute("aria-modal", "true");
      const close2 = pop.querySelector(".books-pop__close");
      if (close2) close2.addEventListener("click", hide);
      saveDismiss(); // não perturbar novamente após engajar
    }

    function build() {
      // Não sobrepor o pop-up de divulgação (modal central), se estiver aberto.
      if (document.querySelector(".ecto-modal")) return;
      backdrop = document.createElement("div");
      backdrop.className = "books-pop__backdrop";
      backdrop.setAttribute("aria-hidden", "true");

      pop = document.createElement("div");
      pop.className = "books-pop";
      pop.setAttribute("role", "dialog");
      pop.setAttribute("aria-modal", "false");
      pop.setAttribute("aria-labelledby", "booksPopTitle");
      pop.innerHTML = offerHTML;

      document.body.appendChild(backdrop);
      document.body.appendChild(pop);

      pop.querySelector(".books-pop__close").addEventListener("click", hide);
      pop.querySelector(".books-pop__btn").addEventListener("click", openForm);
      backdrop.addEventListener("click", () => { if (pop.classList.contains("is-form")) hide(); });

      escHandler = (e) => {
        if (e.key === "Escape" && pop && (pop.classList.contains("is-in") || pop.classList.contains("is-form"))) hide();
      };
      document.addEventListener("keydown", escHandler);

      requestAnimationFrame(() => pop.classList.add("is-in"));
    }

    setTimeout(build, DELAY_MS);
  })();

  // --- Pop-up de divulgação (modal central, configurável no CMS) ---
  // Lê /popup.json (editável em content → Pop-up de divulgação). Se estiver
  // ativo, exibe um modal centralizado com fundo escurecido. Três modos:
  // "texto", "imagem" ou "imagem-texto". Fechar silencia pelo período de
  // cooldown; se o conteúdo mudar, o pop-up volta a aparecer.
  (function initAnnouncePopup() {
    if (/\/admin($|\/)/i.test(location.pathname)) return;
    if (window.top !== window.self) return;

    const STORAGE_KEY = "ecto_announce_pop";

    function esc(s) {
      return String(s == null ? "" : s).replace(/[&<>"']/g, (c) =>
        ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
      );
    }

    fetch("/popup.json", { cache: "no-cache" })
      .then((r) => (r.ok ? r.json() : null))
      .then((cfg) => {
        if (!cfg || !cfg.active) return;

        const hasImg = !!(cfg.image && String(cfg.image).trim());
        let mode = cfg.displayMode || "texto";
        // Se o modo pede imagem mas não há uma, cai para texto (ou aborta).
        if ((mode === "imagem" || mode === "imagem-texto") && !hasImg) {
          if (!cfg.title && !cfg.text) return;
          mode = "texto";
        }
        if (mode === "texto" && !cfg.title && !cfg.text) return;

        const version = [cfg.title, cfg.text, cfg.image, cfg.buttonHref].join("|");
        const cooldownMs = Math.max(0, Number(cfg.cooldownDays) || 0) * 86400000;
        try {
          const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
          if (saved && saved.v === version && cooldownMs && Date.now() - saved.t < cooldownMs) return;
        } catch (e) {}

        const delay = Math.max(0, Number(cfg.delaySeconds) || 0) * 1000;
        setTimeout(() => build(cfg, mode, hasImg, version), delay);
      })
      .catch(() => {});

    function build(cfg, mode, hasImg, version) {
      const backdrop = document.createElement("div");
      backdrop.className = "ecto-modal__backdrop";

      const modal = document.createElement("div");
      modal.className = "ecto-modal ecto-modal--" + mode;
      modal.setAttribute("role", "dialog");
      modal.setAttribute("aria-modal", "true");
      if (cfg.title) modal.setAttribute("aria-label", cfg.title);

      const href = cfg.buttonHref ? esc(cfg.buttonHref) : "";
      const imgAlt = esc(cfg.imageAlt || cfg.title || "");
      let html = '<button class="ecto-modal__close" type="button" aria-label="Fechar">✕</button>';

      if (mode === "imagem") {
        const img = '<img class="ecto-modal__img" src="' + esc(cfg.image) + '" alt="' + imgAlt + '" />';
        html += href
          ? '<a class="ecto-modal__imglink" href="' + href + '" target="_blank" rel="noopener">' + img + "</a>"
          : img;
      } else {
        if (mode === "imagem-texto" && hasImg) {
          html += '<div class="ecto-modal__media"><img class="ecto-modal__img" src="' + esc(cfg.image) + '" alt="' + imgAlt + '" /></div>';
        }
        html += '<div class="ecto-modal__body">';
        if (cfg.eyebrow) html += '<div class="ecto-modal__eyebrow"><span class="dot"></span>' + esc(cfg.eyebrow) + "</div>";
        if (cfg.title) html += '<h2 class="ecto-modal__title">' + esc(cfg.title) + "</h2>";
        if (cfg.text) html += '<p class="ecto-modal__text">' + esc(cfg.text) + "</p>";
        if (href) html += '<a class="ecto-modal__btn" href="' + href + '" target="_blank" rel="noopener">' + esc(cfg.buttonLabel || "Saiba mais") + ' <span aria-hidden="true">→</span></a>';
        html += "</div>";
      }
      modal.innerHTML = html;

      function remember() {
        try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ v: version, t: Date.now() })); } catch (e) {}
      }
      function dismiss() {
        modal.classList.remove("is-in");
        backdrop.classList.remove("is-in");
        document.body.style.overflow = "";
        remember();
        setTimeout(() => {
          if (backdrop.parentNode) backdrop.parentNode.removeChild(backdrop);
          if (modal.parentNode) modal.parentNode.removeChild(modal);
          document.removeEventListener("keydown", onKey);
        }, 340);
      }
      function onKey(e) { if (e.key === "Escape") dismiss(); }

      document.body.appendChild(backdrop);
      document.body.appendChild(modal);
      modal.querySelector(".ecto-modal__close").addEventListener("click", dismiss);
      backdrop.addEventListener("click", dismiss);
      const cta = modal.querySelector(".ecto-modal__btn, .ecto-modal__imglink");
      if (cta) cta.addEventListener("click", remember);
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";

      requestAnimationFrame(() => {
        backdrop.classList.add("is-in");
        modal.classList.add("is-in");
      });
    }
  })();

})();
