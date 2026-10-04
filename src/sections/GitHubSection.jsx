import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Github, ArrowUpRight, BookMarked } from 'lucide-react'
import { github } from '../data/portfolio'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'

// Deterministic pseudo-random contribution pattern (decorative only).
function useContributionCells(weeks = 26) {
  return useMemo(() => {
    const out = []
    let seed = 42
    const rand = () => {
      seed = (seed * 16807) % 2147483647
      return seed / 2147483647
    }
    for (let w = 0; w < weeks; w++) {
      const col = []
      for (let d = 0; d < 7; d++) {
        const r = rand()
        col.push(r > 0.75 ? (r > 0.94 ? 4 : r > 0.88 ? 3 : r > 0.82 ? 2 : 1) : 0)
      }
      out.push(col)
    }
    return out
  }, [weeks])
}

function ContributionGrid() {
  const cells = useContributionCells()

  return (
    <div className="contrib" role="img" aria-label="Decorative contribution-style activity grid">
      {cells.map((col, w) => (
        <div key={w} className="contrib__col">
          {col.map((level, d) => (
            <motion.span
              key={d}
              className={`contrib__cell contrib__cell--${level}`}
              initial={{ opacity: 0, scale: 0.4 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.3, delay: w * 0.022 + d * 0.012 }}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default function GitHubSection() {
  return (
    <section id="github" className="section">
      <div className="container">
        <SectionHeading tag="GitHub" title="Code & activity" />

        <div className="github__grid">
          <Reveal x={-36} y={0} className="github__left">
            <div className="github__profile glass-card">
              <span className="github__avatar">
                <Github size={26} />
              </span>
              <div>
                <h3 className="github__username">@{github.username}</h3>
                <p className="github__hint">Building in public — web, mobile &amp; AI/ML projects</p>
              </div>
              <a
                className="btn btn--primary btn--sm github__btn"
                href={github.profileUrl}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Github size={15} />
                <span>GitHub Profile</span>
                <ArrowUpRight size={14} />
              </a>
            </div>

            <div className="github__contrib glass-card">
              <h4 className="github__contrib-title">
                <BookMarked size={15} />
                Contribution Activity
              </h4>
              <ContributionGrid />
              <div className="github__contrib-legend">
                <span>Less</span>
                {[0, 1, 2, 3, 4].map((l) => (
                  <span key={l} className={`contrib__cell contrib__cell--${l}`} />
                ))}
                <span>More</span>
              </div>
            </div>

            <div className="github__tech">
              {github.codingTech.map((t, i) => (
                <motion.span
                  key={t}
                  className="tech-chip"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  whileHover={{ y: -3 }}
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </Reveal>

          <div className="github__repos">
            {github.repos.map((repo, i) => (
              <Reveal key={repo.slug} delay={0.1 + i * 0.1} x={36} y={0}>
                <motion.a
                  className="repo-card glass-card"
                  href={repo.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  whileHover={{ y: -6 }}
                >
                  <div className="repo-card__head">
                    <Github size={16} />
                    <h4>{repo.name}</h4>
                    <ArrowUpRight size={15} className="repo-card__arrow" />
                  </div>
                  <p className="repo-card__desc">{repo.description}</p>
                  <div className="repo-card__foot">
                    <div className="repo-card__tech">
                      {repo.tech.map((t) => (
                        <span key={t} className="tech-chip tech-chip--sm">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
