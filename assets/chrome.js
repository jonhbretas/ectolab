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

  // Abordagem à prova de falhas: detecta a rota atual e calcula o caminho relativo
  const inPages = window.location.pathname.includes('/pages/') || window.location.href.includes('/pages/');
  const P = inPages ? "../" : "./";

  // --- 2. Central de Navegação (Criação de Novas Páginas) ---
  // Para registrar uma NOVA PÁGINA no menu do site, basta inserir o objeto abaixo.
  const logoPath = P + "assets/logo-ectolab-1.png";
  const logoHTML = `<img src="${logoPath}" alt="Ectolab" class="brand-img" />`;

  const navItems = [
    { 
      id: "paracirurgia",  
      label: "Paracirurgia",    
      href: P + "pages/paracirurgia.html",
      dropdown: [
        { cat: "Assistência", links: [
          { label: "O que é a Paracirurgia", href: P + "pages/paracirurgia.html" },
          { label: "Solicitar Paracirurgia ↗", href: "https://dip-ectolab.org.br/pedido-paracirurgia", target: "_blank" },
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
        { cat: "Atendimentos Gratuitos", links: [
          { label: "Orientação Gratuita (OGB)", href: P + "pages/orientacao-gratuita.html" }
        ]},
        { cat: "Eventos & Consultoria", links: [
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
          { label: "Parcerias de Pesquisa", href: P + "pages/parcerias.html" }
        ]},
        { cat: "Acervo de Pesquisa", links: [
          { label: "Base: Conscienciologia", href: P + "pages/conscienciologia.html" },
          { label: "Fatos & Parafatos", href: P + "pages/fatos-parafatos.html" },
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
              Fundada em 2003, com sede em Foz do Iguaçu, Brasil.
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
              <li><a href="${P}pages/historia.html">História &middot; Fatos &amp; Parafatos</a></li>
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
              <li><a href="${P}pages/contato.html">Visite o Campus</a></li>
              <li><a href="mailto:contato@ectolab.org">contato@ectolab.org</a></li>
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">Imprensa</a></li>
            </ul>
          </div>
        </div>
        <div class="copy">
          <span>© 2003–2026 Ectolab. Todos os direitos reservados.</span>
          <span>Foz do Iguaçu · Paraná · Brasil &nbsp;◆&nbsp; 25° 32′ S · 54° 35′ W</span>
        </div>
      </div>
    </footer>`;

  // Insert
  const headerSlot = document.getElementById("__header");
  const footerSlot = document.getElementById("__footer");
  if (headerSlot) headerSlot.outerHTML = header;
  if (footerSlot) footerSlot.outerHTML = footer;

  // Language switch (cosmetic — toggles a body class so text can be swapped per element)
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
    });
  });
  document.body.setAttribute("data-lang", lang);
})();
