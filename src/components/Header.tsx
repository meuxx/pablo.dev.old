import React from 'react'

import Avatar from './Avatar'
import Footer from './Footer'
import { Sidebar, SidebarMain, SidebarTitle, SidebarSubtitle, Link } from '../styles/styles'
import data from '../data.json'

const getShortUrl = (url: string) => {
  const { hostname } = new URL(url)
  return hostname.replace(/^(www\.)?/, '')
}

const Header: React.FC = () => (
  <Sidebar>
    <SidebarMain>
      <Avatar />

      <SidebarTitle>
        <strong>{data.site.author}</strong>
        <br />{' '}
        <Link
          href={`mailto:${data.author.email}`}
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Contact email"
          title="Contact email"
        >
          {data.author.email}
        </Link>
      </SidebarTitle>

      <br />

      <SidebarSubtitle>
        {data.author.jobTitle} at{' '}
        <Link
          href={data.author.organizationUrl}
          rel="noopener noreferrer"
          target="_blank"
          title={data.author.organizationName}
        >
          {getShortUrl(data.author.organizationUrl)}
        </Link>
        <br />
        {`${data.author.city}, ${data.author.country}`}
      </SidebarSubtitle>
    </SidebarMain>

    <Footer />
  </Sidebar>
)

export default Header
