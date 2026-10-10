import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { nav } from '../data/content.js'
import Wordmark from './Wordmark.jsx'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-500 ${
        scrolled ? 'bg-cream/90 backdrop-blur-sm border-b border-cafe/10' : 'bg-transparent'
      }`}
    >
      <div className="container-page flex items-center justify-between py-4 md:py-5">
        <Wordmark />

        <nav className="hidden md:flex items-center gap-8">
          {nav.filter((n) => !n.cta).map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm tracking-wide transition-colors ${
                  isActive ? 'text-ink' : 'text-stone hover:text-ink'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink
            to="/creemos-juntos"
            className="text-sm tracking-wide px-5 py-2.5 rounded-full bg-ink text-cream hover:bg-ink-2 transition-colors"
          >
            Creemos juntos
          </NavLink>
        </nav>

        <button
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden relative z-50 w-9 h-9 flex flex-col items-center justify-center gap-[6px]"
        >
          <span className={`block h-px w-6 bg-ink transition-transform duration-300 ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`block h-px w-6 bg-ink transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-px w-6 bg-ink transition-transform duration-300 ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 bg-ink text-cream md:hidden flex flex-col justify-center"
          >
            <nav className="container-page flex flex-col gap-2">
              {nav.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.5 }}
                >
                  <NavLink
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-3xl font-serif"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
