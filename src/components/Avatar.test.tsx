import React from 'react'
import { renderComponent } from '../test-helpers'
import Avatar from './Avatar'
import * as Gatsby from 'gatsby'

const avatarMock = {
  file: {
    childImageSharp: {
      fluid: {
        tracedSVG: '',
        aspectRatio: 1,
        src: '/avatar.jpg',
        srcSet:
          '/avatar.jpg 50w,\n/avatar.jpg 100w,\n/avatar.jpg 200w,\n/avatar.jpg 300w,\n/avatar.jpg 400w,\n/avatar.jpg 851w',
        srcWebp: '/avatar.webp',
        srcSetWebp:
          '/avatar.webp 50w,\n/avatar.webp 100w,\n/avatar.webp 200w,\n/avatar.webp 300w,\n/avatar.webp 400w,\n/avatar.webp 851w',
        sizes: '(max-width: 200px) 100vw, 200px',
      },
    },
  },
}

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery')
useStaticQuery.mockImplementation(() => avatarMock)

describe('Avatar', () => {
  it('renders without crashing', () => {
    const { container } = renderComponent(<Avatar />)

    expect(container).toBeDefined()
    expect(container).toMatchSnapshot()
  })
})
