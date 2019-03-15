import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import About from '../components/About'
import Experience from '../components/Experience'

import { siteMetadata } from '../../gatsby-config'
import image from '../assets/images/open_graph.jpg'

const schemaOrgJSONLD = {
  '@context': 'http://schema.org',
  '@type': 'Person',
  name: siteMetadata.author,
  url: siteMetadata.siteUrl,
  jobTitle: 'Back-end developer',
  image: `${siteMetadata.siteUrl}${image}`,
  email: 'contact@pablo.dev',
  sameAs: ['https://gitlab.com/meuxx', 'https://github.com/meuxx'],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'GB',
    addressRegion: 'London',
  },
  worksFor: {
    '@type': 'Organization',
    name: 'Kooomo',
    url: 'https://www.kooomo.com',
  },
}

export default () => (
  <Layout>
    <Helmet>
      {/* General tags */}
      <title>{siteMetadata.title}</title>
      <link rel="canonical" href={siteMetadata.siteUrl} />
      <meta name="description" content={siteMetadata.description} />
      <meta name="image" content={`${siteMetadata.siteUrl}${image}`} />

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* OpenGraph tags */}
      <meta property="og:url" content={siteMetadata.siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteMetadata.title} />
      <meta property="og:description" content={siteMetadata.description} />
      <meta property="og:image" content={`${siteMetadata.siteUrl}${image}`} />
      <meta property="og:site_name" content={siteMetadata.author} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteMetadata.title} />
      <meta name="twitter:description" content={siteMetadata.description} />
      <meta name="twitter:image" content={`${siteMetadata.siteUrl}${image}`} />
    </Helmet>

    <main id="main">
      <About />

      <Experience />

      <ul className="copyright">
        <li>&copy; Gatsby Starter Strata</li>
        <li>
          Design:{' '}
          <a
            href="https://html5up.net"
            rel="noopener noreferrer"
            target="_blank"
            title="HTML5 UP"
          >
            HTML5 UP
          </a>
        </li>
      </ul>
    </main>
  </Layout>
)
