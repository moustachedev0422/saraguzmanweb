import { Link, useParams } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import { journal } from '../data/content.js'

export default function JournalPost() {
  const { slug } = useParams()
  const article = journal.articles.find((a) => a.slug === slug)

  if (!article) {
    return (
      <div className="container-page pt-40 pb-32 text-center">
        <p className="text-stone">No encontramos este artículo.</p>
        <Link to="/laboratorio-de-suenos" className="mt-4 inline-block underline">
          Volver a Laboratorio de sueños
        </Link>
      </div>
    )
  }

  return (
    <article className="pt-40 pb-32 md:pt-48">
      <div className="container-page max-w-3xl">
        <Reveal>
          <Link to="/laboratorio-de-suenos" className="text-sm text-stone hover:text-ink transition-colors">
            ← Laboratorio de sueños
          </Link>
          {article.isPlaceholder && (
            <p className="mt-6 text-xs uppercase tracking-widest bg-mark/40 text-cafe inline-block px-3 py-1 rounded-full">
              Plantilla de ejemplo — sin contenido real todavía
            </p>
          )}
          <h1 className="font-serif text-4xl md:text-5xl text-ink mt-6 leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
            {article.title}
          </h1>
          <p className="mt-4 text-sm text-stone">{article.category}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 aspect-video bg-cream-2 border border-dashed border-cafe/25 rounded-2xl flex items-center justify-center">
            <span className="text-xs text-stone italic">Imagen destacada — pendiente</span>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-10 text-lg leading-relaxed text-cafe/80">{article.excerpt}</p>
        </Reveal>
      </div>
    </article>
  )
}
