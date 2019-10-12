import { graphql, useStaticQuery } from 'gatsby'
import { FluidObject } from 'gatsby-image'

const useAvatar = (): FluidObject | null => {
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

  const data = useStaticQuery(query)
  if (!data) {
    return null
  }

  return data.file.childImageSharp.fluid
}

export default useAvatar
