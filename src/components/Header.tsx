import React, { useMemo } from 'react'

import Avatar from './Avatar'
import Footer from './Footer'
import { Sidebar, SidebarMain, SidebarTitle, SidebarSubtitle, Link } from '../styles/styles'
import useFathomGoal from '../hooks/useFathomGoal'
import data from '../data.json'

const getShortUrl = (url: string): string => {
  try {
    const { hostname } = new URL(url)
    const domain = hostname.replace(/^(www\.)?/, '')
    return `${domain.charAt(0).toUpperCase()}${domain.slice(1)}`
  } catch (e) {
    return url
  }
}

const Header: React.FC = () => {
  const handleMailGoal = useFathomGoal('NMFGPZ35')
  const handleOrganizationGoal = useFathomGoal('HBXPURPT')

  const shortUrl = useMemo(() => getShortUrl(data.author.organizationUrl), [])

  return (
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
            onClick={handleMailGoal}
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
            onClick={handleOrganizationGoal}
          >
            {shortUrl}
          </Link>
          <br />
          {`${data.author.city}, ${data.author.country}`}
        </SidebarSubtitle>
      </SidebarMain>

      <Footer />
    </Sidebar>
  )
}

export default Header
