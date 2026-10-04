import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Mail, Github, Linkedin, MapPin, Phone, Loader2, CheckCircle2 } from 'lucide-react'
import { personal } from '../data/portfolio'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import { validateContactForm } from '../utils/validation'

const initialForm = { name: '', email: '', subject: '', message: '' }

const contactCards = [
  { label: 'Email', value: personal.email, href: `mailto:${personal.email}`, icon: Mail },
  { label: 'Phone', value: personal.phone, href: personal.phoneHref, icon: Phone },
  { label: 'GitHub', value: 'github.com/maneshrjadhav', href: 'https://github.com/maneshrjadhav', icon: Github },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/manesh-jadhav-a243a72ba',
    href: 'https://linkedin.com/in/manesh-jadhav-a243a72ba',
    icon: Linkedin,
  },
  { label: 'Location', value: personal.location, href: personal.mapsUrl, icon: MapPin },
]

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((err) => ({ ...err, [name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validation = validateContactForm(form)
    setErrors(validation)
    if (Object.keys(validation).length > 0) return

    setStatus('sending')
    const endpoint = import.meta.env.VITE_FORM_ENDPOINT

    try {
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(form),
        })
        if (!res.ok) throw new Error('Request failed')
      } else {
        // Frontend-ready fallback: open the visitor's mail client pre-filled
        const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
        window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(
          form.subject
        )}&body=${body}`
      }
      setStatus('sent')
      setForm(initialForm)
      setTimeout(() => setStatus('idle'), 6000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 6000)
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeading
          tag="Contact"
          title="Let's work together"
          subtitle="Have an opportunity, project or question? My inbox is always open."
        />

        <div className="contact__grid">
          <div className="contact__info">
            <div className="contact__cards">
              {contactCards.map((card, i) => {
                const Icon = card.icon
                const content = (
                  <>
                    <span className="contact__card-icon">
                      <Icon size={17} />
                    </span>
                    <div>
                      <span className="contact__card-label">{card.label}</span>
                      <span className="contact__card-value">{card.value}</span>
                    </div>
                  </>
                )
                return (
                  <motion.div
                    key={card.label}
                    className="contact__card glass-card"
                    whileHover={{ x: 6 }}
                    initial={{ opacity: 0, x: -28 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.55 }}
                  >
                    <a href={card.href} target={card.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer noopener" className="contact__card-body">
                      {content}
                    </a>
                  </motion.div>
                )
              })}
            </div>
          </div>

          <Reveal delay={0.15} x={36} y={0}>
            <form className="contact__form glass-card" onSubmit={handleSubmit} noValidate>
              <div className="contact__row">
                <div className="contact__field">
                  <label htmlFor="contact-name">Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    aria-invalid={!!errors.name}
                    autoComplete="name"
                  />
                  {errors.name && <span className="contact__error">{errors.name}</span>}
                </div>
                <div className="contact__field">
                  <label htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={form.email}
                    onChange={handleChange}
                    aria-invalid={!!errors.email}
                    autoComplete="email"
                  />
                  {errors.email && <span className="contact__error">{errors.email}</span>}
                </div>
              </div>

              <div className="contact__field">
                <label htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="What is this about?"
                  value={form.subject}
                  onChange={handleChange}
                  aria-invalid={!!errors.subject}
                />
                {errors.subject && <span className="contact__error">{errors.subject}</span>}
              </div>

              <div className="contact__field">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project or opportunity…"
                  value={form.message}
                  onChange={handleChange}
                  aria-invalid={!!errors.message}
                />
                {errors.message && <span className="contact__error">{errors.message}</span>}
              </div>

              <motion.button
                className="btn btn--primary contact__submit"
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 size={16} className="spin" />
                    <span>Sending…</span>
                  </>
                ) : (
                  <>
                    <Send size={16} className="contact__plane" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              <AnimatePresence>
                {status === 'sent' && (
                  <motion.p
                    className="contact__status contact__status--ok"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.span
                      initial={{ scale: 0, rotate: -90 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 16 }}
                      className="contact__status-icon"
                    >
                      <CheckCircle2 size={16} />
                    </motion.span>
                    Message ready — thank you!
                  </motion.p>
                )}
                {status === 'error' && (
                  <motion.p
                    className="contact__status contact__status--err"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    Something went wrong. Please email me directly at {personal.email}.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
