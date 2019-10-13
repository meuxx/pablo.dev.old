import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import GlobalStyle from '../styles/GlobalStyle'
import Header from './Header'

library.add(fab, faEnvelope)

const Layout: React.FC = ({ children }) => (
  <div>
    <GlobalStyle />
    <Header />
    {children}
  </div>
)

export default Layout
