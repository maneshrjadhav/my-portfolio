import { motion } from 'framer-motion'
import { about, personal } from '../data/portfolio'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import TiltCard from '../components/TiltCard.jsx'
import iconFor from '../utils/icons'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading tag="About Me" title={about.title} />

        <div className="about__grid">
          <Reveal y={26} scale={0.94} className="about__visual-col">
            <TiltCard className="about__tilt" max={5}>
              <div className="about__frame">
                <div className="about__image-frame glass-card">
                  <div className="about__image">
                    <img
                      src={personal.avatar}
                      alt={`${personal.name}, software developer`}
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.parentElement.classList.add('about__image--placeholder')
                      }}
                    />
                    <span className="about__image-initials" aria-hidden="true">
                      {personal.logo}
                    </span>
                  </div>
                  <div className="about__image-badge">
                    <span className="about__badge-dot" />
                    <span>Aspiring Software Developer</span>
                  </div>
                </div>
              </div>
            </TiltCard>
          </Reveal>

          <div className="about__content">
            <Reveal x={48} y={0} delay={0.08}>
              <p className="about__bio">{about.bio}</p>
            </Reveal>

            <div className="about__cards">
              {about.cards.map((card, i) => {
                const Icon = iconFor(card.icon)
                return (
                  <Reveal key={card.label} delay={0.16 + i * 0.08}>
                    <TiltCard className="about__card glass-card">
                      <span className="about__card-icon">
                        <Icon size={18} />
                      </span>
                      <div>
                        <span className="about__card-label">{card.label}</span>
                        <span className="about__card-value">{card.value}</span>
                      </div>
                    </TiltCard>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
