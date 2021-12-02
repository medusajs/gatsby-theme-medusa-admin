module.exports = {
  siteMetadata: {
    title: `Medusa Admin`,
    description: `Admin system for Medusa`,
    author: `@medusajs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-svgr",
      options: {
        prettier: true, // use prettier to format JS code output (default)
        svgo: true, // use svgo to optimize SVGs (default)
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/a/*`] },
    },
  ],
}
