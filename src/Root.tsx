import { theme } from 'resources/theme'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    </ThemeProvider>
  )
}

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: 'border-box'
}
html {
  font-size: 62.5%;
}
body {
  font-family: 'DM Sans', sans-serif;
}
`

export default Root
