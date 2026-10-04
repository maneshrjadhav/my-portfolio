import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { BadgeCheck, BookOpen, Award } from 'lucide-react'
import { education } from '../data/portfolio'
import SectionHeading from '../components/SectionHeading.jsx'
import iconFor from '../utils/icons'

// One in-view trigger per step; node, card and chips inherit the variant state.
const nodeVariants = {
  hidden: { scale: 0, rotate: -90 },
  show: { scale: 1, rotate: 0, transition: { type: 'spring', stiffness: 260, damping: 18 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut', staggerChildren: 0.05, delayChildren: 0.18 },
  },
}

const chipVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.32, ease: 'easeOut' } },
}

export default function Education() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.6'],
  })
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 24 })

  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHeading
          tag="Education"
          title="Academic Journey"
          subtitle="A connected path from secondary school to computer engineering."
        />

        <div className="edu-timeline" ref={ref}>
          <div className="edu-timeline__line" aria-hidden="true" />
          <motion.div
            className="edu-timeline__line-progress"
            style={{ scaleY: lineScale }}
            aria-hidden="true"
          />

          {education.map((edu, i) => {
            const Icon = iconFor(edu.icon)
            const fromLeft = i % 2 === 0
            return (
              <motion.div
                key={edu.degree}
                className="edu-step"
                variants={{
                  hidden: { opacity: 0, x: fromLeft ? -36 : 36 },
                  show: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.6,
                      ease: [0.21, 0.47, 0.32, 0.98],
                      staggerChildren: 0.1,
                      delayChildren: 0.1,
                    },
                  },
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="edu-node" aria-hidden="true">
                  <motion.span className="edu-node__icon" variants={nodeVariants}>
                    <Icon size={16} />
                  </motion.span>
                </div>
                <motion.div
                  className="education__card glass-card"
                  variants={cardVariants}
                  whileHover={{ y: -6 }}
                >
                  <div className="education__head">
                    <div>
                      <h3 className="education__degree">{edu.degree}</h3>
                      {edu.institution && (
                        <p className="education__institution">{edu.institution}</p>
                      )}
                    </div>
                    <div className="education__meta">
                      <span className="education__score">
                        <Award size={13} />
                        {edu.score}
                      </span>
                      <span className="education__status">
                        <BadgeCheck size={13} />
                        {edu.status}
                      </span>
                    </div>
                  </div>

                  {edu.coursework && (
                    <div className="education__coursework">
                      <h4 className="education__coursework-title">
                        <BookOpen size={15} />
                        Relevant Coursework
                      </h4>
                      <div className="education__coursework-list">
                        {edu.coursework.map((course) => (
                          <motion.span key={course} className="tech-chip" variants={chipVariants}>
                            {course}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
