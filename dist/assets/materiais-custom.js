const artigos = [
  ["Paracirurgia e Reurbeux", "Revista Reurbanisatus", "https://ectolab.org/wp-content/uploads/2022/05/Paracirurgia-e-Reurbeux_Revista_Reurbanisatus.pdf", "A paracirurgia torna-se coadjutora avançada entre as técnicas aplicadas ao projeto das reurbanizações extrafísicas."],
  ["Rede Interassistencial de Cirurgia Invisível a Distância", "Uma proposta de trabalho", "https://ectolab.org/wp-content/uploads/2022/05/Paracirurgia-e-Reurbeux_Revista_Reurbanisatus.pdf", "Proposta de integração de tenepessistas veteranos à Dinâmica Interassistencial Holossomática, na condição de coadjutores à distância."],
  ["Proposta de Descrição e Categorização da Síndrome de Godot", "Artigo", "https://ectolab.org/wp-content/uploads/2022/05/Sindrome-do-Godot.pdf", "Descrição e caracterização da Síndrome de Godot a partir de parafatos observados na Dinâmica Interassistencial Holossomática."]
];

const lives = [
  ["Diálogos Online", "100 episódios", "https://www.youtube.com/playlist?list=PLpz4qwgYZyP3SxfEenlleSpxgqYMaVUhb", "Programa mantido entre 2020 e 2022, com professores, pesquisadores da Ectolab e convidados."],
  ["Palestras Gratuitas", "11 palestras", "https://www.youtube.com/watch?v=qz25JAWV48w&list=PLpz4qwgYZyP08Zs1MWaQKJQ8n3v51QJV1", "Apresentações presenciais gravadas e online com temas pesquisados pela Ectolab."],
  ["Canal da Ectolab", "YouTube", "https://www.youtube.com/channel/UCGlwoHzl-u1sEe7B6wPsGcA", "Conteúdos, debates e materiais em vídeo sobre ectoplasmia, paracirurgia e especialidades relacionadas."]
];

const verbetes = [
  ["Acoplador Paracirúrgico", "https://ectolab.org/wp-content/uploads/2022/05/ACOPLADOR_PARACIRURGICO.pdf", ""],
  ["Acuponto", "https://ectolab.org/wp-content/uploads/2022/05/ACUPONTO.pdf", "https://www.youtube.com/watch?v=ikFigpsna4g"],
  ["Acupuntura", "https://ectolab.org/wp-content/uploads/2022/05/ACUPUNTURA.pdf", "https://www.youtube.com/watch?v=2Defaj5zJf0"],
  ["Ádito ideativo cosmovisiológico", "https://ectolab.org/wp-content/uploads/2022/05/Adito-Ideativo-Cosmovisiologico.pdf", "http://www.youtube.com/watch?v=83kBZWuaRSQ"],
  ["Conscin ectoplasta", "https://ectolab.org/wp-content/uploads/2022/05/Conscin-Ectoplasta.pdf", "https://www.youtube.com/watch?v=1B1oGuny0Aw"],
  ["Decênio Interassistencial Paracirúrgico", "https://ectolab.org/wp-content/uploads/2022/05/DECENIO-INTERASSISTENCIAL-PARACIRURGICO.pdf", ""],
  ["Dinâmica Interassistencial de Paracirurgia", "https://ectolab.org/wp-content/uploads/2022/05/DINAMICA-INTERASSISTENCIAL-DE-PARACIRURUGIA-1.pdf", ""],
  ["Ectolab", "https://ectolab.org/wp-content/uploads/2022/05/ECTOLAB.pdf", "https://www.youtube.com/watch?v=hDD2DAqRMGc"],
  ["Ectoplasma", "https://ectolab.org/wp-content/uploads/2022/05/Ectoplasma.pdf", "https://www.youtube.com/watch?v=R1Q68a_nMiM"],
  ["Exílio terapêutico", "https://ectolab.org/wp-content/uploads/2022/05/EXILIO-TERAPEUTICO.pdf", "http://www.youtube.com/watch?v=yzKuR2L3y94"],
  ["Interação monitoria intrafísica-parassegurança", "https://ectolab.org/wp-content/uploads/2022/05/Interacao-Monitoria-Intrafisica-Parasseguranca.pdf", "https://www.youtube.com/watch?v=o9UDwZOcghw"],
  ["Jovem Ectoplasta", "https://ectolab.org/wp-content/uploads/2022/05/JOVEM-ECTOPLASTA.pdf", "https://www.youtube.com/watch?v=3JcRmgQm2h0"],
  ["Kit de dinâmica parapsíquica", "https://ectolab.org/wp-content/uploads/2022/05/KIT-DE-DINAMICA-PARAPSIQUICA.pdf", ""],
  ["Laboratório conscienciológico da ectoplasmia", "https://ectolab.org/wp-content/uploads/2022/05/Laboratorio-de-Ectoplasmologia.pdf", "https://www.youtube.com/watch?v=2Oq6GyxEpm0"],
  ["Olorização", "https://ectolab.org/wp-content/uploads/2022/05/Olorizacao.pdf", "https://www.youtube.com/watch?v=fdAPQzoK8QQ&list=PLoXdlLuaGN8TYBIzGILi0mDiEP982ma-V&index=15"],
  ["Paracablagem interassistencial", "https://ectolab.org/wp-content/uploads/2022/05/Paracablagem-Interassistencial.pdf", "https://www.youtube.com/watch?v=Wse_Ge9lDt8"],
  ["Paracirurgia", "https://ectolab.org/wp-content/uploads/2022/05/Paracirurgia.pdf", "http://www.youtube.com/watch?v=19WpWHbXDeA"],
  ["Parapercepciograma", "https://ectolab.org/wp-content/uploads/2022/05/Parapercepciograma.pdf", "http://www.youtube.com/watch?v=2VGpneUlSSA"],
  ["Requinte da ectoplasmia", "https://ectolab.org/wp-content/uploads/2022/05/Requinte-da-Ectoplasmia.pdf", "https://www.youtube.com/watch?v=ZzHD4jABSK4"],
  ["Síndrome ectoplásmica", "https://ectolab.org/wp-content/uploads/2022/05/SINDROME-ECTOPLASMICA.pdf", "https://www.youtube.com/watch?v=VmYjuhN7ds4"],
  ["Subjetividade objetiva parapsíquica", "https://ectolab.org/wp-content/uploads/2022/05/Subjetividade-Objetiva-Parapsiquica.pdf", "http://www.youtube.com/watch?v=sogKVq3saAc"],
  ["Tenepessista ectoplasta", "https://ectolab.org/wp-content/uploads/2022/05/TENEPESSISTA-ECTOPLASTA.pdf", "https://www.youtube.com/watch?v=13LNHXK0yaI"]
];

const faqs = [
  ["Posso solicitar uma paracirurgia para quem está no hospital?", "Sim. Nesses casos, um parente ou responsável deve preencher o formulário e sintonizar mentalmente durante o horário do campo vibracional, servindo de ponte."],
  ["Posso me alimentar antes da Paracirurgia?", "Pode sim. Cerca de 2h antes, faça um lanche leve e ingira pouco líquido, evitando cafeína, chá ou estimulantes."],
  ["Preciso crer em algo para fazer a paracirurgia?", "Não. A paracirurgia atua de forma energética, baseada na doação e aplicação de ectoplasma. Funciona independente de crença ou religião."],
  ["É possível pedir cirurgia para meu animal de estimação?", "Sim. Para animais, solicitamos que o tutor responsável repouse ao lado do animal, acariciando ou mantendo conexão afetuosa no horário da intervenção."]
];

const link = (href, text) => `<a href="${href}" target="_blank" rel="noreferrer" class="link-arrow" style="font-size:13px">${text}</a>`;

document.getElementById("app").innerHTML = `
  <section class="section bg-white" style="padding-top:80px;padding-bottom:64px">
    <div class="wrap">
      <div class="eyebrow"><span class="dot"></span>ACERVO DE PESQUISA & FAQ</div>
      <h1 class="h-display" style="margin-top:24px">Materiais Publicados.</h1>
      <p class="lede" style="margin-top:24px;margin-bottom:48px;max-width:760px">Conteúdos para estudar ectoplasmia, paracirurgia e temas correlatos: artigos, playlists, palestras e verbetes disponíveis para leitura e download.</p>
      <div class="grid g2 gap-48" style="align-items:start">
        <div class="col gap-32">
          <div class="card" style="padding:32px">
            <h2 class="h3" style="color:var(--teal)">Artigos</h2>
            <div class="col gap-16" style="margin-top:20px">
              ${artigos.map(([t, s, href, resumo]) => `<article class="glass" style="padding:20px;border-radius:var(--r-md)"><span class="specimen">${s}</span><h3 class="h4" style="margin-top:8px;color:var(--ink)">${t}</h3><p style="font-size:14.5px;color:var(--ink-2);line-height:1.6">${resumo}</p>${link(href, "Baixar PDF")}</article>`).join("")}
            </div>
          </div>
          <div class="card" style="padding:32px;background:var(--paper)">
            <h2 class="h3" style="color:var(--teal)">Lives e palestras</h2>
            <div class="grid g3 gap-16" style="margin-top:20px">
              ${lives.map(([t, tag, href, info]) => `<article class="card" style="padding:20px;background:var(--white)"><span class="tag soft">${tag}</span><h3 class="h4" style="margin-top:14px">${t}</h3><p style="font-size:14px;color:var(--ink-2);line-height:1.55">${info}</p>${link(href, "Acessar")}</article>`).join("")}
            </div>
          </div>
          <div class="card" style="padding:32px">
            <div class="flex between center gap-16" style="margin-bottom:20px"><div><h2 class="h3" style="color:var(--teal)">Lista de Verbetes</h2><p style="font-size:14.5px;color:var(--ink-2);margin-top:8px">Verbetes disponíveis para download, com tertúlias relacionadas quando houver link.</p></div><span class="tag gold">${verbetes.length} verbetes</span></div>
            <div class="grid g2 gap-12">
              ${verbetes.map(([t, pdf, video], i) => `<article class="glass" style="padding:16px 18px;border-radius:var(--r-md)"><span class="specimen">${String(i + 1).padStart(2, "0")}</span><h3 class="h4" style="margin-top:6px;font-size:16px">${t}</h3><div class="flex gap-12" style="margin-top:12px;flex-wrap:wrap">${link(pdf, "PDF")}${video ? link(video, "Tertúlia") : ""}</div></article>`).join("")}
            </div>
          </div>
        </div>
        <div>
          <div class="glass-teal" style="padding:32px;border-radius:var(--r-lg);position:sticky;top:96px">
            <h2 class="h2" style="color:var(--white)">Perguntas Frequentes</h2>
            <p style="font-size:14.5px;color:rgba(255,255,255,0.8);margin-top:8px;margin-bottom:24px">Tem alguma dúvida que não consta? Escreva para <a href="mailto:contato@ectolab.org" style="color:var(--gold);text-decoration:underline">contato@ectolab.org</a>.</p>
            <div class="col gap-12">
              ${faqs.map(([q, a], i) => `<details class="card" ${i === 0 ? "open" : ""} style="background:transparent;border-color:rgba(255,255,255,0.2)"><summary class="h4" style="color:var(--white);font-size:15px;padding:16px 20px;cursor:pointer">${q}</summary><div style="padding:0 20px 20px;color:rgba(255,255,255,0.9);font-size:14px;line-height:1.6">${a}</div></details>`).join("")}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
