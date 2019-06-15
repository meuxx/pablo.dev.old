import React from 'react'

const About: React.SFC = () => (
  <section id="one">
    <header>
      <h2>About me</h2>
    </header>
    <p>
      I&apos;m <strong>Pablo Maceda</strong>, back-end developer offering 5
      years of experience, with a solid background as PHP developer and a broad
      technical skill set. I have a passion for good design, clean code and good
      performance.
    </p>
    <p>
      As a self-taught developer, I always enjoy learning new tools and
      technologies.
    </p>

    <ul className="actions">
      <li>
        <a
          href="https://cv.pablo.dev"
          className="button"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Curriculum Vitae"
          title="Curriculum Vitae"
        >
          View CV
        </a>
      </li>
    </ul>
  </section>
)

export default About
