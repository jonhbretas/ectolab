/**
 * @fileoverview Fonte única de dados do livro "Ectoplasma" (gescon principal
 * da Ectolab). Usado tanto pela página React (assets/ectoplasma-livro.jsx)
 * quanto pelo gerador de SEO/JSON-LD (vite.config.js), garantindo que o
 * conteúdo visível e o schema estruturado (Book + FAQPage) nunca divirjam.
 */

export const BOOK = {
  title: 'Ectoplasma',
  subtitle: 'Panorama Contemporâneo das Pesquisas sobre Ectoplasmia',
  // Organizadores
  authors: ['Hernande Leite', 'Ivelise Vicenzi'],
  // Capas (em public/livros). A capa em inglês some sozinha se o arquivo
  // ainda não existir — basta salvar o JPG no caminho indicado.
  coverPt: '/livros/ectoplasma-livro-ectolab.jpg',
  coverEn: '/livros/ectoplasma-book-en-ectolab.png',
  // Sinopse oficial (também usada como meta description-base / og)
  synopsis:
    'O ectoplasma é descrito desde a Antiguidade embora permaneça pouco conhecido até os dias atuais. ' +
    'Como estudar cientificamente este elemento ao mesmo tempo sutil e efêmero? A solução talvez esteja ' +
    'na mudança de paradigma: para o pesquisador que experimenta a ectoplasmia na condição de epicentro ' +
    'ou produtor do fenômeno, o ectoplasma torna-se matéria objetiva, perceptível e concreta. A dúvida do ' +
    'pesquisador-espectador externo, presente desde os estudos da Metapsíquica, perde a razão de ser quando ' +
    'a ectoplasmia é vivenciada pelo lado de dentro, na condição de autopesquisador participativo.',
  isbn10: '8554401794',
  isbn13: '9788554401795',
  barcode: '9788554401795',
  pages: 207,
  edition: '1ª edição',
  language: 'Português',
  publisher: 'ECTOLAB',
  year: '2025',
  binding: 'Brochura',
  dimensions: '21,0 × 16,0 × 1,2 cm',
  weight: '360 g',
  // Compra — edição física (PT-BR)
  shopcons: 'https://www.shopcons.com.br/produto/ectoplasma-panorama-contemporaneo-das-pesquisas-sobre-ectoplasmia-2038',
  vendorPt: 'Shopcons / Epígrafe',
  priceBRL: 'R$ 55,00',
  priceBRLValue: '55.00', // valor numérico p/ schema.org Offer
  // E-book em inglês (Amazon) — ATUALIZAR com o link real quando publicado.
  amazon: 'https://www.amazon.com/s?k=ectoplasm+ectolab+book',
  amazonAvailable: false,
};

// FAQ duplo: bloco 1 = o livro; bloco 2 = o tema (ectoplasma/ectoplasmia).
// As perguntas são escritas com as palavras-chave mais buscadas para ajudar
// o ranqueamento (livro sobre ectoplasma, livro sobre ectoplasmia, efeitos
// físicos, o que é ectoplasma etc.).

export const FAQ_LIVRO = [
  {
    q: 'Qual é o melhor livro sobre ectoplasma e ectoplasmia?',
    a: 'O livro "Ectoplasma: Panorama Contemporâneo das Pesquisas sobre Ectoplasmia", publicado pela Ectolab em 2025, reúne a pesquisa contemporânea sobre o tema. É a obra de referência (gescon principal) da Ectolab — Associação Internacional de Pesquisa em Ectoplasmia e Paracirurgia — escrita a partir da experimentação direta do fenômeno.',
  },
  {
    q: 'Onde comprar o livro Ectoplasma?',
    a: 'A versão física, em português, está disponível na ShopCons (loja da Conscienciologia). A versão em inglês será disponibilizada em formato e-book pela Amazon. Os links de compra estão no topo desta página.',
  },
  {
    q: 'O livro tem versão em inglês?',
    a: 'Sim. Além da edição física em português pela ShopCons, o livro está sendo disponibilizado em e-book na versão em inglês pela Amazon, ampliando o acesso internacional à pesquisa em ectoplasmia.',
  },
  {
    q: 'Quantas páginas tem o livro e quando foi publicado?',
    a: 'A obra tem 207 páginas, encadernação em brochura, e foi publicada em 2025 (1ª edição) pela Ectolab. ISBN-13: 9788554401795.',
  },
];

export const FAQ_TEMA = [
  {
    q: 'O que é ectoplasma?',
    a: 'Ectoplasma é a hipótese de uma substância ou energia semimaterial associada aos chamados efeitos físicos do parapsiquismo — manifestações observáveis em fenômenos ectoplásmicos. Descrito desde a Antiguidade e estudado na Metapsíquica do século XIX e XX, o ectoplasma é o objeto central de pesquisa da ectoplasmia.',
  },
  {
    q: 'O que é ectoplasmia?',
    a: 'Ectoplasmia é o campo de estudo e a prática experimental que investiga o ectoplasma e suas aplicações, especialmente interassistenciais (como na paracirurgia). Diferentemente da observação externa, a ectoplasmia propõe a vivência do fenômeno pelo próprio pesquisador, na condição de epicentro ou produtor.',
  },
  {
    q: 'O que são efeitos físicos no estudo do ectoplasma?',
    a: 'Os efeitos físicos são manifestações materialmente perceptíveis atribuídas ao ectoplasma — como deslocamentos, materializações e fenômenos registráveis. O livro aborda como esses efeitos, antes tratados apenas como objeto de dúvida pelo pesquisador-espectador, tornam-se concretos quando a ectoplasmia é experimentada de dentro.',
  },
  {
    q: 'É possível estudar o ectoplasma cientificamente?',
    a: 'Sim. A proposta da Ectolab é a mudança de paradigma: o autopesquisador participativo experimenta a ectoplasmia diretamente, com método, registro técnico e o Princípio da Descrença. Assim o ectoplasma deixa de ser uma incógnita distante e passa a ser matéria objetiva de pesquisa.',
  },
];
