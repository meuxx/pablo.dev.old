import styled from 'styled-components'
import { math, transparentize } from 'polished'
import GatsbyImg from 'gatsby-image'
import backgroundImage from '../images/background.png'

const Main = styled.main`
  margin-left: ${({ theme }) => theme.size.header.width.default};
  max-width: ${({ theme }) => math(`50em + ${theme.size.header.padding.default}`)};
  padding: ${({ theme }) => math(`${theme.size.header.padding.default} * 2`)}
    ${({ theme }) => theme.size.header.padding.default};
  width: calc(100% - ${({ theme }) => theme.size.header.width.default});

  @media screen and ${({ theme }) => theme.breakpoints.large} {
    margin-left: ${({ theme }) => theme.size.header.width.large};
    max-width: none;
    padding: ${({ theme }) => math(`${theme.size.header.padding.large} * 2`)}
      ${({ theme }) => theme.size.header.padding.large} ${({ theme }) => theme.size.header.padding.large}
      ${({ theme }) => theme.size.header.padding.large};
    width: calc(100% - ${({ theme }) => theme.size.header.width.large});
  }

  @media screen and ${({ theme }) => theme.breakpoints.medium} {
    margin: 0;
    padding: ${({ theme }) => math(`${theme.size.header.padding.medium} * 1.5`)}
      ${({ theme }) => theme.size.header.padding.medium};
    width: 100%;
  }

  @media screen and ${({ theme }) => theme.breakpoints.small} {
    padding: ${({ theme }) => math(`${theme.size.header.padding.small} * 1.5`)}
      ${({ theme }) => theme.size.header.padding.small}
      ${({ theme }) => math(`(${theme.size.header.padding.small} * 1.5) - ${theme.size.elementMargin}`)}
      ${({ theme }) => theme.size.header.padding.small};
  }
`

const Link = styled.a`
  transition: ${({ theme }) => `color ${theme.transition} ease-in-out, border-color ${theme.transition} ease-in-out`};
  border-bottom: dotted 1px;
  text-decoration: none;
  color: inherit;

  &:hover {
    border-bottom-color: transparent;
    color: ${({ theme }) => theme.color.fgBold};
    text-decoration: none;
  }
`

const PageLink = styled(Link)`
  color: ${({ theme }) => theme.color.accent.fgBold};
`

const Sidebar = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.accent.bg};
  background-attachment: scroll, fixed;
  background-image: url(${backgroundImage});
  background-repeat: repeat;
  color: ${({ theme }) => theme.color.accent.fg};
  height: 100%;
  left: 0;
  padding: ${({ theme }) => math(`${theme.size.header.padding.default} * 2`)}
    ${({ theme }) => theme.size.header.padding.default};
  position: fixed;
  text-align: right;
  top: 0;
  width: ${({ theme }) => theme.size.header.width.default};

  > * {
    flex-shrink: 0;
    width: 100%;
  }

  @media screen and ${({ theme }) => theme.breakpoints.large} {
    padding: ${({ theme }) => math(`${theme.size.header.padding.large} * 2`)}
      ${({ theme }) => theme.size.header.padding.large} ${({ theme }) => theme.size.header.padding.large}
      ${({ theme }) => theme.size.header.padding.large};
    width: ${({ theme }) => theme.size.header.width.large};
  }

  @media screen and ${({ theme }) => theme.breakpoints.medium} {
    background-attachment: scroll;
    background-position: top left, center center;
    background-size: auto, cover;
    left: auto;
    padding: ${({ theme }) => math(`${theme.size.header.padding.medium} * 1.5`)}
      ${({ theme }) => theme.size.header.padding.medium};
    position: relative;
    text-align: center;
    top: auto;
    width: 100%;
    min-height: 100vh;
    display: block;
  }

  @media screen and ${({ theme }) => theme.breakpoints.small} {
    padding: ${({ theme }) => math(`${theme.size.header.padding.small} * 1.5`)}
      ${({ theme }) => theme.size.header.padding.small};
  }

  @media screen and ${({ theme }) => theme.breakpoints.xsmall} {
    padding: ${({ theme }) => math(`${theme.size.header.padding.small} * 3`)}
      ${({ theme }) => theme.size.header.padding.small};
  }
`

const SidebarMain = styled.div`
  flex-grow: 1;
  margin: 0 0 ${({ theme }) => math(`${theme.size.header.padding.default} * 0.5`)} 0;
`

const SidebarTitle = styled.h1`
  font-weight: ${({ theme }) => theme.font.weightBold};

  color: ${({ theme }) => theme.color.accent.fg};
  font-size: 1.35em;
  line-height: 1.75em;
  margin: 0;

  strong {
    font-weight: ${({ theme }) => theme.font.weightBold};
    color: ${({ theme }) => theme.color.fgBold};
  }

  @media screen and ${({ theme }) => theme.breakpoints.large} {
    font-size: 1.25em;
  }

  @media screen and ${({ theme }) => theme.breakpoints.medium} {
    font-size: 1.75em;
  }

  @media screen and ${({ theme }) => theme.breakpoints.small} {
    font-size: 1.35em;
  }
`

const SidebarSubtitle = styled.h2`
  ${SidebarTitle}
  @media screen and ${({ theme }) => theme.breakpoints.medium} {
    font-size: 1.35em;
  }
  @media screen and ${({ theme }) => theme.breakpoints.small} {
    font-size: 1.35em;
  }
`

const SidebarFooter = styled.div`
  bottom: auto;
  left: auto;
  position: relative;
  width: 100%;

  @media screen and ${({ theme }) => theme.breakpoints.medium} {
    bottom: auto;
    left: auto;
    padding: ${({ theme }) => theme.size.header.padding.medium} ${({ theme }) => theme.size.header.padding.medium}
      ${({ theme }) => math(`${theme.size.header.padding.medium} * 1.5`)}
      ${({ theme }) => theme.size.header.padding.medium};
    position: relative;
    text-align: center;
    width: 100%;
  }
`

const SidebarIconWrapper = styled.ul`
  cursor: default;
  list-style: none;
  padding-left: 0;
  margin: 0;

  @media screen and ${({ theme }) => theme.breakpoints.medium} {
    margin: 0 0 ${({ theme }) => math(`${theme.size.elementMargin} * 0.5`)} 0;
  }
`

const SidebarIcon = styled.li`
  display: inline-block;
  padding: 0 1em 0 0;
  &:last-child {
    padding-right: 0;
  }
`

const SidebarIconLink = styled.a`
  transition: color ${({ theme }) => theme.transition} ease-in-out;
  text-decoration: none;
  font-size: 1.5em;
  border-bottom: none;
  position: relative;
  color: ${({ theme }) => theme.color.accent.fgLight};

  > span {
    display: none;
  }

  &:hover {
    color: ${({ theme }) => theme.color.fgBold};
  }
`

const Section = styled.section`
  margin: ${({ theme }) => theme.size.header.padding.default} 0 0 0;
  padding: ${({ theme }) => theme.size.header.padding.default} 0 0 0;

  &:first-child {
    margin-top: 0;
    padding-top: 0;
  }

  p {
    color: ${({ theme }) => theme.color.fgLight};
    position: relative;
    margin: 0 0 ${({ theme }) => theme.size.elementMargin} 0;

    strong {
      color: ${({ theme }) => theme.color.fgBold};
      font-weight: ${({ theme }) => theme.font.weightBold};
    }
  }

  @media screen and ${({ theme }) => theme.breakpoints.small} {
    margin: ${({ theme }) => theme.size.header.padding.small} 0 0 0;
    padding: ${({ theme }) => theme.size.header.padding.small} 0 0 0;
  }
`

const SectionHeader = styled.header`
  h1,
  h2 {
    color: ${({ theme }) => theme.color.fgBold};
    font-weight: ${({ theme }) => theme.font.weightBold};
  }

  h1 {
    margin: 0 0 1em;
    line-height: 1.5em;
  }

  h2 {
    margin: 0 0 1em;
    font-size: 1.5em;
    line-height: 1.5em;
  }

  @media screen and ${({ theme }) => theme.breakpoints.small} {
    h2 {
      font-size: 1.2em;
    }
  }
`

const Button = styled.a`
  appearance: none;
  transition: ${({ theme }) =>
    `background-color ${theme.transition} ease-in-out, color ${theme.transition} ease-in-out, border-color ${theme.transition} ease-in-out`};
  background-color: transparent;
  border-radius: ${({ theme }) => theme.size.borderRadius};
  border: solid 3px ${({ theme }) => theme.color.accent.fgBold};
  color: ${({ theme }) => theme.color.accent.fgBold};
  cursor: pointer;
  display: inline-block;
  font-weight: ${({ theme }) => theme.font.weightBold};
  height: calc(2.75em + 6px);
  line-height: 2.75em;
  min-width: 10em;
  padding: 0 1.5em;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    background-color: ${({ theme }) => transparentize(0.8, theme.color.accent.bg)};
  }

  &:active {
    background-color: ${({ theme }) => transparentize(0.7, theme.color.accent.bg)};
  }
`

const Avatar = styled(GatsbyImg)`
  border: 0;
  display: inline-block;
  position: relative;

  &:before {
    transition: opacity ${({ theme }) => theme.transition} ease-in-out;
    background: url(${backgroundImage});
    border-radius: ${({ theme }) => theme.size.borderRadius};
    content: '';
    display: block;
    height: 100%;
    left: 0;
    opacity: 0.5;
    position: absolute;
    top: 0;
    width: 100%;
  }

  border-radius: 100%;
  margin: 0 0 ${({ theme }) => math(`${theme.size.elementMargin} * 0.5`)} 0;
  width: 8em;

  &:before {
    display: none;
  }

  img {
    border-radius: 100%;
    width: 100%;
  }
`

const Experience = styled.article`
  h3 {
    color: ${({ theme }) => theme.color.fgBold};
    font-weight: ${({ theme }) => theme.font.weightBold};
    font-size: 1.25em;
    line-height: 1.5em;

    strong {
      color: ${({ theme }) => theme.color.accent.fgBold};
      font-weight: ${({ theme }) => theme.font.weightBold};
      float: right;
    }
  }

  @media screen and ${({ theme }) => theme.breakpoints.small} {
    h3 {
      font-size: 1em;
    }
  }
`

const SkillSetWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => math(`${theme.size.header.padding.default} * 0.5`)};

  @media screen and ${({ theme }) => theme.breakpoints.xsmall} {
    grid-template-columns: none;
  }
`

const SkillSetTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.color.accent.fgBold};
`

export {
  Main,
  Link,
  PageLink,
  Sidebar,
  SidebarMain,
  SidebarTitle,
  SidebarSubtitle,
  SidebarFooter,
  SidebarIconWrapper,
  SidebarIcon,
  SidebarIconLink,
  Avatar,
  Section,
  SectionHeader,
  Button,
  Experience,
  SkillSetWrapper,
  SkillSetTitle,
}
