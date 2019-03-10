import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <p className="image avatar">
            <img src={avatar} alt="" />
          </p>
          <h1>
            <strong>Pablo Maceda</strong>
            <br />
            <a href="contact@contact@pablo.dev">contact@pablo.dev</a>
            <br />
            <br />
            Back end developer at{' '}
            <a
              href="https://kooomo.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              kooomo.com
            </a>
            <br />
            London, UK
          </h1>
        </div>
        <Footer />
      </header>
    )
  }
}

export default Header
