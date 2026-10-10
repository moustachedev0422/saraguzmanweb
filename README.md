# Sara Guzmán — Centro de actividad (Web/Hub)

React + Vite + Tailwind CSS v4 + React Router + Framer Motion. Listo para desplegar en Vercel.

## Cómo correrlo localmente

```bash
npm install
npm run dev
```

## Deploy en Vercel

```bash
npm i -g vercel   # si no lo tienes
vercel            # sigue el flujo interactivo, o conecta el repo desde vercel.com
```

`vercel.json` ya incluye el rewrite necesario para que las rutas de React Router
(`/metodologia`, `/sobre-mi`, etc.) funcionen al recargar o compartir un link directo.

## Tipografía (Adobe Fonts / Typekit)

El brief pedía **"Vistol Sans"**, que no existe como tal en el catálogo de Adobe Fonts.
La búsqueda más cercana fue **Vista Sans** (Hannes von Döhren) — es la que se usó, dando
por hecho que se trata de una errata. **Si te referías a otra tipografía, dímelo y cambio
el kit.**

Se publicó un kit real de Adobe Fonts (id `ile7ovz`) con:

- **Vista Sans** — Light/Regular/Medium/Bold + itálicas — tipografía de titulares y cuerpo.
- **Cesso** — serif editorial — usada solo en el wordmark "Sara Guzmán" y en los títulos
  de sección, inspirada en la serif del logotipo de las piezas de referencia.

El embed ya está en `index.html`. El kit está autorizado para `localhost` y `*.vercel.app`.
**Antes de lanzar con dominio propio (por ejemplo `saraguzman.com`), hay que agregar ese
dominio en la configuración del kit en fonts.adobe.com** — si no, las fuentes no cargarán ahí.

## Qué es real y qué es placeholder

Todo el copy proviene literalmente de los documentos del proyecto (ficha descriptiva,
Metodología Momento Cero, Sobre mí, Laboratorio de sueños, Creemos juntos, Descripción
general). Nada fue inventado. Ver `src/data/content.js` para la fuente completa.

Quedan como **espacios reservados, claramente marcados en el sitio**:

- Fotografía editorial de Sara (Sobre mí) — no hay fotos reales entregadas todavía.
- "Experiencia" y "Proyectos" (Sobre mí) — la ficha los deja abiertos para después.
- Artículos de Laboratorio de sueños — no hay contenido publicado; se dejó **una** tarjeta
  de ejemplo, marcada como tal, solo para validar la plantilla.
- TikTok en el footer — la ficha lo marca como "Pendiente".
- Elementos legales del footer — pendientes de contenido.

## "Creemos juntos"

La ficha define el cuestionario con sus campos exactos (los mismos que ya existen en el
formulario real de Tally: `https://tally.so/r/9q2KgQ`). En vez de duplicar ese formulario
con un componente nuevo — que arriesga desincronizarse de la lógica/condicionales que Sara
ya tiene en Tally — la página muestra el contenido real (intro + vista previa de las
preguntas) y **embebe el formulario real de Tally** en un iframe, con un link de respaldo
para abrirlo en pestaña nueva.

**Esta es una decisión de diseño, no un hecho del brief — es reversible.** Si prefieres un
formulario nativo (mismo look and feel 100% del sitio, sin iframe) puedo construirlo con
los campos exactos del documento; en ese caso hay que resolver aparte a dónde van las
respuestas (Tally vía API, un backend propio, Formspree, etc.), porque hoy no hay ningún
servicio de envío conectado.
