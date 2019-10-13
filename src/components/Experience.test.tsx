import React from 'react'
import { render } from '@testing-library/react'
import Experience from './Experience'

describe('Experience', () => {
  it('renders without crashing', () => {
    const { container } = render(<Experience />)

    expect(container).toBeDefined()
    expect(container).toMatchSnapshot()
  })
})
