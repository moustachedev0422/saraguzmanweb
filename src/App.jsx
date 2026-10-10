import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Methodology from './pages/Methodology.jsx'
import About from './pages/About.jsx'
import Journal from './pages/Journal.jsx'
import JournalPost from './pages/JournalPost.jsx'
import ContactUs from './pages/ContactUs.jsx'
import NotFound from './pages/NotFound.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname])
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
          <Route path="/metodologia" element={<Methodology />} />
          <Route path="/sobre-mi" element={<About />} />
          <Route path="/laboratorio-de-suenos" element={<Journal />} />
          <Route path="/laboratorio-de-suenos/:slug" element={<JournalPost />} />
          <Route path="/creemos-juntos" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
