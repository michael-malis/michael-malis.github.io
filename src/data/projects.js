export const projectSections = [
  {
    title: "Data Analysis Projects",
    icon: "📊",
    projects: [
      {
        title: "From Coal to Renewables",
        icon: "⚡️",
        description:
          "Analyzed energy consumption data across over two hundred countries to map the global shift from fossil fuels to renewables. Explored regional differences in energy transition patterns and built visualizations to make the trends legible.",
        link: `${import.meta.env.BASE_URL}reports/From-Coal-to-Renewables-Analysis-of-Global-Energy-Consumption.html`,
        buttonText: "View Full Report",
        tags: ["Data Analysis", "Exploratory Analysis", "Visualization"],
      },
      {
        title: "Wikipedia Text-Mining: Women Scientists",
        icon: "🔍",
        description:
          "Text-mining report built with R and R Markdown, analyzing Wikipedia articles about 20th-century women scientists. Applied text preprocessing and exploratory analysis to surface patterns in how these scientists are described.",
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
          "Investigated whether playlist count predicts total streams in Spotify’s 2024 top-streamed dataset. Applied linear regression, evaluated model fit with R², and examined how outliers affect predictive accuracy.",
        note: "This report is written in Hebrew.",
        link: `${import.meta.env.BASE_URL}reports/Spotify-Statistical-Analysis.pdf`,
        buttonText: "View Full Report (Hebrew)",
        tags: ["Statistics", "Regression", "Hebrew Report"],
      },
      {
        title: "Spotify Most-Streamed Songs 2024: Statistical Modeling",
        icon: "🎼",
        description:
          "Modeled the distribution of song popularity using normal and gamma distributions fitted via method of moments. Compared model fit with percentile analysis, built confidence intervals, and tested whether playlist placement significantly predicts total streams.",
        note: "This report is written in Hebrew.",
        link: `${import.meta.env.BASE_URL}reports/Spotify-Statistical-Modeling.pdf`,
        buttonText: "View Full Report (Hebrew)",
        tags: ["Statistical Modeling", "Distributions", "Hypothesis Testing"],
      },
    ],
  },
];
