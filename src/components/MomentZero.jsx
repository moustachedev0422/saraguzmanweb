import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const steps = [
  { title: 'Declarar', question: '¿Qué quieres que exista?', placeholder: 'Escribe aquí' },
  { title: 'Enfocar', question: '¿Para quién quieres construirlo?', placeholder: 'Escribe aquí' },
  { title: 'Explorar', question: '¿Qué necesitas todavía entender?', placeholder: 'Escribe aquí' },
  { title: 'Definir', question: '¿Qué es esencial para construirlo?', placeholder: 'Escribe aquí' },
  { title: 'Crear', question: 'Si tu idea pudiera verse hoy, ¿qué forma tendría?', placeholder: 'Escribe aquí' },
  { title: 'Activar', question: 'Mi primer movimiento es', placeholder: 'Escribe aquí' },
]

function Hourglass({ progress, step }) {
  const topClip = `inset(${Math.round(progress * 100)}% 0 0 0)`
  const bottomClip = `inset(${Math.round((1 - progress) * 100)}% 0 0 0)`

  return (
    <div className="relative w-36 sm:w-44 text-ink" aria-label={`Reloj de arena: ${Math.round(progress * 100)}% del recorrido`}>
      <svg viewBox="0 0 160 230" className="w-full h-auto" role="img" aria-hidden="true">
        <path d="M18 15H142M18 24H142M25 206H135M18 215H142" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M31 30C31 78 57 85 80 115C103 145 129 152 129 200" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M129 30C129 78 103 85 80 115C57 145 31 152 31 200" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M34 34H126C123 70 103 87 80 112C57 87 37 70 34 34Z" fill="#cba876" style={{ clipPath: topClip }} />
        <path d="M80 119C103 145 121 161 126 196H34C39 161 57 145 80 119Z" fill="#cba876" style={{ clipPath: bottomClip }} />
        <path d="M80 109V125" fill="none" stroke="#cba876" strokeWidth="3" />
      </svg>
      <p className="mt-3 text-center text-[0.65rem] font-medium tracking-[0.25em] uppercase text-stone">
        Paso {step} de {steps.length}
      </p>
    </div>
  )
}

export default function MomentZero({ initialDeclaration = '' }) {
  const [active, setActive] = useState(null)
  const [answers, setAnswers] = useState(() => Object.fromEntries(steps.map((step) => [step.title, step.title === 'Declarar' ? initialDeclaration : ''])))
  const [saved, setSaved] = useState(false)
  const completedSteps = Object.values(answers).filter((answer) => answer.trim().length > 0).length
  const progress = completedSteps / steps.length
  const currentStep = Math.min(steps.length, Math.max(1, completedSteps))

  const sheet = useMemo(
    () => steps.map((step, index) => `${String(index + 1).padStart(2, '0')} · ${step.title}\n${answers[step.title].trim() || 'Sin respuesta'}`).join('\n\n'),
    [answers],
  )

  function downloadSheet() {
    const file = new Blob([`MOMENTO ZERO\n\n${sheet}`], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(file)
    const link = document.createElement('a')
    link.href = url
    link.download = 'mi-momento-zero.txt'
    document.body.appendChild(link)
    link.click()
    link.remove()
    URL.revokeObjectURL(url)
    setSaved(true)
    window.setTimeout(() => setSaved(false), 2200)
  }

  return (
    <section id="momento-cero" className="relative bg-cream py-24 md:py-32">
      <div className="container-page grid w-full items-start gap-10 lg:grid-cols-[190px_minmax(0,1fr)] lg:gap-20">
          <div className="mx-auto lg:sticky lg:top-[calc(50vh-9rem)] lg:self-start lg:justify-self-center">
            <Hourglass progress={progress} step={currentStep} />
          </div>

          <div className="min-w-0">
            <p className="text-xs tracking-[0.35em] uppercase text-stone">Momento Zero</p>
            <h2 className="mt-4 max-w-3xl font-serif text-[2.3rem] leading-[0.98] text-ink sm:text-5xl md:text-6xl" style={{ fontFamily: 'var(--font-serif)' }}>
              Construir empieza mucho antes de ejecutar.
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-cafe/70 sm:text-base">
              Toca una palabra para construir tu momento.
            </p>

            <div className="mt-8 border-t border-cafe/15">
              {steps.map((step, index) => {
                const isActive = active === index
                return (
                  <div key={step.title} className="border-b border-cafe/15">
                    <button
                      type="button"
                      onClick={() => setActive((current) => current === index ? null : index)}
                      className="grid w-full grid-cols-[2.5rem_1fr_auto] items-center gap-3 py-4 text-left sm:grid-cols-[4.5rem_1fr_auto] sm:py-5"
                      aria-expanded={isActive}
                    >
                      <span className="text-xs tracking-[0.2em] text-stone">{String(index + 1).padStart(2, '0')}</span>
                      <span className="font-serif text-3xl leading-none text-ink sm:text-4xl" style={{ fontFamily: 'var(--font-serif)' }}>{step.title}</span>
                      <span className={`text-lg transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`} aria-hidden="true">⌄</span>
                    </button>
                    <motion.div
                      initial={false}
                      animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-5 pl-[2.5rem] pr-2 sm:pl-[4.5rem]">
                        <label className="block font-sans italic text-xl text-cafe sm:text-2xl">{step.question}</label>
                        <textarea
                          value={answers[step.title]}
                          onChange={(event) => setAnswers((current) => ({ ...current, [step.title]: event.target.value }))}
                          placeholder={step.placeholder}
                          rows="2"
                          className="mt-4 block w-full resize-none border-b border-cafe/20 bg-transparent pb-3 font-sans text-base text-cafe outline-none placeholder:text-stone/60 focus:border-ink"
                        />
                      </div>
                    </motion.div>
                  </div>
                )
              })}
            </div>

            <p className="mt-6 max-w-2xl font-serif text-xl leading-snug text-cafe sm:text-2xl" style={{ fontFamily: 'var(--font-serif)' }}>
              Antes de crecer hacia afuera, todo proyecto necesita orden por dentro.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button type="button" onClick={downloadSheet} className="rounded-full bg-ink px-6 py-3 text-sm text-cream transition-colors hover:bg-ink-2">
                {saved ? 'Ficha guardada' : 'Guardar mi momento'}
              </button>
              <Link to="/explorar" className="rounded-full border border-ink/35 px-6 py-3 text-sm text-ink transition-colors hover:border-ink">
                Explorar
              </Link>
              <Link to="/empezar" className="rounded-full bg-ink px-6 py-3 text-sm text-cream transition-colors hover:bg-ink-2">
                Continuar
              </Link>
            </div>
          </div>
      </div>
    </section>
  )
}
