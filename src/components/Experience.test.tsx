import React from 'react'
import { renderComponent } from '../test-helpers'
import Experience from './Experience'

describe('Experience', () => {
  it('renders without crashing', () => {
    const data = [
      {
        company: 'Test company 1',
        location: 'London, United Kingdom',
        period: 'January 2019 – Present',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec dolor leo. Interdum et malesuada fames ' +
          'ac ante ipsum primis in faucibus. Quisque vulputate volutpat nisi et auctor.',
      },
      {
        company: 'Test company 2',
        location: 'Tokyo, Japan',
        period: 'August 2008 – January 2019',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non sapien ligula. Integer dignissim ' +
          'luctus augue sit amet commodo. Nunc hendrerit interdum sapien sed pretium.',
      },
    ]

    const { container } = renderComponent(<Experience data={data} />)

    expect(container).toBeDefined()
    expect(container).toMatchSnapshot()
  })
})
