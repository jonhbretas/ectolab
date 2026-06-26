import React from 'react';
import ReactDOM from 'react-dom/client';

const CURSOS_DB = {
  'auto-org': {
    tag: "CURSO ONLINE E SÍNCRONO",
    title: "Auto-organização Bioenergética",
    desc: "Objetiva instrumentalizar o aluno para o alcance da homeostase bioenergética, por meio da identificação dos focos de desperdício de energias no cotidiano.",
    obj: ["Caracterizar a relação do aluno com seu corpo físico, energético, emocional e mental.", "Identificar hábitos e posturas no cotidiano e o respectivo desempenho energético.", "Elaborar ações visando alcançar a homeostase bioenergética."],
    info: [["Data", "Consulte a agenda"], ["Horário", "9h–12h | 14h–17h"], ["Modalidade", "Síncrono (Zoom) ou Presencial"], ["Professores", "Equipe docente da Ectolab"], ["Valor", "R$ 180,00"]],
    verbete: "Questionologia. Você já se conscientizou quanto à importância da lucidez e desenvolvimento do atributo da autorganização evolutiva? — Verbete Auto-organização Consciencial",
    depoimentos: [
      { a: "Magda Carvalho", t: "Muito bom! Super aplicável." },
      { a: "Érica Monteiro", t: "Muito legal a abordagem das Técnicas e como usufruir mais a partir de escolhas lúcidas." }
    ]
  },
  'aplicacao': {
    tag: "CURSO ASSÍNCRONO (GRAVADO)",
    title: "Aplicação Prática da Ectoplasmia",
    desc: "Estude os fundamentos do ectoplasma, ampliando a compreensão sobre a substância e os parafenômenos. Apresenta utilidades práticas e técnicas de ativação.",
    obj: ["Breve histórico sobre o ectoplasma.", "Conceituar e explicar parafenômenos ectoplásmicos.", "Apresentar técnicas ectoplásmicas interassistenciais.", "A importância da homeostase ao ectoplasta."],
    info: [["Acesso", "Imediato"], ["Modalidade", "Online / EaD"], ["Professor", "Marcelo Silva"], ["Valor", "R$ 75,00"]],
    verbete: "A interação paracirurgia-megafraternidade deflagra a tendência evolutiva de a consciência mais homeostática, interessar-se pela interassistência fraterna. — Verbete Interação Paracirurgia-Megafraternidade",
    depoimentos: [
      { a: "Alexandre Lopes", t: "Muito bom. Parabéns pela bela explanação." },
      { a: "Diogo Silva", t: "Gratidão pelo esclarecimento! Muito útil." }
    ]
  },
  'ciclo': {
    tag: "CURSO ASSÍNCRONO (GRAVADO)",
    title: "Ciclo Vital do Ectoplasta",
    desc: "Aprenda sobre o período entre a ressoma (reencarnação) e a dessoma (morte) da pessoa ectoplasta, considerando herança genética, contextos ambientais e interrelações.",
    obj: ["Conceituar os períodos do ciclo vital.", "Apresentar as influências pensênicas manifestadas em cada etapa da vida.", "Apresentar diretrizes para qualificação da ectoplasmia."],
    info: [["Acesso", "Imediato"], ["Modalidade", "Online / EaD"], ["Professora", "Myriam Sanchez"], ["Valor", "R$ 75,00"]],
    depoimentos: [
      { a: "Aluna", t: "Maravilhosa explanação, enriquecedora!" },
      { a: "Magda Emerenciano", t: "Excelente palestra, agradecida pelos esclarecimentos!" }
    ]
  },
  'qualificacao': {
    tag: "CURSO ONLINE E SÍNCRONO",
    title: "Qualificação dos Pensamentos e Energias",
    desc: "Um tema central a todos os ectoplastas. Aprenda técnicas e reflita sobre como qualificar e dominar seus pensamentos, sentimentos e energias (Pensenes).",
    obj: ["Conceituar autopensenidade, exopensenidade e lateropensenidade.", "Diferença entre ectoplasma, ectoplasta, ectoplasmia e ectoplastia.", "Técnicas para qualificação dos pensenes."],
    info: [["Data", "Consulte a agenda"], ["Modalidade", "Ao Vivo (Zoom)"], ["Professor", "Paulo Battistela"], ["Valor", "R$ 75,00"]],
    depoimentos: [{ a: "Celeste Silveira", t: "Parabéns Prof. Paulo! Grata." }]
  },
  'raizes': {
    tag: "CURSO ASSÍNCRONO (GRAVADO)",
    title: "Raízes da Ectoplasmia",
    desc: "Amplie o autoconhecimento estudando as vidas passadas para investigar as origens do próprio parapsiquismo. Aborda também a fitoectoplasmia e a morfogenia extrafísica.",
    obj: ["Compreensão da origem da ectoplasmia.", "Tipos de ectoplastas.", "Fitoectoplasmia.", "Morfogenia de Ambientes Extrafísicos."],
    info: [["Acesso", "Imediato"], ["Modalidade", "Online / EaD"], ["Professora", "Dayane Rossa"], ["Valor", "R$ 75,00"]],
    depoimentos: [{ a: "Jussara Ramos", t: "Aula bem esclarecedora, Dayane! Obrigada!" }]
  },
  'forum': {
    tag: "EVENTO ONLINE",
    title: "Fórum Internacional de Ectoplasmologia",
    desc: "Encontro de pesquisadores para intercâmbio de metodologias técnico-científicas laboratoriais em ectoplasmia e paracirurgia.",
    obj: ["Intercâmbio e cooperação interassistencial.", "Fomentar metodologias de pesquisa.", "Apresentar resultados e verpons."],
    info: [["Submissão de artigos", "Aberta"], ["Formato", "Assíncrono (EaD)"], ["Professores", "H. Leite, M. Sanchez, N. Cardoso..."], ["Valor", "R$ 350,00"]]
  },
  'preceptoria': {
    tag: "ATENDIMENTO E CONSULTORIA",
    title: "Preceptoria em Ectoplasmia",
    desc: "Orientação individual do parapsíquico ectoplasta quanto aos aspectos diagnósticos, terapêuticos e profiláticos para qualificação da ectoplasmia pessoal.",
    obj: ["Avaliar condições somáticas e energéticas.", "Propor ações para o desenvolvimento assistencial.", "Oferecer diagnóstico da síndrome ectoplásmica."],
    info: [["Duração", "Até 90 minutos"], ["Modalidade", "Online (Meet/Zoom)"], ["Contato", "bioenergologia@ectolab.org"], ["Valor", "R$ 300,00"]]
  }
};

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id') || 'auto-org';
  const c = CURSOS_DB[id] || CURSOS_DB['auto-org'];

  return (
    <section className="section bg-white" style={{ paddingTop: '80px', paddingBottom: '64px' }}>
      <div className="wrap">
        <div className="breadcrumb" style={{ marginBottom: 24, fontSize: 13, color: 'var(--ink-3)' }}>
          <a href="/pages/cursos.html" style={{ textDecoration: 'underline' }}>Cursos</a> / {c.title}
        </div>
        <div className="grid g2 gap-48">
          <div>
            <div className="eyebrow"><span className="dot"></span>{c.tag}</div>
            <h1 className="h1" style={{ marginTop: 16 }}>{c.title}.</h1>
            <p className="lede" style={{ marginTop: 24 }}>{c.desc}</p>
            
            <div className="prose" style={{ marginTop: 40, marginLeft: 0 }}>
              <h3>Objetivos</h3>
              <ul>{c.obj.map((o, i) => <li key={i}>{o}</li>)}</ul>
            </div>
            
            {c.verbete && (
              <blockquote style={{ marginTop: 40, padding: 24, background: 'var(--paper-2)', borderLeft: '4px solid var(--orange)', borderRadius: '0 var(--r-md) var(--r-md) 0' }}>
                <p style={{ margin: 0, fontStyle: 'italic' }}>"{c.verbete}"</p>
              </blockquote>
            )}

            {c.depoimentos && (
              <div style={{ marginTop: 48 }}>
                <h3 className="h4" style={{ marginBottom: 16 }}>O que dizem:</h3>
                <div className="col gap-12">
                  {c.depoimentos.map((d, i) => (
                    <div key={i} className="glass" style={{ padding: '16px 20px', borderRadius: 'var(--r-md)' }}>
                      <p style={{ margin: '0 0 8px', fontSize: 15 }}>"{d.t}"</p>
                      <span className="specimen">— {d.a}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div>
            <div className="glass-teal" style={{ padding: 32, position: 'sticky', top: 100, borderRadius: 'var(--r-lg)' }}>
              <h3 className="h3" style={{ color: 'var(--white)', marginBottom: 24 }}>Informações</h3>
              <div className="col gap-16">
                {c.info.map(([k, v]) => (
                  <div key={k} className="flex between" style={{ borderBottom: '1px dashed rgba(255,255,255,0.2)', paddingBottom: 12 }}><span className="specimen" style={{ color: 'var(--gold)' }}>{k}</span><span style={{ fontSize: 14.5, color: 'var(--white)', textAlign: 'right', maxWidth: 180 }}>{v}</span></div>
                ))}
              </div>
              <a href="https://store.conscienciologia.org.br/product-brand/ectolab/" target="_blank" className="btn btn-gold" style={{ marginTop: 32, width: '100%', justifyContent: 'center' }}>Garantir Vaga <span className="arrow">→</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
ReactDOM.createRoot(document.getElementById("app")).render(<App />);
