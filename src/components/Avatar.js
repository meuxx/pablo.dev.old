import React from 'react'

import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const query = graphql`
  query {
    file(relativePath: { eq: "avatar.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default ({ className }) => (
  <StaticQuery
    query={query}
    render={data => (
      <Img className={className} fluid={data.file.childImageSharp.fluid} />
    )}
  />
)
