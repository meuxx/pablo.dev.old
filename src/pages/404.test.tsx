import React from 'react'
import { render } from '@testing-library/react'
import NotFoundPage from './404'

jest.mock('../components/Layout', () => () => <div />)

describe('404', () => {
  it('renders without crashing', () => {
    const { container } = render(<NotFoundPage />)

    expect(container).toBeDefined()
    expect(container).toMatchSnapshot()
  })
})
