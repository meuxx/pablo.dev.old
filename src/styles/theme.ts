const color = {
  bg: '#101010',
  fg: '#a2a2a2',
  fgBold: '#ffffff',
  fgLight: '#b2b2b2',
  border: '#efefef',
  borderBg: '#f7f7f7',
  border2: '#dfdfdf',
  border2Bg: '#e7e7e7',

  accent1: {
    bg: '#0B61A4',
    fg: 'mix(#0B61A4, #ffffff, 25%)',
    fgBold: '#ffffff',
    fgLight: 'mix(#0B61A4, #ffffff, 40%)',
    border: 'rgba(255,255,255,0.25)',
    borderBg: 'rgba(255,255,255,0.075)',
    border2: 'rgba(255,255,255,0.5)',
    border2Bg: 'rgba(255,255,255,0.2)',
  },

  accent2: {
    bg: '#033E6B',
    fg: 'rgba(255,255,255,0.5)',
    fgBold: '#ffffff',
    fgLight: 'rgba(255,255,255,0.4)',
    border: 'rgba(255,255,255,0.25)',
    borderBg: 'rgba(255,255,255,0.075)',
    border2: 'rgba(255,255,255,0.5)',
    border2Bg: 'rgba(255,255,255,0.2)',
  },
}

const size = {
  borderRadius: '0.35em',
  elementHeight: '2.75em',
  elementMargin: '2em',
  header: {
    width: {
      default: '24%',
      large: '30%',
    },
    padding: {
      default: '2em',
      large: '3em',
      medium: '4em',
      small: '1.5em',
      xsmall: '1.5em',
    },
  },
}

const font = {
  family: `'Source Sans Pro', Helvetica, sans-serif`,
  familyFixed: `'Courier New', monospace`,
  weight: '400',
  weightBold: '400',
}

const transition = '0.2s'

const breakpoints = {
  xlarge: '(max-width: 1800px)',
  large: '(max-width: 1280px)',
  medium: '(max-width: 980px)',
  small: '(max-width: 736px)',
  xsmall: '(max-width: 480px)',
}

export { color, size, font, transition, breakpoints }
