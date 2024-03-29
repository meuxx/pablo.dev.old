import React from 'react'
import { Section, SectionHeader, Button } from '../styles/styles'
import useFathomGoal from '../hooks/useFathomGoal'

const About: React.FC = () => {
  const handleGoal = useFathomGoal('V5LKNTOU')

  return (
    <Section>
      <SectionHeader>
        <h2>About me</h2>
      </SectionHeader>
      <p>
        I&apos;m <strong>Pablo Maceda</strong>, back-end developer offering 6+ years of experience, with a solid
        background as PHP developer currently working with NodeJS and React. I have a broad technical skill set, passion
        for clean code and good performance.
      </p>
      <p>As a self-taught developer, I always enjoy learning new tools and technologies.</p>

      <Button
        href="https://cv.pablo.dev"
        className="button"
        rel="noopener noreferrer"
        target="_blank"
        aria-label="Curriculum Vitae"
        title="Curriculum Vitae"
        onClick={handleGoal}
      >
        View CV
      </Button>
    </Section>
  )
}

export default About
