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
  const logoHTML = `<img src="${logoPath}" alt="Logo Ectolab" class="brand-img" />`;

  const navItems = [
    { 
      id: "paracirurgia",  
      label: "Paracirurgia",    
      href: P + "pages/paracirurgia.html",
      dropdown: [
        { cat: "Assistência", links: [
          { label: "O que é a Paracirurgia", href: P + "pages/paracirurgia.html" },
          { label: "Solicitar Paracirurgia ↗", href: "https://dip-ectolab.org.br/pedido-paracirurgia", target: "_blank" },
          { label: "Painel de Pedidos", href: P + "pages/painel-pedidos-paracirurgia.html" },
          { label: "Rede Invisível (À Distância)", href: P + "pages/rede.html" }
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
          { label: "EPPI", href: P + "pages/curso-eppi.html" },
          { label: "Campo Paracirúrgico", href: P + "pages/curso-campo.html" },
          { label: "Imersão em Ectoplasmia", href: P + "pages/curso-imersao.html" }
        ]},
        { cat: "Presenciais", links: [
          { label: "PROEP", href: P + "pages/curso-proep.html" },
          { label: "Ectoplasmia Protetiva", href: P + "pages/curso-ectoplasmia-protetiva.html" },
          { label: "Fitoectoplasmia", href: P + "pages/cursos.html#presenciais" },
        ]},
        { cat: "Online (Ao Vivo / Síncrono)", links: [
          { label: "Auto-organização Bioenergética", href: P + "pages/curso.html?id=auto-org" },
          { label: "Qualificação dos Pensenes", href: P + "pages/curso.html?id=qualificacao" }
        ]},
        { cat: "Gravados (Online)", links: [
          { label: "Ectoplasmia Interassistencial", href: P + "pages/curso-ectoplasmia-interassistencial.html" },
          { label: "Aplicação Prática da Ectoplasmia", href: P + "pages/curso.html?id=aplicacao" },
          { label: "Ciclo Vital do Ectoplasta", href: P + "pages/curso.html?id=ciclo" },
          { label: "Raízes da Ectoplasmia", href: P + "pages/curso.html?id=raizes" }
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
          { label: "Diálogos Online", href: "https://www.youtube.com/playlist?list=PLpz4qwgYZyP3SxfEenlleSpxgqYMaVUhb", target: "_blank" }
        ]},
        { cat: "Eventos & Consultoria", links: [
          { label: "Agenda Completa", href: P + "pages/agenda.html" },
          { label: "Fórum Internacional (Online)", href: P + "pages/curso.html?id=forum" },
          { label: "Preceptoria em Ectoplasmia", href: P + "pages/curso.html?id=preceptoria" }
        ]},
        { cat: "Dinâmicas (DIP)", links: [
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
            <span class="nav-drop-cat">${d.cat}</span>
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
      return `<div class="nav-item"><a href="${n.href}" class="${active === n.id ? "active" : ""}">${n.label}</a></div>`;
    })
    .join("");

  const header = `
    <header class="site-header">
      <div class="wrap site-header__inner">
        <a href="${P}index.html" class="brand">
          ${logoHTML}
        </a>
        <nav class="nav">${navHTML}</nav>
        <a href="${P}pages/parcerias.html" class="btn btn-parcerias btn-sm header-cta">Parcerias de Pesquisa</a>
        <a href="https://dip-ectolab.org.br/pedido-paracirurgia" target="_blank" rel="noreferrer" class="btn btn-orange btn-sm header-cta">Solicitar paracirurgia <span class="arrow">↗</span></a>
        <div class="lang-switch" role="group" aria-label="Idioma">
          <button data-lang="PT" class="${lang === "PT" ? "on" : ""}">PT</button>
          <button data-lang="EN" class="${lang === "EN" ? "on" : ""}">EN</button>
          <button data-lang="ES" class="${lang === "ES" ? "on" : ""}">ES</button>
        </div>
      </div>
    </header>`;

  const footer = `
    <footer class="site-footer">
      <div class="wrap">
        <div class="grid">
          <div>
            <div class="flex center gap-12" style="margin-bottom:18px">
              <img src="${logoPath}" alt="Ectolab" style="height:36px;width:auto;filter:brightness(0) invert(1)" />
            </div>
            <p style="font-size:14px;line-height:1.6;opacity:0.78;max-width:300px">
              Associação Internacional de Pesquisa Laboratorial em Paracirurgia e Ectoplasmia.
              Fundada em 2013, com sede em Foz do Iguaçu, Brasil.
            </p>
            <p class="mono" style="font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:var(--orange);margin-top:24px">
              CNPJ &nbsp;18.782.858/0001-10 &nbsp;&middot;&nbsp; Inst. Conscienciocêntrica
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
              <li><a href="${P}pages/contato.html">Ver Local</a></li>
              <li>Av. Paraná, 1230 · Foz do Iguaçu, PR</li>
              <li>Telefone: +55 (45) 3025-XXXX</li>
              <li><a href="mailto:contato@ectolab.org">contato@ectolab.org</a></li>
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">Imprensa</a></li>
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
          <span>© 2013–2026 Ectolab. Todos os direitos reservados.</span>
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
      "O que é a Paracirurgia": "What Parasurgery Is",
      "Solicitar Paracirurgia ↗": "Request Parasurgery ↗",
      "Painel de Pedidos": "Request Dashboard",
      "Rede Invisível (À Distância)": "Invisible Network (Remote)",
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
      "Aplicação Prática da Ectoplasmia": "Practical Application of Ectoplasmy",
      "Ciclo Vital do Ectoplasta": "Ectoplast Life Cycle",
      "Raízes da Ectoplasmia": "Roots of Ectoplasmy",
      "Atividades": "Activities",
      "Laboratórios": "Laboratories",
      "Laboratório de Paracirurgia": "Parasurgery Laboratory",
      "Espaço Bioenergologia": "Bioenergology Space",
      "Laboratório de Ectoplasmologia": "Ectoplasmology Laboratory",
      "Gratuitos": "Free",
      "OGB - Orientação Gratuita em Bioenergologia": "OGB - Free Bioenergology Guidance",
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
      "Apoie a Ectolab": "Support Ectolab",
      "Acervo de Pesquisa": "Research Collection",
      "Base: Conscienciologia": "Foundation: Conscientiology",
      "Materiais Publicados & FAQ": "Published Materials & FAQ",
      "Blog": "Blog",
      "Apoie": "Support",
      "Solicitar paracirurgia": "Request parasurgery",
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
      "Ver Trilha do Saber completa →": "View the full Knowledge Pathway →",
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
      "VISITANTE DE PRIMEIRA VEZ": "FIRST-TIME VISITOR",
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
    node.nodeValue = targetLang === "EN" && dict[source] ? leading + dict[source] + trailing : original;
  }

  function applyTranslations(targetLang) {
    isApplyingTranslation = true;
    document.documentElement.lang = targetLang === "EN" ? "en" : "pt-BR";
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
    if (currentLang === "EN") requestAnimationFrame(() => applyTranslations("EN"));
  });
  observer.observe(document.body, { childList: true, subtree: true });

  // Language switch
  document.querySelectorAll(".lang-switch button").forEach((b) => {
    b.addEventListener("click", () => {
      const v = b.getAttribute("data-lang");
      localStorage.setItem("ecto_lang", v);
      document.body.setAttribute("data-lang", v);
      document.querySelectorAll(".lang-switch button").forEach((x) => x.classList.toggle("on", x === b));
      // swap text on elements with [data-i18n]
      document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        const dict = window.__I18N__ && window.__I18N__[key];
        if (dict && dict[v]) el.innerHTML = dict[v];
      });
      applyTranslations(v);
    });
  });
  document.body.setAttribute("data-lang", lang);
  applyTranslations(lang);
})();
