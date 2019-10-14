import React from 'react'
import { Section, SectionHeader, SkillSetWrapper, SkillSetTitle } from '../styles/styles'

interface SkillSetInterface {
  name: string
  skills: string[]
}

const Skills: React.FC<{ data: SkillSetInterface[] }> = ({ data }) => (
  <Section>
    <SectionHeader>
      <h2>Skills</h2>
    </SectionHeader>
    <SkillSetWrapper>
      {data.map((skillSet, index) => (
        <div key={`skillSet-${index}`}>
          <SkillSetTitle>{skillSet.name}</SkillSetTitle>
          <span>{skillSet.skills.join(', ')}</span>
        </div>
      ))}
    </SkillSetWrapper>
  </Section>
)

export default Skills
