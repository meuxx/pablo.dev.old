import React from 'react'

import useAvatar from '../hooks/useAvatar'
import Img from 'gatsby-image'

const Avatar: React.FC = () => {
  const avatar = useAvatar()

  return (
    <Img className="image avatar" fluid={avatar.file.childImageSharp.fluid} />
  )
}

export default Avatar
