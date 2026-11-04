import Reveal from '../components/Reveal.jsx'
import { contact } from '../data/content.js'

export default function ContactUs() {
  return (
    <>
      <section className="pt-40 pb-20 md:pt-48 md:pb-24">
        <div className="container-page max-w-3xl">
          <Reveal>
            <p className="mb-6 text-xs tracking-[0.35em] uppercase text-stone">{contact.eyebrow}</p>
            <h1 className="font-serif text-4xl leading-[0.98] text-ink md:text-6xl" style={{ fontFamily: 'var(--font-serif)' }}>
              {contact.title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-cafe/80">{contact.intro}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream-2 py-20 md:py-28">
        <div className="container-page grid items-start gap-12 md:grid-cols-[1.25fr_0.75fr]">
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase text-stone">Sin requisitos previos</p>
            <h2 className="mt-5 max-w-xl font-serif text-3xl leading-tight text-ink md:text-5xl" style={{ fontFamily: 'var(--font-serif)' }}>
              Puedes empezar cuando quieras.
            </h2>
            <p className="mt-6 max-w-lg leading-relaxed text-cafe/75">
              Momento Zero es un espacio de reflexión, no un formulario obligatorio. Puedes llegar a la conversación
              sin haber respondido ninguna pregunta, con una respuesta o con tu ficha copiada.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="border border-cafe/15 bg-cream p-8 md:p-10">
              <p className="text-xs tracking-[0.3em] uppercase text-stone">Solicitud de cita</p>
              <p className="mt-5 font-serif text-2xl leading-snug text-ink" style={{ fontFamily: 'var(--font-serif)' }}>
                Un espacio para empezar a darle orden a lo que quieres construir.
              </p>
              <a
                href={contact.formUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3 text-sm text-cream transition-colors hover:bg-ink-2"
              >
                {contact.cta} <span aria-hidden="true">→</span>
              </a>
              <p className="mt-4 text-xs leading-relaxed text-stone">Se abrirá el agendamiento en una pestaña nueva.</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
