import { motion } from 'framer-motion'
import { FiArrowRight, FiGithub, FiLinkedin } from 'react-icons/fi'
import { HiOutlineArrowDownTray } from 'react-icons/hi2'
import lfdgLogo from '../assets/lfdg-logo.png'

function HeroSection() {
  const cvFile = '/Luis_Felipe_Diaz_Guadamuz_CV.pdf'
  const socialButtonClass =
    'inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-[#D4AF37]/45 bg-transparent px-4 py-2 text-xs font-semibold text-[#EAB308] transition hover:border-[#EAB308] hover:bg-[#D4AF37] hover:text-[#0A0A0A] sm:text-sm'

  return (
    <section id="hero" className="px-6 pb-20 pt-16 sm:pb-24 sm:pt-20 lg:px-8 lg:pt-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-8"
        >
          <div className="space-y-5">
            <span className="inline-flex rounded-full border border-[#D4AF37]/35 bg-[#D4AF37]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#EAB308]">
              Disponible para nuevas oportunidades
            </span>
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-[#A3A3A3]">
                Portafolio profesional
              </p>
              <h1 className="max-w-3xl font-heading text-4xl font-semibold leading-tight tracking-tight text-[#FAFAFA] sm:text-5xl lg:text-6xl">
                Hola, soy Luis Felipe Díaz
              </h1>
              <h2 className="font-heading text-xl font-medium text-[#D4AF37] sm:text-2xl">
                Software Developer & Systems Engineering Student
              </h2>
              <p className="max-w-2xl text-base leading-8 text-[#A3A3A3] sm:text-lg">
                Desarrollo aplicaciones web, móviles y soluciones de software utilizando
                tecnologías modernas.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D4AF37]/45 bg-[#D4AF37]/12 px-6 py-3 text-sm font-semibold text-[#EAB308] transition hover:border-[#EAB308] hover:bg-[#D4AF37]/20"
            >
              Ver proyectos
              <FiArrowRight />
            </a>
            <a
              href={cvFile}
              download
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#262626] px-6 py-3 text-sm font-semibold text-[#FAFAFA] transition hover:border-[#D4AF37]/45 hover:text-[#EAB308]"
              aria-label="Descargar CV de Luis Felipe Diaz Guadamuz"
            >
              <HiOutlineArrowDownTray />
              Descargar CV
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#"
              className={socialButtonClass}
              aria-label="Perfil de GitHub (pendiente de configurar)"
            >
              <FiGithub />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/luis-felipe-diaz-guadamuz-750701405/"
              target="_blank"
              rel="noopener noreferrer"
              className={socialButtonClass}
              aria-label="Abrir perfil de LinkedIn de Luis Felipe Diaz Guadamuz"
            >
              <FiLinkedin />
              LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -inset-3 rounded-[2rem] bg-[#D4AF37]/12 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-[#262626] bg-[#111111] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.58)]">
            <div className="relative flex min-h-[340px] items-center justify-center rounded-[1.5rem] border border-[#262626] bg-[#171717] p-6">
              <img
                src={lfdgLogo}
                alt="Logo oficial LFDG de Luis Felipe Diaz Guadamuz"
                className="h-auto w-full max-w-[320px] object-contain"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection