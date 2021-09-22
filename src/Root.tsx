import Aside from 'components/Aside/Aside'
import { theme } from 'resources/theme'
import { ThemeProvider, createGlobalStyle } from 'styled-components/macro'

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Aside />
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
