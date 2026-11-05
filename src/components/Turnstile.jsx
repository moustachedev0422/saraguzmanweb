import { useEffect, useRef } from 'react'

const SCRIPT_ID = 'cloudflare-turnstile-script'

function loadTurnstileScript() {
  if (window.turnstile) return Promise.resolve()

  const existingScript = document.getElementById(SCRIPT_ID)
  if (existingScript) {
    return new Promise((resolve, reject) => {
      existingScript.addEventListener('load', resolve, { once: true })
      existingScript.addEventListener('error', reject, { once: true })
    })
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.id = SCRIPT_ID
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
    script.async = true
    script.defer = true
    script.addEventListener('load', resolve, { once: true })
    script.addEventListener('error', reject, { once: true })
    document.head.appendChild(script)
  })
}

export default function Turnstile({ onError, onExpire, onVerify }) {
  const containerRef = useRef(null)
  const widgetIdRef = useRef(null)
  const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY

  useEffect(() => {
    if (!siteKey || !containerRef.current) return undefined

    let active = true

    loadTurnstileScript()
      .then(() => {
        if (!active || !containerRef.current || !window.turnstile) return

        widgetIdRef.current = window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          theme: 'light',
          action: 'contact_form',
          callback: onVerify,
          'error-callback': onError,
          'expired-callback': onExpire,
        })
      })
      .catch(() => onError?.())

    return () => {
      active = false
      if (widgetIdRef.current !== null && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current)
      }
    }
  }, [onError, onExpire, onVerify, siteKey])

  if (!siteKey) {
    return <p className="text-sm leading-relaxed text-cafe/75">La verificación del formulario estará disponible en el sitio publicado.</p>
  }

  return <div ref={containerRef} />
}
