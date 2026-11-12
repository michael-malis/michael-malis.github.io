// Interactive demos hosted as separate GitHub Pages repositories.
// Only entries without `draft: true` are rendered on the site.

export const demos = [
  {
    id: "lagrange-multipliers",
    title: "The Method of Lagrange Multipliers",
    label: "3D",
    description:
      "A geometry-first lesson on constrained optimization: tangency of gradients and level curves, stationary candidates, and a counterexample.",
    url: "https://michael-malis.github.io/lagrange-multipliers/",
    source: "https://github.com/michael-malis/lagrange-multipliers",
  },
  {
    id: "platonic-solids-atlas",
    title: "Platonic Solids Atlas",
    label: "3D",
    description:
      "An interactive 3D atlas of the five Platonic solids, their duality, and the Euler argument for why there are exactly five.",
    url: "https://michael-malis.github.io/platonic-solids-atlas/",
    source: "https://github.com/michael-malis/platonic-solids-atlas",
  },
  {
    id: "complex-rhythm",
    draft: true, // work in progress — not shown on the site until set to false
    title: "Roots / Rhythm",
    label: "AUDIO",
    description:
      "A mathematical rhythm workbench: rhythms built from complex roots of unity and their unions.",
    url: "https://michael-malis.github.io/complex-rhythm/",
    source: "https://github.com/michael-malis/complex-rhythm",
  },
];

export const publishedDemos = demos.filter((demo) => !demo.draft);
