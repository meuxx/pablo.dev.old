import React from 'react'
import { GatsbySeo } from 'gatsby-plugin-next-seo'

import Layout from '../components/Layout'
import { Main, PageLink, Section, SectionHeader } from '../styles/styles'

const NotFound: React.FC = () => (
  <Layout>
    <GatsbySeo title="404 Not found" />

    <Main>
      <Section>
        <SectionHeader>
          <h1>NOT FOUND</h1>
        </SectionHeader>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <PageLink href="/">Home</PageLink>
      </Section>
    </Main>
  </Layout>
)

export default NotFound
