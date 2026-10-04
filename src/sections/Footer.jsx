import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { personal, socials, navLinks } from '../data/portfolio'
import { scrollToSection } from '../utils/validation'
import iconFor from '../utils/icons'

export default function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="navbar__logo-mark">{personal.logo}</span>
          <div>
            <p className="footer__name">{personal.name}</p>
            <p className="footer__tagline">{personal.subheadline}</p>
          </div>
        </div>

        <nav className="footer__links" aria-label="Footer navigation">
          {navLinks.map((l) => (
            <button key={l.id} onClick={() => scrollToSection(l.id)}>
              {l.label}
            </button>
          ))}
        </nav>

        <div className="footer__socials">
          {socials.map((s) => {
            const Icon = iconFor(s.icon)
            return (
              <a
                key={s.label}
                className="social-icon tooltip"
                data-tip={s.label}
                href={s.url}
                target={s.url.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer noopener"
                aria-label={s.label}
              >
                <Icon size={16} />
              </a>
            )
          })}
        </div>
      </div>

      <div className="footer__bottom">
        <p>
          Designed &amp; Built by {personal.name}{' '}
          <Heart size={12} className="footer__heart" aria-hidden="true" />
        </p>
        <p>© 2026 {personal.name}. All rights reserved.</p>
      </div>
    </motion.footer>
  )
}
