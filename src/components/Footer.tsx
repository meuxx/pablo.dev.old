import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  SidebarFooter,
  SidebarIconWrapper,
  SidebarIcon,
  SidebarIconLink,
} from '../styles/styles'

const Footer: React.FC = () => (
  <SidebarFooter>
    <SidebarIconWrapper>
      <SidebarIcon>
        <SidebarIconLink
          href="mailto:contact@pablo.dev"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Email"
          title="Email"
        >
          <FontAwesomeIcon icon={['far', 'envelope']} />
          <span>Email</span>
        </SidebarIconLink>
      </SidebarIcon>
      <SidebarIcon>
        <SidebarIconLink
          href="https://gitlab.com/meuxx"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="GitLab"
          title="GitLab"
        >
          <FontAwesomeIcon icon={['fab', 'gitlab']} />
          <span>GitLab</span>
        </SidebarIconLink>
      </SidebarIcon>
      <SidebarIcon>
        <SidebarIconLink
          href="https://github.com/meuxx"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="GitHub"
          title="GitHub"
        >
          <FontAwesomeIcon icon={['fab', 'github']} />
          <span>GitHub</span>
        </SidebarIconLink>
      </SidebarIcon>
    </SidebarIconWrapper>
  </SidebarFooter>
)

export default Footer
