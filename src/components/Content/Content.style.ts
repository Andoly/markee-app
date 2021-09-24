import styled, { css } from 'styled-components/macro'
import { FileActiveUrl } from 'ui/icons'

export const MainContent = styled.main`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    flex-grow: 5;
    flex-wrap: wrap;
    padding: 2.5rem;
  `}
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 3rem;
`

export const Input = styled.input`
  background: url(${FileActiveUrl}) left calc(50% - 1px) no-repeat;
  border: 0;
  flex-grow: 1;
  font-size: 1.6rem;
  padding: 5px;
  padding-left: 3rem;

  &:focus {
    outline: none;
  }
`

export const ContentArticle = styled.article`
  display: flex;
  align-items: center;
  height: calc(100vh - 90px );
  justify-content: space-between;
`

export const Textarea = styled.textarea`
  background: transparent;
  border: 0;
  font: 1.6rem "Inconsolata", "Courier New", Courier;
  width: 48%;
  height: 100%;
  padding: 2rem;
  resize: none;

  &:focus {
    outline: none;
  }
`

export const ContentSection = styled.section`
  ${({ theme }) => css`
    background: transparent;
    height: 100%;
    font-size: 1.6rem;
    padding: 2rem;
    position: relative;
    width: 48%;

    &::before {
      background: ${theme.colors.gray};
      content: "";
      height: 96%;
      left: -4%;
      position: absolute;
      top: 4%;
      width: 2px;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-top: 0;
    }
  `}
`
