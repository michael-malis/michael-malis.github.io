import { awards } from "../data/awards";

export default function HonorsAwards() {
  return (
    <section id="awards" className="scroll-mt-20 border-b border-[var(--color-border)] px-6 pt-6 pb-10 sm:pt-8 sm:pb-14 lg:pt-10 lg:pb-16">
      <div className="mx-auto max-w-6xl">

        {/* Section label */}
        <p className="section-label">// honors &amp; awards</p>

        {/* Section heading */}
        <div className="mt-3 flex items-center gap-4">
          <div className="h-px w-10 shrink-0 bg-gradient-to-r from-[var(--gradient-lime)] to-[var(--gradient-teal)]" />
          <h2 className="heading-main">Recognition</h2>
        </div>
        <div className="mt-10 space-y-8 sm:space-y-10">
          {awards.map((award) => (
            <article
              key={award.title}
              className="card-featured relative"
            >
              {/* Top accent line */}
              <div className="relative mb-6 h-0.5 w-32 bg-gradient-to-r from-[var(--accent-primary)] via-[var(--gradient-teal)] to-transparent rounded" />

              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  {/* Badge label */}
                  <span
                    className="award-achievement-badge inline-flex items-center gap-1.5 rounded-full border border-[rgba(52,211,153,0.22)] bg-[rgba(52,211,153,0.06)] px-3 py-1 font-mono text-xs uppercase tracking-widest"
                  >
                    <span className="award-achievement-badge-dot h-1.5 w-1.5 rounded-full" />
                    {award.badge}
                  </span>

                  {/* Primary headline */}
                  <h3 className="mt-4 text-3xl font-bold tracking-tight text-[var(--accent-primary)] sm:text-4xl">
                    {award.headline ? <>{award.headline}{"  ·  "}</> : null}{award.title}
                  </h3>
                </div>
                {award.date && (
                  <span className="font-mono text-xl font-semibold text-[var(--color-text-muted)]">{award.date}</span>
                )}
              </div>

              {/* Description */}
              {award.description && (
                <p className="mt-5 max-w-3xl text-base leading-relaxed text-[var(--color-text-secondary)] sm:text-base">
                  {award.description}
                </p>
              )}

              {/* Details — two columns */}
              {award.details.length > 0 && (
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {award.details.map((detail, i) => (
                    <li key={i} className="flex gap-3 text-base text-[var(--color-text-secondary)]">
                      <span className="shrink-0 font-mono font-bold text-[var(--gradient-lime)]">+</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Divider before tags — only when there is content below */}
              {(award.tags.length > 0 || award.link) && (
                <div className="divider-green" />
              )}

              {/* Tags + Button */}
              {(award.tags.length > 0 || award.link) && (
                <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {award.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                  {award.link && (
                    <a
                      href={award.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary shrink-0"
                    >
                      {award.buttonText}
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
