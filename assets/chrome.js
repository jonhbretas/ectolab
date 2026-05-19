/* ECTOLAB — shared header & footer.
   Inserted via this script so every page stays in sync.
   The page tells us which nav item is active via <body data-active="...">.
*/

(function () {
  const lang = (localStorage.getItem("ecto_lang") || "PT").toUpperCase();
  const active = document.body.getAttribute("data-active") || "";

  // Path prefix so the same nav works from /index.html and /pages/*.html
  const path = location.pathname.replace(/\\/g, "/");
  const inPages = /\/pages\//.test(path);
  const P = inPages ? "../" : "";

  // -- Real Ectolab logo (image).
  // The image already contains the wordmark + tagline, so we just render it.
  const logoSVG = `<img src="${P}assets/logo.webp" alt="Ectolab — Associação Internacional de Pesquisa Laboratorial em Ectoplasmia e Paracirurgia" class="brand-img" />`;

  const navItems = [
    { id: "trilha",        label: "Trilha do Saber", href: P + "pages/trilha.html" },
    { id: "cursos",        label: "Cursos",          href: P + "pages/cursos.html" },
    { id: "atividades",    label: "Atividades",      href: P + "pages/atividades.html" },
    { id: "ectoplasma",    label: "Ectoplasma",      href: P + "pages/conscienciologia.html" },
    { id: "quem",          label: "Quem somos",      href: P + "pages/quem-somos.html" },
    { id: "blog",          label: "Blog",            href: P + "pages/blog.html" },
    { id: "contato",       label: "Contato",         href: P + "pages/contato.html" },
  ];

  const navHTML = navItems
    .map((n) => `<a href="${n.href}" class="${active === n.id ? "active" : ""}">${n.label}</a>`)
    .join("");

  const header = `
    <header class="site-header">
      <div class="wrap site-header__inner">
        <a href="${P}index.html" class="brand">
          ${logoSVG}
        </a>
        <nav class="nav">${navHTML}</nav>
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
              <img src="${P}assets/logo.webp" alt="Ectolab" style="height:36px;width:auto;filter:brightness(0) invert(1)" />
            </div>
            <p style="font-size:14px;line-height:1.6;opacity:0.78;max-width:300px">
              Associação Internacional de Pesquisa Laboratorial em Paracirurgia e Ectoplasmia.
              Fundada em 2003, com sede em Foz do Iguaçu, Brasil.
            </p>
            <p class="mono" style="font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:var(--orange);margin-top:24px">
              CNPJ &nbsp;05.XXX.XXX/0001-XX &nbsp;&middot;&nbsp; Inst. de Pesquisa
            </p>
          </div>
          <div>
            <h5>Pesquisa</h5>
            <ul>
              <li><a href="${P}pages/conscienciologia.html">O que é Conscienciologia</a></li>
              <li><a href="${P}pages/quem-somos.html">Quem somos</a></li>
              <li><a href="${P}pages/historia.html">História da Ectolab</a></li>
              <li><a href="${P}pages/fatos-parafatos.html">Fatos &amp; Parafatos</a></li>
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
