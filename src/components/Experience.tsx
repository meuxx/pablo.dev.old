import React from 'react'
import { Section, SectionHeader, Experience as ExperienceArticle } from '../styles/styles'

interface ExperienceInterface {
  company: string
  location: string
  period: string
  description: string
}
const experienceData: ExperienceInterface[] = [
  {
    company: `Sainsbury's`,
    location: 'London, United Kingdom',
    period: 'August 2019 – Present',
    description: '',
  },
  {
    company: `Kooomo`,
    location: 'Dublin, Ireland',
    period: 'April 2014 – August 2019',
    description: `Developed and supported the ecommerce platform with special focus on performance improvements and the
    implementation of new technologies to satisfy the business needs. Creation of several internal tools to monitor the
    platform and to ensure the healthy status of it. Coordinated the delivery of new technology implementations
    alongside the Sysadmin team. During my last year in Kooomo I had the opportunity to lead the SRE team as well as a
    project to modernise the monolithic platform codebase.`,
  },
]

const Experience: React.FC = () => (
  <Section>
    <SectionHeader>
      <h2>Experience</h2>
    </SectionHeader>
    {experienceData.map(({ company, location, period, description }, index) => (
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
