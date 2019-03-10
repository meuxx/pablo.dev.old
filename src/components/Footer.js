import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <div className="inner">
          <ul className="icons">
            <li>
              <a
                href="mailto:contact:pablo.dev"
                className="icon fa-envelope-o"
                aria-label="Email"
              >
                <span className="label">Email</span>
              </a>
            </li>
            <li>
              <a
                href="https://gitlab.com/meuxx"
                className="icon fa-gitlab"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="GitLab"
              >
                <span className="label">GitLab</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/meuxx"
                className="icon fa-github"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="GitHub"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Footer
