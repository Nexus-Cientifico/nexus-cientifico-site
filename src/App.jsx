/**
 * App — roteamento principal via React Router DOM v6
 *
 * Rotas:
 *   /            → Home (todas as seções da landing)
 *   /livros      → LivrosPublicados
 *   /revista     → Revista
 *   /sobre       → Sobre
 *   /publicar    → Publicar
 *   *            → 404 redirect para Home
 */

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Home from '@/pages/Home'
import LivrosPublicados from '@/pages/LivrosPublicados'
import Revista from '@/pages/Revista'
import Sobre from '@/pages/Sobre'
import Publicar from '@/pages/Publicar'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/livros" element={<LivrosPublicados />} />
          <Route path="/revista" element={<Revista />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/publicar" element={<Publicar />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
