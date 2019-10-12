import React from 'react'
import { render } from '@testing-library/react'
import IndexPage from './index'

describe('index', () => {
  it('renders without crashing', () => {
    const { container } = render(<IndexPage />)

    expect(container).toBeDefined()
  })
})
