import React from 'react'

import useAvatar from '../hooks/useAvatar'
import Img from 'gatsby-image'

const Avatar: React.FC = () => {
  const src = useAvatar()

  return src && <Img className="image avatar" fluid={src} />
}

export default Avatar
