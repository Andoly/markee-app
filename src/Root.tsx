import { theme } from 'resources/theme'
import { ThemeProvider, createGlobalStyle } from 'styled-components/macro'
import { App } from './app'

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  )
}

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: 'border-box';
  margin: 0;
}
html {
  font-size: 62.5%;
}
body {
  font-family: 'DM Sans', sans-serif;
}
`

export default Root
