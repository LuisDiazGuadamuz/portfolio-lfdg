import { FiCode, FiLayers, FiTarget } from 'react-icons/fi'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

const highlights = [
  {
    icon: FiCode,
    title: 'Universidad Nacional de Costa Rica',
    description: 'Formación académica en ingeniería con enfoque técnico y práctico.',
  },
  {
    icon: FiLayers,
    title: 'Ingeniería en Sistemas de Información',
    description: 'Bases sólidas para análisis, diseño y construcción de software.',
  },
  {
    icon: FiTarget,
    title: 'Desarrollo Web y Mobile',
    description: 'Construcción de soluciones modernas orientadas a experiencia de usuario.',
  },
]

function AboutSection() {
  return (
    <section id="about" className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-12">
        <Reveal>
          <SectionHeading
            eyebrow="Sobre mí"
            title="Perfil profesional"
            description="Soy Luis Felipe Díaz Guadamuz, Software Developer y estudiante de Ingeniería en Sistemas de Información. Me enfoco en construir soluciones web y móviles limpias, escalables y alineadas con objetivos reales de negocio."
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal className="rounded-[2rem] border border-[#262626] bg-[#171717] p-8">
            <div className="space-y-5 text-[#A3A3A3]">
              <p className="text-lg leading-8 text-[#FAFAFA]">
                Desarrollo aplicaciones con una visión integral entre ingeniería y diseño,
                priorizando rendimiento, mantenibilidad y claridad visual.
              </p>
              <p className="leading-8">
                Este portafolio está diseñado para mostrar proyectos y capacidades con una
                narrativa profesional, ideal para oportunidades laborales y crecimiento técnico.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon

              return (
                <Reveal
                  key={item.title}
                  delay={index * 0.08}
                  className="rounded-[1.75rem] border border-[#262626] bg-[#171717] p-6"
                >
                  <Icon className="mb-4 text-2xl text-[#D4AF37]" />
                  <h3 className="font-heading text-xl font-semibold text-[#FAFAFA]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#A3A3A3]">{item.description}</p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection