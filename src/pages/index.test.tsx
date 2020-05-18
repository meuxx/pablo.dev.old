import React from 'react'
import { renderComponent, mockComponent } from '../test-helpers'
import IndexPage from './index'

jest.mock('../components/About', () => () => <div />)
jest.mock('../components/Experience', () => () => <div />)
jest.mock('../components/Skills', () => () => <div />)
jest.mock('../components/Layout', () => mockComponent('Layout'))
jest.mock('gatsby-plugin-next-seo', () => ({
  GatsbySeo: mockComponent('GatsbySeo'),
}))

describe('index', () => {
  it('renders without crashing', () => {
    const { container } = renderComponent(<IndexPage />)

    expect(container).toBeDefined()
    expect(container).toMatchSnapshot()
  })
})
