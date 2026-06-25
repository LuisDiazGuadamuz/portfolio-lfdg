import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { HiOutlineArrowDownTray } from 'react-icons/hi2'
import lfdgLogo from '../assets/lfdg-logo.png'

const navItems = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Sobre mí', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Contacto', href: '#contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const cvFile = '/Luis_Felipe_Diaz_Guadamuz_CV.pdf'

  return (
    <header className="sticky top-0 z-40 border-b border-[#262626] bg-[#0A0A0A]/92 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#hero" className="inline-flex items-center gap-3" aria-label="Ir al inicio">
          <img
            src={lfdgLogo}
            alt="Logo de Luis Felipe Diaz Guadamuz"
            className="h-9 w-9 rounded-lg object-contain"
          />
          <span className="font-heading text-xl font-bold tracking-[0.14em] text-[#FAFAFA]">
            LFDG
          </span>
        </a>

        <div className="hidden items-center gap-6 text-sm text-[#A3A3A3] md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-[#EAB308]">
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href={cvFile}
            download
            className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/45 bg-[#D4AF37]/10 px-4 py-2 text-sm font-semibold text-[#EAB308] transition hover:border-[#EAB308] hover:bg-[#D4AF37]/18"
            aria-label="Descargar CV de Luis Felipe Diaz Guadamuz"
          >
            <HiOutlineArrowDownTray className="text-base" />
            Descargar CV
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#262626] text-[#FAFAFA] transition hover:border-[#D4AF37]/50 hover:text-[#EAB308] md:hidden"
          aria-label="Abrir menú"
          aria-expanded={isOpen}
        >
          {isOpen ? <FiX className="text-lg" /> : <FiMenu className="text-lg" />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-[#262626] bg-[#111111] px-6 py-4 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-[#A3A3A3] transition hover:text-[#EAB308]"
              >
                {item.label}
              </a>
            ))}
            <a
              href={cvFile}
              download
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D4AF37]/45 bg-[#D4AF37]/10 px-4 py-2 text-sm font-semibold text-[#EAB308]"
              aria-label="Descargar CV de Luis Felipe Diaz Guadamuz"
            >
              <HiOutlineArrowDownTray className="text-base" />
              Descargar CV
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar