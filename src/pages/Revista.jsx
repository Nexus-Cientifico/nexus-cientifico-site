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
                href="mailto:nexus.editora.cientifica@gmail.com"
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
