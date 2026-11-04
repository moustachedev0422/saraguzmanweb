import { Navigate, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Journal from './pages/Journal.jsx'
import ContactUs from './pages/ContactUs.jsx'
import NotFound from './pages/NotFound.jsx'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1))
      if (target) {
        target.scrollIntoView({ behavior: 'auto' })
        const frame = window.requestAnimationFrame(() => target.scrollIntoView({ behavior: 'auto' }))
        return () => window.cancelAnimationFrame(frame)
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="grain" aria-hidden="true" />
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sara" element={<About />} />
          <Route path="/explorar" element={<Journal />} />
          <Route path="/explorar/:slug" element={<Navigate to="/explorar" replace />} />
          <Route path="/empezar" element={<ContactUs />} />
          <Route path="/metodologia" element={<Navigate to="/#momento-cero" replace />} />
          <Route path="/sobre-mi" element={<Navigate to="/sara" replace />} />
          <Route path="/laboratorio-de-suenos" element={<Navigate to="/explorar" replace />} />
          <Route path="/laboratorio-de-suenos/:slug" element={<Navigate to="/explorar" replace />} />
          <Route path="/agendar" element={<Navigate to="/empezar" replace />} />
          <Route path="/creemos-juntos" element={<Navigate to="/empezar" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
