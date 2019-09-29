import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  // reset
  * { 
    box-sizing: border-box; 
    margin: 0; 
    padding: 0;
    text-decoration: none;
  }
  
  html, body {
    height: 100%;
    font-size: 16px;
    font-family: 'Lato', sans-serif;
  }

  .font-subtitle {
    font-style: italic;
  }
`

export default GlobalStyle
