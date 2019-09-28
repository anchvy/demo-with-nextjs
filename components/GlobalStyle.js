import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  // reset
  * { box-sizing: border-box; margin: 0; padding: 0 }
  
  html, body {
    height: 100%;
    font-size: 16px;
  }
`

export default GlobalStyle
