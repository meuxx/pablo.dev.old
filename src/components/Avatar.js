import React from 'react'

import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

const query = graphql`
  query {
    file(relativePath: { eq: "avatar.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 200
          quality: 85
          traceSVG: { background: "#7baacc", color: "#080a0e", threshold: 70 }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

const Avatar = ({ className }) => (
  <StaticQuery
    query={query}
    render={data => (
      <Img className={className} fluid={data.file.childImageSharp.fluid} />
    )}
  />
)

Avatar.propTypes = {
  className: PropTypes.string.isRequired,
}

export default Avatar
