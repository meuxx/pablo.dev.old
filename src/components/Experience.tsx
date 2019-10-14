import React from 'react'
import { Section, SectionHeader, Experience as ExperienceArticle } from '../styles/styles'

interface ExperienceInterface {
  company: string
  location: string
  period: string
  description: string
}

const Experience: React.FC<{ data: ExperienceInterface[] }> = ({ data }) => (
  <Section>
    <SectionHeader>
      <h2>Experience</h2>
    </SectionHeader>
    {data.map(({ company, location, period, description }, index) => (
      <ExperienceArticle key={`experience-${index}`}>
        <h3>
          {company} ({location}) <strong>{period}</strong>
        </h3>
        <p>{description}</p>
      </ExperienceArticle>
    ))}
  </Section>
)

export default Experience
