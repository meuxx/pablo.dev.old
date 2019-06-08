import React from 'react'
import '../assets/scss/main.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

import Header from './Header'


library.add(fab, faEnvelope)

export default ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
)
