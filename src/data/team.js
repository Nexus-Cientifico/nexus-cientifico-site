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
    bio: 'Fundadora e diretora da Nexus Científico, responsável pela visão editorial e pelo desenvolvimento da plataforma de publicação acadêmica.',
    photo: '/images/equipe/christiane.jpeg',
  },
  {
    id: 'valeria-magalhaes',
    name: 'Valéria Magalhães',
    role: 'Conselheira Editorial',
    isDirector: false,
    bio: 'Pesquisadora na interface entre ciência do exercício e saúde cardiovascular, com formação em andamento no Mestrado em Educação. Integra o conselho editorial com rigor clínico-científico e visão interdisciplinar.',
    specialties: [
      'Exercício Físico & Reabilitação Cardíaca',
      'Fisiologia do Exercício',
      'Mestranda em Educação',
    ],
    photo: '/images/equipe/valeria2.jpeg',
  },
  {
    id: 'antonia-matos',
    name: 'Antonia Maria de Matos',
    role: 'Conselheira Editorial',
    isDirector: false,
    bio: 'Conselheira editorial especialista em metodologia científica e normas internacionais de publicação.',
    photo: '/images/equipe/antonia.jpeg',
  },
  {
    id: 'isabel-santos',
    name: 'Isabel Cristina Santos',
    role: 'Conselheira Editorial',
    isDirector: false,
    bio: 'Conselheira editorial com ampla experiência em pesquisa acadêmica e gestão de publicações científicas.',
    photo: '/images/equipe/isabel.jpeg',
  },
]
