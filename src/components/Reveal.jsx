import { motion } from 'framer-motion'

/**
 * Envoltorio de fade-in + leve desplazamiento al entrar en viewport.
 * Microinteracción "orgánica y editorial" pedida en el brief — sutil,
 * una sola vez por elemento (no se repite en cada scroll).
 */
export default function Reveal({ children, delay = 0, y = 24, className = '', as = 'div' }) {
  const Comp = motion[as] ?? motion.div
  return (
    <Comp
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </Comp>
  )
}
