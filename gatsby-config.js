const data = require('./src/data.json')

module.exports = {
  siteMetadata: data.site,
  plugins: [
    `gatsby-plugin-next-seo`,
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
        lang: 'en-GB',
        dir: 'ltr',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Source Sans Pro`,
              variants: [`400`, `700`],
            },
          ],
        },
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
        cache_busting_mode: 'none',
        legacy: false,
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        workboxConfig: {
          globPatterns: ['**/*'],
        },
      },
    },
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
