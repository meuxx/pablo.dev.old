import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const query = graphql`
  query {
    file(relativePath: { eq: "avatar.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 200
          quality: 85
          traceSVG: { background: "#033E6B", color: "#080a0e", threshold: 70 }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
interface AvatarProps {
  className: string
}

const Avatar: React.SFC<AvatarProps> = ({ className }) => {
  const data = useStaticQuery(query)

  return <Img className={className} fluid={data.file.childImageSharp.fluid} />
}

export default Avatar
