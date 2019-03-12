module.exports = {
  siteMetadata: {
    title: 'Pablo Maceda | Back-end developer in London, UK',
    description: `I'm Pablo Maceda, back-end developer offering 5 years of experience, with a solid background as PHP developer and a broad technical skill set`,
    author: 'Pablo Maceda',
    siteUrl: 'https://pablo.dev',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'pablo.dev',
        short_name: 'pablo.dev',
        start_url: '/',
        background_color: '#101010',
        theme_color: '#033e6b',
        display: 'minimal-ui',
        icon: 'src/assets/images/icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en',
        dir: 'ltr',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/images`,
        name: 'images',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
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
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-offline',
  ],
}
