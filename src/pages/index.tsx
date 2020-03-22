import React from 'react'
import { GatsbySeo } from 'gatsby-plugin-next-seo'

import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Layout from '../components/Layout'
import { Main } from '../styles/styles'

import image from '../images/open_graph.jpg'
import data from '../data.json'

const index: React.FC = () => {
  const { site, skills, experience } = data

  return (
    <Layout>
      <GatsbySeo
        title={site.title}
        description={site.description}
        canonical={site.siteUrl}
        openGraph={{
          type: 'website',
          url: site.siteUrl,
          title: site.title,
          // eslint-disable-next-line @typescript-eslint/camelcase
          site_name: site.author,
          description: site.description,
          images: [
            {
              url: `${site.siteUrl}${image}`,
            },
          ],
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
        metaTags={[{ name: 'image', content: `${site.siteUrl}${image}` }]}
      />

      <Main>
        <About />
        <Skills data={skills} />
        <Experience data={experience} />
      </Main>
    </Layout>
  )
}

export default index
