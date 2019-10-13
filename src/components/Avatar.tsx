import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Avatar as AvatarImg } from '../styles/styles'

const query = graphql`
  query {
    file(relativePath: { eq: "avatar.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 85, traceSVG: { background: "#033E6B", color: "#080a0e", threshold: 70 }) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

const Avatar: React.FC = () => {
  const avatar = useStaticQuery(query)

  return <AvatarImg className="image avatar" fluid={avatar.file.childImageSharp.fluid} />
}

export default Avatar
