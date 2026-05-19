
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

/**
 * @fileoverview Página "Paracirurgia".
 */

// ============================================================
// 1. DADOS ESTÁTICOS DA PÁGINA (Altere os textos por aqui)
// ============================================================

const PROTOCOLO_PASSOS = [
  { n: "01", t: "A Solicitação", d: "O assistido preenche o formulário detalhando sua necessidade. O prazo limite é toda sexta-feira às 12h30." },
  { n: "02", t: "O Preparo", d: "Instruções específicas de dieta leve, repouso e mentalização para criar o acoplamento energético necessário." },
  { n: "03", t: "A Sessão (DIP)", d: "Atividade grupal de 2 horas em espaço otimizado por voluntários ectoplastas e amparadores técnicos." },
  { n: "04", t: "O Relatório", d: "Após o atendimento, o assistido envia suas percepções, que são fundamentais para o registro da pesquisa." }
];

const EQUIPE_FUNCOES = [
  { t: "Doadores de energia", d: "Homens ou mulheres que doam energias de forma voluntária – presencialmente ou à distância. Quando fisicamente presentes, sentam-se ao redor da elipse de energizadores." },
  { t: "Acopladores", d: "Consciências intrafísicas capazes de realizar acoplamento energético com consciências projetadas ou extrafísicas enfermas para entendimento, defesa energética e remissão de doenças." },
  { t: "Energizadores", d: "Voluntários com maior disponibilidade interassistencial que trabalham ombro a ombro com a equipe extrafísica, visando promover intervenção ectoplásmica e reequilíbrio holossomático." },
  { t: "Epicon", d: "Epicentro Consciencial. Consciência chave das operações interdimensionais, fulcro de lucidez. Responsável pela manutenção do campo bioenergético e líder nos debates de parapercepções." },
  { t: "Equipe de suporte", d: "Asseguram o acolhimento, organização e integridade. Abrangem: observador parapsíquico, cronometrista (indica acoplamentos), monitores, recepcionistas e coordenador." },
  { t: "Pesquisadores", d: "Equipe técnico-científica voluntária empenhada na observação, registro e análise dos fatos e parafatos visando construção de pesquisa científica e novas tecnologias assistenciais." }
];

const FAQ_ITENS = [
  { q: "A Paracirurgia substitui o tratamento médico?", a: "Não. É uma técnica complementar. Recomendamos enfaticamente que o assistido nunca interrompa tratamentos médicos convencionais." },
  { q: "Existe algum custo?", a: "Não. Todas as atividades assistenciais da Ectolab são gratuitas, realizadas por voluntários." },
  { q: "Posso solicitar para outra pessoa?", a: "Sim, é possível solicitar para terceiros (familiares, amigos) e até para animais de estimação, desde que haja um responsável pelo preparo do ambiente." },
  { q: "Como saberei se fui atendido?", a: "O atendimento ocorre no fim de semana. O 'feedback' é a sua própria percepção e a melhora dos sintomas, que deve ser registrada no relatório." }
];

// ============================================================
// 2. COMPONENTES VISUAIS (Interface do Usuário)
// ============================================================

function HeroParacirurgia() {
  return (
    <section className="section" style={{ paddingTop: '80px' }}>
      <div className="wrap">
        <div className="eyebrow">
          <span className="dot"></span>
          CIÊNCIA & ASSISTÊNCIA &nbsp;·&nbsp; ECTOPLASMOLOGIA
        </div>
        <h1 className="h-display" style={{ marginTop: 24 }}>
          Paracirurgia: <br />
          <strong style={{ color: "var(--teal)", fontWeight: 700 }}>saúde multidimensional</strong>.
        </h1>
        <div className="grid g2 gap-48" style={{ marginTop: 28, alignItems: 'start' }}>
          <p className="lede">
            A paracirurgia é a intervenção energética de caráter paraterapêutico visando realizar 
            desbloqueios psicossomáticos e reestabelecer o bem-estar e a saúde das consciências 
            intrafísicas e extrafísicas assistidas tendo por base o <strong>ectoplasma</strong>.
          </p>
          <div className="col gap-16">
            <p>
              Aqueles que desejam estudar e aprimorar seu parapsiquismo (de modo assistencial) podem participar 
              presencialmente da Dinâmica Interassistencial da Paracirurgia como doadores 
              de energia e/ou acopladores das consciências extrafísicas e intrafísicas enfermas. 
              Todos somos capazes de assistir, tendo identificado ou não algum grau de domínio parapsíquico.
            </p>
            <div className="tag soft" style={{ alignSelf: 'start' }}>
              Pré-requisito: Conhecer a técnica do estado vibracional
            </div>
          </div>
        </div>
        <div className="flex gap-16" style={{ marginTop: 40, flexWrap: 'wrap' }}>
          <a href="https://dip-ectolab.org.br/pedido-paracirurgia" target="_blank" rel="noreferrer" className="btn btn-orange">
            Solicitar Paracirurgia <span className="arrow">↗</span>
          </a>
          <a href="#como-participar" className="btn btn-ghost">
            Como participar da DIP
          </a>
        </div>
      </div>
    </section>
  );
}

function CitacaoVerbete() {
  return (
    <div className="wrap">
      <blockquote style={{ 
        margin: '0', 
        padding: '32px', 
        background: 'var(--white)', 
        borderLeft: '4px solid var(--orange)',
        borderRadius: '0 var(--r-md) var(--r-md) 0',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
      }}>
        <p className="serif" style={{ fontSize: '20px', color: 'var(--ink)', marginBottom: '12px', lineHeight: '1.4' }}>
          "A predisposição íntima a interassistência paracirurgica denota maturidade afetiva, 
          magnanimidade e superação dos traços fracos da consciência minipeça do 
          maximecanismo interassistencial."
        </p>
        <cite className="specimen" style={{ fontStyle: 'normal', color: 'var(--ink-3)' }}>
          — Verbete Paracirurgia, p. 51
        </cite>
      </blockquote>
    </div>
  );
}

function EntendaSeccao() {
  return (
    <section className="section" id="entenda" style={{ background: 'var(--paper-2)' }}>
      <div className="wrap">
        <div className="grid g2 gap-48 center">
          <div>
            <div className="eyebrow"><span className="dot"></span>O PROCESSO</div>
            <h2 className="h1" style={{ marginTop: 16 }}>Protocolo Rigoroso.</h2>
            <p className="lede" style={{ marginTop: 20 }}>
              Não trabalhamos com misticismo. A paracirurgia segue um protocolo técnico 
              desenvolvido ao longo de décadas de pesquisa laboratorial.
            </p>
          </div>
          <div className="grid g2 gap-24">
            {PROTOCOLO_PASSOS.map(p => (
              <div key={p.n} className="card" style={{ padding: '24px' }}>
                <span className="mono" style={{ color: 'var(--orange)', fontWeight: 600 }}>/{p.n}</span>
                <h3 className="h4" style={{ margin: '12px 0 8px' }}>{p.t}</h3>
                <p style={{ fontSize: '14px', lineHeight: '1.5', color: 'var(--ink-3)' }}>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ComoFunciona() {
  return (
    <section className="section bg-white" id="como-funciona" style={{ background: 'var(--white)' }}>
      <div className="wrap">
        <div className="grid g2 gap-48 center">
          <div>
            <div className="eyebrow"><span className="dot"></span>A DINÂMICA (DIP)</div>
            <h2 className="h2" style={{ marginTop: 16 }}>Como funciona?</h2>
            <div className="prose" style={{ marginLeft: 0, marginTop: 24, fontSize: '16px' }}>
              <p>
                A Dinâmica Interassistencial da Paracirurgia é uma atividade grupal, semanal, 
                que ocorre em espaço físico tecnicamente otimizado pelo sinergismo voluntários 
                ectoplastas – amparadores técnicos em ectoplasmia paracirúrgica. Atualmente, 
                é realizada semanalmente na cidade de Foz do Iguaçu e mensalmente nas cidades 
                de São Paulo e Curitiba.
              </p>
              <p>
                Sentados em cadeiras dispostas em 2 (duas) elipses concêntricas, os participantes 
                realizam atividades de doação e acoplamento energético sob a orientação de equipe 
                de voluntários e auxílio de equipe extrafísica de amparadores. A dinâmica tem 
                duração de 2 horas, sendo 1 hora e 30 minutos de atividades bioenergéticas e 30 
                minutos de debate sobre parapercepções.
              </p>
              <p>
                Em algumas dinâmicas, voluntários realizam experimentos científicos multidimensionais 
                e cosmoéticos relacionados aos fenômenos ectoplásmicos mediante consentimento dos 
                participantes.
              </p>
            </div>
          </div>
          <div className="card" style={{ padding: 8, background: 'var(--paper-2)' }}>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: 'var(--r-md)' }}>
              <iframe 
                src="https://www.youtube.com/embed/ooaHsmZIows" 
                title="Vídeo Explicativo DIP"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }} 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FuncoesAssistenciais() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow"><span className="dot"></span>EQUIPE TÉCNICA</div>
          <h2 className="h2" style={{ marginTop: 16 }}>Quem atua na paracirurgia: funções.</h2>
        </div>
        <div className="grid g3 gap-16">
          {EQUIPE_FUNCOES.map(f => (
            <div key={f.t} className="card" style={{ padding: '24px' }}>
              <h3 className="h4" style={{ color: 'var(--teal)', marginBottom: '8px' }}>{f.t}</h3>
              <p style={{ fontSize: '14px', margin: 0 }}>{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComoParticipar() {
  return (
    <section className="section" id="como-participar" style={{ background: 'var(--white)' }}>
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow"><span className="dot"></span>INSCRIÇÕES E ACESSO</div>
          <h2 className="h2" style={{ marginTop: 16 }}>Como participar?</h2>
          <p className="lede" style={{ marginTop: 16, maxWidth: 800 }}>
            Atualmente, a Dinâmica Interassistencial da Paracirurgia é realizada semanalmente na cidade de Foz do Iguaçu e mensalmente nas cidades de São Paulo e Curitiba.
          </p>
        </div>
        <div className="grid g3 gap-24">
          <div className="card" style={{ padding: '32px' }}>
            <span className="specimen">MODALIDADE 01</span>
            <h3 className="h3" style={{ margin: '16px 0' }}>Receber atendimento</h3>
            <p style={{ fontSize: '14.5px', color: 'var(--ink-2)' }}>Os atendimentos paracirúrgicos são feitos a distância. A pessoa permanece em casa e não precisa ir até o local da dinâmica. Basta preencher o formulário, seguir as instruções e colocar-se em repouso.</p>
            <a href="https://dip-ectolab.org.br/pedido-paracirurgia" target="_blank" rel="noreferrer" className="link-arrow" style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>Solicitar atendimento ↗</a>
          </div>
          
          <div className="card" style={{ padding: '32px', border: '1px solid var(--orange)' }}>
            <span className="specimen">MODALIDADE 02</span>
            <h3 className="h3" style={{ margin: '16px 0' }}>Doador ou Acoplador Presencial</h3>
            <p style={{ fontSize: '14.5px', color: 'var(--ink-2)' }}>Quem deseja exercer seu parapsiquismo de forma assistencial. Inscrição via loja. O valor custeia aluguel da sala, materiais, logística dos Epicons e financiamento de pesquisas científicas.</p>
            <a href="https://loja.ectolab.org" target="_blank" className="link-arrow" style={{ color: 'var(--orange)', borderColor: 'var(--orange)', marginTop: 'auto', alignSelf: 'flex-start' }}>Loja Ectolab →</a>
          </div>

          <div className="card" style={{ padding: '32px' }}>
            <span className="specimen">MODALIDADE 03</span>
            <h3 className="h3" style={{ margin: '16px 0' }}>Doador à Distância</h3>
            <p style={{ fontSize: '14.5px', color: 'var(--ink-2)' }}>Para tenepessistas veteranos (+3 anos) ou experientes em acoplamento. Inscrição gratuita como membro da Rede Interassistencial à Distância para participar da sua própria residência.</p>
            <a href="#" className="link-arrow" style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>Cadastrar na Rede →</a>
          </div>
        </div>
        
        <div className="glass" style={{ marginTop: '48px', padding: '24px', borderRadius: 'var(--r-md)', fontSize: '14px' }}>
          <p className="muted" style={{ margin: 0 }}>
            <strong>Nota sobre os valores:</strong> As inscrições para participação presencial como doador/acoplador são utilizadas 
            exclusivamente para despesas de infraestrutura (aluguel de salas, materiais, logística dos Epicons) e 
            financiamento de pesquisas científicas.
          </p>
        </div>
      </div>
    </section>
  );
}

function FormularioSolicitacao() {
  return (
    <section className="section" id="solicitar">
      <div className="wrap">
        <div className="glass-teal" style={{ padding: '64px', borderRadius: 'var(--r-lg)' }}>
          <div className="grid g2 gap-48">
            <div>
              <div className="eyebrow" style={{ color: 'var(--orange)' }}>
                <span className="dot" style={{ background: 'var(--orange)' }}></span>
                PORTAL DO ASSISTIDO
              </div>
              <h2 className="h1" style={{ marginTop: 16, color: 'var(--white)' }}>
                Solicite seu <br />atendimento.
              </h2>
              <p className="lede" style={{ marginTop: 24, color: 'rgba(255,255,255,0.8)' }}>
                O atendimento é gratuito e realizado 100% por voluntários. 
                Certifique-se de ler todas as instruções antes de enviar.
              </p>
              <div className="col gap-16" style={{ marginTop: 32 }}>
                <div className="flex center gap-12">
                  <span className="tag gold">Aviso</span>
                  <span className="specimen" style={{ color: 'var(--white)' }}>Prazo: Sexta-feira, 12:30</span>
                </div>
              </div>
            </div>
            <div className="glass flex col center" style={{ padding: '48px 32px', borderRadius: 'var(--r-md)', justifyContent: 'center', textAlign: 'center' }}>
              <p className="lede" style={{ marginBottom: 24 }}>
                Os agendamentos são realizados através de nossa plataforma externa dedicada.
              </p>
              <a href="https://dip-ectolab.org.br/pedido-paracirurgia" target="_blank" rel="noreferrer" className="btn btn-orange" style={{ width: '100%', justifyContent: 'center' }}>
                Acessar Portal do Assistido <span className="arrow">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQParacirurgia() {
  const items = [
    { q: "A Paracirurgia substitui o tratamento médico?", a: "Não. É uma técnica complementar. Recomendamos enfaticamente que o assistido nunca interrompa tratamentos médicos convencionais." },
    { q: "Existe algum custo?", a: "Não. Todas as atividades assistenciais da Ectolab são gratuitas, realizadas por voluntários." },
    { q: "Posso solicitar para outra pessoa?", a: "Sim, é possível solicitar para terceiros (familiares, amigos) e até para animais de estimação, desde que haja um responsável pelo preparo do ambiente." },
    { q: "Como saberei se fui atendido?", a: "O atendimento ocorre no fim de semana. O 'feedback' é a sua própria percepção e a melhora dos sintomas, que deve ser registrada no relatório." }
  ];

  const [open, setOpen] = useState(0);

  return (
    <section className="section" id="faq">
      <div className="wrap">
        <div className="grid g2 gap-48">
          <div>
            <div className="eyebrow"><span className="dot"></span>DÚVIDAS FREQUENTES</div>
            <h2 className="h2" style={{ marginTop: 16 }}>Informações Técnicas.</h2>
            <p className="lede" style={{ marginTop: 16 }}>Esclarecimentos fundamentais sobre a natureza científica e laica da assistência.</p>
          </div>
          <div className="col gap-12">
          {items.map((item, i) => (
            <div key={i} className="card" style={{ cursor: 'pointer', border: open === i ? '1px solid var(--teal)' : '1px solid var(--line)' }} onClick={() => setOpen(open === i ? -1 : i)}>
              <div className="flex between center" style={{ padding: '20px 24px' }}>
                <h4 className="h4" style={{ paddingRight: '24px' }}>{item.q}</h4>
                <span className="mono" style={{ fontSize: '20px' }}>{open === i ? '−' : '+'}</span>
              </div>
              {open === i && (
                <div style={{ padding: '0 24px 20px', color: 'var(--ink-2)', fontSize: '15px' }}>
                  {item.a}
                </div>
              )}
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PilarDescrenca() {
  return (
    <section className="section-sm">
      <div className="wrap">
        <div style={{ borderTop: '1px solid var(--line)', paddingTop: '40px', textAlign: 'center' }}>
          <div className="eyebrow" style={{ justifyContent: 'center', display: 'flex' }}>
            <span className="dot"></span>PRINCÍPIO DA DESCRENÇA
          </div>
          <p className="serif" style={{ fontSize: '24px', marginTop: 16, maxWidth: '800px', margin: '16px auto' }}>
            "Não acredite em nada, nem mesmo no que informamos nesta página. 
            <strong style={{ color: 'var(--teal)' }}> Experimente.</strong> Tenha suas próprias experiências pessoais."
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   ROOT APP
   ============================================================ */

function App() {
  return (
    <>
      <HeroParacirurgia />
      <div className="marquee">
        <div className="marquee__track">
          <span>
            <span>Assistência Multidimensional</span> <span className="sep">◆</span>
            <span>Ectoplasmologia Aplicada</span> <span className="sep">◆</span>
            <span>Bioenergologia</span> <span className="sep">◆</span>
            <span>Cosmoética</span> <span className="sep">◆</span>
            <span>Paraterapêutica</span> <span className="sep">◆</span>
          </span>
          <span>
            <span>Assistência Multidimensional</span> <span className="sep">◆</span>
            <span>Ectoplasmologia Aplicada</span> <span className="sep">◆</span>
            <span>Bioenergologia</span> <span className="sep">◆</span>
            <span>Cosmoética</span> <span className="sep">◆</span>
            <span>Paraterapêutica</span> <span className="sep">◆</span>
          </span>
        </div>
      </div>
      <EntendaSeccao />
      <CitacaoVerbete />
      <ComoFunciona />
      <FuncoesAssistenciais />
      <ComoParticipar />
      <FormularioSolicitacao />
      <FAQParacirurgia />
      <PilarDescrenca />
      
      {/* CTA Final */}
      <section className="section" style={{ textAlign: 'center', background: 'var(--paper-2)' }}>
        <div className="wrap">
          <h2 className="h2">Quer aprofundar na pesquisa?</h2>
          <p className="lede" style={{ margin: '20px 0 32px' }}>
            Conheça os cursos e laboratórios para quem deseja atuar como voluntário.
          </p>
          <div className="flex center gap-16" style={{ justifyContent: 'center' }}>
            <a href="trilha.html" className="btn btn-primary">Começar pela Trilha</a>
            <a href="cursos.html" className="btn btn-ghost">Ver Cursos</a>
          </div>
        </div>
      </section>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);

// Ajuste para scroll suave em âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
