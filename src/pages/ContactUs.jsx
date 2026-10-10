import Reveal from '../components/Reveal.jsx'
import { contact } from '../data/content.js'

export default function ContactUs() {
  return (
    <>
      <section className="pt-40 pb-16 md:pt-48 md:pb-20">
        <div className="container-page max-w-2xl">
          <Reveal>
            <p className="text-xs tracking-[0.35em] uppercase text-stone mb-6">{contact.eyebrow}</p>
            <h1 className="font-serif text-4xl md:text-6xl text-ink" style={{ fontFamily: 'var(--font-serif)' }}>
              {contact.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-cafe/80">{contact.intro}</p>
          </Reveal>
        </div>
      </section>

      {/* Qué te vamos a preguntar — transparencia antes del formulario real */}
      <section className="bg-cream-2 py-20 md:py-24">
        <div className="container-page grid md:grid-cols-3 gap-12">
          {contact.sections.map((section) => (
            <Reveal key={section.title}>
              <h2 className="text-xs tracking-[0.3em] uppercase text-stone mb-5">{section.title}</h2>
              {section.description && (
                <p className="text-sm text-cafe/70 mb-4 leading-relaxed">{section.description}</p>
              )}
              {section.fields && (
                <ul className="space-y-2">
                  {section.fields.map((f) => (
                    <li key={f} className="text-sm text-cafe/75">{f}</li>
                  ))}
                </ul>
              )}
              {section.questions && (
                <ul className="space-y-4">
                  {section.questions.map((q) => (
                    <li key={q.q} className="text-sm">
                      <p className="text-cafe/85 font-medium">{q.q}</p>
                      {q.options && (
                        <p className="text-cafe/50 mt-1">{q.options.join(' · ')}</p>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </div>
      </section>

      {/* Formulario real — Tally (mismo cuestionario ya construido por Sara) */}
      <section className="py-20 md:py-28">
        <div className="container-page">
          <Reveal>
            <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
              <h2 className="font-serif text-2xl md:text-3xl text-ink" style={{ fontFamily: 'var(--font-serif)' }}>
                {contact.cta}
              </h2>
              <a
                href={contact.formUrl}
                target="_blank"
                rel="noreferrer"
                className="text-sm underline text-stone hover:text-ink transition-colors"
              >
                Abrir en una pestaña nueva
              </a>
            </div>
            <div className="rounded-2xl overflow-hidden border border-cafe/15 bg-cream">
              <iframe
                title="Creemos juntos — solicitud de cita"
                src={`${contact.formUrl}?transparentBackground=1`}
                width="100%"
                height="900"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
