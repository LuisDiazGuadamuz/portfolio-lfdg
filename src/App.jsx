import Navbar from './components/Navbar'
import AboutSection from './sections/AboutSection'
import ContactSection from './sections/ContactSection'
import ExperienceSection from './sections/ExperienceSection'
import Footer from './sections/Footer'
import HeroSection from './sections/HeroSection'
import ProjectsSection from './sections/ProjectsSection'
import SkillsSection from './sections/SkillsSection'

function App() {
  return (
    <div className="relative overflow-hidden bg-[#0A0A0A] text-[#FAFAFA]">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(212,175,55,0.12),transparent_28%),radial-gradient(circle_at_84%_14%,rgba(234,179,8,0.08),transparent_24%)]" />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
