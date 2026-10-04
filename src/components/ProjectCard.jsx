import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, Maximize2 } from 'lucide-react'
import ProjectVisual from './ProjectVisual.jsx'

const ProjectCard = forwardRef(function ProjectCard({ project, index, onOpenDetails }, ref) {
  return (
    <motion.article
      ref={ref}
      className="project-card glass-card"
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.09, ease: 'easeOut' }}
      whileHover={{ y: -8 }}
    >
      <div className="project-card__visual">
        <ProjectVisual project={project} />
        <span className="project-card__category">{project.category}</span>
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.shortDescription}</p>

        <div className="project-card__tech">
          {project.technologies.map((t) => (
            <span key={t} className="tech-chip">
              {t}
            </span>
          ))}
        </div>

        <div className="project-card__actions">
          <a
            className="btn btn--ghost btn--sm"
            href={project.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`View ${project.title} on GitHub`}
          >
            <Github size={15} />
            <span>GitHub</span>
          </a>
          {project.demo && (
            <a
              className="btn btn--ghost btn--sm"
              href={project.demo}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`View live demo of ${project.title}`}
            >
              <ExternalLink size={15} />
              <span>Live Demo</span>
            </a>
          )}
          <button className="btn btn--primary btn--sm" onClick={() => onOpenDetails(project)}>
            <Maximize2 size={15} />
            <span>View Details</span>
          </button>
        </div>
      </div>
    </motion.article>
  )
})

export default ProjectCard
