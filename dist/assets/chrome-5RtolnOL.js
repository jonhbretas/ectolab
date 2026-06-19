(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),(function(){let e=(localStorage.getItem(`ecto_lang`)||`PT`).toUpperCase(),t=document.body.getAttribute(`data-active`)||``,n=`/logo.webp`,r=`
    <header class="site-header">
      <div class="wrap site-header__inner">
        <a href="/index.html" class="brand">
          ${`<img src="${n}" alt="Logo Ectolab" class="brand-img" />`}
        </a>
        <nav class="nav">${[{id:`paracirurgia`,label:`Paracirurgia`,href:`/pages/paracirurgia.html`,dropdown:[{cat:`Assistência`,links:[{label:`O que é a Paracirurgia`,href:`/pages/paracirurgia.html`},{label:`Solicitar Paracirurgia ↗`,href:`https://dip-ectolab.org.br/pedido-paracirurgia`,target:`_blank`},{label:`Painel de Pedidos`,href:`/pages/painel-pedidos-paracirurgia.html`},{label:`Rede Invisível (À Distância)`,href:`/pages/rede.html`}]}]},{id:`trilha`,label:`Trilha`,href:`/pages/trilha.html`},{id:`cursos`,label:`Cursos`,href:`/pages/cursos.html`,dropdown:[{cat:`Cursos de Campo`,links:[{label:`EPPI`,href:`/pages/curso-eppi.html`},{label:`Campo Paracirúrgico`,href:`/pages/curso-campo.html`},{label:`Imersão em Ectoplasmia`,href:`/pages/curso-imersao.html`}]},{cat:`Presenciais`,links:[{label:`PROEP`,href:`/pages/curso-proep.html`},{label:`Ectoplasmia Protetiva`,href:`/pages/curso-ectoplasmia-protetiva.html`},{label:`Fitoectoplasmia`,href:`/pages/cursos.html#presenciais`}]},{cat:`Online (Ao Vivo / Síncrono)`,links:[{label:`Auto-organização Bioenergética`,href:`/pages/curso.html?id=auto-org`},{label:`Qualificação dos Pensenes`,href:`/pages/curso.html?id=qualificacao`}]},{cat:`Gravados (Online)`,links:[{label:`Ectoplasmia Interassistencial`,href:`/pages/curso-ectoplasmia-interassistencial.html`},{label:`Aplicação Prática da Ectoplasmia`,href:`/pages/curso.html?id=aplicacao`},{label:`Ciclo Vital do Ectoplasta`,href:`/pages/curso.html?id=ciclo`},{label:`Raízes da Ectoplasmia`,href:`/pages/curso.html?id=raizes`}]}]},{id:`atividades`,label:`Atividades`,href:`/pages/atividades.html`,dropdown:[{cat:`Atendimentos Gratuitos`,links:[{label:`Orientação Gratuita (OGB)`,href:`/pages/orientacao-gratuita.html`}]},{cat:`Eventos & Consultoria`,links:[{label:`Fórum Internacional (Online)`,href:`/pages/curso.html?id=forum`},{label:`Preceptoria em Ectoplasmia`,href:`/pages/curso.html?id=preceptoria`}]},{cat:`Dinâmicas (DIP)`,links:[{label:`Foz do Iguaçu (Sede)`,href:`/pages/dinamica.html?loc=foz`},{label:`São Paulo`,href:`/pages/dinamica.html?loc=sp`},{label:`Rio de Janeiro`,href:`/pages/dinamica.html?loc=rj`},{label:`Curitiba`,href:`/pages/dinamica.html?loc=curitiba`},{label:`Florianópolis`,href:`/pages/dinamica.html?loc=floripa`},{label:`Brasília`,href:`/pages/dinamica.html?loc=brasilia`},{label:`Alemanha`,href:`/pages/dinamica.html?loc=alemanha`},{label:`Portugal`,href:`/pages/dinamica.html?loc=portugal`}]}]},{id:`quem`,label:`Ectolab`,href:`/pages/quem-somos.html`,dropdown:[{cat:`A Instituição`,links:[{label:`Quem Somos & CGC`,href:`/pages/quem-somos.html`},{label:`Nossa História`,href:`/pages/historia.html`},{label:`Contato e Sede`,href:`/pages/contato.html`},{label:`Parcerias de Pesquisa`,href:`/pages/parcerias.html`}]},{cat:`Acervo de Pesquisa`,links:[{label:`Base: Conscienciologia`,href:`/pages/conscienciologia.html`},{label:`Materiais Publicados & FAQ`,href:`/pages/materiais.html`}]}]},{id:`blog`,label:`Blog`,href:`/pages/blog.html`}].map(e=>{if(e.dropdown){let n=e.dropdown.map(e=>`
          <div class="nav-drop-group">
            <span class="nav-drop-cat">${e.cat}</span>
            ${e.links.map(e=>`<a href="${e.href}" ${e.target?`target="${e.target}" rel="noreferrer"`:``}>${e.label}</a>`).join(``)}
          </div>
        `).join(``);return`
          <div class="nav-item has-drop">
            <a href="${e.href}" class="${t===e.id?`active`:``}">${e.label} <span class="caret">▾</span></a>
            <div class="nav-dropdown">${n}</div>
          </div>
        `}return`<div class="nav-item"><a href="${e.href}" class="${t===e.id?`active`:``}">${e.label}</a></div>`}).join(``)}</nav>
        <a href="/pages/parcerias.html" class="btn btn-parcerias btn-sm header-cta">Parcerias de Pesquisa</a>
        <a href="https://dip-ectolab.org.br/pedido-paracirurgia" target="_blank" rel="noreferrer" class="btn btn-orange btn-sm header-cta">Solicitar paracirurgia <span class="arrow">↗</span></a>
        <div class="lang-switch" role="group" aria-label="Idioma">
          <button data-lang="PT" class="${e===`PT`?`on`:``}">PT</button>
          <button data-lang="EN" class="${e===`EN`?`on`:``}">EN</button>
          <button data-lang="ES" class="${e===`ES`?`on`:``}">ES</button>
        </div>
      </div>
    </header>`,i=`
    <footer class="site-footer">
      <div class="wrap">
        <div class="grid">
          <div>
            <div class="flex center gap-12" style="margin-bottom:18px">
              <img src="${n}" alt="Ectolab" style="height:36px;width:auto;filter:brightness(0) invert(1)" />
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
              <li><a href="/pages/paracirurgia.html">Paracirurgia</a></li>
              <li><a href="/pages/conscienciologia.html">Ciência &amp; Ectoplasmologia</a></li>
              <li><a href="/pages/quem-somos.html">Quem somos &middot; CGC</a></li>
              <li><a href="/pages/historia.html">Nossa História</a></li>
            </ul>
          </div>
          <div>
            <h5>Conteúdo</h5>
            <ul>
              <li><a href="/pages/trilha.html">Trilha do Saber</a></li>
              <li><a href="/pages/cursos.html">Cursos</a></li>
              <li><a href="/pages/atividades.html">Atividades &amp; Eventos</a></li>
              <li><a href="/pages/blog.html">Blog</a></li>
            </ul>
          </div>
          <div>
            <h5>Contato</h5>
            <ul>
              <li><a href="/pages/contato.html">Ver Local</a></li>
              <li>Av. Paraná, 1230 · Foz do Iguaçu, PR</li>
              <li>Telefone: +55 (45) 3025-XXXX</li>
              <li><a href="mailto:contato@ectolab.org">contato@ectolab.org</a></li>
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">Imprensa</a></li>
            </ul>
          </div>
        </div>
        <div class="copy">
          <span>© 2013–2026 Ectolab. Todos os direitos reservados.</span>
          <span>Foz do Iguaçu · Paraná · Brasil &nbsp;◆&nbsp; 25° 32′ S · 54° 35′ W</span>
        </div>
      </div>
    </footer>`,a=document.getElementById(`__header`),o=document.getElementById(`__footer`);a&&(a.outerHTML=r),o&&(o.outerHTML=i),document.querySelectorAll(`.lang-switch button`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-lang`);localStorage.setItem(`ecto_lang`,t),document.body.setAttribute(`data-lang`,t),document.querySelectorAll(`.lang-switch button`).forEach(t=>t.classList.toggle(`on`,t===e)),document.querySelectorAll(`[data-i18n]`).forEach(e=>{let n=e.getAttribute(`data-i18n`),r=window.__I18N__&&window.__I18N__[n];r&&r[t]&&(e.innerHTML=r[t])})})}),document.body.setAttribute(`data-lang`,e)})();

