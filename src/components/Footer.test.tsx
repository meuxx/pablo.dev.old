import React from 'react'
import { renderComponent } from '../test-helpers'
import Footer from './Footer'

describe('Footer', () => {
  it('renders without crashing', () => {
    const { container } = renderComponent(<Footer />)

    expect(container).toBeDefined()
    expect(container).toMatchSnapshot()
  })
})
