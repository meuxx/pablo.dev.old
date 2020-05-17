import React from 'react'
import { renderComponent } from '../test-helpers'
import About from './About'

describe('About', () => {
  it('renders without crashing', () => {
    const { container } = renderComponent(<About />)

    expect(container).toBeDefined()
    expect(container).toMatchSnapshot()
  })
})
