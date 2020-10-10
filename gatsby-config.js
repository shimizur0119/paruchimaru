module.exports = {
  siteMetadata: {
    title: `paruchimaru`,
    description: `PARUCHIMARU | パルチマル　このサイトはPARUCHIによって作成されたPARUCHIMARUのためのサイトです。`,
    author: `paruchi`,
    siteUrl: "https://paruchimaru.web.app/"
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
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyAzdXlRZNwJ8ooAVUkyP3K3qFBz5AUMzHg",
          authDomain: "develop-542b4.firebaseapp.com",
          databaseURL: "https://develop-542b4.firebaseio.com",
          projectId: "develop-542b4",
          storageBucket: "develop-542b4.appspot.com",
          messagingSenderId: "103556982071",
          appId: "1:103556982071:web:839a31a6a2e8ba949026b2",
          measurementId: "G-FP4JPN8X3L"
        },
        features: {
          auth: true,
          database: false,
          firestore: true,
          storage: false,
          messaging: true,
          functions: true,
        },
      }
    },
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        appendScript: require.resolve(`./firebase-messaging-sw.js`),
      },
    },
    {
      resolve: `gatsby-plugin-firebase-messaging`,
      options: {
        config: {
          apiKey: "AIzaSyAzdXlRZNwJ8ooAVUkyP3K3qFBz5AUMzHg",
          projectId: "develop-542b4",
          messagingSenderId: "103556982071",
          appId: "1:103556982071:web:839a31a6a2e8ba949026b2",
          measurementId: "G-FP4JPN8X3L"
        },
      },
    },
  ],
}
