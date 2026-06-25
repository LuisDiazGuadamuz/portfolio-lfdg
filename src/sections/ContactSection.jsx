import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

const contactLinks = [
  {
    label: 'Correo',
    href: 'mailto:luis.diaz.guadamuz@gmail.com',
    value: 'luis.diaz.guadamuz@gmail.com',
    icon: FiMail,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/LuisDiazGuadamuz',
    value: 'Perfil GitHub',
    icon: FiGithub,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/luis-felipe-diaz-guadamuz-750701405/',
    value: 'Perfil LinkedIn',
    icon: FiLinkedin,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/50683346119',
    value: 'WhatsApp profesional',
    icon: FaWhatsapp,
  },
]

function ContactSection() {
  return (
    <section id="contact" className="px-6 py-20 lg:px-8">
      <Reveal className="mx-auto max-w-6xl rounded-[2rem] border border-[#262626] bg-[#111111] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.5)] sm:p-10 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-center">
          <SectionHeading
            eyebrow="Contacto"
            title="Conversemos sobre oportunidades y colaboración"
            description="Canales de contacto preparados para mantener una presentación seria y profesional sin exponer información sensible innecesaria."
          />

          <div className="space-y-4">
            {contactLinks.map((item) => {
              const Icon = item.icon

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={item.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className="flex items-center justify-between rounded-2xl border border-[#262626] bg-[#171717] px-5 py-4 text-[#FAFAFA] transition hover:border-[#D4AF37]/45 hover:text-[#EAB308]"
                >
                  <span className="inline-flex items-center gap-3 font-medium">
                    <Icon className="text-2xl text-[#D4AF37]" />
                    <span>
                      <strong className="block text-sm">{item.label}</strong>
                      <span className="text-xs text-[#A3A3A3]">{item.value}</span>
                    </span>
                  </span>
                  <span className="text-sm text-[#A3A3A3]">Abrir</span>
                </a>
              )
            })}
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default ContactSection