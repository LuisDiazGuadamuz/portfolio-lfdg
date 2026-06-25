import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import SkillBadge from '../components/SkillBadge'
import skills from '../data/skills'

function SkillsSection() {
  return (
    <section id="skills" className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-12">
        <Reveal>
          <SectionHeading
            eyebrow="Tecnologías"
            title="Stack técnico organizado por categorías"
            description="La sección evita barras de progreso y prioriza claridad visual con chips por áreas de trabajo profesional."
          />
        </Reveal>

        <Reveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <SkillBadge key={group.category} title={group.category} items={group.items} />
          ))}
        </Reveal>
      </div>
    </section>
  )
}

export default SkillsSection