module.exports = {
  siteMetadata: {
    siteUrl: `https://gallant-newton-c62738.netlify.com`,
    title: `José Guerrero`,
    description: `Este es mi sitio web personal`,
    author: `José Guerrero`,
    cv:
      "https://www.dropbox.com/s/u3j3ba48ehmbv9h/Jos%C3%A9%20Guerrero%20%28CV%29.pdf?dl=1",
    social: {
      twitter: "https://twitter.com/jguerrero404",
      github: "https://github.com/jguerrero404",
      youtube: "https://facebook.com/jguerrero404",
      linkedin: "https://www.linkedin.com/in/jguerrero404/",
    },
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-150724772-1",
      },
    },
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
