import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';

const root = process.cwd();
const contentDir = path.join(root, 'content', 'blog');
const blogPagePath = path.join(root, 'pages', 'blog.html');
const publicDir = path.join(root, 'public');
const siteUrl = 'https://ectolab.vercel.app';
const startMarker = '<!-- CMS BLOG LIST START -->';
const endMarker = '<!-- CMS BLOG LIST END -->';

const monthNames = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];

marked.setOptions({ gfm: true, breaks: false });

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function stripHtml(value = '') {
  return String(value)
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function excerpt(post) {
  const raw = post.description || stripHtml(post.body);
  if (raw.length <= 170) return raw;
  return `${raw.slice(0, 165).replace(/\s+\S*$/, '')}...`;
}

function dateObj(value) {
  return new Date(`${String(value).slice(0, 10)}T00:00:00Z`);
}

function dateLabel(value) {
  const d = dateObj(value);
  return `${String(d.getUTCDate()).padStart(2, '0')} ${monthNames[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

function dateSlash(value) {
  const d = dateObj(value);
  return `${String(d.getUTCDate()).padStart(2, '0')}/${String(d.getUTCMonth() + 1).padStart(2, '0')}/${d.getUTCFullYear()}`;
}

function postHref(post) {
  return `/blog/${escapeHtml(post.slug)}.html`;
}

function readPosts() {
  if (!fs.existsSync(contentDir)) return [];

  return fs.readdirSync(contentDir)
    .filter((name) => name.endsWith('.md'))
    .map((name) => {
      const file = path.join(contentDir, name);
      const parsed = matter.read(file);
      const data = parsed.data || {};
      return {
        ...data,
        body: parsed.content.trim(),
        source: file,
        slug: data.slug || path.basename(name, '.md'),
        published: data.published !== false,
        featured: data.featured === true,
      };
    })
    .filter((post) => post.published)
    .sort((a, b) => dateObj(b.date) - dateObj(a.date));
}

function renderImage(post, className, loading = 'lazy') {
  if (!post.coverImage) {
    return `<div class="${className}"><span class="specimen">BLOG</span></div>`;
  }

  return `<div class="${className}"><img src="${escapeHtml(post.coverImage)}" alt="${escapeHtml(post.title)}" loading="${loading}" /></div>`;
}

function renderFeatured(post) {
  if (!post) return '';

  return `    <section class="section">
      <div class="wrap">
        <div class="blog-featured">
          <a href="${postHref(post)}" class="blog-featured__viz">${post.coverImage ? `<img src="${escapeHtml(post.coverImage)}" alt="${escapeHtml(post.title)}" loading="eager" />` : '<span class="specimen">BLOG</span>'}</a>
          <a href="${postHref(post)}" class="blog-featured__body" style="text-decoration:none;color:inherit">
            <div style="display:flex;gap:8px"><span class="tag gold">${escapeHtml(post.category || 'Blog')}</span><span class="tag ghost">${dateLabel(post.date)}</span></div>
            <h2>${escapeHtml(post.title)}</h2>
            <p>${escapeHtml(excerpt(post))}</p>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-top:auto;padding-top:16px;border-top:1px solid var(--line)"><div class="specimen">${escapeHtml(post.author || 'ECTOLAB')} · ${dateLabel(post.date)}</div><span class="link-arrow">Ler artigo →</span></div>
          </a>
        </div>
      </div>
    </section>`;
}

function renderCard(post) {
  return `          <a href="${postHref(post)}" class="blog-card">
            ${renderImage(post, 'blog-card__viz')}
            <div style="display:flex;gap:8px;flex-wrap:wrap">
              <span class="tag">${escapeHtml(post.category || 'Blog')}</span>
              <span class="tag ghost">${escapeHtml(post.author || 'ECTOLAB')}</span>
            </div>
            <h3>${escapeHtml(post.title)}</h3>
            <p style="font-size:14.5px;color:var(--ink-2);line-height:1.55">${escapeHtml(excerpt(post))}</p>
            <div class="blog-card__meta"><span>${escapeHtml(post.author || 'ECTOLAB')}</span><span>${dateLabel(post.date)}</span></div>
          </a>`;
}

function renderBlogList(posts) {
  const featured = posts.find((post) => post.featured) || posts[0];
  const cards = posts.map(renderCard).join('\n');

  return `${startMarker}
${renderFeatured(featured)}
    <section class="section">
      <div class="wrap">
        <div class="blog-grid">
${cards}
        </div>
      </div>
    </section>
${endMarker}`;
}

function updateBlogPage(posts) {
  const generated = renderBlogList(posts);
  let html = fs.readFileSync(blogPagePath, 'utf8');

  if (html.includes(startMarker) && html.includes(endMarker)) {
    html = html.replace(new RegExp(`${startMarker}[\\s\\S]*?${endMarker}`), generated);
  } else {
    html = html.replace(
      /\n    <section class="section">\s*<div class="wrap">\s*<div class="blog-featured">[\s\S]*?<\/section>\s*\n  <\/main>/,
      `\n${generated}\n  </main>`
    );
  }

  fs.writeFileSync(blogPagePath, html);
}

function postStyle() {
  return `    .post-hero {
      background: linear-gradient(180deg, var(--paper) 0%, var(--white) 100%);
      padding-bottom: clamp(44px, 7vw, 76px);
    }
    .post-hero h1 {
      max-width: 980px;
    }
    .wp-post-cover {
      aspect-ratio: 16 / 9;
      border-radius: var(--r-md);
      overflow: hidden;
      background: var(--paper-2);
      margin: 36px auto 0;
      max-width: 1080px;
      border: 1px solid var(--line);
      box-shadow: 0 18px 50px -28px rgba(8, 34, 43, .45);
    }
    .wp-post-cover img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .wp-post-body {
      max-width: 860px;
      margin: 0 auto;
      background: var(--white);
      border: 1px solid var(--line);
      border-radius: var(--r-md);
      padding: clamp(28px, 5vw, 56px);
      box-shadow: 0 18px 50px -32px rgba(8, 34, 43, .34);
    }
    .wp-post-body > h1:first-child {
      display: none;
    }
    .wp-post-body h2 {
      margin-top: 44px;
      padding-top: 8px;
      border-top: 1px solid var(--line);
    }
    .wp-post-body h3,
    .wp-post-body h4 {
      margin-top: 32px;
    }
    .wp-post-body p,
    .wp-post-body li {
      font-size: 17px;
      line-height: 1.75;
    }
    .wp-post-body ul,
    .wp-post-body ol {
      padding-left: 1.4em;
    }
    .wp-post-body a {
      color: var(--blue);
      border-bottom: 1px solid var(--blue-soft2);
    }
    .wp-post-body blockquote {
      margin: 32px 0;
      padding: 24px;
      background: var(--paper);
      border-left: 4px solid var(--orange);
      border-radius: 0 var(--r-md) var(--r-md) 0;
    }
    .wp-caption {
      margin: 36px 0;
      padding: 12px;
      background: var(--paper);
      border-radius: var(--r-md);
      color: var(--ink-3);
      font-size: 13px;
      text-align: center;
    }
    .wp-caption img {
      margin: 0 auto 8px;
      border-radius: var(--r-sm);
    }
    .wp-post-body img {
      border-radius: var(--r-md);
      margin: 28px auto;
      height: auto;
    }
    .wp-post-body iframe {
      max-width: 100%;
    }
    @media (max-width: 720px) {
      .wp-post-body {
        border-left: 0;
        border-right: 0;
        border-radius: 0;
      }
    }`;
}

function leftSidebar() {
  return `        <aside class="wp-post-sidebar wp-post-sidebar--left" aria-label="Cursos e atividades Ectolab">
          <div class="wp-post-sidebar__box wp-post-sidebar__cta">
            <h3>Atendimento gratuito</h3>
            <p>Receba orientacao bioenergetica e conheca caminhos de estudo na Ectolab.</p>
            <a href="/pages/orientacao-gratuita.html" class="btn btn-gold">Ver OGB <span class="arrow">→</span></a>
          </div>
          <div class="wp-post-sidebar__box">
            <h3>Cursos e trilhas</h3>
            <div class="wp-post-sidebar__links">
              <a href="/pages/cursos.html">Cursos Ectolab<span>Presenciais, online e campo</span></a>
              <a href="/pages/curso-eppi.html">EPPI<span>Ectoplasmia e paracirurgia</span></a>
              <a href="/pages/curso-campo.html">Campo Paracirurgico<span>Vivencia assistencial</span></a>
              <a href="/pages/trilha.html">Trilha do Saber<span>Formacao progressiva</span></a>
            </div>
          </div>
          <div class="wp-post-sidebar__box">
            <h3>Atividades</h3>
            <div class="wp-post-sidebar__links">
              <a href="/pages/curso.html?id=preceptoria">Preceptoria em Ectoplasmia<span>Acompanhamento tecnico</span></a>
              <a href="/pages/dinamica.html">DIP<span>Dinamicas interassistenciais</span></a>
              <a href="/pages/rede.html">Rede Invisivel<span>Atendimento a distancia</span></a>
            </div>
          </div>
        </aside>`;
}

function rightSidebar(post, posts) {
  const related = posts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 5)
    .map((item) => `<a href="${postHref(item)}">${escapeHtml(item.title)}<span>${dateLabel(item.date)}</span></a>`)
    .join('\n              ');

  return `        <aside class="wp-post-sidebar wp-post-sidebar--right" aria-label="Outros posts do blog">
          <div class="wp-post-sidebar__box">
            <h3>Outros posts</h3>
            <div class="wp-post-sidebar__links">
              ${related}
            </div>
          </div>
        </aside>`;
}

function renderPostPage(post, posts) {
  const bodyHtml = marked.parse(post.body || '');
  const description = excerpt(post);
  const cover = post.coverImage
    ? `        <div class="wp-post-cover"><img src="${escapeHtml(post.coverImage)}" alt="${escapeHtml(post.title)}" loading="eager" /></div>`
    : '';

  return `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(post.title)} · Ectolab</title>
  <meta name="description" content="${escapeHtml(description)}" />
  <link rel="canonical" href="${siteUrl}/${escapeHtml(post.slug)}/" />
  <meta property="og:type" content="article" />
  <meta property="og:title" content="${escapeHtml(post.title)} · Ectolab" />
  <meta property="og:description" content="${escapeHtml(description)}" />
  <meta property="og:url" content="${siteUrl}/${escapeHtml(post.slug)}/" />
${post.coverImage ? `  <meta property="og:image" content="${siteUrl}${escapeHtml(post.coverImage)}" />\n` : ''}  <meta property="article:published_time" content="${escapeHtml(String(post.date).slice(0, 10))}" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Manrope:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="/assets/styles.css" />
  <link rel="stylesheet" href="/assets/inner.css" />
  <style>
${postStyle()}  </style>
</head>
<body data-active="blog">
  <div id="__header"></div>
  <main>
    <section class="post-hero">
      <div class="wrap">
        <div class="breadcrumb"><a href="/index.html">Ectolab</a><span class="sep">◆</span><a href="/pages/blog.html">Blog</a><span class="sep">◆</span><span>${escapeHtml(post.category || 'Blog')}</span></div>
        <div class="eyebrow" style="justify-content:center;display:flex;margin-top:32px"><span class="dot"></span>${escapeHtml(post.category || 'Blog')}</div>
        <h1>${escapeHtml(post.title)}</h1>
        <div class="post-meta"><span>${escapeHtml(post.author || 'ECTOLAB')}</span><span class="sep">◆</span><time datetime="${escapeHtml(String(post.date).slice(0, 10))}">${dateSlash(post.date)}</time></div>
${cover}
      </div>
    </section>
    <section class="section bg-white" style="padding-top:56px">
      <div class="wrap wp-post-layout">
${leftSidebar()}
        <article class="prose wp-post-body">
${bodyHtml}
        </article>
${rightSidebar(post, posts)}
      </div>
    </section>
  </main>
  <div id="__footer"></div>
  <script src="/assets/chrome.js"></script>
</body>
</html>
`;
}

function writePostPages(posts) {
  posts.forEach((post) => {
    const html = renderPostPage(post, posts);
    const legacyDir = path.join(publicDir, post.slug);
    const blogDir = path.join(publicDir, 'blog', post.slug);
    const blogHtmlPath = path.join(publicDir, 'blog', `${post.slug}.html`);

    fs.mkdirSync(legacyDir, { recursive: true });
    fs.mkdirSync(blogDir, { recursive: true });
    fs.mkdirSync(path.dirname(blogHtmlPath), { recursive: true });
    fs.writeFileSync(path.join(legacyDir, 'index.html'), html);
    fs.writeFileSync(path.join(blogDir, 'index.html'), html);
    fs.writeFileSync(blogHtmlPath, html);
  });
}

const posts = readPosts();

if (posts.length === 0) {
  throw new Error('No published posts found in content/blog.');
}

updateBlogPage(posts);
writePostPages(posts);
console.log(`Generated blog listing and ${posts.length} post pages.`);
