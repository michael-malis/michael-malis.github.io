export default function About() {
  return (
    <section id="about-me" className="scroll-mt-20 border-b border-[var(--color-border)] px-6 py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-6xl">

        {/* Section label */}
        <p className="section-label">// about</p>

        {/* Section heading */}
        <div className="mt-3 flex items-center gap-4">
          <div className="h-px w-10 shrink-0 bg-gradient-to-r from-[var(--gradient-lime)] to-[var(--gradient-teal)]" />
          <h2 className="heading-main">About Me</h2>
        </div>

        {/* Content Grid — left text vertically centered relative to right cards */}
        <div className="mt-10 grid gap-8 md:grid-cols-2 md:items-center">

          {/* Left Column — Bio */}
          <div className="flex flex-col justify-center space-y-5">
            <div className="flex gap-3">
              <span className="shrink-0 font-mono font-bold text-[var(--gradient-lime)]">+</span>
              <p className="text-base leading-relaxed text-[var(--color-text-secondary)]">
                I study Statistics and Data Science at the Hebrew University of Jerusalem, with a focus on statistical inference, regression, machine learning fundamentals, and data visualization.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 font-mono font-bold text-[var(--gradient-lime)]">+</span>
              <p className="text-base leading-relaxed text-[var(--color-text-secondary)]">
                After making Aliyah independently at 18 and completing military service in the Israel Defense Forces, I developed independence, discipline, and adaptability. That background shaped a self-directed approach to my studies, projects, and problem-solving.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 font-mono font-bold text-[var(--gradient-lime)]">+</span>
              <p className="text-base leading-relaxed text-[var(--color-text-secondary)]">
                My coursework and projects cover statistical modeling, Python- and R-based data analysis, SQL fundamentals, regression, hypothesis testing, and building visual explanations of mathematical ideas.
              </p>
            </div>
            <div className="flex items-baseline gap-3 pt-1">
              <span className="shrink-0 font-mono text-sm font-bold uppercase tracking-widest text-[var(--color-muted-green)]">GITHUB:</span>
              <a
                href="https://github.com/michael-malis"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm font-semibold text-[var(--accent-primary)] underline decoration-[#31D98B]/35 underline-offset-2 transition hover:text-[var(--accent-primary-hover)] hover:decoration-[var(--accent-primary-hover)]"
                aria-label="GitHub profile: michael-malis"
              >
                github.com/michael-malis
              </a>
            </div>
          </div>

          {/* Right Column — Highlights */}
          <div className="space-y-4">
            <div className="card-base p-5">
              <h3 className="mb-2 text-base font-semibold text-[var(--gradient-teal)]">
                Specialization
              </h3>
              <p className="text-base leading-relaxed text-[var(--color-text-secondary)]">
                Statistical inference, predictive modeling, and data visualization
              </p>
            </div>

            <div className="card-base p-5">
              <h3 className="mb-2 text-base font-semibold text-[var(--gradient-teal)]">
                Education
              </h3>
              <p className="text-base leading-relaxed text-[var(--color-text-secondary)]">
                Hebrew University of Jerusalem · B.Sc. in Statistics &amp; Data Science
              </p>
            </div>

            <div className="card-base p-5">
              <h3 className="mb-2 text-base font-semibold text-[var(--gradient-teal)]">
                Approach
              </h3>
              <p className="text-base leading-relaxed text-[var(--color-text-secondary)]">
                Apply mathematical concepts to describe real-world problems, write clean analytical code, and turn data into readable analysis and practical conclusions.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
