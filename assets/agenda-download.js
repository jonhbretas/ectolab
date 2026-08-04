import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

const MESES_INDICE = { jan: 0, fev: 1, mar: 2, abr: 3, mai: 4, jun: 5, jul: 6, ago: 7, set: 8, out: 9, nov: 10, dez: 11 };
const SEMANAS_PT = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];

function pad(n) {
  return String(n).padStart(2, '0');
}

function fmtISO(d) {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
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
      inicio: datas.inicio,
      fim: datas.fim,
      semana: SEMANAS_PT[datas.inicio.getDay()],
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

function gerarPDF(eventos) {
  const doc = new jsPDF({ orientation: 'landscape', unit: 'pt', format: 'a4' });
  const margem = 36;
  const largura = doc.internal.pageSize.getWidth();

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.text(`Agenda Ectolab ${new Date().getFullYear()}`, margem, 40);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(90);
  const hoje = new Date();
  doc.text(
    `Gerado em ${fmtBR(hoje)} · ${eventos.length} ${eventos.length === 1 ? 'atividade' : 'atividades'} · ectolab.org/pages/agenda.html`,
    margem,
    58
  );
  doc.setTextColor(20);

  autoTable(doc, {
    startY: 74,
    margin: { left: margem, right: margem },
    styles: { fontSize: 7.5, cellPadding: 5, textColor: [30, 30, 30], lineColor: [222, 231, 235], lineWidth: 0.5 },
    headStyles: { fillColor: [15, 93, 115], textColor: 255, fontStyle: 'bold' },
    alternateRowStyles: { fillColor: [245, 249, 251] },
    head: [['Data', 'Dia da semana', 'Categoria', 'Título', 'Local', 'Horário', 'Preço', 'Link']],
    body: eventos.map((e) => {
      const data = e.fim.getTime() === e.inicio.getTime() ? fmtBR(e.inicio) : `${fmtBR(e.inicio)} a ${fmtBR(e.fim)}`;
      return [data, e.semana, e.categoria, e.titulo, e.local, e.horario, e.preco, e.link];
    }),
    columnStyles: {
      0: { cellWidth: 96 },
      1: { cellWidth: 74 },
      2: { cellWidth: 88 },
      4: { cellWidth: 150 },
      5: { cellWidth: 80 },
      6: { cellWidth: 76 },
      7: { cellWidth: 200, fontStyle: 'normal', textColor: [15, 93, 115] },
    },
    didDrawCell: (data) => {
      if (data.section === 'body' && data.column.index === 7) {
        const url = String(data.cell.raw);
        if (/^https?:\/\//.test(url)) {
          doc.link(data.cell.x, data.cell.y, data.cell.width, data.cell.height, { url });
        }
      }
    },
  });

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
    btn.addEventListener('click', () => {
      const eventos = coletarEventos();
      if (eventos.length === 0) {
        feedback('Nenhuma atividade visível para baixar.');
        return;
      }
      const conteudo = cfg.gerar(eventos);
      const blob = conteudo instanceof Blob ? conteudo : new Blob([conteudo], { type: cfg.tipo });
      baixar(`${escopoArquivo()}.${cfg.ext}`, blob);
      feedback(`Baixado: ${eventos.length} ${eventos.length === 1 ? 'atividade' : 'atividades'}.`);
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', iniciar);
} else {
  iniciar();
}
