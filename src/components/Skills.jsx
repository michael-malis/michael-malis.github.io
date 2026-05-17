import { skillCategories } from "../data/skills";

const skillDescriptions = {
  "Programming & Querying": "Languages I use for data analysis, statistical computing, querying, and automation.",
  "Statistics & Machine Learning": "Core methods: inference, regression, distribution fitting, parameter estimation, classification, and model evaluation.",
  "Data Wrangling & Analysis": "Tools and methods I use to clean, reshape, filter, and prepare data for analysis and modeling.",
  "Visualization & Reporting": "Tools and methods I use to turn statistical analysis into clear charts, notebooks, maps, dashboards, and written reports.",
  "Interactive & Technical Tools": "Tools I use to build interactive explanations, portfolio demos, and data-oriented web projects.",
  "Professional Strengths": "Strengths shown through coursework, small-team statistics projects, and independent portfolio work.",
};

export default function Skills() {

  return (
    <section id="skills" className="scroll-mt-20 border-b border-[var(--color-border)] px-6 py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-6xl">

        {/* Section label */}
        <p className="section-label">// skills</p>

        {/* Section heading */}
        <div className="mt-3 flex items-center gap-4">
          <div className="h-px w-10 shrink-0 bg-gradient-to-r from-[var(--gradient-lime)] to-[var(--gradient-teal)]" />
          <h2 className="heading-main">Skills</h2>
        </div>

        {/* Skills Grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className={`card-base group flex flex-col p-6 transition-all duration-300 hover:scale-[1.015] ${
                category.category === "Statistics & Machine Learning" ? "skill-card-data-science" : ""
              }`}
            >
              {/* Header — fixed-height area so description starts at same vertical level */}
              <div className="mb-4 flex items-center gap-3">
                <span className="shrink-0 text-2xl leading-none">{category.icon}</span>
                <h3 className="leading-tight skill-card-title">
                  {category.category}
                </h3>
              </div>

              {/* Description — fixed min-height for consistent divider positioning */}
              <p className="mb-5 text-base leading-relaxed text-[var(--color-text-secondary)]" style={{ minHeight: '4rem' }}>
                {skillDescriptions[category.category]}
              </p>

              {/* Divider before tags */}
              <div className="divider-green" />

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span key={skillIdx} className="tag">{skill}</span>
                ))}
              </div>

              {/* Bottom hover accent */}
              <div className="mt-5 h-0.5 w-0 bg-gradient-to-r from-[#34d399] to-[#2bb67f] transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
