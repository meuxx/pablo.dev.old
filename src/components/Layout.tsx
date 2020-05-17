import React from 'react'
import { GlobalStyle, Themed } from '../styles/GlobalStyle'
import Header from './Header'

const Layout: React.FC = ({ children }) => (
  <Themed>
    <GlobalStyle />
    <Header />
    {children}
  </Themed>
)

export default Layout
