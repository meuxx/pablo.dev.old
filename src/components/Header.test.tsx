import React from 'react'
import { renderComponent } from '../test-helpers'
import Header from './Header'

jest.mock('./Avatar', () => () => <div />)
jest.mock('./Footer', () => () => <div />)

describe('Header', () => {
  it('renders without crashing', () => {
    const { container } = renderComponent(<Header />)

    expect(container).toBeDefined()
    expect(container).toMatchSnapshot()
  })
})
