import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import About from '../components/About'
import Experience from '../components/Experience'

export default () => {
  const siteTitle = 'Pablo Maceda'
  const siteDescription = 'Pablo Maceda - Back-end developer - Portfolio'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
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
          ß
        </ul>
      </div>
    </Layout>
  )
}
