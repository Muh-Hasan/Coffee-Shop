const myCustomQueries = {
  sm: "(max-width: 640px)",
  md: "(max-width: 768px)",
  lg: "(max-width: 1080px)",
  l: "(max-width: 1280px)",
  xl: "(max-width: 1536px)",
}

module.exports = {
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-breakpoints",
    {
      resolve: "gatsby-plugin-breakpoints",
      options: {
        queries: myCustomQueries,
      },
    },
  ],
}
