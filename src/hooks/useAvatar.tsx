import { graphql, useStaticQuery } from 'gatsby'
import { FluidObject } from 'gatsby-image'

interface AvatarInterface {
  file: {
    childImageSharp: {
      fluid: FluidObject
    }
  }
}

const useAvatar = (): AvatarInterface => {
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

  return useStaticQuery(query)
}

export default useAvatar
