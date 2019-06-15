import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'

const NotFound: React.SFC = () => (
  <Layout>
    <div id="main">
      <Helmet>
        <title>404 Not found</title>
      </Helmet>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <a href="/">Home</a>
    </div>
  </Layout>
)

export default NotFound
