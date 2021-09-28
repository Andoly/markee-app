import { useRef } from 'react'
import Aside from 'components/Aside/Aside'
import { Content } from 'components/Content/Content'
import { theme } from 'resources/theme'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components/macro'

const Root = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Main>
        <Aside inputRef={inputRef} />
        <Content inputRef={inputRef} />
      </Main>
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
const Main = styled.main`
  display: flex;
  height: 100vh;
`

export default Root
