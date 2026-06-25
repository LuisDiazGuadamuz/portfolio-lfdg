import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import experience from '../data/experience'

function ExperienceSection() {
  return (
    <section id="experience" className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-12">
        <Reveal>
          <SectionHeading
            eyebrow="Experiencia / Formación"
            title="Trayectoria académica y especialización"
            description="Timeline limpio para mostrar formación relevante y proceso de crecimiento profesional."
          />
        </Reveal>

        <div className="relative space-y-8 pl-6 before:absolute before:bottom-2 before:left-2 before:top-2 before:w-px before:bg-[#262626]">
          {experience.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08} className="relative">
              <span className="absolute -left-[1.72rem] top-8 h-3 w-3 rounded-full bg-[#D4AF37] shadow-[0_0_0_6px_rgba(212,175,55,0.14)]" />
              <article className="rounded-2xl border border-[#262626] bg-[#171717] p-6 transition hover:border-[#D4AF37]/45">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="font-heading text-xl font-semibold text-[#FAFAFA]">{item.title}</p>
                  <span className="rounded-full border border-[#D4AF37]/45 bg-[#D4AF37]/10 px-3 py-1 text-xs font-semibold text-[#EAB308]">
                    {item.period}
                  </span>
                </div>
                <p className="mt-3 text-[#A3A3A3]">{item.institution}</p>
                <p className="mt-2 text-sm text-[#A3A3A3]">{item.type}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
