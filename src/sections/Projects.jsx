import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { projects, projectCategories } from '../data/portfolio'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import ProjectModal from '../components/ProjectModal.jsx'

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [selected, setSelected] = useState(null)

  const visible =
    filter === 'All'
      ? projects
      : projects.filter((p) => (p.categories || [p.category]).includes(filter))

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading
          tag="Projects"
          title="Things I've Built"
          subtitle="Academic, personal and hackathon projects across web, mobile and AI/ML."
        />

        <Reveal>
          <div className="projects__filters" role="group" aria-label="Filter projects by category">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${filter === cat ? 'filter-btn--active' : ''}`}
                onClick={() => setFilter(cat)}
                aria-pressed={filter === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div className="projects__grid" layout>
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onOpenDetails={setSelected}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {visible.length === 0 && (
          <p className="projects__empty">No projects in this category yet.</p>
        )}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
