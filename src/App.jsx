import { useEffect, useState } from 'react'
import useTheme from './hooks/useTheme'
import Background from './components/Background.jsx'
import CustomCursor from './components/CustomCursor.jsx'
import Navbar from './components/Navbar.jsx'
import Preloader from './components/Preloader.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Skills from './sections/Skills.jsx'
import Projects from './sections/Projects.jsx'
import Experience from './sections/Experience.jsx'
import Education from './sections/Education.jsx'
import Certifications from './sections/Certifications.jsx'
import Achievements from './sections/Achievements.jsx'
import GitHubSection from './sections/GitHubSection.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'

export default function App() {
  const { theme, toggleTheme } = useTheme()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1100)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <Background />
      <CustomCursor />
      <Preloader show={loading} />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Achievements />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
