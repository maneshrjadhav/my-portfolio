import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { FolderGit2 } from 'lucide-react'
import { journey } from '../data/portfolio'
import SectionHeading from '../components/SectionHeading.jsx'
import iconFor from '../utils/icons'

const chipVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: 'easeOut' } },
}

export default function Experience() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.75', 'end 0.55'],
  })
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 24 })

  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeading
          tag="Journey"
          title="My Development Journey"
          subtitle="Learning, building and improving through academic and real-world software projects."
        />

        <div className="timeline" ref={ref}>
          <div className="timeline__line" aria-hidden="true" />
          <motion.div
            className="timeline__line-progress"
            style={{ scaleY: lineScale }}
            aria-hidden="true"
          />
          {journey.map((item, i) => {
            const Icon = iconFor(item.icon)
            const fromLeft = i % 2 === 0
            return (
              <motion.div
                key={item.title}
                variants={{
                  hidden: { opacity: 0, x: fromLeft ? -44 : 44 },
                  show: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.65,
                      ease: [0.21, 0.47, 0.32, 0.98],
                      staggerChildren: 0.05,
                      delayChildren: 0.22,
                    },
                  },
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                <motion.div className="timeline__item" whileHover={{ x: fromLeft ? 6 : -6 }}>
                  <span className="timeline__dot timeline__dot--pulse" aria-hidden="true">
                    <Icon size={13} />
                  </span>
                  <div className="timeline__card glass-card">
                    <span className="timeline__category">
                      <Icon size={13} />
                      {item.category}
                    </span>
                    <h3 className="timeline__role">{item.title}</h3>
                    <p className="timeline__desc">{item.description}</p>

                    {item.highlights && (
                      <ul className="timeline__points">
                        {item.highlights.map((p) => (
                          <li key={p}>{p}</li>
                        ))}
                      </ul>
                    )}

                    {(item.stack || item.topics) && (
                      <div className="timeline__chips">
                        {(item.stack || item.topics).map((t) => (
                          <motion.span key={t} className="tech-chip" variants={chipVariants}>
                            {t}
                          </motion.span>
                        ))}
                      </div>
                    )}

                    {item.projects && (
                      <div className="timeline__projects">
                        {item.projects.map((p) => (
                          <span key={p} className="timeline__project">
                            <FolderGit2 size={13} />
                            {p}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
