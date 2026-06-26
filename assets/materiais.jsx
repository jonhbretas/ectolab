import React from 'react';
import ReactDOM from 'react-dom/client';

const ARTIGOS = [
  {
    titulo: 'Paracirurgia e Reurbeux',
    subtitulo: 'Revista Reurbanisatus',
    href: 'https://ectolab.org/wp-content/uploads/2022/05/Paracirurgia-e-Reurbeux_Revista_Reurbanisatus.pdf',
    resumo: 'A paracirurgia, por empregar assimilação energética profunda associada à potência energética através da ectoplasmia, torna-se coadjutora avançada entre as técnicas aplicadas ao projeto das reurbanizações extrafísicas.'
  },
  {
    titulo: 'Rede Interassistencial de Cirurgia Invisível a Distância',
    subtitulo: 'Uma proposta de trabalho',
    href: 'https://ectolab.org/wp-content/uploads/2022/05/Paracirurgia-e-Reurbeux_Revista_Reurbanisatus.pdf',
    resumo: 'Proposta de integração de tenepessistas veteranos à Dinâmica Interassistencial Holossomática, na condição de coadjutores à distância em trabalhos de cirurgia invisível.'
  },
  {
    titulo: 'Proposta de Descrição e Categorização da Síndrome de Godot',
    subtitulo: 'Artigo',
    href: 'https://ectolab.org/wp-content/uploads/2022/05/Sindrome-do-Godot.pdf',
    resumo: 'Descrição e caracterização da Síndrome de Godot a partir de parafatos observados na Dinâmica Interassistencial Holossomática.'
  },
  {
    titulo: 'Síndrome Ectoplásmica',
    subtitulo: 'Revista Semina Paracientifica',
    href: 'http://www.ceaec.org/index.php/conscientia/article/view/1560',
    resumo: 'Artigo publicado na revista Semina Paracientifica abordando a síndrome ectoplásmica, suas características e implicações.'
  },
  {
    titulo: 'Experimento da Energização na Cebola',
    subtitulo: 'Revista Interparadigmas',
    href: 'https://www.interparadigmas.org.br/wp-content/uploads/2017/03/Interparadigmas-03-N-03-Fonseca-et-allPortugu%C3%AAs.pdf',
    resumo: 'Experimento de energização em cebolas demonstrando efeitos bioenergéticos, publicado na revista Interparadigmas.'
  }
];

const LIVES = [
  {
    titulo: 'Diálogos Online',
    href: 'https://www.youtube.com/playlist?list=PLpz4qwgYZyP3SxfEenlleSpxgqYMaVUhb',
    info: 'Programa mantido entre 2020 e 2022, com professores, pesquisadores da Ectolab e convidados dialogando sobre temas transversais à ectoplasmia.',
    tag: '100 episódios'
  },
  {
    titulo: 'Palestras Gratuitas',
    href: 'https://www.youtube.com/watch?v=qz25JAWV48w&list=PLpz4qwgYZyP08Zs1MWaQKJQ8n3v51QJV1',
    info: 'Apresentações presenciais gravadas e online com temas pesquisados pela Ectolab.',
    tag: '11 palestras'
  },
  {
    titulo: 'Canal da Ectolab',
    href: 'https://www.youtube.com/channel/UCGlwoHzl-u1sEe7B6wPsGcA',
    info: 'Canal com conteúdos, debates e materiais em vídeo sobre ectoplasmia, paracirurgia e especialidades relacionadas.',
    tag: 'YouTube'
  }
];

const VERBETES = [
  { t: 'Acoplador Paracirúrgico', pdf: 'https://ectolab.org/wp-content/uploads/2022/05/ACOPLADOR_PARACIRURGICO.pdf' },
  { t: 'Acuponto', pdf: 'https://ectolab.org/wp-content/uploads/2022/05/ACUPONTO.pdf', video: 'https://www.youtube.com/watch?v=ikFigpsna4g' },
  { t: 'Acupuntura', pdf: 'https://ectolab.org/wp-content/uploads/2022/05/ACUPUNTURA.pdf', video: 'https://www.youtube.com/watch?v=2Defaj5zJf0' },
  { t: 'Ádito ideativo cosmovisiológico', pdf: 'https://ectolab.org/wp-content/uploads/2022/05/Adito-Ideativo-Cosmovisiologico.pdf', video: 'http://www.youtube.com/watch?v=83kBZWuaRSQ' },
  { t: 'Conscin ectoplasta', pdf: 'https://ectolab.org/wp-content/uploads/2022/05/Conscin-Ectoplasta.pdf', video: 'https://www.youtube.com/watch?v=1B1oGuny0Aw' },
  { t: 'Decênio Interassistencial Paracirúrgico', pdf: 'https://ectolab.org/wp-content/uploads/2022/05/DECENIO-INTERASSISTENCIAL-PARACIRURGICO.pdf' },
  { t: 'Dinâmica Interassistencial de Paracirurgia', pdf: 'https://ectolab.org/wp-content/uploads/2022/05/DINAMICA-INTERASSISTENCIAL-DE-PARACIRURUGIA-1.pdf' },
  { t: 'Ectolab', pdf: 'https://ectolab.org/wp-content/uploads/2022/05/ECTOLAB.pdf', video: 'https://www.youtube.com/watch?v=hDD2DAqRMGc' },
  { t: 'Ectoplasma', pdf: 'https://ectolab.org/wp-content/uploads/2022/05/Ectoplasma.pdf', video: 'https://www.youtube.com/watch?v=R1Q68a_nMiM' },
  { t: 'Exílio terapêutico', pdf: 'https://ectolab.org/wp-content/uploads/2022/05/EXILIO-TERAPEUTICO.pdf', video: 'http://www.youtube.com/watch?v=yzKuR2L3y94' },
  { t: 'Interação monitoria intrafísica-parassegurança', pdf: 'https://ectolab.org/wp-content/uploads/2022/05/Interacao-Monitoria-Intrafisica-Parasseguranca.pdf', video: 'https://www.youtube.com/watch?v=o9UDwZOcghw' },
  { t: 'Jovem Ectoplasta', pdf: 'https://ectolab.org/wp-content/uploads/2022/05/JOVEM-ECTOPLASTA.pdf', video: 'https://www.youtube.com/watch?v=3JcRmgQm2h0' },
  { t: 'Kit de dinâmica parapsíquica', pdf: 'https://ectolab.org/wp-content/uploads/2022/05/KIT-DE-DINAMICA-PARAPSIQUICA.pdf' },
  { t: 'Laboratório conscienciológico da ectoplasmia', pdf: 'https://ectolab.org/wp-content/uploads/2022/05/Laboratorio-de-Ectoplasmologia.pdf', video: 'https://www.youtube.com/watch?v=2Oq6GyxEpm0' },
  { t: 'Olorização', pdf: 'https://ectolab.org/wp-content/uploads/2022/05/Olorizacao.pdf', video: 'https://www.youtube.com/watch?v=fdAPQzoK8QQ&list=PLoXdlLuaGN8TYBIzGILi0mDiEP982ma-V&index=15' },
  { t: 'Paracablagem interassistencial', pdf: 'https://ectolab.org/wp-content/uploads/2022/05/Paracablagem-Interassistencial.pdf', video: 'https://www.youtube.com/watch?v=Wse_Ge9lDt8' },
  { t: 'Paracirurgia', pdf: 'https://ectolab.org/wp-content/uploads/2022/05/Paracirurgia.pdf', video: 'http://www.youtube.com/watch?v=19WpWHbXDeA' },
  { t: 'Parapercepciograma', pdf: 'https://ectolab.org/wp-content/uploads/2022/05/Parapercepciograma.pdf', video: 'http://www.youtube.com/watch?v=2VGpneUlSSA' },
  { t: 'Requinte da ectoplasmia', pdf: 'https://ectolab.org/wp-content/uploads/2022/05/Requinte-da-Ectoplasmia.pdf', video: 'https://www.youtube.com/watch?v=ZzHD4jABSK4' },
  { t: 'Síndrome ectoplásmica', pdf: 'https://ectolab.org/wp-content/uploads/2022/05/SINDROME-ECTOPLASMICA.pdf', video: 'https://www.youtube.com/watch?v=VmYjuhN7ds4' },
  { t: 'Subjetividade objetiva parapsíquica', pdf: 'https://ectolab.org/wp-content/uploads/2022/05/Subjetividade-Objetiva-Parapsiquica.pdf', video: 'http://www.youtube.com/watch?v=sogKVq3saAc' },
  { t: 'Tenepessista ectoplasta', pdf: 'https://ectolab.org/wp-content/uploads/2022/05/TENEPESSISTA-ECTOPLASTA.pdf', video: 'https://www.youtube.com/watch?v=13LNHXK0yaI' }
];

function LinkButton({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="link-arrow" style={{ fontSize: 13 }}>
      {children}
    </a>
  );
}

function App() {
  return (
    <section className="section bg-white" style={{ paddingTop: '80px', paddingBottom: '64px' }}>
      <div className="wrap">
        <div className="eyebrow"><span className="dot"></span>ACERVO DE PESQUISA</div>
        <h1 className="h-display" style={{ marginTop: 24 }}>Materiais Publicados.</h1>
        <p className="lede" style={{ marginTop: 24, marginBottom: 48, maxWidth: 760 }}>
          Conteúdos para estudar ectoplasmia, paracirurgia e temas correlatos: artigos, playlists, palestras e verbetes disponíveis para leitura e download.
        </p>

        <div className="col gap-32">
            <div className="card" style={{ padding: 32 }}>
              <h2 className="h3" style={{ color: 'var(--teal)' }}>Artigos</h2>
              <div className="col gap-16" style={{ marginTop: 20 }}>
                {ARTIGOS.map(item => (
                  <article key={item.titulo} className="glass" style={{ padding: 20, borderRadius: 'var(--r-md)' }}>
                    <span className="specimen">{item.subtitulo}</span>
                    <h3 className="h4" style={{ marginTop: 8, color: 'var(--ink)' }}>{item.titulo}</h3>
                    <p style={{ fontSize: 14.5, color: 'var(--ink-2)', lineHeight: 1.6 }}>{item.resumo}</p>
                    <LinkButton href={item.href}>Baixar PDF</LinkButton>
                  </article>
                ))}
              </div>
            </div>

            <div className="card" style={{ padding: 32, background: 'var(--paper)' }}>
              <h2 className="h3" style={{ color: 'var(--teal)' }}>Lives e palestras</h2>
              <div className="grid g3 gap-16" style={{ marginTop: 20 }}>
                {LIVES.map(item => (
                  <article key={item.titulo} className="card" style={{ padding: 20, background: 'var(--white)' }}>
                    <span className="tag soft" style={{ alignSelf: 'start' }}>{item.tag}</span>
                    <h3 className="h4" style={{ marginTop: 14 }}>{item.titulo}</h3>
                    <p style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.55 }}>{item.info}</p>
                    <LinkButton href={item.href}>Acessar</LinkButton>
                  </article>
                ))}
              </div>
            </div>

            <div className="card" style={{ padding: 32 }}>
              <div className="flex between center gap-16" style={{ marginBottom: 20 }}>
                <div>
                  <h2 className="h3" style={{ color: 'var(--teal)' }}>Lista de Verbetes</h2>
                  <p style={{ fontSize: 14.5, color: 'var(--ink-2)', marginTop: 8 }}>
                    Verbetes disponíveis para download, com tertúlias relacionadas quando houver link.
                  </p>
                </div>
                <span className="tag gold">{VERBETES.length} verbetes</span>
              </div>

              <div className="grid g2 gap-12">
                {VERBETES.map((item, index) => (
                  <article key={item.t} className="glass" style={{ padding: '16px 18px', borderRadius: 'var(--r-md)' }}>
                    <span className="specimen">{String(index + 1).padStart(2, '0')}</span>
                    <h3 className="h4" style={{ marginTop: 6, fontSize: 16 }}>{item.t}</h3>
                    <div className="flex gap-12" style={{ marginTop: 12, flexWrap: 'wrap' }}>
                      <LinkButton href={item.pdf}>PDF</LinkButton>
                      {item.video && <LinkButton href={item.video}>Tertúlia</LinkButton>}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
