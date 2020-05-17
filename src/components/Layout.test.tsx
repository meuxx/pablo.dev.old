import React from 'react'
import { renderComponent } from '../test-helpers'
import Layout from './Layout'

jest.mock('./Header', () => () => <div />)

describe('Layout', () => {
  it('renders without crashing', () => {
    const { container } = renderComponent(<Layout />)

    expect(container).toBeDefined()
    expect(container).toMatchSnapshot()
  })
})
