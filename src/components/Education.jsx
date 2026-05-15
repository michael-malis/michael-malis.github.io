export default function Education() {
  return (
    <section id="education" className="scroll-mt-20 border-b border-[var(--color-border)] px-6 py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-6xl">

        {/* Section label */}
        <p className="section-label">// education</p>

        {/* Section heading */}
        <div className="mt-3 flex items-center gap-4">
          <div className="h-px w-10 shrink-0 bg-gradient-to-r from-[var(--gradient-lime)] to-[var(--gradient-teal)]" />
          <h2 className="heading-main">Education</h2>
        </div>

        {/* Education card */}
        <div className="mt-10 space-y-6">
          <div className="card-base overflow-hidden border-l-4 border-l-[var(--color-bright-green)] p-7 transition-all duration-300 hover:shadow-lg sm:p-9">

            {/* Header row */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                {/* Institution — main heading weight, white */}
                <h3 className="text-2xl font-bold text-[var(--color-text-primary)] sm:text-3xl">
                  Hebrew University of Jerusalem
                </h3>
                {/* Degree — solid #34d399 second-level, NOT gradient, smaller than institution */}
                <p
                  className="education-degree mt-1.5 text-base font-semibold"
                >
                  B.Sc. in Data Science &amp; Statistics
                </p>
              </div>
              {/* In Progress badge — pill style */}
              <span
                className="education-status-badge shrink-0 inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-semibold"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-primary)] inline-block" />
                In Progress
              </span>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
              Coursework in statistical theory, machine learning, statistical computing, and statistical inference.
            </p>

            {/* Divider before tags */}
            <div className="divider-green" />

            {/* Tags — no "Key Areas:" label */}
            <div className="mt-4 flex flex-wrap gap-2">
              {['Statistical Inference', 'Machine Learning', 'Statistical Computing', 'Markov Chains', 'Statistical Simulation', 'Regression Analysis'].map((area) => (
                <span key={area} className="tag">{area}</span>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
