import { motion } from 'framer-motion'

/**
 * Scroll-reveal wrapper. Fades + slides children into view once.
 * delay: seconds | x/y: offsets in px
 */
export default function Reveal({ children, delay = 0, x = 0, y = 32, scale = 1, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y, scale }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  )
}
