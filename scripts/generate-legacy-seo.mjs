import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const root = process.cwd();
const publicDir = path.join(root, 'public');
const contentDir = path.join(root, 'content', 'blog');
const siteUrl = 'https://ectolab.org';

const staticPages = [
  ['/', '2026-05-20', '1.0'],
  ['/pages/paracirurgia.html', '2026-05-20', '0.9'],
  ['/pages/trilha.html', '2026-05-20', '0.8'],
  ['/pages/cursos.html', '2026-05-20', '0.8'],
  ['/pages/atividades.html', '2026-05-20', '0.8'],
  ['/pages/quem-somos.html', '2026-05-20', '0.7'],
  ['/pages/historia.html', '2026-05-20', '0.6'],
  ['/pages/conscienciologia.html', '2026-05-20', '0.7'],
  ['/pages/materiais.html', '2026-05-20', '0.6'],
  ['/pages/blog.html', '2026-05-20', '0.6'],
  ['/pages/rede.html', '2026-05-20', '0.6'],
  ['/pages/rede-cadastro.html', '2026-06-20', '0.4'],
  ['/pages/rede-relatorio.html', '2026-06-20', '0.4'],
  ['/pages/orientacao-gratuita.html', '2026-05-20', '0.6'],
  ['/pages/tenepes.html', '2026-06-22', '0.7'],
  ['/pages/laboratorio-paracirurgia.html', '2026-06-20', '0.6'],
  ['/pages/bioenergologia.html', '2026-06-20', '0.6'],
  ['/pages/laboratorio-ectoplasmologia.html', '2026-06-20', '0.6'],
  ['/pages/contato.html', '2026-05-20', '0.6'],
  ['/pages/parcerias.html', '2026-05-20', '0.6'],
  ['/pages/apoie.html', '2026-06-20', '0.7'],
  ['/pages/curso-eppi.html', '2026-05-20', '0.5'],
  ['/pages/curso-campo.html', '2026-05-20', '0.5'],
  ['/pages/curso-imersao.html', '2026-05-20', '0.5'],
  ['/pages/curso-proep.html', '2026-05-20', '0.5'],
  ['/pages/curso-ectoplasmia-interassistencial.html', '2026-05-20', '0.5'],
  ['/pages/curso-ectoplasmia-protetiva.html', '2026-05-20', '0.5'],
];

const legacyPostLastmod = {
  oqueeectoplasma: '2023-06-29',
  'a-video-blog-post': '2023-06-29',
  'o-que-e-ectoplasma': '2024-05-13',
  '2537-2': '2024-05-13',
  'motivacao-do-ectoplasta': '2024-05-13',
  'o-guia-definitivo-sobre-chacras-do-basico-ao-avancado': '2024-12-10',
  'sindrome-ectoplasmica-causas-sintomas-e-tratamentos': '2025-05-20',
  'paracirurgia-ectoplasmia': '2025-07-09',
  'estado-vibracional-e-saude-energetica': '2025-06-15',
  'saude-energetica-o-que-e-como-desenvolver': '2025-06-28',
  'qualificacao-dos-pensenes-do-ectoplasta': '2025-09-25',
  'tecnica-arco-voltaico-craniochacral-e-paracirurgia': '2025-10-28',
};

const legacyCategories = [
  {
    path: '/product-category/outros/',
    title: 'Outros',
    description: 'Materiais, atividades e conteudos complementares da Ectolab.',
    target: '/pages/materiais.html',
    lastmod: '2025-08-12',
  },
  {
    path: '/product-category/atendimento-individual/',
    title: 'Atendimento individual',
    description: 'Atividades e atendimentos individuais oferecidos pela Ectolab.',
    target: '/pages/orientacao-gratuita.html',
    lastmod: '2023-05-27',
  },
  {
    path: '/product-category/atendimento-individual/atividade-gratuita/',
    title: 'Atividade gratuita',
    description: 'Orientacao bioenergetica gratuita e atividades abertas da Ectolab.',
    target: '/pages/orientacao-gratuita.html',
    lastmod: '2023-02-15',
  },
  {
    path: '/product-category/curso-gravado/',
    title: 'Curso gravado',
    description: 'Cursos, trilhas e programas de estudo da Ectolab.',
    target: '/pages/cursos.html',
    lastmod: '2024-06-11',
  },
  {
    path: '/product-category/atendimento-individual/preceptoria/',
    title: 'Preceptoria',
    description: 'Preceptoria e acompanhamento tecnico em ectoplasmia.',
    target: '/pages/curso.html?id=preceptoria',
    lastmod: '2023-05-27',
  },
];

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function readPosts() {
  if (!fs.existsSync(contentDir)) return [];

  return fs.readdirSync(contentDir)
    .filter((name) => name.endsWith('.md'))
    .map((name) => {
      const parsed = matter.read(path.join(contentDir, name));
      const data = parsed.data || {};

      return {
        slug: data.slug || path.basename(name, '.md'),
        published: data.published !== false,
        date: String(data.date || '').slice(0, 10),
      };
    })
    .filter((post) => post.published);
}

function categoryHtml(category) {
  const canonical = `${siteUrl}${category.path}`;
  const target = category.target;

  return `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(category.title)} - Ectolab</title>
  <meta name="description" content="${escapeHtml(category.description)}" />
  <link rel="canonical" href="${canonical}" />
  <link rel="stylesheet" href="/assets/styles.css" />
</head>
<body data-active="atividades">
  <div id="__header"></div>
  <main>
    <section class="hero">
      <div class="wrap">
        <div class="eyebrow"><span class="dot"></span>Ectolab</div>
        <h1>${escapeHtml(category.title)}</h1>
        <p>${escapeHtml(category.description)}</p>
        <div class="hero-actions">
          <a href="${escapeHtml(target)}" class="btn btn-gold">Ver pagina atual <span class="arrow">→</span></a>
          <a href="/pages/cursos.html" class="btn btn-ghost">Cursos e atividades</a>
        </div>
      </div>
    </section>
  </main>
  <div id="__footer"></div>
  <script src="/assets/chrome.js"></script>
</body>
</html>
`;
}

function writeLegacyCategoryPages() {
  legacyCategories.forEach((category) => {
    const filePath = path.join(publicDir, category.path.replace(/^\/+|\/+$/g, ''), 'index.html');
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, categoryHtml(category));
  });
}

function formatUrl([pathname, lastmod, priority]) {
  return `  <url><loc>${siteUrl}${pathname}</loc><lastmod>${lastmod}</lastmod><changefreq>weekly</changefreq><priority>${priority}</priority></url>`;
}

function writeSitemap() {
  const postUrls = readPosts()
    .map((post) => [
      `/${post.slug}/`,
      legacyPostLastmod[post.slug] || post.date || '2026-06-20',
      '0.2',
    ])
    .sort(([a], [b]) => a.localeCompare(b));

  const categoryUrls = legacyCategories.map((category) => [
    category.path,
    category.lastmod,
    '0.3',
  ]);

  const urls = [...staticPages, ...postUrls, ...categoryUrls];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(formatUrl).join('\n')}
</urlset>
`;

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
}

writeLegacyCategoryPages();
writeSitemap();
console.log('Generated legacy category pages and sitemap.xml.');
