import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Reveal from '../components/Reveal.jsx'
import MomentZero from '../components/MomentZero.jsx'
import { home } from '../data/content.js'

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-cream">
        <img
          src="/assets/banner-orden-suenos.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[62%_center] opacity-80"
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

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 max-w-xl font-sans italic text-2xl text-cafe md:text-4xl"
          >
            {home.heroQuestion}
          </motion.p>

          <div className="mt-8 w-56 border-t border-cafe/35" aria-hidden="true" />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-10"
          >
            <Link
              to={home.heroCta.to}
              className="inline-flex items-center gap-3 rounded-full bg-ink px-7 py-3.5 text-sm tracking-wide text-cream transition-colors hover:bg-ink-2"
            >
              {home.heroCta.label}
              <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </div>

        <div className="pointer-events-none absolute -right-24 top-16 h-72 w-72 rounded-full bg-sand/15 blur-3xl" />
      </section>

      <MomentZero />

      {/* ---------------------------------------------------------------- */}
      {/* UNIVERSO DE SARA */}
      {/* ---------------------------------------------------------------- */}
      <section className="py-28 md:py-36">
        <div className="container-page">
          <Reveal>
            <p className="text-xs tracking-[0.35em] uppercase text-stone mb-4">El universo de Sara</p>
            <h2 className="font-serif text-3xl md:text-5xl max-w-xl text-ink" style={{ fontFamily: 'var(--font-serif)' }}>
              Un mismo espacio, cuatro formas de explorarlo
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-px md:grid-cols-2 bg-cafe/10">
            {home.universe.map((area, i) => (
              <Reveal key={area.key} delay={i * 0.08}>
                <Link
                  to={area.to}
                  className="group relative block bg-cream p-10 md:p-14 h-full min-h-[260px] flex flex-col justify-between transition-colors hover:bg-ink hover:text-cream"
                >
                  <div>
                    <span className="text-xs tracking-[0.3em] uppercase text-stone group-hover:text-sand transition-colors">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3
                      className="mt-4 font-serif text-3xl md:text-4xl"
                      style={{ fontFamily: 'var(--font-serif)' }}
                    >
                      {area.title}
                    </h3>
                    <p className="mt-2 text-sm uppercase tracking-wide text-stone group-hover:text-sand/80 transition-colors">
                      {area.subtitle}
                    </p>
                  </div>
                  <p className="mt-8 text-base text-cafe/70 group-hover:text-cream/80 transition-colors max-w-sm">
                    {area.description}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm group-hover:translate-x-1 transition-transform">
                    Explorar <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* CTA FINAL */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-ink text-cream py-28 md:py-36">
        <div className="container-page text-center">
          <Reveal>
            <h2 className="font-sans italic font-medium text-4xl md:text-6xl max-w-2xl mx-auto text-sand">
              Un espacio para iniciar un proceso y solicitar una cita.
            </h2>
            <Link
              to="/empezar"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-sand text-ink px-8 py-4 text-sm tracking-wide hover:bg-cream transition-colors"
            >
              Empezar <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
