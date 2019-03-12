import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

import Footer from './Footer'

export default () => {
  const avatarQuery = graphql`
    query {
      avatar: file(relativePath: { eq: "avatar.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 256) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `

  return (
    <header id="header">
      <div className="inner">
        <StaticQuery
          query={avatarQuery}
          render={data => (
            <Img
              fluid={data.avatar.childImageSharp.fluid}
              className="image avatar"
              title="Avatar"
              alt="Avatar"
            />
          )}
        />
        <h1>
          <strong>Pablo Maceda</strong>
          <br />{' '}
          <a
            href="mailto:contact@pablo.dev"
            aria-label="Contact email"
            title="Contact email"
          >
            contact@pablo.dev
          </a>
        </h1>
        <br />
        <h2>
          Back-end developer at{' '}
          <a
            href="https://www.kooomo.com/"
            rel="noopener noreferrer"
            target="_blank"
            title="Kooomo"
          >
            kooomo.com
          </a>
          <br /> London, UK
        </h2>
      </div>
      <Footer />
    </header>
  )
}
