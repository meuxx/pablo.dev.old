import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import About from '../components/About'
import Experience from '../components/Experience'

import * as config from '../../gatsby-config'
import image from '../assets/images/open_graph.jpg'

export default () => (
  <Layout>
    <Helmet>
      {/* General tags */}
      <title>{config.siteMetadata.title}</title>
      <meta name="description" content={config.siteMetadata.description} />
      <meta name="image" content={image} />

      {/* OpenGraph tags */}
      <meta property="og:url" content={config.siteMetadata.siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={config.siteMetadata.title} />
      <meta
        property="og:description"
        content={config.siteMetadata.description}
      />
      <meta property="og:image" content={image} />
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
