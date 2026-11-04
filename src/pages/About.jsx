import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import { about } from '../data/content.js'

export default function About() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-cream pt-40 pb-24 md:pt-48 md:pb-32">
        <img
          src="/assets/banner-sara.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-75"
        />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-cream via-cream/85 to-cream/25" />
        <div className="container-page max-w-4xl">
          <Reveal>
            <p className="text-xs tracking-[0.35em] uppercase text-stone">Sara</p>
            <h1 className="mt-6 max-w-3xl font-serif text-4xl leading-[0.98] text-ink md:text-6xl" style={{ fontFamily: 'var(--font-serif)' }}>
              {about.title}
            </h1>
            <p className="mt-10 font-serif text-2xl text-ink md:text-3xl" style={{ fontFamily: 'var(--font-serif)' }}>{about.lead}</p>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-cafe/80 md:text-xl">{about.intro}</p>
            <Link to="#sobre-sara" className="mt-9 inline-flex rounded-full bg-ink px-6 py-3 text-sm text-cream transition-colors hover:bg-ink-2">
              {about.cta}
            </Link>
          </Reveal>
        </div>
      </section>

      <section id="sobre-sara" className="scroll-mt-24 bg-cream-2 py-24 md:py-32">
        <div className="container-page max-w-4xl">
          <Reveal>
            <p className="text-xs tracking-[0.35em] uppercase text-stone">Sobre Sara</p>
          </Reveal>
          <div className="mt-12 grid gap-px bg-cafe/10 md:grid-cols-3">
            {about.sections.map((section, index) => (
              <Reveal key={section.title} delay={index * 0.08} className="bg-cream p-8 md:p-10">
                <h2 className="font-serif text-2xl text-ink" style={{ fontFamily: 'var(--font-serif)' }}>{section.title}</h2>
                {section.body.split('\n\n').map((paragraph) => (
                  <p key={paragraph} className="mt-5 leading-relaxed text-cafe/75">{paragraph}</p>
                ))}
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
