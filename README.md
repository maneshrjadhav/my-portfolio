# Manesh Jadhav — Portfolio

A premium personal portfolio built with **React + Vite**, **Framer Motion**, **Three.js** and **Lucide React** — styled with a deep-navy + electric-cyan + emerald design system (glassmorphism, ambient grid/blobs/particles, custom cursor). Designed for job applications, internships, freelancing, hackathons and professional profiles.

> WHO I AM → WHAT I KNOW → WHAT I BUILT → WHAT I CAN DO → HOW TO CONTACT ME

---

## Features

- **Premium design** — navy/cyan/emerald theme, glassmorphism, soft gradients, glowing borders, ambient background (animated grid, gradient blobs, floating particles, noise), micro-interactions
- **Dark / Light mode** — persisted in `localStorage`; dark = navy/cyan/emerald, light = white/slate/cyan
- **Cinematic 3D hero** — wireframe sphere with pulsing core, orbiting node network + particles, mouse parallax (Three.js / react-three-fiber), floating code symbols
- **Animated hero text** — gradient name, rotating roles ("Software Developer", "Full Stack Developer", …), magnetic buttons, scroll indicator
- **Custom cursor** — desktop-only cursor-follow glow (disabled on touch / reduced-motion)
- **Glass navbar** — shrinks + blurs on scroll, animated active-section underline (IntersectionObserver), morphing hamburger + mobile drawer
- **Interactive skills** — category tabs, animated skill cards with level dots + tilt/glow hover, honest skill levels
- **Project showcase** — category filtering (multi-category), generated UI-mockup visuals per project, animated cards, detail modal (Esc / backdrop close), GitHub & demo links
- **Development Journey timeline** — AI/ML, full-stack web, mobile and continuous-learning milestones; progressive line draw, pulsing nodes, alternating slides (no fake employers or dates)
- **Education timeline** — connected SSC → Diploma → B.Tech academic path with scores and status
- **Certifications** — clean empty state until verified certificates are added (never fake credentials)
- **Animated stats** — count-up numbers triggered on scroll, plus core development areas
- **GitHub section** — @maneshrjadhav profile link, repository cards, animated contribution-style activity grid
- **Contact form** — full client-side validation, optional Formspree-style endpoint, mailto fallback; clickable email / phone / GitHub / LinkedIn / location cards
- **Page loading animation**, staggered scroll-reveal animations, smooth section transitions, scroll-to-top button
- **Fully responsive** — desktop, tablet and mobile layouts (no horizontal scroll)
- **Accessible** — keyboard navigation, focus-visible outlines, ARIA labels, `prefers-reduced-motion` support
- **SEO-friendly** — meta description, Open Graph tags, semantic HTML

## Tech Stack

| Layer      | Technology                                    |
| ---------- | --------------------------------------------- |
| Framework  | React 18 + Vite 5                             |
| Language   | JavaScript (ESM)                              |
| Animation  | Framer Motion                                 |
| 3D         | Three.js via `@react-three/fiber` + `drei`    |
| Icons      | Lucide React                                  |
| Styling    | CSS3 (custom properties, glassmorphism, grid) |

## Project Structure

```
├── index.html               # HTML shell + SEO metadata
├── public/
│   ├── favicon.svg
│   ├── resume.pdf           # ← replace with your real resume
│   └── images/              # ← add images/profile.jpg (optional)
└── src/
    ├── main.jsx             # React entry point
    ├── App.jsx              # App shell: theme, preloader, layout
    ├── data/
    │   └── portfolio.js     # ★ ALL editable content lives here
    ├── hooks/
    │   ├── useTheme.js          # dark/light mode + persistence
    │   ├── useActiveSection.js  # navbar active-link detection
    │   └── useCountUp.js        # animated statistics counters
    ├── utils/
    │   ├── icons.js         # icon-name → lucide component map
    │   └── validation.js    # contact form validation + smooth scroll
    ├── components/
    │   ├── Navbar.jsx       # glass nav, theme toggle, mobile menu
    │   ├── Preloader.jsx    # page loading animation
    │   ├── Background.jsx   # ambient grid / blobs / particles / noise
    │   ├── CustomCursor.jsx # desktop-only cursor-follow glow
    │   ├── Magnetic.jsx     # magnetic hover wrapper for buttons
    │   ├── TiltCard.jsx     # 3D tilt hover wrapper
    │   ├── HeroScene.jsx    # Three.js hero (sphere, nodes, particles)
    │   ├── ProjectVisual.jsx# generated per-project UI mockups
    │   ├── SectionHeading.jsx
    │   ├── Reveal.jsx       # scroll-reveal wrapper
    │   ├── ProjectCard.jsx
    │   ├── ProjectModal.jsx
    │   └── ScrollToTop.jsx
    ├── sections/
    │   ├── Hero.jsx  About.jsx  Skills.jsx  Projects.jsx
    │   ├── Experience.jsx  Education.jsx  Certifications.jsx
    │   ├── Achievements.jsx  GitHubSection.jsx  Contact.jsx  Footer.jsx
    └── styles/
        └── index.css        # design system, themes, responsive rules
```

## Customizing Your Portfolio

**Everything editable is in one file: `src/data/portfolio.js`**

- `personal` — name, headline, roles, email, location, resume URL, avatar path
- `about` — biography, career goal, info cards
- `skillCategories` — skill groups, levels (0–100) and icons
- `projects` — title, description, technologies, links, gradient, `category` (primary badge) + `categories` (filter membership)
- `journey`, `education`, `certifications`, `achievements`, `coreAreas`
- `github` — username, featured repositories, coding technologies
- `socials`, `navLinks`

Other personalization:

1. **Photo** — drop your image at `public/images/profile.jpg` (a monogram placeholder shows until then).
2. **Resume** — replace `public/resume.pdf`.
3. **GitHub username / socials** — update `socials`, `github` and the contact cards.
4. **Icons** — icon names in the data file map to Lucide icons via `src/utils/icons.js`; add new names there if needed.

### Environment variables (optional)

Copy `.env.example` to `.env` and fill in what you need:

```bash
cp .env.example .env
```

| Variable               | Purpose                                                        |
| ---------------------- | -------------------------------------------------------------- |
| `VITE_FORM_ENDPOINT`   | Formspree/Web3Forms endpoint. If empty, the form uses mailto:. |
| `VITE_RESUME_URL`      | Remote resume URL. If empty, `/resume.pdf` is used.            |
| `VITE_GITHUB_USERNAME` | Username shown in the GitHub section.                          |

## Installation

Requires **Node.js 18+**.

```bash
npm install
```

## Development

```bash
npm run dev        # start dev server at http://localhost:5173
```

## Build

```bash
npm run build      # production build → dist/
npm run preview    # preview the production build locally
```

## Deployment

### Vercel

```bash
npm i -g vercel
vercel             # framework preset: Vite (auto-detected)
```

### Netlify

```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

Build command: `npm run build` · Publish directory: `dist`

### GitHub Pages

1. `npm install -D gh-pages`
2. Set `base: '/<repo-name>/'` in `vite.config.js`
3. `npx gh-pages -d dist`

Any static host works — the site is a fully static bundle.

## Browser Support

Modern evergreen browsers (Chrome, Edge, Firefox, Safari). `prefers-reduced-motion` is respected.

## License

© 2026 Manesh Jadhav. Free to use as a template for your own portfolio.
