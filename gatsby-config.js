module.exports = {
  siteMetadata: {
    title: `paruchimaru`,
    description: `PARUCHIMARU | パルチマル　このサイトはPARUCHIによって作成されたPARUCHIMARUのためのサイトです。`,
    author: `paruchi`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `test`,
        short_name: `test`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/barn.svg`,
      },
    },
    "gatsby-plugin-sass",
    // "gatsby-plugin-scss-typescript"
  ],
}
