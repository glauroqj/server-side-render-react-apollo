import { css } from 'styled-components'

const commonGlobalStyle = (breakpoint, color, space, font) => {
  return css`
    html, body {
      font-family: ${font.default} !important;
      webkit-font-smoothing: antialiased;
    }
  `
}

export default commonGlobalStyle
