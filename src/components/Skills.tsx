import React from 'react'
import { Section, SectionHeader, SkillSetWrapper, SkillSetTitle } from '../styles/styles'

interface SkillSetInterface {
  name: string
  skills: string[]
}

const skillsData: SkillSetInterface[] = [
  {
    name: 'JavaScript',
    skills: ['ES6', 'NodeJS', 'TypeScript', 'jQuery', 'Express', 'React', 'Gatsby'],
  },
  {
    name: 'PHP',
    skills: ['Symfony', 'Laravel', 'Composer', 'PDO', 'Doctrine'],
  },
  {
    name: 'Web',
    skills: ['CSS3', 'HTML5', 'Semantic', 'SPA', 'Rest/GraphQL APIs'],
  },
  {
    name: 'Data Storage',
    skills: ['MySQL', 'Redis', 'Memcache', 'Cassandra', 'MongoDB', 'DynamoDB'],
  },
  {
    name: 'Tools',
    skills: [
      'Git',
      'SVN',
      'Docker',
      'Vagrant',
      'Nginx',
      'Apache',
      'HAProxy',
      'Ansible',
      'Kibana',
      'NewRelic',
      'Pingdom',
      'Grafana',
      'Prometheus',
      'Zabbix',
      'GitlabCI',
    ],
  },
  {
    name: 'Cloud',
    skills: ['AWS', 'S3', 'Route53', 'DigitalOcean', 'Netlify'],
  },
  {
    name: 'Scripting',
    skills: ['Python', 'Bash', 'Batch'],
  },
  {
    name: 'Other',
    skills: ['Scrum', 'Kanban', 'PCI Compliance', 'SEO'],
  },
]

const Skills: React.FC = () => (
  <Section>
    <SectionHeader>
      <h2>Skills</h2>
    </SectionHeader>
    <SkillSetWrapper>
      {skillsData.map((skillSet, index) => (
        <div key={`skillSet-${index}`}>
          <SkillSetTitle>{skillSet.name}</SkillSetTitle>
          <span>{skillSet.skills.join(', ')}</span>
        </div>
      ))}
    </SkillSetWrapper>
  </Section>
)

export default Skills
