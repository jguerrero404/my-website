module.exports = {
  siteMetadata: {
    title: `José Guerrero`,
    description: `Este es mi sitio web personal`,
    author: `José Guerrero`,
    social: {
      twitter: "https://twitter.com/jguerrero404",
      github: "https://github.com/jguerrero404",
      facebook: "https://facebook.com/jguerrero404",
      slack: "https://slack.com/jguerrero404",
    },
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-styled-components",
      options: {
        displayName: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `jose-guerrero`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/jose-guerrero-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
