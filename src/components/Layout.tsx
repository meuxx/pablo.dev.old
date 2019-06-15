import React from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

import '../assets/scss/main.scss'
import Header from './Header'

library.add(fab, faEnvelope)

const Layout: React.SFC = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
)

export default Layout
