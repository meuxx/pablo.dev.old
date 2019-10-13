import React from 'react'
import { Helmet } from 'react-helmet'

import About from '../components/About'
import Experience from '../components/Experience'
import Layout from '../components/Layout'
import { Main } from '../styles/styles'

import { Person } from 'schema-dts'
import image from '../images/open_graph.jpg'
import data from '../data.json'

const index: React.FC = () => {
  const { site, author } = data

  const schemaOrgJSONLD: Person = {
    '@type': 'Person',
    address: {
      '@type': 'PostalAddress',
      addressCountry: author.country,
      addressRegion: author.city,
    },
    email: author.email,
    image: `${site.siteUrl}${image}`,
    jobTitle: author.jobTitle,
    name: site.author,
    sameAs: author.social,
    url: site.siteUrl,
    worksFor: {
      '@type': 'Organization',
      name: author.organizationName,
      url: author.organizationUrl,
    },
  }

  return (
    <Layout>
      <Helmet>
        {/* General tags */}
        <title>{site.title}</title>
        <link rel="canonical" href={site.siteUrl} />
        <meta name="description" content={site.description} />
        <meta name="image" content={`${site.siteUrl}${image}`} />

        {/* Schema.org tags */}
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>

        {/* OpenGraph tags */}
        <meta property="og:url" content={site.siteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={site.title} />
        <meta property="og:description" content={site.description} />
        <meta property="og:image" content={`${site.siteUrl}${image}`} />
        <meta property="og:site_name" content={site.author} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={site.title} />
        <meta name="twitter:description" content={site.description} />
        <meta name="twitter:image" content={`${site.siteUrl}${image}`} />
      </Helmet>

      <Main>
        <About />
        <Experience />
      </Main>
    </Layout>
  )
}

export default index
