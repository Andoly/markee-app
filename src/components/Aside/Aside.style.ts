import styled, { css } from 'styled-components/macro'
import * as Icon from 'ui/icons'

export const AsideContainer = styled.aside`
  background: ${({ theme }) => theme.colors.black};
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

export const RemoveIcon = styled(Icon.Remove)`
  ${({ theme }) => css`
    width: 12px;
    cursor: pointer;
    display: none;
    margin: 0 0 0 auto;
    padding: 0;
  
    &:hover {
      color: ${theme.colors.primary};
    }
  `}
`

export const ArchivesList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

export const FileListItem = styled.li`
  position: relative;

`

export const FileItem = styled.a`
  ${({ theme }) => css`
    background: ${({ theme }) => theme.colors.black};
    border: 1px solid ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};

    border-radius: 4px;
    font-size: 1.6rem;
    margin-bottom: 6px;
    padding: 8px 20px;
    display: flex;
    justify-content: left;
    align-items: center;

    & svg {
      margin-right: 12px;
      padding-top: 2px;
      align-self: center;
    }
    &:hover {
      background-color: ${theme.colors.lightBlack};

      ${RemoveIcon} {
        display: block;
      }
    }
  `}
`
