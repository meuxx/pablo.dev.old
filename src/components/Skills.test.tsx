import React from 'react'
import { render } from '@testing-library/react'
import Skills from './Skills'

describe('Skills', () => {
  it('renders without crashing', () => {
    const { container } = render(<Skills />)

    expect(container).toBeDefined()
    expect(container).toMatchSnapshot()
  })
})
