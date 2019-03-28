import React from 'react'

import Footer from './Footer'
import Avatar from './Avatar'

export default () => (
  <header id="header">
    <div className="inner">
      <Avatar className="image avatar" />
      <h1>
        <strong>Pablo Maceda</strong>
        <br />{' '}
        <a
          href="mailto:contact@pablo.dev"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Contact email"
          title="Contact email"
        >
          contact@pablo.dev
        </a>
      </h1>
      <br />
      <h2>
        Back-end developer at{' '}
        <a
          href="https://www.kooomo.com/"
          rel="noopener noreferrer"
          target="_blank"
          title="Kooomo"
        >
          kooomo.com
        </a>
        <br /> London, UK
      </h2>
    </div>
    <Footer />
  </header>
)
