import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import { color, font, breakpoints } from './theme'

const GlobalStyle = createGlobalStyle`
  ${normalize}

  *, *:after, *:before {
    box-sizing: border-box;
  }

  body {
    background: ${color.bg};
    color: ${color.fg};
    font-family: ${font.family};
    font-size: 16pt;
    font-weight: ${font.weight};
    line-height: 1.75em;
    
    @media screen and ${breakpoints.xlarge} {
      font-size: 12pt;
    }
  }
`
export default GlobalStyle
