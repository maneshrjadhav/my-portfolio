import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Github, ExternalLink, CheckCircle2 } from 'lucide-react'
import ProjectVisual from './ProjectVisual.jsx'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    if (project) {
      document.addEventListener('keydown', onKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
        >
          <motion.div
            className="modal glass-card"
            initial={{ opacity: 0, y: 44, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.32, ease: [0.21, 0.47, 0.32, 0.98] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal__close" onClick={onClose} aria-label="Close project details">
              <X size={18} />
            </button>

            <div className="modal__visual">
              <ProjectVisual project={project} large />
            </div>

            <div className="modal__body">
              <span className="project-card__category project-card__category--inline">
                {project.category}
              </span>
              <h3 className="modal__title">{project.title}</h3>
              <p className="modal__desc">{project.description}</p>

              {project.highlights?.length > 0 && (
                <>
                  <h4 className="modal__sub">Key Features</h4>
                  <ul className="modal__highlights">
                    {project.highlights.map((h) => (
                      <li key={h}>
                        <CheckCircle2 size={15} className="modal__check" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <h4 className="modal__sub">Technologies</h4>
              <div className="project-card__tech">
                {project.technologies.map((t) => (
                  <span key={t} className="tech-chip">
                    {t}
                  </span>
                ))}
              </div>

              <div className="modal__actions">
                <a
                  className="btn btn--primary btn--sm"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Github size={15} />
                  <span>View on GitHub</span>
                </a>
                {project.demo && (
                  <a
                    className="btn btn--ghost btn--sm"
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <ExternalLink size={15} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
