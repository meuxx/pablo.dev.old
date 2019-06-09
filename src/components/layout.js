import React from 'react'
import PropTypes from 'prop-types'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

import '../assets/scss/main.scss'
import Header from './Header'

library.add(fab, faEnvelope)

const layout = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
)

layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default layout
