import { useEffect, useState } from 'react'
import { FiArrowUpRight, FiGithub, FiMaximize2, FiX } from 'react-icons/fi'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'

function ProjectCard({ project }) {
  const repoButtons = project.repos || (project.repoUrl ? [{ label: 'GitHub', url: project.repoUrl }] : [])
  const images = Array.isArray(project.images) && project.images.length
    ? project.images
    : project.imageUrl
      ? [project.imageUrl]
      : []
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalImageIndex, setModalImageIndex] = useState(0)
  const hasGallery = images.length > 1
  const safeImageIndex = activeImageIndex >= images.length ? 0 : activeImageIndex
  const safeModalImageIndex = modalImageIndex >= images.length ? 0 : modalImageIndex
  const hasDemo = Boolean(project.demoUrl && project.demoUrl !== '#')

  useEffect(() => {
    if (!isModalOpen) {
      return undefined
    }

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsModalOpen(false)
      }

      if (!hasGallery) {
        return
      }

      if (event.key === 'ArrowLeft') {
        setModalImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
      }

      if (event.key === 'ArrowRight') {
        setModalImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [hasGallery, images.length, isModalOpen])

  const goToPreviousImage = () => {
    setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNextImage = () => {
    setActiveImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const openModal = () => {
    setModalImageIndex(safeImageIndex)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const goToPreviousModalImage = () => {
    setModalImageIndex((prev) => {
      const nextIndex = prev === 0 ? images.length - 1 : prev - 1
      setActiveImageIndex(nextIndex)
      return nextIndex
    })
  }

  const goToNextModalImage = () => {
    setModalImageIndex((prev) => {
      const nextIndex = prev === images.length - 1 ? 0 : prev + 1
      setActiveImageIndex(nextIndex)
      return nextIndex
    })
  }

  return (
    <>
      <article className="group flex h-full flex-col rounded-3xl border border-[#262626] bg-[#171717] p-6 shadow-[0_20px_55px_rgba(0,0,0,0.42)] transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/45 hover:shadow-[0_28px_70px_rgba(0,0,0,0.55)]">
        <div className="mb-6 flex items-center justify-between text-sm text-[#A3A3A3]">
          <span>{project.type}</span>
          <span>{project.year}</span>
        </div>

        <div className="relative mb-6 h-[200px] overflow-hidden rounded-2xl border border-[#262626] bg-[#111111] sm:h-[220px] lg:h-[248px]">
          {images.length > 0 ? (
            <button
              type="button"
              onClick={openModal}
              className="flex h-full w-full cursor-zoom-in items-center justify-center bg-black/40 p-2"
              aria-label={`Ampliar imagen actual de ${project.title}`}
            >
              <img
                src={images[safeImageIndex]}
                alt={project.imageAlt}
                className="h-full w-full rounded-xl object-contain"
                loading="lazy"
              />
            </button>
          ) : (
            <div className="flex h-full w-full items-center justify-center text-sm text-[#A3A3A3]">
              Sin imagen disponible
            </div>
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4">
            <span className="rounded-full border border-[#D4AF37]/40 bg-[#0A0A0A]/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#EAB308]">
              {project.category}
            </span>
            {images.length > 0 && (
              <button
                type="button"
                onClick={openModal}
                className="inline-flex items-center gap-1 rounded-full border border-[#D4AF37]/40 bg-[#0A0A0A]/75 px-2.5 py-1 text-[11px] font-semibold text-[#EAB308] transition hover:border-[#EAB308] hover:bg-[#D4AF37] hover:text-[#0A0A0A]"
                aria-label={`Ver imagen ampliada de ${project.title}`}
              >
                <FiMaximize2 className="text-xs" />
                Ver ampliado
              </button>
            )}
          </div>

          {hasGallery && (
            <>
              <button
                type="button"
                onClick={goToPreviousImage}
                className="absolute left-3 top-1/2 inline-flex -translate-y-1/2 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#0A0A0A]/70 p-1.5 text-[#EAB308] transition hover:border-[#EAB308] hover:bg-[#D4AF37] hover:text-[#0A0A0A]"
                aria-label={`Imagen anterior de ${project.title}`}
              >
                <HiChevronLeft className="text-base" />
              </button>

              <button
                type="button"
                onClick={goToNextImage}
                className="absolute right-3 top-1/2 inline-flex -translate-y-1/2 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#0A0A0A]/70 p-1.5 text-[#EAB308] transition hover:border-[#EAB308] hover:bg-[#D4AF37] hover:text-[#0A0A0A]"
                aria-label={`Imagen siguiente de ${project.title}`}
              >
                <HiChevronRight className="text-base" />
              </button>

              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5">
                {images.map((image, index) => (
                  <button
                    key={`${project.title}-${image}`}
                    type="button"
                    onClick={() => setActiveImageIndex(index)}
                    className={`h-2 w-2 rounded-full border border-[#D4AF37]/60 transition ${
                      index === safeImageIndex ? 'bg-[#EAB308]' : 'bg-[#111111]/80'
                    }`}
                    aria-label={`Ir a la imagen ${index + 1} de ${project.title}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="flex flex-1 flex-col gap-4">
          <div className="space-y-3">
            <h3 className="font-heading text-2xl font-semibold text-[#FAFAFA]">
              {project.title}
            </h3>
            <p className="text-sm leading-7 text-[#A3A3A3]">{project.description}</p>
            <p className="rounded-xl border border-[#262626] bg-[#111111] px-3 py-2 text-sm leading-6 text-[#A3A3A3]">
              <span className="font-semibold text-[#FAFAFA]">Rol:</span> {project.role}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#262626] bg-[#111111] px-3 py-1 text-xs font-medium text-[#A3A3A3]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          {hasDemo && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/12 px-4 py-2 text-sm font-semibold text-[#EAB308] transition hover:border-[#EAB308] hover:bg-[#D4AF37]/20"
            >
              Ver demo
              <FiArrowUpRight />
            </a>
          )}

          {repoButtons.map((repo) => (
            <a
              key={`${project.title}-${repo.label}`}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#262626] px-4 py-2 text-sm font-semibold text-[#FAFAFA] transition hover:border-[#D4AF37]/45 hover:text-[#EAB308]"
            >
              <FiGithub />
              {repo.label}
            </a>
          ))}
        </div>
      </article>

      {isModalOpen && images.length > 0 && (
        <div
          className="fixed inset-0 z-[70] bg-black/85 p-4 sm:p-6"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={`Galeria de imagenes de ${project.title}`}
        >
          <div className="relative mx-auto flex h-full w-full max-w-[90vw] items-center justify-center">
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-1 top-1 z-10 inline-flex items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#0A0A0A]/80 p-2 text-[#EAB308] transition hover:border-[#EAB308] hover:bg-[#D4AF37] hover:text-[#0A0A0A] sm:right-3 sm:top-3"
              aria-label={`Cerrar imagen ampliada de ${project.title}`}
            >
              <FiX className="text-lg" />
            </button>

            {hasGallery && (
              <>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation()
                    goToPreviousModalImage()
                  }}
                  className="absolute left-1 top-1/2 z-10 inline-flex -translate-y-1/2 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#0A0A0A]/80 p-2 text-[#EAB308] transition hover:border-[#EAB308] hover:bg-[#D4AF37] hover:text-[#0A0A0A] sm:left-3"
                  aria-label={`Imagen anterior ampliada de ${project.title}`}
                >
                  <HiChevronLeft className="text-lg" />
                </button>

                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation()
                    goToNextModalImage()
                  }}
                  className="absolute right-1 top-1/2 z-10 inline-flex -translate-y-1/2 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#0A0A0A]/80 p-2 text-[#EAB308] transition hover:border-[#EAB308] hover:bg-[#D4AF37] hover:text-[#0A0A0A] sm:right-3"
                  aria-label={`Imagen siguiente ampliada de ${project.title}`}
                >
                  <HiChevronRight className="text-lg" />
                </button>
              </>
            )}

            <div
              className="relative flex max-h-[85vh] w-full max-w-[90vw] items-center justify-center rounded-2xl border border-[#262626] bg-[#111111] p-4 sm:p-6"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={images[safeModalImageIndex]}
                alt={project.imageAlt}
                className="h-auto max-h-[85vh] w-auto max-w-[90vw] object-contain"
              />
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-[#D4AF37]/45 bg-[#0A0A0A]/85 px-3 py-1 text-xs font-semibold text-[#EAB308]">
                {safeModalImageIndex + 1} / {images.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProjectCard