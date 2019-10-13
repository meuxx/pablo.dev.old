import React from 'react'

import Avatar from './Avatar'
import Footer from './Footer'
import {
  Sidebar,
  SidebarMain,
  SidebarTitle,
  SidebarSubtitle,
  SidebarLink,
} from '../styles/styles'

const Header: React.FC = () => (
  <Sidebar>
    <SidebarMain>
      <Avatar />

      <SidebarTitle>
        <strong>Pablo Maceda</strong>
        <br />{' '}
        <SidebarLink
          href="mailto:contact@pablo.dev"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Contact email"
          title="Contact email"
        >
          contact@pablo.dev
        </SidebarLink>
      </SidebarTitle>

      <br />

      <SidebarSubtitle>
        Back-end developer at{' '}
        <SidebarLink
          href="https://www.kooomo.com/"
          rel="noopener noreferrer"
          target="_blank"
          title="Kooomo"
        >
          kooomo.com
        </SidebarLink>
        <br /> London, UK
      </SidebarSubtitle>
    </SidebarMain>

    <Footer />
  </Sidebar>
)

export default Header
