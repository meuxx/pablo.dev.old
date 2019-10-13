import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout'
import { Main, Link, Section, SectionHeader } from '../styles/styles'

const NotFound: React.FC = () => (
  <Layout>
    <Helmet>
      <title>404 Not found</title>
    </Helmet>

    <Main>
      <Section>
        <SectionHeader>
          <h1>NOT FOUND</h1>
        </SectionHeader>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <Link href="/">Home</Link>
      </Section>
    </Main>
  </Layout>
)

export default NotFound
