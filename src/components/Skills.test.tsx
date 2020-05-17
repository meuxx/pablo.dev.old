import React from 'react'
import { renderComponent } from '../test-helpers'
import Skills from './Skills'

describe('Skills', () => {
  it('renders without crashing', () => {
    const data = [
      {
        name: 'SkillSet 1',
        skills: ['A', 'B', 'C'],
      },
      {
        name: 'SkillSet 2',
        skills: ['D', 'E', 'F'],
      },
    ]

    const { container } = renderComponent(<Skills data={data} />)

    expect(container).toBeDefined()
    expect(container).toMatchSnapshot()
  })
})
