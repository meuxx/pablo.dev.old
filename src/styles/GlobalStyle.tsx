import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { normalize } from 'styled-normalize'
import { library, config, dom } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import theme from './theme'

config.autoAddCss = false
library.add(fab, faEnvelope)
const fontawesome = dom.css()

const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${fontawesome}

  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    background: ${({ theme }) => theme.color.bg};
    color: ${({ theme }) => theme.color.fg};
    font-family: ${({ theme }) => theme.font.family};
    font-size: 14pt;
    font-weight: ${({ theme }) => theme.font.weight};
    line-height: 1.75em;

    @media screen and ${({ theme }) => theme.breakpoints.xlarge} {
      font-size: 12pt;
    }
  }
`

const Themed: React.FC = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>

export { GlobalStyle, Themed }
