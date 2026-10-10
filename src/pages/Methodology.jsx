import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import { methodology as m } from '../data/content.js'

export default function Methodology() {
  return (
    <>
      <section className="bg-ink text-cream pt-40 pb-28 md:pt-48 md:pb-32">
        <div className="container-page">
          <Reveal>
            <p className="text-xs tracking-[0.35em] uppercase text-sand mb-6">{m.eyebrow}</p>
            <h1 className="font-serif text-5xl md:text-7xl text-cream" style={{ fontFamily: 'var(--font-serif)' }}>
              {m.title}
            </h1>
            <p className="font-sans italic text-xl md:text-2xl text-sand mt-6 max-w-xl">{m.eyebrowLine}</p>
            <p className="mt-8 max-w-2xl text-cream/70 text-lg leading-relaxed">{m.intro}</p>
          </Reveal>
        </div>
      </section>

      {/* Cómo lo hacemos */}
      <section className="py-24 md:py-32">
        <div className="container-page">
          <Reveal>
            <h2 className="font-serif text-3xl md:text-4xl text-ink mb-14" style={{ fontFamily: 'var(--font-serif)' }}>
              {m.comoLoHacemos.title}
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-10">
            {m.comoLoHacemos.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1} className="border-t border-cafe/15 pt-8">
                <h3 className="font-serif text-2xl text-ink mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
                  {item.title}
                </h3>
                <p className="text-cafe/70 leading-relaxed">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Los 6 Momentos */}
      <section className="bg-cream-2 py-24 md:py-32">
        <div className="container-page">
          <Reveal>
            <h2 className="font-serif text-3xl md:text-4xl text-ink mb-14" style={{ fontFamily: 'var(--font-serif)' }}>
              {m.momentos.title}
            </h2>
          </Reveal>
          <div className="flex flex-col">
            {m.momentos.items.map((item, i) => (
              <Reveal key={item.n} delay={i * 0.06}>
                <div className="group grid md:grid-cols-[100px_1fr_1.2fr] gap-4 md:gap-10 items-baseline py-8 border-b border-cafe/15">
                  <span className="font-serif text-sand-2 text-3xl" style={{ fontFamily: 'var(--font-serif)' }}>
                    {item.n}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl text-ink" style={{ fontFamily: 'var(--font-serif)' }}>
                    {item.title}
                  </h3>
                  <p className="text-cafe/70 leading-relaxed">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Qué construimos juntos */}
      <section className="py-24 md:py-32">
        <div className="container-page">
          <Reveal>
            <h2 className="font-serif text-3xl md:text-4xl text-ink mb-14" style={{ fontFamily: 'var(--font-serif)' }}>
              {m.queConstruimos.title}
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-px bg-cafe/10">
            {m.queConstruimos.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08} className="bg-cream p-8 md:p-10">
                <h3 className="font-serif text-xl text-ink mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                  {item.title}
                </h3>
                <p className="text-cafe/70 leading-relaxed text-sm">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cierre */}
      <section className="bg-ink text-cream py-28 md:py-36">
        <div className="container-page text-center">
          <Reveal>
            <p className="mark-circle font-sans italic font-medium text-3xl md:text-5xl max-w-3xl mx-auto text-sand leading-snug">
              “{m.closingQuote}”
            </p>
            <Link
              to="/creemos-juntos"
              className="mt-12 inline-flex items-center gap-3 rounded-full bg-sand text-ink px-8 py-4 text-sm tracking-wide hover:bg-cream transition-colors"
            >
              Creemos juntos <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
