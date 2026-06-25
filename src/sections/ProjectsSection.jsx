import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import projects from '../data/projects'

function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-12">
        <Reveal>
          <SectionHeading
            eyebrow="Proyectos destacados"
            title="Implementaciones con foco en calidad técnica y diseño"
            description="Tarjetas pensadas para comunicar tipo de proyecto, stack y propuesta de valor de forma rápida y profesional."
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection