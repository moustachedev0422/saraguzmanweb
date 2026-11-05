import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { home } from '../data/content.js'

export default function Home() {
  const [declaration, setDeclaration] = useState('')
  const methodologyUrl = declaration.trim()
    ? `${home.heroCta.to}?declarar=${encodeURIComponent(declaration.trim())}`
    : home.heroCta.to

  return (
    <>
      <section className="relative overflow-hidden bg-cream">
        <img
          src="/assets/banner-orden-suenos-reloj.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-right opacity-90"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cream via-cream/85 to-cream/20" />
        <div className="container-page relative z-10 flex min-h-[88vh] flex-col justify-center py-28 md:py-32">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl font-serif text-[3.35rem] leading-[0.92] text-ink sm:text-7xl md:text-8xl lg:text-[7.5rem]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            {home.heroTitle}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 max-w-xl"
          >
            <label htmlFor="declarar-idea" className="font-sans italic text-2xl text-cafe md:text-4xl">
              {home.heroQuestion}
            </label>
            <input
              id="declarar-idea"
              value={declaration}
              onChange={(event) => setDeclaration(event.target.value)}
              placeholder="Escribe aquí"
              className="mt-6 block w-full border-b border-cafe/35 bg-transparent pb-3 font-serif text-xl text-ink outline-none placeholder:font-sans placeholder:text-base placeholder:italic placeholder:text-stone focus:border-ink md:text-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-10"
          >
            <Link
              to={methodologyUrl}
              className="inline-flex items-center gap-3 rounded-full bg-ink px-7 py-3.5 text-sm tracking-wide text-cream transition-colors hover:bg-ink-2"
            >
              {home.heroCta.label}
              <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </div>

        <div className="pointer-events-none absolute -right-24 top-16 h-72 w-72 rounded-full bg-sand/15 blur-3xl" />
      </section>
    </>
  )
}
