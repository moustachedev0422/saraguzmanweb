import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import { journal } from '../data/content.js'

export default function Journal() {
  return (
    <>
      <section className="pt-40 pb-20 md:pt-48 md:pb-24">
        <div className="container-page max-w-3xl">
          <Reveal>
            <p className="text-xs tracking-[0.35em] uppercase text-stone mb-6">{journal.eyebrow}</p>
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

      <section className="bg-cream-2 py-20 md:py-24">
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
              {journal.diferencial.map((d) => (
                <li key={d} className="text-cafe/75 leading-relaxed flex gap-3">
                  <span className="text-sand-2">—</span>
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Vista general de artículos */}
      <section className="py-24 md:py-32">
        <div className="container-page">
          <Reveal>
            <h2 className="font-serif text-3xl md:text-4xl text-ink mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              Artículos
            </h2>
            <p className="text-sm text-stone mb-14 max-w-lg">
              Aún no hay artículos publicados. La estructura de la vista general y de cada artículo
              individual queda lista para cuando el primer contenido se entregue.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {journal.articles.map((article, i) => (
              <Reveal key={article.slug} delay={i * 0.08}>
                <Link to={`/laboratorio-de-suenos/${article.slug}`} className="group block">
                  <div className="aspect-[4/5] bg-cream-2 border border-dashed border-cafe/25 rounded-2xl flex items-center justify-center text-center p-6">
                    <span className="text-xs text-stone italic">Imagen destacada — pendiente</span>
                  </div>
                  <div className="mt-5">
                    <div className="flex items-center gap-3 text-xs uppercase tracking-wide text-sand-2">
                      <span>{article.category}</span>
                    </div>
                    <h3
                      className="mt-2 font-serif text-xl text-ink group-hover:text-sand-2 transition-colors"
                      style={{ fontFamily: 'var(--font-serif)' }}
                    >
                      {article.title}
                    </h3>
                    <p className="mt-2 text-sm text-cafe/60 leading-relaxed line-clamp-3">{article.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm text-ink">
                      Leer <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
