import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Download } from 'lucide-react'
import { navLinks, personal } from '../data/portfolio'
import useActiveSection from '../hooks/useActiveSection'
import { scrollToSection } from '../utils/validation'
import Magnetic from './Magnetic.jsx'

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => window.innerWidth > 960 && setOpen(false)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleNav = (id) => {
    setOpen(false)
    setTimeout(() => scrollToSection(id), 60)
  }

  return (
    <motion.header
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 1.05 }}
    >
      <nav className="navbar__inner container" aria-label="Main navigation">
        <button className="navbar__logo" onClick={() => handleNav('home')} aria-label="Go to home section">
          <span className="navbar__logo-mark">{personal.logo}</span>
          <span className="navbar__logo-text">{personal.name}</span>
        </button>

        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                className={`navbar__link ${active === link.id ? 'navbar__link--active' : ''}`}
                onClick={() => handleNav(link.id)}
              >
                {link.label}
                {active === link.id && (
                  <motion.span
                    className="navbar__underline"
                    layoutId="nav-underline"
                    transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                className="theme-toggle__icon"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
              </motion.span>
            </AnimatePresence>
          </button>

          <Magnetic strength={0.25} className="navbar__resume-wrap">
            <a className="btn btn--primary btn--sm navbar__resume" href={personal.resumeUrl} download>
              <Download size={15} />
              <span>Resume</span>
            </a>
          </Magnetic>

          <button
            className={`navbar__burger ${open ? 'navbar__burger--open' : ''}`}
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
          >
            <ul className="navbar__mobile-links">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.04 }}
                >
                  <button
                    className={`navbar__mobile-link ${active === link.id ? 'navbar__mobile-link--active' : ''}`}
                    onClick={() => handleNav(link.id)}
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
            <a className="btn btn--primary navbar__mobile-resume" href={personal.resumeUrl} download>
              <Download size={15} />
              <span>Download Resume</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
