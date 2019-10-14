import React from 'react'
import { render } from '@testing-library/react'
import Layout from './Layout'

jest.mock('./Header', () => () => <div />)

describe('Layout', () => {
  it('renders without crashing', () => {
    const { container } = render(<Layout />)

    expect(container).toBeDefined()
    expect(container).toMatchSnapshot()
  })
})
