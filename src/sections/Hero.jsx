import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowDown, Download, Mail, MapPin } from 'lucide-react'
import { personal, socials } from '../data/portfolio'
import HeroScene from '../components/HeroScene.jsx'
import Magnetic from '../components/Magnetic.jsx'
import { scrollToSection } from '../utils/validation'
import iconFor from '../utils/icons'

const FLOATING_SYMBOLS = [
  { text: '{ }', top: '12%', left: '6%', delay: 0 },
  { text: '</>', top: '26%', left: '86%', delay: 1.2 },
  { text: 'AI', top: '68%', left: '4%', delay: 2.1 },
  { text: 'JS', top: '82%', left: '78%', delay: 0.7 },
  { text: 'Py', top: '6%', left: '58%', delay: 1.7 },
  { text: '⚛', top: '52%', left: '92%', delay: 2.6 },
]

function RoleCycler({ roles }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2400)
    return () => clearInterval(id)
  }, [roles.length])

  return (
    <span className="hero__role" aria-live="polite">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          className="hero__role-text"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -24 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
      <motion.span
        className="hero__caret"
        animate={{ opacity: [1, 0.1] }}
        transition={{ duration: 0.7, repeat: Infinity, repeatType: 'reverse' }}
      />
    </span>
  )
}

export default function Hero() {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 1.15 } },
  }
  const item = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] } },
  }

  return (
    <section id="home" className="hero section">
      <div className="container hero__inner">
        <motion.div className="hero__content" variants={container} initial="hidden" animate="show">
          <motion.div className="hero__badge" variants={item}>
            <span className="hero__badge-dot" />
            {personal.badge}
          </motion.div>

          <motion.h1 className="hero__title" variants={item}>
            Hi, I&apos;m <span className="gradient-text hero__name">Manesh Jadhav</span>
          </motion.h1>

          <motion.p className="hero__subtitle" variants={item}>
            {personal.subheadline}
          </motion.p>

          <motion.p className="hero__role-line" variants={item}>
            <RoleCycler roles={personal.roles} />
          </motion.p>

          <motion.p className="hero__desc" variants={item}>
            {personal.heroDescription}
          </motion.p>

          <motion.div className="hero__actions" variants={item}>
            <Magnetic>
              <button className="btn btn--primary" onClick={() => scrollToSection('projects')}>
                <span>View My Projects</span>
                <ArrowRight size={16} className="btn__arrow" />
              </button>
            </Magnetic>
            <Magnetic>
              <a className="btn btn--ghost" href={personal.resumeUrl} download>
                <Download size={16} />
                <span>Download Resume</span>
              </a>
            </Magnetic>
            <Magnetic>
              <button className="btn btn--ghost" onClick={() => scrollToSection('contact')}>
                <Mail size={16} />
                <span>Contact Me</span>
                <ArrowRight size={15} className="btn__arrow" />
              </button>
            </Magnetic>
          </motion.div>

          <motion.div className="hero__meta" variants={item}>
            <span className="hero__location">
              <MapPin size={14} />
              {personal.location}
            </span>
            <div className="hero__socials">
              {socials.map((s, i) => {
                const Icon = iconFor(s.icon)
                return (
                  <motion.a
                    key={s.label}
                    className="social-icon tooltip"
                    data-tip={s.label}
                    href={s.url}
                    target={s.url.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer noopener"
                    aria-label={s.label}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.9 + i * 0.09 }}
                  >
                    <Icon size={17} />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 1.45, ease: 'easeOut' }}
        >
          <div className="hero__aura" aria-hidden="true" />
          <HeroScene />
          {FLOATING_SYMBOLS.map((s) => (
            <span
              key={s.text}
              className="hero__symbol"
              style={{ top: s.top, left: s.left, animationDelay: `${s.delay}s` }}
              aria-hidden="true"
            >
              {s.text}
            </span>
          ))}
        </motion.div>
      </div>

      <motion.button
        className="hero__scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        onClick={() => scrollToSection('about')}
        aria-label="Scroll to About section"
      >
        <motion.span
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.9, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={15} />
        </motion.span>
        <span className="hero__scroll-line" />
      </motion.button>
    </section>
  )
}
