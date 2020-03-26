const color = {
  bg: '#101010',
  fg: '#a2a2a2',
  fgBold: '#ffffff',
  fgLight: '#b2b2b2',

  accent: {
    bg: '#033E6B',
    fg: 'rgba(255,255,255,0.5)',
    fgBold: '#0B61A4',
    fgLight: 'rgba(255,255,255,0.4)',
  },
}

const size = {
  borderRadius: '0.35em',
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
  weightBold: '700',
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
