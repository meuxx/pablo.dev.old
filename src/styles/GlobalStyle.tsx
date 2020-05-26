import React from 'react'
import { createGlobalStyle, ThemeProvider, css } from 'styled-components'
import { normalize } from 'styled-normalize'
import { library, config, dom } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import theme from './theme'

config.autoAddCss = false
library.add(fab, faEnvelope)
const fontawesome = dom.css()

const GlobalStyle = createGlobalStyle(
  ({ theme }) => css`
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
      background: ${theme.color.bg};
      color: ${theme.color.fg};
      font-family: ${theme.font.family};
      font-size: 14pt;
      font-weight: ${theme.font.weight};
      line-height: 1.75em;

      @media screen and ${theme.breakpoints.xlarge} {
        font-size: 12pt;
      }
    }
  `
)

const Themed: React.FC = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>

export { GlobalStyle, Themed }
