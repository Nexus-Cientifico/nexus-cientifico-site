/**
 * Home — página principal composta por todas as seções da landing page.
 * Ordem editorial: Hero → Serviços → Equipe → Como Publicar → Depoimentos → CTA Final
 */

import Hero from '@/sections/Hero/Hero'
import Servicos from '@/sections/Servicos/Servicos'
import Equipe from '@/sections/Equipe/Equipe'
import ComoPublicar from '@/sections/ComoPublicar/ComoPublicar'
import Depoimentos from '@/sections/Depoimentos/Depoimentos'
import CTAFinal from '@/sections/CTAFinal/CTAFinal'

export default function Home() {
  return (
    <>
      <Hero />
      <Servicos />
      <Equipe />
      <ComoPublicar />
      <Depoimentos />
      <CTAFinal />
    </>
  )
}
