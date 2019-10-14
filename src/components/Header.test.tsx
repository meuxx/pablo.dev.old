import React from 'react'
import { render } from '@testing-library/react'
import Header from './Header'

jest.mock('./Avatar', () => () => <div />)
jest.mock('./Footer', () => () => <div />)

describe('Header', () => {
  it('renders without crashing', () => {
    const { container } = render(<Header />)

    expect(container).toBeDefined()
    expect(container).toMatchSnapshot()
  })
})
