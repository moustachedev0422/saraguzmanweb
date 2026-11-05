import Reveal from '../components/Reveal.jsx'
import { journal } from '../data/content.js'

export default function Journal() {
  return (
    <>
      <section className="pt-40 pb-20 md:pt-48 md:pb-24">
        <div className="container-page max-w-3xl">
          <Reveal>
            <p className="text-xs tracking-[0.35em] uppercase text-stone mb-6">Explorar</p>
            <h1 className="font-serif text-4xl md:text-6xl text-ink" style={{ fontFamily: 'var(--font-serif)' }}>
              {journal.title}
            </h1>
            <p className="font-sans italic text-xl md:text-2xl text-sand-2 mt-4">{journal.subtitle}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 text-lg leading-relaxed text-cafe/80">{journal.presentacion}</p>
            <p className="mt-5 text-lg leading-relaxed text-cafe/80">{journal.presentacion2}</p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-cafe/10 bg-cream-2 py-20 md:py-24">
        <div className="container-page">
          <Reveal>
            <p className="max-w-2xl font-serif text-2xl leading-snug text-ink md:text-3xl" style={{ fontFamily: 'var(--font-serif)' }}>
              Experiencias, herramientas, y reflexiones para lo que todavía está tomando forma.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-px bg-cafe/15 md:grid-cols-3">
            {journal.categories.map((category, index) => (
              <Reveal key={category.title} delay={index * 0.08} className="bg-cream p-8 md:p-10">
                <span className="text-xs tracking-[0.3em] uppercase text-stone">{String(index + 1).padStart(2, '0')}</span>
                <h2 className="mt-5 font-serif text-3xl text-ink" style={{ fontFamily: 'var(--font-serif)' }}>{category.title}</h2>
                <p className="mt-4 leading-relaxed text-cafe/75">{category.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-page grid md:grid-cols-2 gap-14">
          <Reveal>
            <h2 className="text-xs tracking-[0.3em] uppercase text-stone mb-4">Origen</h2>
            <p className="text-cafe/75 leading-relaxed">{journal.origen}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-xs tracking-[0.3em] uppercase text-stone mb-4">Propósito</h2>
            <p className="text-cafe/75 leading-relaxed">{journal.proposito}</p>
          </Reveal>
        </div>
        <div className="container-page mt-14">
          <Reveal delay={0.15}>
            <h2 className="text-xs tracking-[0.3em] uppercase text-stone mb-6">Diferencial</h2>
            <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-3">
              {journal.diferencial.map((item) => (
                <li key={item} className="text-cafe/75 leading-relaxed flex gap-3">
                  <span className="text-sand-2">-</span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/*
        Los artículos se habilitarán cuando exista contenido publicado.
        La estructura de tarjetas y detalle se conserva en data/content.js.
      */}
    </>
  )
}
