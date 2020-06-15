import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useGoal } from 'gatsby-plugin-fathom'

import { SidebarFooter, SidebarIconWrapper, SidebarIcon, SidebarIconLink } from '../styles/styles'

const Footer: React.FC = () => {
  const handleMailGoal = useGoal('NMFGPZ35')
  const handleGitHubGoal = useGoal('TUDCIJWD')
  const handleLinkedInGoal = useGoal('VN1YOMWA')

  return (
    <SidebarFooter>
      <SidebarIconWrapper>
        <SidebarIcon>
          <SidebarIconLink
            href="mailto:contact@pablo.dev"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Email"
            title="Email"
            onClick={handleMailGoal}
          >
            <FontAwesomeIcon icon={['far', 'envelope']} />
            <span>Email</span>
          </SidebarIconLink>
        </SidebarIcon>
        <SidebarIcon>
          <SidebarIconLink
            href="https://github.com/meuxx"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="GitHub"
            title="GitHub"
            onClick={handleGitHubGoal}
          >
            <FontAwesomeIcon icon={['fab', 'github']} />
            <span>GitHub</span>
          </SidebarIconLink>
        </SidebarIcon>
        <SidebarIcon>
          <SidebarIconLink
            href="https://www.linkedin.com/in/pablo-maceda"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="LinkedIn"
            title="LinkedIn"
            onClick={handleLinkedInGoal}
          >
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
            <span>LinkedIn</span>
          </SidebarIconLink>
        </SidebarIcon>
      </SidebarIconWrapper>
    </SidebarFooter>
  )
}

export default Footer
