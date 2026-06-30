/**
 * Dados da equipe editorial da Nexus Científico.
 * Para adicionar foto: coloque o arquivo em /public/images/equipe/
 * e preencha o campo `photo` com o caminho (ex: "/images/equipe/christiane.jpg").
 */

export const team = [
  {
    id: 'christiane-cherkasov',
    name: 'Christiane Cherkasov',
    role: 'Diretora Editorial',
    isDirector: true,
    bio: 'Fundadora e Diretora Editorial da Nexus Científico, responsável pela visão editorial e pelo desenvolvimento da plataforma de publicação acadêmica. Especialista em Gestão Escolar com Ênfase em Supervisão, Orientação, Administração e Inspeção, e em Psicopedagogia.',
    specialties: [
      'Gestão Escolar & Supervisão',
      'Psicopedagogia',
      'Docência no Ensino Superior',
    ],
    photo: '/images/equipe/christiane.jpeg',
  },
  {
    id: 'valeria-magalhaes',
    name: 'Valéria Magalhães',
    role: 'Conselheira Editorial',
    isDirector: false,
    bio: 'Pesquisadora na interface entre ciência do exercício e saúde cardiovascular. Integra o conselho editorial com rigor clínico-científico e visão interdisciplinar.',
    specialties: [
      'Exercício Físico & Reabilitação Cardíaca',
      'Fisiologia do Exercício',
    ],
    photo: '/images/equipe/valeria2.jpeg',
  },
  {
    id: 'antonia-matos',
    name: 'Antonia Maria de Matos',
    role: 'Conselheira Editorial',
    isDirector: false,
    bio: 'Especialista em Administração e Logística e em Docência do Ensino Superior. Integra o conselho editorial trazendo experiência prática nas áreas de gestão e formação docente.',
    specialties: [
      'Administração & Logística',
      'Docência do Ensino Superior',
    ],
    photo: '/images/equipe/antonia.jpeg',
  },
  {
    id: 'isabel-santos',
    name: 'Isabel Cristina Santos',
    role: 'Conselheira Editorial',
    isDirector: false,
    bio: 'Especialista em Gestão de Pessoas, Planejamento Tributário e Gestão Escolar. Integra o conselho editorial com uma visão ampla que une administração, finanças e educação.',
    specialties: [
      'Gestão de Pessoas',
      'Planejamento Tributário',
      'Gestão Escolar',
    ],
    photo: '/images/equipe/isabel.jpeg',
  },
]
