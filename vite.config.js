import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { relative, resolve } from 'path';

const SITE_URL = 'https://ectolab.vercel.app';
const SITE_NAME = 'Ectolab';
const HOME_TITLE = 'Ectolab: pesquisa em ectoplasmia';
const HOME_DESCRIPTION = 'Pesquisa técnica em ectoplasmia, fenômenos ectoplásmicos, paracirurgia e interassistência, com sede em Foz do Iguaçu.';
const DEFAULT_DESCRIPTION = 'Conheça a Ectolab: pesquisa, cursos e atividades sobre ectoplasmia, paracirurgia e parafenômenos da consciência.';

function pagePath(filename) {
  const relativePath = relative(__dirname, filename)
    .replace(/\\/g, '/')
    .replace(/^\/+/, '');

  return relativePath === 'index.html' ? '/' : `/${relativePath}`;
}

function titleForPath(pathname, html) {
  if (pathname === '/') return HOME_TITLE;

  const match = html.match(/<title>(.*?)<\/title>/i);
  if (!match) return `${SITE_NAME}: pesquisa em ectoplasmia`;

  return match[1]
    .replace(/\s+[—·]\s+Ectolab\s*$/i, '')
    .replace(/\s+·\s+Ectolab\s*$/i, '')
    .trim()
    .concat(` · ${SITE_NAME}`);
}

function descriptionForPath(pathname, html) {
  if (pathname === '/') return HOME_DESCRIPTION;

  const match = html.match(/<meta\s+name="description"\s+content="([^"]*)"\s*\/?>/i);
  const description = match?.[1]?.trim();

  if (!description) return DEFAULT_DESCRIPTION;
  if (description.length <= 160) return description;

  return `${description.slice(0, 155).replace(/\s+\S*$/, '')}...`;
}

function seoPlugin() {
  return {
    name: 'ectolab-seo',
    transformIndexHtml: {
      order: 'pre',
      handler(html, ctx) {
        const pathname = pagePath(ctx.filename);
        const canonical = `${SITE_URL}${pathname === '/' ? '/' : pathname}`;
        const title = titleForPath(pathname, html);
        const description = descriptionForPath(pathname, html);
        const image = `${SITE_URL}/logo.webp`;
        const schema = {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': ['Organization', 'LocalBusiness'],
              '@id': `${SITE_URL}/#organization`,
              name: SITE_NAME,
              legalName: 'Associação Internacional de Pesquisa Laboratorial em Paracirurgia e Ectoplasmia',
              url: SITE_URL,
              logo: image,
              foundingDate: '2013',
              email: 'contato@ectolab.org',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Rua da Cosmoética, 1635 – sala 12',
                addressLocality: 'Foz do Iguaçu',
                addressRegion: 'PR',
                postalCode: '85853-755',
                addressCountry: 'BR'
              },
              areaServed: ['BR', 'PT', 'ES'],
              knowsAbout: ['ectoplasmia', 'ectoplasma', 'paracirurgia', 'conscienciologia', 'parafenomenos']
            },
            {
              '@type': 'WebSite',
              '@id': `${SITE_URL}/#website`,
              url: SITE_URL,
              name: SITE_NAME,
              inLanguage: 'pt-BR',
              publisher: { '@id': `${SITE_URL}/#organization` }
            },
            {
              '@type': 'WebPage',
              '@id': `${canonical}#webpage`,
              url: canonical,
              name: title,
              description,
              inLanguage: 'pt-BR',
              isPartOf: { '@id': `${SITE_URL}/#website` },
              about: { '@id': `${SITE_URL}/#organization` }
            }
          ]
        };

        const extraHead = `
  <link rel="canonical" href="${canonical}" />
  <link rel="alternate" hreflang="pt-BR" href="${canonical}" />
  <link rel="alternate" hreflang="x-default" href="${canonical}" />
  <link rel="icon" href="/favicon.png" type="image/png" />
  <link rel="manifest" href="/site.webmanifest" />
  <meta name="theme-color" content="#0f5d73" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="${SITE_NAME}" />
  <meta property="og:locale" content="pt_BR" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:url" content="${canonical}" />
  <meta property="og:image" content="${image}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${title}" />
  <meta name="twitter:description" content="${description}" />
  <meta name="twitter:image" content="${image}" />
  <script type="application/ld+json">${JSON.stringify(schema).replace(/</g, '\\u003c')}</script>`;

        let nextHtml = html
          .replace(/<title>.*?<\/title>/i, `<title>${title}</title>`)
          .replace(/\s*<link\s+rel="canonical"[^>]*>\s*/gi, '\n')
          .replace(/\s*<link\s+rel="alternate"[^>]*>\s*/gi, '\n')
          .replace(/\s*<link\s+rel="icon"[^>]*>\s*/gi, '\n')
          .replace(/\s*<link\s+rel="manifest"[^>]*>\s*/gi, '\n')
          .replace(/\s*<meta\s+name="theme-color"[^>]*>\s*/gi, '\n')
          .replace(/\s*<meta\s+property="og:[^>]*>\s*/gi, '\n')
          .replace(/\s*<meta\s+name="twitter:[^>]*>\s*/gi, '\n')
          .replace(/\s*<script\s+type="application\/ld\+json">[\s\S]*?<\/script>\s*/gi, '\n');

        if (/<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i.test(nextHtml)) {
          nextHtml = nextHtml.replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i, `<meta name="description" content="${description}" />`);
        } else {
          nextHtml = nextHtml.replace(/<meta\s+name="viewport"[^>]*>/i, `$&\n  <meta name="description" content="${description}" />`);
        }

        return nextHtml.replace('</head>', `${extraHead}\n</head>`);
      }
    }
  };
}

/**
 * @fileoverview Configuração Global do Vite.
 * Compila o React previamente, removendo a necessidade do Babel Standalone
 * no navegador. Isso reduz o tamanho da página e aumenta a velocidade.
 */
export default defineConfig({
  plugins: [react(), seoPlugin()],
  build: {
    rollupOptions: {
      // CENTRAL DE PÁGINAS (Build):
      // Para criar uma NOVA PÁGINA que use React, declare-a aqui.
      input: {
        main: resolve(__dirname, 'index.html'),
        quemSomos: resolve(__dirname, 'pages/quem-somos.html'),
        paracirurgia: resolve(__dirname, 'pages/paracirurgia.html'),
        cursos: resolve(__dirname, 'pages/cursos.html'),
        cursoEppi: resolve(__dirname, 'pages/curso-eppi.html'),
        cursoCampo: resolve(__dirname, 'pages/curso-campo.html'),
        cursoImersao: resolve(__dirname, 'pages/curso-imersao.html'),
        cursoProep: resolve(__dirname, 'pages/curso-proep.html'),
        orientacao: resolve(__dirname, 'pages/orientacao-gratuita.html'),
        dinamica: resolve(__dirname, 'pages/dinamica.html'),
        cursoEctoplasmiaInterassistencial: resolve(__dirname, 'pages/curso-ectoplasmia-interassistencial.html'),
        cursoEctoplasmiaProtetiva: resolve(__dirname, 'pages/curso-ectoplasmia-protetiva.html'),
        curso: resolve(__dirname, 'pages/curso.html'),
        rede: resolve(__dirname, 'pages/rede.html'),
        laboratorioParacirurgia: resolve(__dirname, 'pages/laboratorio-paracirurgia.html'),
        bioenergologia: resolve(__dirname, 'pages/bioenergologia.html'),
        laboratorioEctoplasmologia: resolve(__dirname, 'pages/laboratorio-ectoplasmologia.html'),
        painelPedidosParacirurgia: resolve(__dirname, 'pages/painel-pedidos-paracirurgia.html'),
        materiais: resolve(__dirname, 'pages/materiais.html'),
        trilha: resolve(__dirname, 'pages/trilha.html'),
        historia: resolve(__dirname, 'pages/historia.html'),
        contato: resolve(__dirname, 'pages/contato.html'),
        conscienciologia: resolve(__dirname, 'pages/conscienciologia.html'),
        blog: resolve(__dirname, 'pages/blog.html'),
        blogPost: resolve(__dirname, 'pages/blog-post.html'),
        parcerias: resolve(__dirname, 'pages/parcerias.html'),
        apoie: resolve(__dirname, 'pages/apoie.html'),
        agenda: resolve(__dirname, 'pages/agenda.html')
      }
    }
  }
});
