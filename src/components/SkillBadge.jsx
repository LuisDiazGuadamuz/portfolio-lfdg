function SkillBadge({ title, items }) {
  return (
    <article className="rounded-2xl border border-[#262626] bg-[#171717] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-0.5 hover:border-[#D4AF37]/45 hover:shadow-[0_20px_40px_rgba(0,0,0,0.45)]">
      <h3 className="font-heading text-lg font-semibold text-[#FAFAFA]">{title}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-[#262626] bg-[#111111] px-3 py-1 text-xs font-medium text-[#A3A3A3] transition hover:border-[#D4AF37]/45 hover:text-[#EAB308]"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  )
}

export default SkillBadge