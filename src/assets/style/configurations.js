import { createGlobalStyle } from 'styled-components'
import commonGlobalStyle from './commonGlobalStyle'
import createButtons from './createButtons'

const Breakpoints = {
  xs: '640px',
  sm: '830px',
  md: '1100px',
  lg: '1500px'
}

const Colors = {
  c_main: '#ee6123',
  c_secondary: '#61b3de'
}

const Spaces = {
  0: '0',
  4: '4px',
  8: '8px',
  16: '16px',
  24: '24px',
  32: '32px',
  40: '40px',
  48: '48px'
}

const Fonts = {
  default: 'Roboto, sans-serif',
  secondary: 'Raleway, sans-serif'
}
const FontSize = {
  12: '12px',
  14: '14px',
  16: '16px',
  18: '18px'
}
const FontWeight = {
  light: 300,
  normal: 400,
  medium: 600,
  bold: 700
}
const Titles = {
  h1: `
    font-family: ${Fonts.default};
    font-weight: ${FontWeight.normal};
    font-size: ${FontSize.lg};
  `,
  h2: `
    font-family: ${Fonts.default};
    font-weight: ${FontWeight.normal};
    font-size: ${FontSize.md};
  `,
  h3: `
    font-family: ${Fonts.default};
    font-weight: ${FontWeight.normal};
    font-size: ${FontSize.sm};
  `,
  paragraph: ``
}




/** THEME */
export const Theme = {
  space: Spaces,
  breakpoint: Breakpoints,
  color: Colors,
  button: createButtons(Colors, FontWeight),
  typography: {
    fontFamily: Fonts,
    fontSize: FontSize,
    fontWeight: FontWeight,
    ...Titles
  }
}

/** GLOBAL */
export const GlobalStyle = createGlobalStyle`${commonGlobalStyle(Breakpoints, Colors, Spaces, Fonts)}`
