import styled from 'styled-components'
import { math, transparentize } from 'polished'
import GatsbyImg from 'gatsby-image'
import { color, size, font, transition, breakpoints } from './theme'
import backgroundImage from '../images/background.png'

const headerWidth = size.header.width
const headerPad = size.header.padding

const Main = styled.main`
  margin-left: ${headerWidth.default};
  max-width: ${math(`50em + ${headerPad.default}`)};
  padding: ${math(`${headerPad.default} * 2`)} ${headerPad.default};
  width: calc(100% - ${headerWidth.default});

  @media screen and ${breakpoints.large} {
    margin-left: ${headerWidth.large};
    max-width: none;
    padding: ${math(`${headerPad.large} * 2`)} ${headerPad.large} ${headerPad.large} ${headerPad.large};
    width: calc(100% - ${headerWidth.large});
  }

  @media screen and ${breakpoints.medium} {
    margin: 0;
    padding: ${math(`${headerPad.medium} * 1.5`)} ${headerPad.medium};
    width: 100%;
  }

  @media screen and ${breakpoints.small} {
    padding: ${math(`${headerPad.small} * 1.5`)} ${headerPad.small}
      ${math(`(${headerPad.small} * 1.5) - ${size.elementMargin}`)} ${headerPad.small};
  }
`

const Link = styled.a`
  transition: color ${transition} ease-in-out, border-color ${transition} ease-in-out;
  border-bottom: dotted 1px;
  text-decoration: none;
  color: ${color.accent.bg};
`

const Sidebar = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  background-color: ${color.accent.bg};
  background-attachment: scroll, fixed;
  background-image: url(${backgroundImage});
  background-repeat: repeat;
  color: ${color.accent.fg};
  height: 100%;
  left: 0;
  padding: ${math(`${headerPad.default} * 2`)} ${headerPad.default};
  position: fixed;
  text-align: right;
  top: 0;
  width: ${headerWidth.default};

  > * {
    flex-shrink: 0;
    width: 100%;
  }

  @media screen and ${breakpoints.large} {
    padding: ${math(`${headerPad.large} * 2`)} ${headerPad.large} ${headerPad.large} ${headerPad.large};
    width: ${headerWidth.large};
  }

  @media screen and ${breakpoints.medium} {
    background-attachment: scroll;
    background-position: top left, center center;
    background-size: auto, cover;
    left: auto;
    padding: ${math(`${headerPad.medium} * 1.5`)} ${headerPad.medium};
    position: relative;
    text-align: center;
    top: auto;
    width: 100%;
    min-height: 100vh;
    display: block;
  }

  @media screen and ${breakpoints.small} {
    padding: ${math(`${headerPad.small} * 1.5`)} ${headerPad.small};
  }

  @media screen and ${breakpoints.xsmall} {
    padding: ${math(`${headerPad.small} * 3`)} ${headerPad.small};
  }
`

const SidebarMain = styled.div`
  flex-grow: 1;
  margin: 0 0 ${math(`${headerPad.default} * 0.5`)} 0;
`

const SidebarTitle = styled.h1`
  font-weight: ${font.weightBold};

  color: ${color.accent.fg};
  font-size: 1.35em;
  line-height: 1.75em;
  margin: 0;

  strong {
    font-weight: ${font.weightBold};
    color: ${color.fgBold};
  }

  @media screen and ${breakpoints.large} {
    font-size: 1.25em;
  }

  @media screen and ${breakpoints.medium} {
    font-size: 1.75em;
  }

  @media screen and ${breakpoints.small} {
    font-size: 1.35em;
  }
`

const SidebarSubtitle = styled(SidebarTitle).attrs({ as: 'h2' })`
  @media screen and ${breakpoints.medium} {
    font-size: 1.35em;
  }
  @media screen and ${breakpoints.small} {
    font-size: 1.35em;
  }
`

const SidebarLink = styled(Link)`
  color: inherit;

  &:hover {
    border-bottom-color: transparent;
    color: ${color.fgBold};
    text-decoration: none;
  }
`

const SidebarFooter = styled.div`
  bottom: auto;
  left: auto;
  position: relative;
  width: 100%;

  @media screen and ${breakpoints.medium} {
    bottom: auto;
    left: auto;
    padding: ${headerPad.medium} ${headerPad.medium} ${math(`${headerPad.medium} * 1.5`)} ${headerPad.medium};
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

  @media screen and ${breakpoints.medium} {
    margin: 0 0 ${math(`${size.elementMargin} * 0.5`)} 0;
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
  transition: color ${transition} ease-in-out;
  text-decoration: none;
  font-size: 1.5em;
  border-bottom: none;
  position: relative;
  color: ${color.accent.fgLight};

  > span {
    display: none;
  }

  &:hover {
    color: ${color.fgBold};
  }
`

const Section = styled.section`
  margin: ${headerPad.default} 0 0 0;
  padding: ${headerPad.default} 0 0 0;

  &:first-child {
    margin-top: 0;
    padding-top: 0;
  }

  p {
    color: ${color.fgLight};
    position: relative;
    margin: 0 0 ${size.elementMargin} 0;

    strong {
      color: ${color.fgBold};
      font-weight: ${font.weightBold};
    }
  }

  @media screen and ${breakpoints.small} {
    margin: ${headerPad.small} 0 0 0;
    padding: ${headerPad.small} 0 0 0;
  }
`

const SectionHeader = styled.header`
  h1,
  h2 {
    color: ${color.fgBold};
    font-weight: ${font.weightBold};
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

  @media screen and ${breakpoints.small} {
    h2 {
      font-size: 1.2em;
    }
  }
`

const Button = styled.a`
  appearance: none;
  transition: background-color ${transition} ease-in-out, color ${transition} ease-in-out, border-color 0.2s ease-in-out;
  background-color: transparent;
  border-radius: ${size.borderRadius};
  border: solid 3px ${color.accent.fgBold};
  color: ${color.accent.fgBold};
  cursor: pointer;
  display: inline-block;
  font-weight: bold;
  height: calc(2.75em + 6px);
  line-height: 2.75em;
  min-width: 10em;
  padding: 0 1.5em;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    background-color: ${transparentize(0.8, color.accent.bg)};
  }

  &:active {
    background-color: ${transparentize(0.6, color.accent.bg)};
  }
`

const Avatar = styled(GatsbyImg)`
  border: 0;
  display: inline-block;
  position: relative;

  &:before {
    transition: opacity ${transition} ease-in-out;
    background: url(${backgroundImage});
    border-radius: ${size.borderRadius};
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
  margin: 0 0 ${math(`${size.elementMargin} * 0.5`)} 0;
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
    color: ${color.accent.fgBold};
    font-weight: ${font.weightBold};
    font-size: 1.25em;
    line-height: 1.5em;

    strong {
      color: ${color.accent.fgBold};
      font-weight: ${font.weightBold};
      float: right;
    }
  }

  @media screen and ${breakpoints.small} {
    h3 {
      font-size: 1em;
    }
  }
`

const SkillSetWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${math(`${headerPad.default} * 0.5`)};

  @media screen and ${breakpoints.xsmall} {
    grid-template-columns: none;
  }
`

const SkillSetTitle = styled.h3`
  margin: 0;
  color: ${color.accent.fgBold};
`

export {
  Main,
  Link,
  Sidebar,
  SidebarMain,
  SidebarTitle,
  SidebarSubtitle,
  SidebarLink,
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
