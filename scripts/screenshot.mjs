import { chromium } from 'playwright'
import { mkdirSync } from 'node:fs'

const BASE = 'http://127.0.0.1:5173'
const OUT = '/mnt/user-data/outputs/preview'
mkdirSync(OUT, { recursive: true })

const pages = [
  { path: '/', name: 'home' },
  { path: '/metodologia', name: 'metodologia' },
  { path: '/sobre-mi', name: 'sobre-mi' },
  { path: '/laboratorio-de-suenos', name: 'laboratorio-de-suenos' },
  { path: '/creemos-juntos', name: 'creemos-juntos' },
]

const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 390, height: 844 },
]

const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' })

for (const vp of viewports) {
  const context = await b.newContext({ viewport: { width: vp.width, height: vp.height } })
  const page = await context.newPage()
  for (const p of pages) {
    await page.goto(`${BASE}${p.path}`, { waitUntil: 'networkidle', timeout: 20000 }).catch(async () => {
      await page.goto(`${BASE}${p.path}`, { waitUntil: 'load', timeout: 20000 })
    })
    // Auto-scroll with real wheel events to trigger IntersectionObserver-based
    // reveal animations (whileInView) before capturing. window.scrollTo() from
    // page.evaluate does NOT reproduce this reliably under a stitched full-page
    // capture — verified this the hard way, so don't regress it.
    const height = await page.evaluate(() => document.body.scrollHeight)
    for (let y = 0; y < height; y += 500) {
      await page.mouse.wheel(0, 500)
      await page.waitForTimeout(180)
    }
    await page.waitForTimeout(500)
    await page.evaluate(() => window.scrollTo(0, 0))
    await page.waitForTimeout(300)
    await page.screenshot({ path: `${OUT}/${p.name}-${vp.name}.png`, fullPage: true })
    console.log(`captured ${p.name} (${vp.name})`)
  }
  await context.close()
}

await b.close()
