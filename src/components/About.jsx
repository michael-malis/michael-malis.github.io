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
              <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                After making Aliyah to Israel on my own at 18 and completing military service in the Israel Defense Forces, I developed independence, discipline, and adaptability. That background shaped a self-directed approach to my studies, projects, and problem-solving.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 font-mono font-bold text-[var(--gradient-lime)]">+</span>
              <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                My academic focus is Statistics and Data Science, with an emphasis on statistical methods, data visualization, and machine learning.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 font-mono font-bold text-[var(--gradient-lime)]">+</span>
              <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                My work covers the full analysis cycle, including cleaning data, building statistical models, creating visualizations, and communicating findings using Python, R, SQL, and web technologies.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="shrink-0 font-mono font-bold text-[var(--gradient-lime)]">+</span>
              <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                Beyond coursework, I continue exploring ways to make statistical ideas clearer, more visual, and easier to explain. I am also interested in different areas of software development that can support and improve my analytical work.
              </p>
            </div>
          </div>

          {/* Right Column — Highlights */}
          <div className="space-y-4">
            <div className="card-base p-5">
              <h3 className="mb-2 text-sm font-semibold text-[var(--gradient-teal)]">
                Specialization
              </h3>
              <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                Statistical inference, regression analysis, data analysis, data visualization, SQL and data manipulation, and applied programming
              </p>
            </div>

            <div className="card-base p-5">
              <h3 className="mb-2 text-sm font-semibold text-[var(--gradient-teal)]">
                Education
              </h3>
              <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                Hebrew University of Jerusalem · B.Sc. in Data Science &amp; Statistics
              </p>
            </div>

            <div className="card-base p-5">
              <h3 className="mb-2 text-sm font-semibold text-[var(--gradient-teal)]">
                Approach
              </h3>
              <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                Apply mathematical concepts to describe real-world problems and support decision-making through clean code, honest visualizations, and readable analysis.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
