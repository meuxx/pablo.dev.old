const color = {
  bg: '#0A0A0A',
  fg: '#a2a2a2',
  fgBold: '#ffffff',
  fgLight: '#c2c2c2',

  accent: {
    bg: '#001e9a',
    fg: 'rgba(255,255,255,0.6)',
    fgBold: '#1573F4',
    fgLight: 'rgba(255,255,255,0.8)',
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
