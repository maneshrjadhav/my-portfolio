import { useEffect, useRef, useState } from 'react'

/**
 * Subtle desktop-only cursor effect: a soft cyan glow that trails the
 * pointer plus a small ring that reacts to interactive elements.
 * The native cursor stays visible for usability.
 */
export default function CustomCursor() {
  const [enabled] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
  const glowRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    if (!enabled) return
    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let gx = x
    let gy = y
    let raf = 0

    const onMove = (e) => {
      x = e.clientX
      y = e.clientY
      if (ringRef.current) ringRef.current.style.transform = `translate(${x}px, ${y}px)`
      const interactive = e.target.closest('a, button, input, textarea, [role="button"]')
      document.documentElement.classList.toggle('cursor-hover', !!interactive)
    }

    const loop = () => {
      gx += (x - gx) * 0.11
      gy += (y - gy) * 0.11
      if (glowRef.current) glowRef.current.style.transform = `translate(${gx}px, ${gy}px)`
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    raf = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      document.documentElement.classList.remove('cursor-hover')
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <>
      <div ref={glowRef} className="cursor-glow" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true">
        <span />
      </div>
    </>
  )
}
