import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer: React.SFC = () => (
  <footer id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a
            href="mailto:contact@pablo.dev"
            className="icon"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Email"
            title="Email"
          >
            <FontAwesomeIcon icon={['far', 'envelope']} />
            <span className="label">Email</span>
          </a>
        </li>
        <li>
          <a
            href="https://gitlab.com/meuxx"
            className="icon"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="GitLab"
            title="GitLab"
          >
            <FontAwesomeIcon icon={['fab', 'gitlab']} />
            <span className="label">GitLab</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/meuxx"
            className="icon"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="GitHub"
            title="GitHub"
          >
            <FontAwesomeIcon icon={['fab', 'github']} />
            <span className="label">GitHub</span>
          </a>
        </li>
      </ul>
    </div>
  </footer>
)

export default Footer
