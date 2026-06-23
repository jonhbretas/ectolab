import React from 'react';
import ReactDOM from 'react-dom/client';

const DESTAQUES = [
  {
    t: 'Ectoplasmia Interassistencial',
    desc: 'Fundamentos da assistência com ectoplasma. Aprenda no seu ritmo com acesso imediato.',
    link: '/pages/curso-ectoplasmia-interassistencial.html',
    tag: 'Gravado',
    tagClass: 'tag ghost',
  },
  {
    t: 'Imersão em Ectoplasmia',
    desc: 'Maratona ectoplásmica de 27 horas em ambiente hoteleiro. Presencial e online.',
    link: '/pages/curso-imersao.html',
    tag: 'Híbrido',
    tagClass: 'tag gold',
  },
  {
    t: 'PROEP',
    desc: 'Programa de Estimulação Parapsíquica Ectoplásmica. Turmas mensais com até 4 alunos.',
    link: '/pages/curso-proep.html',
    tag: 'Mensal',
    tagClass: 'tag dark',
  },
];

const CURSOS = [
  {
    id: 'campo',
    type: 'Cursos de Campo',
    items: [
      {
        t: 'Imersão em Ectoplasmia',
        desc: 'Maratona ectoplásmica de 27 horas em ambiente hoteleiro. Disponível presencial e online.',
        link: '/pages/curso-imersao.html',
        tag: 'Híbrido',
        tagClass: 'tag gold',
        labels: ['Curso principal', 'Campo'],
      },
      {
        t: 'EPPI',
        desc: 'Ectoplasmia Projetiva Paracirúrgica Ectoplásmica Interassistencial.',
        link: '/pages/curso-eppi.html',
        tag: 'Campo',
        tagClass: 'tag soft',
        labels: ['Pesquisa', 'Campo'],
      },
      {
        t: 'Campo Paracirúrgico',
        desc: 'Campo Interassistencial Paracirúrgico para reequilíbrio bioenergético.',
        link: '/pages/curso-campo.html',
        tag: 'Campo',
        tagClass: 'tag soft',
        labels: ['Campo'],
      },
    ],
  },
  {
    id: 'presenciais',
    type: 'Cursos Presenciais',
    items: [
      {
        t: 'PROEP',
        desc: 'Programa de Estimulação Parapsíquica Ectoplásmica. Turmas mensais reduzidas — até 4 alunos.',
        link: '/pages/curso-proep.html',
        tag: 'Mensal',
        tagClass: 'tag dark',
        labels: ['Mensal'],
      },
      {
        t: 'Fitoectoplasmia Interassistencial',
        desc: 'Contato com fitoectoplasma e bioenergias vegetais.',
        link: '/pages/cursos.html#presenciais',
        tag: 'Presencial',
        tagClass: 'tag soft',
        labels: ['Presencial'],
      },
    ],
  },
  {
    id: 'gravados',
    type: 'Cursos Gravados',
    items: [
      {
        t: 'Ectoplasmia Interassistencial',
        desc: 'Fundamentos da assistência com ectoplasma. Acesso imediato.',
        link: '/pages/curso-ectoplasmia-interassistencial.html',
        tag: 'Gravado',
        tagClass: 'tag ghost',
        labels: ['Gravado'],
      },
      {
        t: 'Ectoplasmia Protetiva',
        desc: 'Ectoplasmia como fator de risco ou proteção. Online ao vivo com replay por 30 dias.',
        link: '/pages/curso-ectoplasmia-protetiva.html',
        tag: 'Online Ao Vivo',
        tagClass: 'tag',
        labels: ['Ao Vivo', 'Verificar agenda'],
      },
      {
        t: 'Quadro Sinóptico Parapesquisístico',
        desc: 'Ferramenta de análise parapesquisística avançada. Prof. Hernande Leite.',
        link: '/pages/curso-quadro-sinoptico.html',
        tag: 'Gravado',
        tagClass: 'tag ghost',
        labels: ['Gravado', 'Pesquisa'],
      },
      {
        t: 'Aplicações Práticas da Ectoplasmia',
        desc: 'Utilidades e técnicas para ativação do ectoplasma.',
        link: '/pages/curso.html?id=aplicacao',
        tag: 'Gravado',
        tagClass: 'tag ghost',
        labels: ['Gravado'],
      },
      {
        t: 'Ciclo Vital do Ectoplasta',
        desc: 'Período entre ressoma e dessoma do ectoplasta.',
        link: '/pages/curso.html?id=ciclo',
        tag: 'Gravado',
        tagClass: 'tag ghost',
        labels: ['Gravado'],
      },
      {
        t: 'Raízes da Ectoplasmia',
        desc: 'Origens, fitoectoplasmia e morfogenia.',
        link: '/pages/curso.html?id=raizes',
        tag: 'Gravado',
        tagClass: 'tag ghost',
        labels: ['Gravado'],
      },
    ],
  },
  {
    id: 'sincrono',
    type: 'Cursos Ao Vivo (Síncronos)',
    items: [
      {
        t: 'Auto-organização Bioenergética',
        desc: 'Homeostase identificando focos de desperdício.',
        link: '/pages/curso.html?id=auto-org',
        tag: 'Verificar agenda',
        tagClass: 'tag ghost',
        labels: ['Ao Vivo', 'Verificar agenda'],
      },
      {
        t: 'Qualificação dos Pensenes',
        desc: 'Qualificação de pensamentos, sentimentos e energias.',
        link: '/pages/curso.html?id=qualificacao',
        tag: 'Verificar agenda',
        tagClass: 'tag ghost',
        labels: ['Ao Vivo', 'Verificar agenda'],
      },
    ],
  },
];

function DestaquCard({ curso }) {
  return (
    <a
      href={curso.link}
      className="card"
      style={{
        padding: 28,
        textDecoration: 'none',
        color: 'inherit',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid var(--teal)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'var(--teal)', borderRadius: 'var(--r-sm) var(--r-sm) 0 0' }} />
      <div style={{ marginBottom: 14 }}>
        <span className={curso.tagClass}>{curso.tag}</span>
      </div>
      <h3 className="h4" style={{ color: 'var(--teal)' }}>{curso.t}</h3>
      <p style={{ fontSize: 14, color: 'var(--ink-2)', marginTop: 10, marginBottom: 20, flex: 1 }}>{curso.desc}</p>
      <span className="link-arrow" style={{ alignSelf: 'flex-start' }}>Ver detalhes →</span>
    </a>
  );
}

function CursoCard({ curso }) {
  return (
    <a
      href={curso.link}
      className="card"
      style={{ padding: 24, textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
    >
      <div style={{ marginBottom: 12, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
        <span className={curso.tagClass}>{curso.tag}</span>
      </div>
      <h3 className="h4" style={{ color: 'var(--teal)' }}>{curso.t}</h3>
      <p style={{ fontSize: 14, color: 'var(--ink-2)', marginTop: 10, marginBottom: 20, flex: 1 }}>{curso.desc}</p>
      <span className="link-arrow" style={{ alignSelf: 'flex-start' }}>Ver detalhes →</span>
    </a>
  );
}

function App() {
  return (
    <>
      {/* Hero */}
      <section className="section" style={{ paddingTop: '80px', paddingBottom: '48px' }}>
        <div className="wrap">
          <div className="eyebrow"><span className="dot"></span>FORMAÇÃO PESQUISÍSTICA</div>
          <h1 className="h-display" style={{ marginTop: 24 }}>
            Cursos e <br />
            <strong style={{ color: 'var(--teal)', fontWeight: 700 }}>Programas</strong>.
          </h1>
          <p className="lede" style={{ maxWidth: 720, marginTop: 28 }}>
            Desenvolva seu parapsiquismo em uma abordagem técnica, teática e fundamentada no Princípio da Descrença.
            Nossos cursos abrangem desde introdução online até imersões e laboratórios individuais e grupais.
          </p>

          {/* Destaques */}
          <div style={{ marginTop: 56 }}>
            <p className="specimen" style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 20 }}>
              Cursos em destaque
            </p>
            <div className="grid g3 gap-24">
              {DESTAQUES.map(c => <DestaquCard key={c.t} curso={c} />)}
            </div>
          </div>
        </div>
      </section>

      {/* Oficina */}
      <section style={{ background: 'var(--paper-2)', padding: '24px 0' }}>
        <div className="wrap">
          <div className="flex between" style={{ flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <span className="tag dark">Gratuito</span>
              <span style={{ fontSize: 15, color: 'var(--ink)' }}>
                <strong>Oficina de Ectoplasmologia</strong> — Presencial em Florianópolis, consulte datas e horários.
              </span>
            </div>
            <a href="/pages/oficina-ectoplasmologia.html" className="btn btn-sm" style={{ whiteSpace: 'nowrap' }}>
              Ver Oficina →
            </a>
          </div>
        </div>
      </section>

      {/* Categorias de cursos */}
      {CURSOS.map((cat, i) => (
        <section
          key={cat.id}
          id={cat.id}
          className="section-sm"
          style={{ background: i % 2 !== 0 ? 'var(--paper-2)' : 'var(--white)', scrollMarginTop: '80px' }}
        >
          <div className="wrap">
            <h2 className="h2" style={{ marginBottom: 32 }}>{cat.type}</h2>
            <div className="grid g3 gap-24">
              {cat.items.map(curso => <CursoCard key={curso.t} curso={curso} />)}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
