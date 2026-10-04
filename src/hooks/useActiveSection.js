import { useEffect, useState } from 'react'
import { navLinks } from '../data/portfolio'

/**
 * Tracks which section is currently in view using IntersectionObserver.
 * Returns the id of the active section (e.g. "projects").
 */
export default function useActiveSection() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.1, 0.3, 0.5] }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return active
}
