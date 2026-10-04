import { useRef, useEffect, useState } from 'react'
import { animate, useInView } from 'framer-motion'

/**
 * Counts from 0 to `target` once the returned ref scrolls into view.
 */
export default function useCountUp(target, duration = 1.6) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, target, {
      duration,
      ease: 'easeOut',
      onUpdate: (v) => setValue(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, target, duration])

  return [ref, value]
}
