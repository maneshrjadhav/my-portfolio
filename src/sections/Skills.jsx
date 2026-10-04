import { useState, forwardRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { skillCategories } from '../data/portfolio'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import iconFor from '../utils/icons'

function tierFor(level) {
  if (level >= 75) return 'Proficient'
  if (level >= 55) return 'Comfortable'
  return 'Familiar'
}

const SkillCard = forwardRef(function SkillCard({ skill, index }, ref) {
  const Icon = iconFor(skill.icon)
  const dots = Math.round(skill.level / 20)

  return (
    <motion.div
      ref={ref}
      className="skill-card glass-card tooltip"
      data-tip={`${skill.level}% — ${tierFor(skill.level)}`}
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -14, scale: 0.96 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
    >
      <span className="skill-card__icon">
        <Icon size={19} />
      </span>
      <span className="skill-card__name">{skill.name}</span>
      <span className="skill-card__dots" aria-hidden="true">
        {[1, 2, 3, 4, 5].map((d) => (
          <i key={d} className={d <= dots ? 'is-on' : ''} />
        ))}
      </span>
      <span className="skill-card__tier">{tierFor(skill.level)}</span>
    </motion.div>
  )
})

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0)
  const category = skillCategories[activeTab]
  const CategoryIcon = iconFor(category.icon)

  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading
          tag="Skills"
          title="Technologies I work with"
          subtitle="A realistic snapshot of my current toolkit — always growing."
        />

        <Reveal>
          <div className="skills__tabs" role="tablist" aria-label="Skill categories">
            {skillCategories.map((cat, i) => {
              const Icon = iconFor(cat.icon)
              return (
                <button
                  key={cat.title}
                  role="tab"
                  aria-selected={i === activeTab}
                  className={`skills__tab ${i === activeTab ? 'skills__tab--active' : ''}`}
                  onClick={() => setActiveTab(i)}
                >
                  <Icon size={15} />
                  <span>{cat.title}</span>
                </button>
              )
            })}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="skills__panel-head">
            <span className="skills__panel-icon">
              <CategoryIcon size={18} />
            </span>
            <h3>{category.title}</h3>
            <span className="skills__panel-count">{category.skills.length} technologies</span>
          </div>
          <div className="skills__grid">
            <AnimatePresence mode="popLayout">
              {category.skills.map((skill, i) => (
                <SkillCard key={`${category.title}-${skill.name}`} skill={skill} index={i} />
              ))}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
