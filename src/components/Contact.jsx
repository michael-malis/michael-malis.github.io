export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-b border-[var(--color-border)] px-6 py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-6xl">

        {/* Section label */}
        <p className="section-label">// contact</p>

        {/* Section heading */}
        <div className="mt-3 flex items-center gap-4">
          <div className="h-px w-10 shrink-0 bg-gradient-to-r from-[var(--gradient-lime)] to-[var(--gradient-teal)]" />
          <h2 className="heading-main">Contact</h2>
        </div>

        <div className="mt-7 card-base p-7">
          <div className="grid gap-6 sm:grid-cols-2">

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--color-muted-green)]">
                EMAIL:
              </span>
              <a
                href="mailto:mykhailo.malis@gmail.com"
                className="break-all text-base font-semibold text-[var(--color-text-primary)] underline decoration-[var(--color-muted-green)]/40 underline-offset-2 transition hover:text-[var(--color-bright-green)] hover:decoration-[var(--color-bright-green)]"
              >
                mykhailo.malis@gmail.com
              </a>
            </div>

            {/* LinkedIn */}
            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--color-muted-green)]">
                LINKEDIN:
              </span>
              <a
                href="https://www.linkedin.com/in/michael-malis/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-semibold text-[var(--color-text-primary)] underline decoration-[var(--color-muted-green)]/40 underline-offset-2 transition hover:text-[var(--color-bright-green)] hover:decoration-[var(--color-bright-green)]"
              >
                /in/michael-malis
              </a>
            </div>

          </div>
        </div>

        {/* Availability pill — below contact links, centered */}
        <div className="mt-8 flex justify-center">
          <span className="skills-collab-badge inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all">
            <span className="terminal-blink h-2 w-2 rounded-full bg-[var(--accent-primary)]" />
            Open to internships, junior data/ML roles, and research assistant positions.
          </span>
        </div>

      </div>
    </section>
  );
}
