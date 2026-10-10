import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Reveal from '../components/Reveal.jsx'
import { home } from '../data/content.js'

export default function Home() {
  return (
    <>
      {/* ---------------------------------------------------------------- */}
      {/* HERO — composición de alto impacto, fondo navy + textura (ref. 03.jpg) */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative bg-ink text-cream overflow-hidden">
        <div className="container-page min-h-[88vh] flex flex-col justify-center py-28 md:py-32 relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-xs md:text-sm tracking-[0.35em] uppercase text-sand mb-8"
          >
            {home.heroKicker}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans italic font-medium text-[2.6rem] leading-[1.05] sm:text-6xl md:text-7xl lg:text-[5.5rem] max-w-4xl text-sand"
          >
            {home.heroTitle}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 max-w-md text-base md:text-lg text-cream/70"
          >
            {home.heroSub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-10"
          >
            <Link
              to={home.heroCta.to}
              className="inline-flex items-center gap-3 rounded-full bg-sand text-ink px-7 py-3.5 text-sm tracking-wide hover:bg-cream transition-colors"
            >
              {home.heroCta.label}
              <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </div>

        {/* halo sutil, referencia a la luz superior izquierda de 03.jpg */}
        <div className="pointer-events-none absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-sand/10 blur-3xl" />
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* MICRO-RELATO DE SCROLL — frases reales (Frases para Instagram.docx) */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-cream-2 py-28 md:py-36">
        <div className="container-page">
          <div className="max-w-3xl mx-auto flex flex-col gap-16 md:gap-20">
            {home.scrollStory.map((line, i) => (
              <Reveal key={line} delay={i * 0.05} className={i % 2 === 1 ? 'md:self-end md:text-right' : ''}>
                <p
                  className={`font-sans italic font-medium text-3xl sm:text-4xl md:text-5xl leading-tight ${
                    i === home.scrollStory.length - 1 ? 'text-cafe' : 'text-cafe/70'
                  }`}
                >
                  {line}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

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
            <p className="text-xs tracking-[0.35em] uppercase text-sand mb-6">Creemos juntos</p>
            <h2 className="font-sans italic font-medium text-4xl md:text-6xl max-w-2xl mx-auto text-sand">
              Un espacio para iniciar un proceso y solicitar una cita.
            </h2>
            <Link
              to="/creemos-juntos"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-sand text-ink px-8 py-4 text-sm tracking-wide hover:bg-cream transition-colors"
            >
              Solicitar una cita <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
