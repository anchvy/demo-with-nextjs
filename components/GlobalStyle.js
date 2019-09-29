import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  // reset
  * { 
    box-sizing: border-box; 
    margin: 0; 
    padding: 0;
    word-break: break-word;
  }
  
  html, body {
    height: 100%;
    font-size: 16px;
    font-family: 'Lato', sans-serif;
  }

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .font-subtitle {
    font-style: italic;
  }
`

export default GlobalStyle
