import { motion } from 'framer-motion'
import { achievements, coreAreas } from '../data/portfolio'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import useCountUp from '../hooks/useCountUp'
import iconFor from '../utils/icons'

const areaChipVariants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

function StatCard({ stat, index }) {
  const [ref, value] = useCountUp(stat.value)
  const Icon = iconFor(stat.icon)

  return (
    <Reveal delay={index * 0.1}>
      <motion.div className="stat-card glass-card" ref={ref} whileHover={{ y: -6, scale: 1.02 }}>
        <span className="stat-card__icon">
          <Icon size={22} />
        </span>
        <span className="stat-card__value gradient-text">
          {value}
          {stat.suffix}
        </span>
        <span className="stat-card__label">{stat.label}</span>
      </motion.div>
    </Reveal>
  )
}

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <SectionHeading
          tag="Achievements"
          title="By the numbers"
          subtitle="A snapshot of my work, learning and focus areas."
        />
        <div className="stats__grid">
          {achievements.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>

        <motion.div
          className="stats__areas"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <span className="stats__areas-label">Core Development Areas</span>
          <div className="stats__areas-chips">
            {coreAreas.map((area) => (
              <motion.span key={area} className="tech-chip tech-chip--accent" variants={areaChipVariants}>
                {area}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
