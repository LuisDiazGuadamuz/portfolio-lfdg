function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={`flex flex-col gap-4 ${alignment}`}>
      <span className="rounded-full border border-[#D4AF37]/35 bg-[#D4AF37]/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#EAB308]">
        {eyebrow}
      </span>
      <div className="space-y-3">
        <h2 className="font-heading text-3xl font-semibold tracking-tight text-[#FAFAFA] sm:text-4xl">
          {title}
        </h2>
        <p className="max-w-2xl text-base leading-7 text-[#A3A3A3] sm:text-lg">
          {description}
        </p>
      </div>
    </div>
  )
}

export default SectionHeading