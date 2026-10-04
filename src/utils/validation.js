export function validateContactForm({ name, email, subject, message }) {
  const errors = {}

  if (!name.trim()) errors.name = 'Please enter your name.'
  else if (name.trim().length < 2) errors.name = 'Name must be at least 2 characters.'

  if (!email.trim()) errors.email = 'Please enter your email address.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim()))
    errors.email = 'Please enter a valid email address.'

  if (!subject.trim()) errors.subject = 'Please enter a subject.'
  else if (subject.trim().length < 3) errors.subject = 'Subject must be at least 3 characters.'

  if (!message.trim()) errors.message = 'Please enter your message.'
  else if (message.trim().length < 10) errors.message = 'Message must be at least 10 characters.'

  return errors
}

export function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
