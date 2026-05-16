export const projectSections = [
  {
    title: "Data Analysis Projects",
    icon: "📊",
    projects: [
      {
        title: "From Coal to Renewables",
        icon: "⚡️",
        description:
          "Analyzed energy consumption data across 200+ countries to examine the shift from fossil fuels to renewables. Identified regional differences in transition patterns and built visualizations that make long-term energy trends easier to compare.",
        link: `${import.meta.env.BASE_URL}reports/From-Coal-to-Renewables-Analysis-of-Global-Energy-Consumption.html`,
        buttonText: "View Full Report",
        tags: ["Data Analysis", "Exploratory Analysis", "Visualization"],
      },
      {
        title: "Wikipedia Text-Mining: Women Scientists",
        icon: "🔍",
        description:
          "Scraped and analyzed Wikipedia articles about 20th-century women scientists using R and R Markdown. Applied text preprocessing and exploratory analysis to identify patterns in how these scientists and their work are described.",
        link: `${import.meta.env.BASE_URL}reports/Wikipedia%20text-mining%2020th-century%20women%20scientists.html`,
        buttonText: "View Full Report",
        tags: ["Text Mining", "R / R Markdown", "Web Scraping"],
      },
    ],
  },
  {
    title: "Statistical & Probability Studies",
    icon: "🎲",
    projects: [
      {
        title: "Spotify Most-Streamed Songs 2024: Statistical Analysis",
        icon: "🎶",
        description:
          "Investigated whether the number of playlists predicts total streams in Spotify's 2024 top-streamed songs dataset. Applied correlation analysis and linear regression, evaluated model fit with R², and examined how outliers affect model stability.",
        note: "This report is written in Hebrew.",
        link: `${import.meta.env.BASE_URL}reports/Spotify-Statistical-Analysis.pdf`,
        buttonText: "View Full Report (Hebrew)",
        tags: ["Statistics", "Regression", "Model Evaluation"],
      },
      {
        title: "Spotify Most-Streamed Songs 2024: Statistical Modeling",
        icon: "🎼",
        description:
          "Modeled the distribution of song stream counts using normal and gamma distributions fitted via the method of moments. Compared model fit with percentile analysis, computed confidence intervals, and tested whether playlist count is associated with higher total streams.",
        note: "This report is written in Hebrew.",
        link: `${import.meta.env.BASE_URL}reports/Spotify-Statistical-Modeling.pdf`,
        buttonText: "View Full Report (Hebrew)",
        tags: ["Statistical Modeling", "Distributions", "Confidence Intervals"],
      },
    ],
  },
];
