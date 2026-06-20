// ═══════════════════════════════════════════════════════════════════
//  EVENTOS ECTOLAB — Fonte única de dados
// ═══════════════════════════════════════════════════════════════════
//
//  Edite aqui para atualizar a tira da HOME e a página de AGENDA.
//
//  Para adicionar um evento: copie um bloco { ... }, e edite os campos.
//  Para remover: delete o bloco inteiro.
//  Para reordenar: mova os blocos (a ordem aqui define a ordem exibida).
//
//  Campos obrigatórios: dia, mes, mesNome, ano, titulo, tipo, href, preco
//  Campos opcionais:    gratuito, local, horario, detalhe, precoExtra
//
//  tipo aceita: "TERTÚLIA" | "CAMPO · GRATUITO" | "CURSO · IMERSÃO"
//               "SIMPÓSIO · INTERNACIONAL" | qualquer outro texto
// ═══════════════════════════════════════════════════════════════════

export const eventos = [

  // ── JUNHO 2026 ────────────────────────────────────────────────────
  {
    dia:      "22",
    mes:      "JUN",           // 3 letras — aparece no badge de data
    mesNome:  "JUNHO",         // nome completo — agrupa na agenda
    ano:      "2026",
    titulo:   "Tertúlia — Ectoplasma e Mediunidade Brasileira: distinções e pontes",
    tipo:     "TERTÚLIA",
    gratuito: true,
    local:    "Online · Zoom + YouTube",
    horario:  "20h00 – 21h30",
    detalhe:  "Com Dra. Lívia Ferraz",
    href:     "/pages/atividades.html",
    preco:    "Gratuito",
    precoExtra: null,
  },

  // ── JULHO 2026 ────────────────────────────────────────────────────
  {
    dia:      "05",
    mes:      "JUL",
    mesNome:  "JULHO",
    ano:      "2026",
    titulo:   "IECTO — Imersão em Ectoplasmia · Turma 2026.2",
    tipo:     "CURSO · IMERSÃO",
    gratuito: false,
    local:    "Sede Foz · Laboratório 03",
    horario:  "7 dias · 56h",
    detalhe:  "Pré-requisito: EPPI + Campo",
    href:     "/pages/curso-imersao.html",
    preco:    "R$ 2.240",
    precoExtra: null,
  },
  {
    dia:      "11",
    mes:      "JUL",
    mesNome:  "JULHO",
    ano:      "2026",
    titulo:   "Tertúlia — O Parácorpo: anatomia e função na paracirurgia",
    tipo:     "TERTÚLIA",
    gratuito: true,
    local:    "Online · Zoom + YouTube",
    horario:  "20h00 – 21h30",
    detalhe:  "Com Prof. R. Caldeira",
    href:     "/pages/atividades.html",
    preco:    "Gratuito",
    precoExtra: null,
  },
  {
    dia:      "22",
    mes:      "JUL",
    mesNome:  "JULHO",
    ano:      "2026",
    titulo:   "EPPI — Ectoplasmia Projetiva Paracirúrgica Ectoplásmica Interassistencial",
    tipo:     "CURSO · IMERSÃO",
    gratuito: false,
    local:    "Sede Foz · Auditório B",
    horario:  "5 dias · 40h",
    detalhe:  "Pré-requisito: DIP completo",
    href:     "/pages/atividades.html",
    preco:    "R$ 1.480",
    precoExtra: null,
  },

  // ── AGOSTO 2026 ───────────────────────────────────────────────────
  {
    dia:      "05",
    mes:      "AGO",
    mesNome:  "AGOSTO",
    ano:      "2026",
    titulo:   "III Simpósio Ectolab — Paracirurgia e Saúde Integrativa",
    tipo:     "SIMPÓSIO · INTERNACIONAL",
    gratuito: false,
    local:    "Sede Foz · Auditório principal + Online",
    horario:  "3 dias · 24h",
    detalhe:  "14 palestrantes · 7 países",
    href:     "/pages/atividades.html",
    preco:    "R$ 480",
    precoExtra: "estudante R$ 240",
  },

];
