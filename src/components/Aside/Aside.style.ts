import styled, { css } from 'styled-components/macro'

export const AsideContainer = styled.aside`
  background: ${({ theme }) => theme.colors.black};
  height: 100vh;
  width: 33.2rem;
  padding: 3.2rem;
`
export const LinkLogo = styled.a`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`
export const Logo = styled.img`
  display: inline-block;
`

export const Archive = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: 1.6rem;
    position: relative;
    white-space: nowrap;
    overflow: hidden;

    &::before,
    &::after {
      background: ${theme.colors.primary};
      position: relative;
      display: inline-block;
      vertical-align: middle;
      content: "";
      height: 2px;
    }

    &::before {
      right: 0.3em;
      width: 20px;
      padding-right: 5px;
      margin-right: 5px;
    }

    &::after {
      left: 0.3em;
      width: 66%;
      padding-left: 5px;
      margin-left: 5px;
    }
  `}
`

const DefaultButton = styled.button`
  cursor: pointer;
`

export const ButtonPlus = styled(DefaultButton)`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: ${theme.colors.primary};
    color: ${theme.colors.lightBlack};
    margin: 3.2rem 0;
    height: 3.4rem;
    border: 0;
    border-radius: 0.4rem;
    font-size: 1.4rem;

    &:hover {
      background: ${theme.colors.primaryDark};
    }

    & svg {
      margin-right: 10px;
    }
  `}
`
