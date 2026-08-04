import { jsPDF } from 'jspdf';
import spaceMidUrl from './fonts/SpaceGrotesk-Medium.ttf?url';
import spaceBoldUrl from './fonts/SpaceGrotesk-Bold.ttf?url';
import manropeRegUrl from './fonts/Manrope-Regular.ttf?url';
import manropeBoldUrl from './fonts/Manrope-Bold.ttf?url';
import jbMidUrl from './fonts/JetBrainsMono-Medium.ttf?url';
import jbSemiUrl from './fonts/JetBrainsMono-SemiBold.ttf?url';

const MESES_INDICE = { jan: 0, fev: 1, mar: 2, abr: 3, mai: 4, jun: 5, jul: 6, ago: 7, set: 8, out: 9, nov: 10, dez: 11 };
const MESES_NOME = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
const SEMANAS_PT = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
const DIA_SIGLA = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'];

const COR = {
  ink: '#08222b',
  ink2: '#1a3d4a',
  ink3: '#56707a',
  teal: '#155366',
  teal2: '#0e3e4d',
  glow: '#1f87a8',
  glow2: '#2da3c4',
  orange: '#f0a030',
  orange2: '#d68915',
  paper2: '#dfeaf0',
  white: '#ffffff',
  verdeTexto: '#1f7a4d',
  verdeBorda: '#59c98a',
  verdeFundo: '#eaf7f0',
  cinzaFundo: '#eef5f8',
};

const COR_CATEGORIA = {
  palestra: COR.glow,
  oficina: COR.orange,
  programa: COR.teal,
  'curso-campo': COR.teal2,
  'curso-hibrido': COR.teal,
  'curso-presencial': COR.ink,
  'curso-online': COR.glow2,
  verbete: COR.orange2,
  artigo: COR.ink3,
  simposio: COR.orange2,
  forum: '#e09a1f',
  dinamica: COR.orange,
  encontro: COR.glow,
  'encontro-de-voluntarios': COR.glow,
  'parceria-ictenepes': COR.glow,
};

const FONTES = [
  ['SpaceGrotesk-Medium.ttf', spaceMidUrl, 'sg'],
  ['SpaceGrotesk-Bold.ttf', spaceBoldUrl, 'sgB'],
  ['Manrope-Regular.ttf', manropeRegUrl, 'mr'],
  ['Manrope-Bold.ttf', manropeBoldUrl, 'mrB'],
  ['JetBrainsMono-Medium.ttf', jbMidUrl, 'jb'],
  ['JetBrainsMono-SemiBold.ttf', jbSemiUrl, 'jbB'],
];

function pad(n) {
  return String(n).padStart(2, '0');
}

function fmtBR(d) {
  return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}`;
}

function parseDias(txt, mesIdx, ano) {
  const dias = txt.split(/[–\-/]/).map((s) => parseInt(s.replace(/\D/g, ''), 10)).filter((n) => !isNaN(n));
  if (dias.length === 0) return null;
  const inicio = new Date(ano, mesIdx, dias[0]);
  let fim = new Date(ano, mesIdx, dias[0]);
  if (dias.length > 1) {
    fim = new Date(ano, mesIdx, dias[1]);
    if (dias[1] < dias[0]) fim = new Date(ano, mesIdx + 1, dias[1]);
  }
  return { inicio, fim };
}

function textoDe(span) {
  return span ? span.textContent.replace(/◆/g, '').trim() : '';
}

function coletarEventos() {
  const eventos = [];
  document.querySelectorAll('.agenda-row').forEach((row) => {
    if (row.hidden) return;
    const block = row.closest('.month-block');
    if (!block) return;
    const mes = block.dataset.month;
    const ano = parseInt(block.dataset.year, 10);
    if (!(mes in MESES_INDICE) || isNaN(ano)) return;

    const diaTxt = (row.querySelector('.agenda-row__date strong') || {}).textContent?.trim() || '';
    const datas = parseDias(diaTxt, MESES_INDICE[mes], ano);
    if (!datas) return;

    const titulo = (row.querySelector('.agenda-row__body h3') || {}).textContent?.trim() || '';
    const descricao = (row.querySelector('.agenda-row__body p') || {}).textContent?.trim() || '';
    const categoria = (row.querySelector('.agenda-tag') || {}).textContent?.trim() || row.dataset.cat || '';
    const status = (row.querySelector('.state') || {}).textContent?.trim() || '';
    const metas = row.querySelectorAll('.agenda-row__meta span');
    const local = textoDe(metas[0]);
    const horario = textoDe(metas[1]);

    let preco = (row.querySelector('.price') || {}).textContent?.trim() || '';
    let link = row.getAttribute('href') || '';
    if (!link) {
      const btn = row.querySelector('.agenda-modal-btn');
      if (btn) link = btn.getAttribute('href') || '';
    }
    if (row.classList.contains('agenda-row--multi')) {
      preco = Array.from(row.querySelectorAll('.agenda-modal-btn'))
        .map((b) => {
          const label = (b.querySelector('.agenda-modal-btn__label') || {}).textContent?.trim() || '';
          const price = (b.querySelector('.agenda-modal-btn__price') || {}).textContent?.trim() || '';
          return [label, price].filter(Boolean).join(' ');
        })
        .filter(Boolean)
        .join(' | ');
    }

    eventos.push({
      mesKey: mes,
      mesNome: MESES_NOME[MESES_INDICE[mes]],
      ano,
      dias: diaTxt,
      inicio: datas.inicio,
      fim: datas.fim,
      semana: SEMANAS_PT[datas.inicio.getDay()],
      semanaFim: SEMANAS_PT[datas.fim.getDay()],
      categoria,
      titulo: titulo.replace(/\s+/g, ' '),
      descricao: descricao.replace(/\s+/g, ' '),
      local,
      horario,
      preco,
      status,
      link,
    });
  });
  return eventos;
}

function escopoArquivo() {
  const ano = (document.querySelector('.year-tab.on') || {}).dataset?.year || '';
  const mes = (document.querySelector('.month-pill.on') || {}).dataset?.month || '';
  const cat = (document.querySelector('.cat-chip.on') || {}).dataset?.cat || '';
  let nome = 'agenda-ectolab';
  if (ano) nome += '-' + ano;
  if (mes && mes !== 'all') nome += '-' + mes;
  else if (cat && cat !== 'all') nome += '-' + cat;
  return nome;
}

function baixar(nome, blob) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = nome;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 4000);
}

function gerarCSV(eventos) {
  const cabecalho = ['Data', 'Data final', 'Dia da semana', 'Categoria', 'Título', 'Descrição', 'Local', 'Horário', 'Preço', 'Inscrições', 'Link'];
  const celula = (v) => {
    const s = String(v ?? '').replace(/"/g, '""');
    return /[;"\n\r]/.test(s) ? `"${s}"` : s;
  };
  const linhas = eventos.map((e) =>
    [fmtBR(e.inicio), fmtBR(e.fim), e.semana, e.categoria, e.titulo, e.descricao, e.local, e.horario, e.preco, e.status, e.link]
      .map(celula)
      .join(';')
  );
  return '\uFEFF' + [cabecalho.map(celula).join(';'), ...linhas].join('\r\n');
}

function gerarMD(eventos) {
  const hoje = new Date();
  const titulo = `# Agenda Ectolab ${new Date().getFullYear()}`;
  const meta = `> Gerado em ${fmtBR(hoje)} · ${eventos.length} ${eventos.length === 1 ? 'atividade' : 'atividades'} · https://ectolab.org/pages/agenda.html`;
  const colunas = ['Data', 'Data final', 'Dia da semana', 'Categoria', 'Título', 'Descrição', 'Local', 'Horário', 'Preço', 'Inscrições', 'Link'];
  const escapar = (v) => String(v ?? '').replace(/\|/g, '\\|').replace(/\r?\n/g, ' ');
  const head = `| ${colunas.join(' | ')} |`;
  const sep = `| ${colunas.map(() => '---').join(' | ')} |`;
  const linhas = eventos.map((e) =>
    `| ${[fmtBR(e.inicio), fmtBR(e.fim), e.semana, e.categoria, e.titulo, e.descricao, e.local, e.horario, e.preco, e.status, e.link].map(escapar).join(' | ')} |`
  );
  return [titulo, '', meta, '', head, sep, ...linhas, ''].join('\n');
}

/* ------------------------------------------------------------------ *
 * PDF — layout vertical estilo site (cabeçalho + meses + eventos)
 * ------------------------------------------------------------------ */

let fontesProntas = null;

function arrayBufferToBase64(ab) {
  const bytes = new Uint8Array(ab);
  let bin = '';
  const CHUNK = 0x8000;
  for (let i = 0; i < bytes.length; i += CHUNK) {
    bin += String.fromCharCode.apply(null, bytes.subarray(i, i + CHUNK));
  }
  return btoa(bin);
}

async function carregarFontes(doc) {
  for (const [arquivo, url] of FONTES) {
    const res = await fetch(url);
    const ab = await res.arrayBuffer();
    doc.addFileToVFS(arquivo, arrayBufferToBase64(ab));
  }
  FONTES.forEach(([arquivo, , familia]) => doc.addFont(arquivo, familia, 'normal'));
}

function corStatus(status) {
  if (/abert/i.test(status)) return { texto: COR.verdeTexto, borda: COR.verdeBorda, fundo: COR.verdeFundo };
  return { texto: COR.ink3, borda: COR.paper2, fundo: COR.cinzaFundo };
}

function rotuloSemana(e) {
  if (e.fim.getTime() === e.inicio.getTime()) return DIA_SIGLA[e.inicio.getDay()];
  return `${DIA_SIGLA[e.inicio.getDay()]}–${DIA_SIGLA[e.fim.getDay()]}`;
}

function rotuloDias(e) {
  const ini = pad(e.inicio.getDate());
  if (e.fim.getTime() === e.inicio.getTime()) return ini;
  return `${ini}–${pad(e.fim.getDate())}`;
}

async function gerarPDF(eventos) {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'pt', format: 'a4' });
  if (!fontesProntas) fontesProntas = carregarFontes(doc);
  await fontesProntas;

  const PAGE_W = doc.internal.pageSize.getWidth();
  const PAGE_H = doc.internal.pageSize.getHeight();
  const L = 44;
  const R = 44;
  const CONTENT_W = PAGE_W - L - R;
  const TOP = 118;
  const BOTTOM = PAGE_H - 46;
  const X_DATA = L + 12;
  const X_CONTEUDO = L + 84;
  const W_CONTEUDO = CONTENT_W - 84;

  const ano = (eventos[0] || {}).ano || new Date().getFullYear();
  const hoje = new Date();

  // Mede e quebra linhas de texto com a fonte/tamanho informados.
  const wrap = (texto, largura, familia, tam) => {
    doc.setFont(familia, 'normal');
    doc.setFontSize(tam);
    const linhas = doc.splitTextToSize(texto || '', largura);
    return Array.isArray(linhas) ? linhas : [linhas];
  };

  // Pré-mede um evento: retorna { linhas..., h } usado por desenharEvento.
  const medirEvento = (e) => {
    const titulo = wrap(e.titulo, W_CONTEUDO, 'sg', 11.5);
    const descricao = e.descricao ? wrap(e.descricao, W_CONTEUDO, 'mr', 9) : [];
    const metaItens = [e.local, e.horario].filter((v) => v && v !== 'Consultar' && v.trim() !== '');
    const meta = metaItens.length ? wrap(metaItens.join('   ·   '), W_CONTEUDO - 14, 'jb', 7.5) : [];
    const link = e.link ? wrap(e.link, W_CONTEUDO - 12, 'jb', 6.5) : [];
    const h =
      14 + // respiro superior
      14 + // linha das pills
      16 + // respiro pills → título
      titulo.length * 14.2 +
      (descricao.length ? 8 + descricao.length * 12.2 : 0) +
      (meta.length ? 9 + meta.length * 10.6 : 0) +
      11 + // respiro → link
      link.length * 9 +
      20; // respiro inferior
    return { titulo, descricao, meta, link, h };
  };

  const desenharCabecalho = () => {
    doc.setFillColor(COR.teal);
    doc.rect(0, 0, PAGE_W, 52, 'F');

    doc.setFont('sgB', 'normal');
    doc.setFontSize(14);
    doc.setTextColor(COR.white);
    doc.text(`AGENDA ECTOLAB ${ano}`, L, 32);

    doc.setFont('jbB', 'normal');
    doc.setFontSize(8);
    doc.setTextColor('#cfe3e9');
    doc.text('ECTOLAB.ORG/PAGES/AGENDA.HTML', PAGE_W - R, 32, { align: 'right' });

    doc.setFont('jb', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(COR.ink3);
    doc.text(`Gerado em ${fmtBR(hoje)} · ${eventos.length} ${eventos.length === 1 ? 'atividade' : 'atividades'}`, L, TOP - 26);
    doc.text(`Página ${doc.internal.getNumberOfPages()} de {{total}}`, PAGE_W - R, TOP - 26, { align: 'right' });
  };

  const desenharRodape = () => {
    doc.setDrawColor(COR.paper2);
    doc.setLineWidth(0.75);
    doc.line(L, PAGE_H - 34, PAGE_W - R, PAGE_H - 34);
    doc.setFont('jb', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(COR.ink3);
    doc.text('Ectolab — Associação Internacional de Pesquisa Laboratorial em Paracirurgia e Ectoplasmia', L, PAGE_H - 22);
    doc.text('https://ectolab.org', PAGE_W - R, PAGE_H - 22, { align: 'right' });
  };

  const novaPagina = () => {
    doc.addPage();
    desenharCabecalho();
    desenharRodape();
  };

  const desenharPill = (txt, x, y, { texto, borda, fundo }) => {
    doc.setFont('jbB', 'normal');
    doc.setFontSize(6);
    const w = doc.getTextWidth(txt) + 18;
    const h = 15;
    doc.setDrawColor(borda);
    doc.setFillColor(fundo);
    doc.roundedRect(x, y, w, h, h / 2, h / 2, 'FD');
    doc.setTextColor(texto);
    doc.text(txt, x + w / 2, y + h / 2 + 2.4, { align: 'center' });
    return w;
  };

  const desenharDiamante = (x, y) => {
    doc.setFillColor(COR.orange);
    doc.triangle(x, y - 4.5, x - 4.5, y, x + 4.5, y, 'F');
    doc.triangle(x, y + 4.5, x - 4.5, y, x + 4.5, y, 'F');
  };

  const desenharMes = (nome, yr, total, y) => {
    doc.setFont('sgB', 'normal');
    doc.setFontSize(21);
    doc.setTextColor(COR.ink);
    doc.text(nome, L, y + 17);

    doc.setFont('jb', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(COR.ink3);
    doc.text(String(yr), L + doc.getTextWidth(nome) + 8, y + 17);

    doc.setFont('jbB', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(COR.ink3);
    doc.text(`${total} ${total === 1 ? 'atividade' : 'atividades'}`, PAGE_W - R, y + 17, { align: 'right' });

    doc.setDrawColor(COR.ink);
    doc.setLineWidth(2);
    doc.line(L, y + 31, PAGE_W - R, y + 31);
    return 38;
  };

  const desenharEvento = (e, m, yTop) => {
    const catCor = COR_CATEGORIA[e.mesKey] || COR_CATEGORIA[e.categoria] || COR.teal;
    const h = m.h;

    doc.setFillColor(COR.white);
    doc.rect(0, yTop, PAGE_W, h, 'F');

    doc.setFillColor(catCor);
    doc.rect(L, yTop, 3, h, 'F');

    const yPills = yTop + 14;
    let xPill = X_CONTEUDO;
    xPill += desenharPill(e.categoria.toUpperCase(), xPill, yPills, { texto: catCor, borda: catCor, fundo: COR.white }) + 10;
    if (e.status) desenharPill(e.status.toUpperCase(), xPill, yPills, corStatus(e.status));

    let y = yPills + 15 + 16;

    doc.setFont('sg', 'normal');
    doc.setFontSize(11.5);
    doc.setTextColor(COR.ink);
    m.titulo.forEach((t) => {
      doc.text(t, X_CONTEUDO, y);
      y += 14.2;
    });

    if (m.descricao.length) {
      y += 4;
      doc.setFont('mr', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(COR.ink2);
      m.descricao.forEach((t) => {
        doc.text(t, X_CONTEUDO, y);
        y += 12.2;
      });
    }

    if (m.meta.length) {
      y += 5;
      const preco = e.preco ? String(e.preco).trim() : '';
      doc.setFont('mrB', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(COR.teal);
      if (preco) doc.text(preco, PAGE_W - R, y, { align: 'right' });

      doc.setFont('jb', 'normal');
      doc.setFontSize(7.5);
      doc.setTextColor(COR.ink3);
      m.meta.forEach((t, i) => {
        if (i === 0) desenharDiamante(X_CONTEUDO + 2, y - 3);
        doc.text(t, X_CONTEUDO + 9, y);
        y += 10.6;
      });
    }

    y += 7;
    if (m.link.length) {
      doc.setFont('jb', 'normal');
      doc.setFontSize(6.5);
      doc.setTextColor(COR.glow);
      m.link.forEach((t, i) => {
        if (i === 0) {
          doc.setFillColor(COR.glow);
          doc.triangle(X_CONTEUDO + 2, y - 3.5, X_CONTEUDO - 1.5, y + 1.5, X_CONTEUDO + 5.5, y + 1.5, 'F');
        }
        doc.text(t, X_CONTEUDO + 9, y);
        if (e.link) doc.link(X_CONTEUDO + 9, y - 6.2, doc.getTextWidth(t), 9, { url: e.link });
        y += 9;
      });
    }

    doc.setDrawColor(COR.paper2);
    doc.setLineWidth(0.75);
    doc.line(L, yTop + h - 1, PAGE_W - R, yTop + h - 1);
  };

  // Agrupa por mês/ano (o DOM já vem em ordem cronológica).
  const meses = [];
  eventos.forEach((e) => {
    const chave = `${e.mesKey}-${e.ano}`;
    const ultimo = meses[meses.length - 1];
    if (ultimo && ultimo.chave === chave) ultimo.eventos.push(e);
    else meses.push({ chave, nome: e.mesNome, ano: e.ano, eventos: [e] });
  });

  let y = TOP;
  desenharCabecalho();
  desenharRodape();

  meses.forEach((mes) => {
    const medidas = mes.eventos.map(medirEvento);
    const hHead = 38;

    if (y + hHead + medidas[0].h > BOTTOM) {
      novaPagina();
      y = TOP;
    }

    desenharMes(mes.nome, mes.ano, mes.eventos.length, y);
    y += hHead + 8;

    mes.eventos.forEach((e, i) => {
      const m = medidas[i];
      if (y + m.h > BOTTOM) {
        novaPagina();
        y = TOP;
      }

      desenharEvento(e, m, y);

      doc.setFont('sgB', 'normal');
      doc.setFontSize(21);
      doc.setTextColor(COR.ink);
      doc.text(rotuloDias(e), X_DATA, y + 18);
      doc.setFont('jbB', 'normal');
      doc.setFontSize(6.5);
      doc.setTextColor(COR.ink3);
      doc.text(rotuloSemana(e).toUpperCase(), X_DATA, y + 29);

      y += m.h + 8;
    });

    y += 26;
  });

  doc.putTotalPages('{{total}}');
  return doc.output('blob');
}

function feedback(msg) {
  const hint = document.getElementById('dlHint');
  if (!hint) return;
  hint.textContent = msg;
  clearTimeout(feedback._t);
  feedback._t = setTimeout(() => {
    hint.textContent = 'Baixa as atividades visíveis com os filtros atuais (ano, categoria e mês).';
  }, 3000);
}

function iniciar() {
  const botoes = {
    dlCsv: { ext: 'csv', gerar: gerarCSV, tipo: 'text/csv;charset=utf-8' },
    dlMd: { ext: 'md', gerar: gerarMD, tipo: 'text/markdown;charset=utf-8' },
    dlPdf: { ext: 'pdf', gerar: gerarPDF, tipo: 'application/pdf' },
  };

  Object.entries(botoes).forEach(([id, cfg]) => {
    const btn = document.getElementById(id);
    if (!btn) return;
    btn.addEventListener('click', async () => {
      if (btn.disabled) return;
      btn.disabled = true;
      try {
        const eventos = coletarEventos();
        if (eventos.length === 0) {
          feedback('Nenhuma atividade visível para baixar.');
          return;
        }
        const conteudo = await cfg.gerar(eventos);
        const blob = conteudo instanceof Blob ? conteudo : new Blob([conteudo], { type: cfg.tipo });
        baixar(`${escopoArquivo()}.${cfg.ext}`, blob);
        feedback(`Baixado: ${eventos.length} ${eventos.length === 1 ? 'atividade' : 'atividades'}.`);
      } finally {
        btn.disabled = false;
      }
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', iniciar);
} else {
  iniciar();
}
