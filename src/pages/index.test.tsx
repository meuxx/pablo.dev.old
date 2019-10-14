import React from 'react'
import { render } from '@testing-library/react'
import IndexPage from './index'

jest.mock('../components/About', () => 'div')
jest.mock('../components/Experience', () => 'div')
jest.mock('../components/Skills', () => 'div')
jest.mock('../components/Layout', () => 'div')

describe('index', () => {
  it('renders without crashing', () => {
    const { container } = render(<IndexPage />)

    expect(container).toBeDefined()
  })
})
