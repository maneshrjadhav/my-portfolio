import { motion } from 'framer-motion'
import { Award, CalendarDays, Hash, ExternalLink } from 'lucide-react'
import { certifications } from '../data/portfolio'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <SectionHeading
          tag="Certifications"
          title="Credentials & courses"
          subtitle="Verified credentials appear here as they are earned."
        />

        {certifications.length === 0 ? (
          <Reveal y={24} scale={0.96}>
            <div className="certs__empty glass-card">
              <motion.span
                className="certs__empty-icon"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Award size={26} />
              </motion.span>
              <p>Certifications will be added soon.</p>
            </div>
          </Reveal>
        ) : (
          <div className="certs__grid">
            {certifications.map((cert, i) => (
              <Reveal key={cert.title + i} delay={i * 0.1}>
                <motion.div className="cert-card glass-card" whileHover={{ y: -7 }}>
                  <motion.span
                    className="cert-card__icon"
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Award size={20} />
                  </motion.span>
                  <h3 className="cert-card__title">{cert.title}</h3>
                  <p className="cert-card__issuer">{cert.issuer}</p>
                  <div className="cert-card__meta">
                    <span>
                      <CalendarDays size={13} />
                      {cert.date}
                    </span>
                    {cert.credentialId && (
                      <span>
                        <Hash size={13} />
                        ID: {cert.credentialId}
                      </span>
                    )}
                  </div>
                  {cert.url && (
                    <a
                      className="btn btn--ghost btn--sm cert-card__btn"
                      href={cert.url}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <ExternalLink size={14} />
                      <span>View Certificate</span>
                    </a>
                  )}
                </motion.div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
