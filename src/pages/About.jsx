import Reveal from '../components/Reveal.jsx'
import { about } from '../data/content.js'

function PlaceholderBlock({ label }) {
  return (
    <div className="border border-dashed border-cafe/30 rounded-2xl p-10 flex items-center justify-center text-center text-sm text-stone italic min-h-[220px]">
      {label}
    </div>
  )
}

export default function About() {
  return (
    <>
      <section className="pt-40 pb-20 md:pt-48 md:pb-24">
        <div className="container-page grid md:grid-cols-[1.1fr_0.9fr] gap-14 items-end">
          <Reveal>
            <p className="text-xs tracking-[0.35em] uppercase text-stone mb-6">{about.eyebrow}</p>
            <h1 className="font-serif text-4xl md:text-6xl text-ink leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
              {about.title}
            </h1>
            <p className="mt-4 text-sm uppercase tracking-wide text-stone">{about.role}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <PlaceholderBlock label={about.placeholders.fotografia} />
          </Reveal>
        </div>
      </section>

      {/* Bio corta — texto real de Sobre mi.docx */}
      <section className="pb-24 md:pb-32">
        <div className="container-page max-w-2xl">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-lg md:text-xl leading-relaxed text-cafe/80 mb-6">{p}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Filosofía — Historia / Misión / Visión / Valores (Descripción general.docx.pdf) */}
      <section className="bg-cream-2 py-24 md:py-32">
        <div className="container-page">
          <Reveal>
            <h2 className="font-serif text-3xl md:text-4xl text-ink mb-14" style={{ fontFamily: 'var(--font-serif)' }}>
              Filosofía
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <Reveal>
                <h3 className="text-xs tracking-[0.3em] uppercase text-stone mb-6">Historia</h3>
              </Reveal>
              <div className="space-y-5">
                {about.filosofia.historia.map((p, i) => (
                  <Reveal key={i} delay={i * 0.06}>
                    <p className="text-cafe/75 leading-relaxed">{p}</p>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-10">
              <Reveal>
                <h3 className="text-xs tracking-[0.3em] uppercase text-stone mb-4">Misión</h3>
                <p className="font-serif text-2xl text-ink leading-snug" style={{ fontFamily: 'var(--font-serif)' }}>
                  {about.filosofia.mision}
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <h3 className="text-xs tracking-[0.3em] uppercase text-stone mb-4">Visión</h3>
                <p className="font-serif text-2xl text-ink leading-snug" style={{ fontFamily: 'var(--font-serif)' }}>
                  {about.filosofia.vision}
                </p>
              </Reveal>
            </div>
          </div>

          <div className="mt-20">
            <Reveal>
              <h3 className="text-xs tracking-[0.3em] uppercase text-stone mb-8">Valores</h3>
            </Reveal>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-cafe/10">
              {about.filosofia.valores.map((v, i) => (
                <Reveal key={v.title} delay={i * 0.05} className="bg-cream p-8">
                  <h4 className="font-serif text-xl text-ink mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                    {v.title}
                  </h4>
                  <p className="text-sm text-cafe/70 leading-relaxed">{v.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Estructura flexible pendiente — experiencia y proyectos */}
      <section className="py-24 md:py-32">
        <div className="container-page grid md:grid-cols-2 gap-10">
          <Reveal>
            <h3 className="font-serif text-2xl text-ink mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              Experiencia
            </h3>
            <PlaceholderBlock label={about.placeholders.experiencia} />
          </Reveal>
          <Reveal delay={0.1}>
            <h3 className="font-serif text-2xl text-ink mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              Proyectos
            </h3>
            <PlaceholderBlock label={about.placeholders.proyectos} />
          </Reveal>
        </div>
      </section>
    </>
  )
}
