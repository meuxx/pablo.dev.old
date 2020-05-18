import React from 'react'
import { mockComponent, renderComponent } from '../test-helpers'
import NotFoundPage from './404'

jest.mock('../components/Layout', () => mockComponent('Layout'))
jest.mock('gatsby-plugin-next-seo', () => ({
  GatsbySeo: mockComponent('GatsbySeo'),
}))

describe('404', () => {
  it('renders without crashing', () => {
    const { container } = renderComponent(<NotFoundPage />)

    expect(container).toBeDefined()
    expect(container).toMatchSnapshot()
  })
})
