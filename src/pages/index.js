import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import About from '../components/About'
import Experience from '../components/Experience'

import { siteMetadata } from '../../gatsby-config'
import image from '../assets/images/open_graph.jpg'

export default () => (
  <Layout>
    <Helmet>
      {/* General tags */}
      <title>{siteMetadata.title}</title>
      <link rel="canonical" href={siteMetadata.siteUrl} />
      <meta name="description" content={siteMetadata.description} />
      <meta name="image" content={image} />

      {/* OpenGraph tags */}
      <meta property="og:url" content={siteMetadata.siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteMetadata.title} />
      <meta property="og:description" content={siteMetadata.description} />
      <meta property="og:image" content={image} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteMetadata.title} />
      <meta name="twitter:description" content={siteMetadata.description} />
      <meta name="twitter:image" content={image} />
    </Helmet>

    <div id="main">
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
          >
            HTML5 UP
          </a>
        </li>
      </ul>
    </div>
  </Layout>
)
