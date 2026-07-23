/**
 * Revista — página da Revista Científica Nexus.
 * Acervo de artigos disponível via comunidade Zenodo.
 */

import Button from '@/components/ui/Button'
import styles from './Revista.module.css'

const ZENODO_URL =
  'https://zenodo.org/communities/nexus-cientifico/records?q=&l=list&p=1&s=10&sort=newest'

export default function Revista() {
  return (
    <div className={styles.page}>

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.eyebrow}>Periódico Científico</span>
          <h1 className={styles.heroTitle}>Revista Nexus Científico</h1>
          <p className={styles.heroLead}>
            Publicação científica com revisão por pares duplo-cega, ISSN registrado,
            DOI por artigo e acesso aberto. Aberta a pesquisadores de todas as áreas
            do conhecimento.
          </p>
        </div>
      </section>

      {/* ── AVISO NOVO ARTIGO ─────────────────────────────────── */}
      <section>
        <div className="container">
          <div style={{ background: '#B8860B', color: '#ffffff', borderRadius: '16px', padding: '16px 24px', fontWeight: 600, textAlign: 'center' }}>
            NOVO ARTIGO PARA A PROXIMO N. DA REVISTA NEXUS CIENTIFICO- sessão Jovem Cientista
          </div>
        </div>
      </section>

      {/* ── ARTIGOS PUBLICADOS ──────────────────────────────────── */}
      <section className={styles.published}>
        <div className="container">
          <div className={styles.articleCard}>
            <div className={styles.articleTop}>
              <span className={styles.publishedBadge}>
                <CheckIcon />
                Publicado pela Revista Nexus Científico
              </span>
              <span className={styles.articleDate}>Julho de 2026 · Edição em formação</span>
            </div>

            <h2 className={styles.articleTitle}>
              Organizações Sociais de Educação e a Reconfiguração da Gestão Escolar
            </h2>
            <p className={styles.articleSubtitle}>
              Uma Análise Crítica da Governança Neoliberal no Sistema Público de Ensino
            </p>
            <p className={styles.articleAuthor}>Danilo Bruno de Lima Nogueira</p>

            <p className={styles.articleAbstract}>
              O estudo investiga as Organizações Sociais de Educação (OSEs) no Brasil
              como dispositivos de governança neoliberal que reconfiguram profundamente
              as relações entre Estado, mercado e escola pública, examinando as lógicas,
              os mecanismos e os efeitos da mercantilização da gestão educacional.
            </p>

            <div className={styles.articleMeta}>
              <span className={styles.metaItem}>DOI: 10.5281/zenodo.21220875</span>
              <span className={styles.metaDot}>·</span>
              <span className={styles.metaItem}>Acesso Aberto</span>
              <span className={styles.metaDot}>·</span>
              <span className={styles.metaItem}>CC BY 4.0</span>
            </div>

            <div className={styles.articleActions}>
              <a
                href="https://doi.org/10.5281/zenodo.21220875"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.articleBtnPrimary}
              >
                Ler Artigo Completo
                <ExternalIcon />
              </a>
              <a
                href="https://zenodo.org/records/21220875/files/com%20doi%20Danilo%20art%204.docx?download=1"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.articleBtnSecondary}
              >
                Baixar Artigo
              </a>
            </div>
          </div>

          <div className={styles.articleCard}>
            <div className={styles.articleTop}>
              <span className={styles.publishedBadge}>
                <CheckIcon />
                Publicado pela Revista Nexus Científico
              </span>
              <span className={styles.articleDate}>Julho de 2026 · Edição em formação</span>
            </div>

            <h2 className={styles.articleTitle}>
              Entre a Normalização e a Insurgência
            </h2>
            <p className={styles.articleSubtitle}>
              Uma Análise Crítica das Políticas de Educação Especial na Perspectiva
              Inclusiva
            </p>
            <p className={styles.articleAuthor}>Danilo Bruno de Lima Nogueira</p>

            <p className={styles.articleAbstract}>
              O artigo examina as políticas de educação especial na perspectiva inclusiva
              no Brasil, articulando a análise foucaultiana dos dispositivos de governo
              com os estudos críticos da deficiência, e investiga como a inclusão escolar
              pode, paradoxalmente, operar como tecnologia de normalização e controle
              biopolítico da diferença.
            </p>

            <div className={styles.articleMeta}>
              <span className={styles.metaItem}>DOI: 10.5281/zenodo.21220754</span>
              <span className={styles.metaDot}>·</span>
              <span className={styles.metaItem}>Acesso Aberto</span>
              <span className={styles.metaDot}>·</span>
              <span className={styles.metaItem}>CC BY 4.0</span>
            </div>

            <div className={styles.articleActions}>
              <a
                href="https://doi.org/10.5281/zenodo.21220754"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.articleBtnPrimary}
              >
                Ler Artigo Completo
                <ExternalIcon />
              </a>
              <a
                href="https://zenodo.org/records/21220754/files/Danilo%20art%202.docx?download=1"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.articleBtnSecondary}
              >
                Baixar Artigo
              </a>
            </div>
          </div>

          <div className={styles.articleCard}>
            <div className={styles.articleTop}>
              <span className={styles.publishedBadge}>
                <CheckIcon />
                Publicado pela Revista Nexus Científico
              </span>
              <span className={styles.articleDate}>Julho de 2026 · Edição em formação</span>
            </div>

            <h2 className={styles.articleTitle}>
              Epistemologias Decoloniais e Educação Intercultural Crítica
            </h2>
            <p className={styles.articleSubtitle}>
              Por uma Práxis Curricular Pluriversal nas Escolas Brasileiras
            </p>
            <p className={styles.articleAuthor}>Daniel Luiz Miranda</p>

            <p className={styles.articleAbstract}>
              O artigo examina as relações entre multiculturalismo, epistemologias
              decoloniais e educação no contexto brasileiro, propondo os fundamentos
              teóricos de uma educação intercultural crítica comprometida com o
              reconhecimento e a valorização da pluralidade epistêmica e cultural.
            </p>

            <div className={styles.articleMeta}>
              <span className={styles.metaItem}>DOI: 10.5281/zenodo.21193191</span>
              <span className={styles.metaDot}>·</span>
              <span className={styles.metaItem}>Acesso Aberto</span>
              <span className={styles.metaDot}>·</span>
              <span className={styles.metaItem}>CC BY 4.0</span>
            </div>

            <div className={styles.articleActions}>
              <a
                href="https://doi.org/10.5281/zenodo.21193191"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.articleBtnPrimary}
              >
                Ler Artigo Completo
                <ExternalIcon />
              </a>
              <a
                href="https://zenodo.org/records/21193191/files/Art.%20Daniel%202.docx?download=1"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.articleBtnSecondary}
              >
                Baixar Artigo
              </a>
            </div>
          </div>

          <div className={styles.articleCard}>
            <div className={styles.articleTop}>
              <span className={styles.publishedBadge}>
                <CheckIcon />
                Publicado pela Revista Nexus Científico
              </span>
              <span className={styles.articleDate}>Julho de 2026 · Edição em formação</span>
            </div>

            <h2 className={styles.articleTitle}>
              O Direito à Educação no Brasil Contemporâneo
            </h2>
            <p className={styles.articleSubtitle}>
              Precarização Neoliberal, Resistência Social e a Centralidade do Estado
              Democrático
            </p>
            <p className={styles.articleAuthor}>Daniel Luiz Miranda</p>

            <p className={styles.articleAbstract}>
              O artigo investiga as tensões contemporâneas na concretização do direito
              à educação no Brasil, examinando como o avanço da racionalidade neoliberal
              tem comprometido a efetividade dos direitos sociais garantidos pela
              Constituição Federal de 1988.
            </p>

            <div className={styles.articleMeta}>
              <span className={styles.metaItem}>DOI: 10.5281/zenodo.21193163</span>
              <span className={styles.metaDot}>·</span>
              <span className={styles.metaItem}>Acesso Aberto</span>
              <span className={styles.metaDot}>·</span>
              <span className={styles.metaItem}>CC BY 4.0</span>
            </div>

            <div className={styles.articleActions}>
              <a
                href="https://doi.org/10.5281/zenodo.21193163"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.articleBtnPrimary}
              >
                Ler Artigo Completo
                <ExternalIcon />
              </a>
              <a
                href="https://zenodo.org/records/21193163/files/Art.%20Daniel%201.docx?download=1"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.articleBtnSecondary}
              >
                Baixar Artigo
              </a>
            </div>
          </div>

          <div className={styles.articleCard}>
            <div className={styles.articleTop}>
              <span className={styles.publishedBadge}>
                <CheckIcon />
                Publicado pela Revista Nexus Científico
              </span>
              <span className={styles.articleDate}>Julho de 2026 · Edição em formação</span>
            </div>

            <h2 className={styles.articleTitle}>
              A Cibercognição como Novo Paradigma Epistemológico
            </h2>
            <p className={styles.articleSubtitle}>
              Inteligência Artificial Generativa e a Dissolução da Fronteira Ontológica
              entre Cognição Humana e Cognição Artificial no Processo de Ensino-Aprendizagem
            </p>
            <p className={styles.articleAuthor}>Juliana Franciso de Oliveira</p>

            <p className={styles.articleAbstract}>
              O artigo propõe a cibercognição como novo paradigma epistemológico para
              fundamentar a relação pedagógica na era pós-humana das inteligências
              artificiais generativas, articulando epistemologia da educação, estudos de
              ciência e tecnologia (STS) e filosofia da mente expandida.
            </p>

            <div className={styles.articleMeta}>
              <span className={styles.metaItem}>DOI: 10.5281/zenodo.21138167</span>
              <span className={styles.metaDot}>·</span>
              <span className={styles.metaItem}>Acesso Aberto</span>
              <span className={styles.metaDot}>·</span>
              <span className={styles.metaItem}>CC BY 4.0</span>
            </div>

            <div className={styles.articleActions}>
              <a
                href="https://doi.org/10.5281/zenodo.21138167"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.articleBtnPrimary}
              >
                Ler Artigo Completo
                <ExternalIcon />
              </a>
              <a
                href="https://zenodo.org/records/21138167/files/Artigo%20Juliana-%20Revista%20Nexus%20Cientificopdf.pdf?download=1"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.articleBtnSecondary}
              >
                Baixar PDF
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── ACERVO ZENODO ───────────────────────────────────────── */}
      <section className={styles.acervo}>
        <div className="container">
          <div className={styles.acervoCard}>
            <div className={styles.acervoLeft}>
              <div className={styles.acervoIcon} aria-hidden="true">
                <JournalIcon />
              </div>
              <div className={styles.acervoBody}>
                <p className={styles.acervoEyebrow}>Acervo Online</p>
                <h2 className={styles.acervoTitle}>
                  Artigos publicados na comunidade Zenodo
                </h2>
                <p className={styles.acervoDesc}>
                  Todos os artigos da Revista Nexus Científico estão indexados e
                  disponíveis gratuitamente no Zenodo — plataforma de repositório
                  científico aberto do CERN. Acesse, leia e compartilhe as pesquisas
                  publicadas pela nossa comunidade acadêmica.
                </p>
                <div className={styles.badges}>
                  <span className={styles.badge}>Acesso Aberto</span>
                  <span className={styles.badge}>DOI por artigo</span>
                  <span className={styles.badge}>ISSN registrado</span>
                  <span className={styles.badge}>Revisão por pares</span>
                </div>
              </div>
            </div>
            <div className={styles.acervoActions}>
              <a
                href={ZENODO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.zenodoBtn}
              >
                <ZenodoIcon />
                <span>
                  <span className={styles.zenodoBtnLabel}>Acessar Acervo</span>
                  <span className={styles.zenodoBtnSub}>Comunidade no Zenodo</span>
                </span>
                <ExternalIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CHAMADA ABERTA ──────────────────────────────────────── */}
      <section className={styles.callSection}>
        <div className="container">
          <div className={styles.callBox}>
            <div className={styles.callText}>
              <span className={styles.callEyebrow}>Chamada aberta</span>
              <h2 className={styles.callTitle}>Submeta seu artigo agora</h2>
              <p className={styles.callDesc}>
                Estamos com chamada aberta para submissão de artigos. Pesquisadores,
                professores e estudantes de pós-graduação de todas as áreas são
                bem-vindos.
              </p>
            </div>
            <div className={styles.callActions}>
              <Button
                href="mailto:revista@nexuscientifico.com.br"
                variant="primary"
                size="lg"
              >
                Submeter Artigo por E-mail
              </Button>
              <p className={styles.callNote}>
                Respondemos em até 48 horas úteis · Sem taxa de submissão
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

/* ── ICONS ──────────────────────────────────────────────────────── */

function JournalIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
      <line x1="8" y1="8" x2="16" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="8" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="8" y1="16" x2="12" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

function ZenodoIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
      <path d="M8 16l8-8M8 8h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <polyline points="15,3 21,3 21,9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="10" y1="14" x2="21" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
