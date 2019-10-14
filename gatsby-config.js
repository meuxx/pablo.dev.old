const data = require('./src/data.json')

module.exports = {
  siteMetadata: data.site,
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        pure: true,
        fileName: false,
        displayName: process.env.NODE_ENV !== 'production',
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en',
        dir: 'ltr',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Source Sans Pro`,
            variants: [`400`, `400italic`],
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'pablo.dev',
        short_name: 'pablo.dev',
        start_url: '/',
        background_color: '#101010',
        theme_color: '#033e6b',
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          '/sw.js': ['Cache-Control: no-cache'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        mergeDefaultDirectives: true,
        mergeStyleHashes: false,
        directives: {
          'style-src': "'self' 'unsafe-inline'",
        },
      },
    },
    `gatsby-plugin-typescript`,
  ],
}
