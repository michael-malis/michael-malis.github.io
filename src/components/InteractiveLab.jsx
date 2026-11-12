import { publishedDemos } from "../data/demos";
import DemoCard from "./DemoCard";

export default function InteractiveLab() {
  if (publishedDemos.length === 0) return null;

  return (
    <section id="lab" className="scroll-mt-20 border-b border-[var(--color-border)] px-6 py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-6xl">

        {/* Section label */}
        <p className="section-label">// interactive lab</p>

        {/* Section heading */}
        <div className="mt-3 flex items-center gap-4">
          <div className="h-px w-10 shrink-0 bg-gradient-to-r from-[var(--gradient-lime)] to-[var(--gradient-teal)]" />
          <h2 className="heading-main">Interactive Lab</h2>
        </div>
        <p className="mt-4 max-w-2xl text-base text-[var(--color-text-secondary)]">
          Standalone interactive explainers I built to make mathematical ideas tangible. Each one opens in a new tab.
        </p>

        <ul className="demo-list mt-8">
          {publishedDemos.map((demo) => (
            <DemoCard key={demo.id} demo={demo} />
          ))}
        </ul>
      </div>
    </section>
  );
}
