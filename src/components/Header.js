import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

import Footer from './Footer'

export default () => (
  <header id="header">
    <div className="inner">
      <StaticQuery
        query={graphql`
          query {
            avatar: file(relativePath: { eq: "avatar.jpg" }) {
              childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fixed(width: 125, height: 125) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        `}
        render={data => (
          <Img
            fixed={data.avatar.childImageSharp.fixed}
            className="image avatar"
          />
        )}
      />
      <h1>
        <strong>Pablo Maceda</strong>
        <br />
        <a href="contact@contact@pablo.dev">contact@pablo.dev</a>
        <br />
        <br />
        Back end developer at{' '}
        <a href="https://kooomo.com" rel="noopener noreferrer" target="_blank">
          kooomo.com
        </a>
        <br />
        London, UK
      </h1>
    </div>
    <Footer />
  </header>
)
