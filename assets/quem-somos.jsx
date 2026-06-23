import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

/**
 * @fileoverview Página "Quem Somos" da Ectolab.
 * 
 * ARQUITETURA DESTE ARQUIVO:
 * 1. DADOS ESTÁTICOS: Dicionários e arrays com textos para fácil edição.
 * 2. COMPONENTES DE UI: Partes isoladas do design.
 * 3. COMPONENTE PRINCIPAL (App): Montagem final da tela.
 */

// ============================================================
// 1. DADOS ESTÁTICOS (Altere os textos do site por aqui)
// ============================================================

const OBJETIVOS_LISTA = [
  { t: "Tecnicidade", d: "Produzir conhecimento técnico sobre Paracirurgia e Ectoplasmia." },
  { t: "Critérios", d: "Desenvolver critérios de análise da parafisiologia do parapsíquico ectoplasta." },
  { t: "Instrumentos", d: "Consolidar os instrumentos facilitadores das pesquisas em Ectoplasmologia." },
  { t: "Cosmoética", d: "Estabelecer critérios pesquisísticos cosmoéticos." },
  { t: "Voluntários", d: "Implantar política de retenção de voluntários." },
  { t: "Cursos", d: "Promover eventos educativos e assessoria técnica baseada em pesquisa consolidada." },
  { t: "Publicações", d: "Publicar artigos, verbetes e trabalhos sobre a especialidade." },
  { t: "Socin", d: "Atender às demandas da Socin em pesquisa instrumental com qualidade e técnica estrutural." }
];

const COSMOETICA_PONTOS = [
  { t: "Autodisponibilidade", d: "Realizar os compromissos assumidos, contribuindo para a sinergia dos trabalhos grupais, de modo cooperativo." },
  { t: "Prazos", d: "Estabelecer prazos exequíveis para as tarefas e responsabilizar-se pela sua realização dentro dos prazos combinados, reforçando a organização grupal." },
  { t: "Proatividade", d: "Ter proatividade para o engajamento nas atividades institucionais, ao modo de profilaxia do autoengano quanto ao pseudovoluntariado." },
  { t: "Comunicação", d: "Comunicar e esclarecer os voluntários, e consultores sobre as atividades programadas, visando ao autocomprometimento interassistencial de todos, utilizando todos os canais de comunicação disponíveis." },
  { t: "Ambiente", d: "Criar ambiente propício à liberdade de expressão, à escuta ativa e ao convívio grupal sadio, tanto nas questões pesquisísticas quanto sociais." },
  { t: "Qualificação", d: "Capacitar, de modo constante, os voluntários e pesquisadores sobre as práticas assistenciais em Ectoplasmologia e Paracirurgia." },
  { t: "Sigilo Pensênico", d: "Zelar pelo sigilo e higiene pensênica das informações verbais e/ou escritas sobre as pessoas participantes das atividades da instituição." },
  { t: "Princípio da Descrença", d: "Pautar todas as pesquisas em evidências e fundamentações que assegurem o princípio da descrença, evitando as abordagens místicas, apriorísticas, mantendo a audácia e curiosidade científicas." },
  { t: "Tecnologia", d: "Desenvolver, de modo contínuo, metodologias e tecnologias para aperfeiçoar a pesquisa em ectoplasmia e a Interassistenciologia Técnica." },
  { t: "Pesquisas Fidedignas", d: "Pesquisar com intencionalidade cosmoética, imparcialidade, transparência e exaustividade focando a produtividade tarística interassistencial." },
  { t: "Paciência Pesquisística", d: "Desenvolver o comportamento científico com foco na metodologia, de maneira a eliminar o ansiosismo, as dispersões e as precipitações, compreendendo o ritmo natural das investigações paracientíficas e dos trabalhos grupais, com continuísmo nos auto e heteroesforços." },
  { t: "Produtividade Científica", d: "Priorizar a rotina de produção científica, organizando a escrita dos achados pesquisísticos, com a finalidade de identificar, esclarecer e divulgar as verpons." },
  { t: "Disseminação", d: "Divulgar as pesquisas em ectoplasmia, as metas e os resultados obtidos, a fim de esclarecer e desmitificar as práticas ectoplásmicas e paracirúrgicas, sob a ótica do paradigma consciencial." },
  { t: "Publicação", d: "Publicar gescons grafopensênicas individuais e grupais, favorecendo o completismo na tares." },
  { t: "Cooperação", d: "Ter postura cooperativa prática nas interrelações conscienciais, favorecendo ações integradas na CCCI e Socin." }
];

// ============================================================
// 2. COMPONENTES DE UI
// ============================================================

function HeroQuemSomos() {
  return (
    <section className="section" style={{ paddingTop: '80px', paddingBottom: '64px' }}>
      <div className="wrap">
        <div className="eyebrow">
          <span className="dot"></span>
          FUNDADA EM 14 DE JULHO DE 2013
        </div>
        <h1 className="h-display" style={{ marginTop: 24 }}>
          Ectolab
          <strong style={{ color: "var(--teal)", fontWeight: 700 }}>.</strong>
        </h1>
        <div className="grid g2 gap-48" style={{ marginTop: 28, alignItems: 'start' }}>
          <div className="col gap-16">
            <p className="lede">
              A Ectolab (Associação Internacional de Pesquisa Laboratorial em Ectoplasmia e Paracirurgia) foi fundada em 14 de julho de 2013 e visa a profissionalização das pesquisas em Ectoplasmia e Paracirurgia, temas muito falados porém com pouco material técnico a respeito.
            </p>
            <p style={{ fontSize: '17px', color: 'var(--ink-2)' }}>
              Realiza pesquisas sobres estes temas há quase duas décadas através da Dinâmica Interassistencial da Paracirurgia (DIP).
            </p>
          </div>
          <div className="col gap-16">
            <p style={{ fontSize: '15px' }}>
              É uma instituição conscienciocêntrica, ou seja, embasa-se no paradigma consciencial, sem fins lucrativos, não governamental, universalista, multidimensional, aglutinadora de consciências, conscins e consciexes interessados na qualificação da interassistência paracirúrgica e realização de atividades pedagógicas e pesquisísticas na área da metodologia da Pesquisa em Ectoplasmia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Missao() {
  return (
    <section className="section-sm" style={{ background: 'var(--white)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div className="wrap">
        <div className="grid g2 gap-48 center">
          <div className="eyebrow"><span className="dot"></span>NOSSA MISSÃO</div>
          <h2 className="h2 serif" style={{ color: 'var(--teal)' }}>
            Estudar, pesquisar e desenvolver metodologia de pesquisa parapsíquica em Ectoplasmia e Paracirurgia, 
            contribuindo para a promoção da interassistencialidade multidimensional.
          </h2>
        </div>
      </div>
    </section>
  );
}

function Objetivos() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow"><span className="dot"></span>DIRETRIZES</div>
          <h2 className="h2" style={{ marginTop: 16 }}>Principais Objetivos.</h2>
        </div>
        <div className="grid g4 gap-16">
          {OBJETIVOS_LISTA.map(obj => (
            <div key={obj.t} className="card" style={{ padding: '24px' }}>
              <h3 className="h4" style={{ color: 'var(--teal)', marginBottom: '8px' }}>{obj.t}</h3>
              <p style={{ fontSize: '14px', margin: 0, color: 'var(--ink-2)' }}>{obj.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cosmoetica() {
  return (
    <section className="section" style={{ background: 'var(--ink)', color: 'var(--white)' }}>
      <div className="wrap">
        <div className="grid g2 gap-48" style={{ marginBottom: '64px', alignItems: 'end' }}>
          <div>
            <div className="eyebrow" style={{ color: 'var(--orange)' }}>
              <span className="dot" style={{ background: 'var(--orange)' }}></span>CGC
            </div>
            <h2 className="h1" style={{ color: 'var(--white)', marginTop: 16 }}>Código Grupal de Cosmoética.</h2>
          </div>
          <p className="lede" style={{ color: 'rgba(255,255,255,0.7)' }}>
            O código grupal de Cosmoética é o conjunto de normas de conduta coletiva embasado no discernimento, na responsabilidade, na integridade, na equidade e no respeito à individualidade, proposto e cumprido por grupos de conscins e/ou consciexes afins nas múltiplas dimensões de manifestações. A versão abaixo foi concebida no dia 30 de agosto de 2018 e vigora até o presente momento.
          </p>
        </div>

        <div className="grid g3 gap-24">
          {COSMOETICA_PONTOS.map(p => (
            <div key={p.t} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '16px' }}>
              <h4 className="mono" style={{ color: 'var(--orange)', fontSize: '13px', marginBottom: '8px', textTransform: 'uppercase' }}>{p.t}</h4>
              <p style={{ fontSize: '14px', lineHeight: '1.5', margin: 0, color: 'rgba(255,255,255,0.8)' }}>{p.d}</p>
            </div>
          ))}
        </div>

        <blockquote style={{ 
          marginTop: '64px', 
          padding: '32px', 
          background: 'rgba(255,255,255,0.05)', 
          borderLeft: '4px solid var(--orange)',
          borderRadius: '0 var(--r-md) var(--r-md) 0'
        }}>
          <p className="serif" style={{ fontSize: '20px', marginBottom: '12px' }}>
            "O Código Grupal de Cosmoética constitui técnica interassistencial avançada, instrumento coletivo 
            de efeitos individuais qualificador dos esforços de intermissivistas na consecução sinérgica da maxiproéxis grupal."
          </p>
          <cite className="specimen" style={{ color: 'var(--orange-soft)' }}>— Verbete Código Pessoal de Cosmoética, p. 7</cite>
        </blockquote>
      </div>
    </section>
  );
}

function Voluntariado() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="glass" style={{ padding: '64px', borderRadius: 'var(--r-lg)', textAlign: 'center' }}>
          <div className="eyebrow" style={{ justifyContent: 'center', display: 'flex' }}>
            <span className="dot"></span>FAÇA PARTE
          </div>
          <h2 className="h1" style={{ marginTop: 16 }}>Como se tornar um voluntário?</h2>
          <p className="lede" style={{ maxWidth: '700px', margin: '24px auto' }}>
            Para se tornar um voluntário da Ectolab você precisa escrever para voluntariado@ectolab.org. A partir desse primeiro passo, nossos voluntários entrarão em contato para marcar uma entrevista online para conhecê-lo melhor e apresentar as atividades, linhas de pesquisa e laboratórios da instituição com os quais você pode contribuir.
          </p>
          <div className="flex center gap-16" style={{ justifyContent: 'center', marginTop: '32px' }}>
            <a href="mailto:voluntariado@ectolab.org" className="btn btn-orange">
              voluntariado@ectolab.org <span className="arrow">→</span>
            </a>
          </div>
          <p className="specimen" style={{ marginTop: '24px' }}>
            Plataformas Meet ou Zoom
          </p>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <HeroQuemSomos />
      
      <div className="marquee">
        <div className="marquee__track">
          <span>
            <span>Instituição Conscienciocêntrica</span> <span className="sep">◆</span>
            <span>Sem Fins Lucrativos</span> <span className="sep">◆</span>
            <span>Universalismo</span> <span className="sep">◆</span>
            <span>Multidimensioanalidade</span> <span className="sep">◆</span>
            <span>Cosmoeticologia</span> <span className="sep">◆</span>
          </span>
          <span>
            <span>Instituição Conscienciocêntrica</span> <span className="sep">◆</span>
            <span>Sem Fins Lucrativos</span> <span className="sep">◆</span>
            <span>Universalismo</span> <span className="sep">◆</span>
            <span>Multidimensioanalidade</span> <span className="sep">◆</span>
            <span>Cosmoeticologia</span> <span className="sep">◆</span>
          </span>
        </div>
      </div>

      <Missao />
      <Objetivos />
      <Cosmoetica />
      <Voluntariado />

      {/* Banner Final */}
      <section className="section-sm" style={{ background: 'var(--paper-2)' }}>
        <div className="wrap flex between center gap-24">
          <div>
            <h3 className="h3">Princípio da Descrença</h3>
            <p style={{ margin: 0, color: 'var(--ink-3)' }}>Não acredite em nada. Experimente.</p>
          </div>
          <a href="conscienciologia.html" className="btn btn-ghost">Entenda a base teórica</a>
        </div>
      </section>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);