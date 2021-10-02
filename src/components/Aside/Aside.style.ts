import styled, { css } from 'styled-components/macro'
import * as Icon from 'ui/icons'
import { StatusIconProps, StatusIcon } from './StatusIcon'

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
  margin: 0 0 0 auto;
  padding: 0;
`

export const ArchivesList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`
export const StatusIconStyled = styled(StatusIcon)<StatusIconProps>`
  ${({ status }) => css`
    position: absolute;
    right: 12px;
    top: 50%;
    margin-top: ${status === 'saving' ? -5 : 0}px;
    transform: translateY(-50%);
  `}
`

export const RemoveButton = styled(DefaultButton)`
  background: transparent;
  border: 0;
  display: none;
  margin: 0 0 0 auto;
  padding: 0;
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 12px;
`

export const FileListItem = styled.li`
  ${({ theme }) => css`
    position: relative;

    &:hover {
      ${ArchiveItem} {
        background-color: ${theme.colors.lightBlack};
      }
      ${RemoveButton} {
        display: block;
      }
    }
  `}
`

type FileItemLinkProps = {
  active: boolean
}

export const ArchiveItem = styled.a<FileItemLinkProps>`
  ${({ theme, active }) => css`
    text-decoration: none;
    background: url("${active ? Icon.FileActiveUrl : Icon.FileUrl}") 10px 50%
      no-repeat;
    display: flex;
    align-items: center;
    border-radius: 4px;
    color: ${theme.colors.white};
    font-size: 1.6rem;
    margin-bottom: 4px;
    padding: 8px 32px 8px 50px;
    box-sizing: border-box;
    height: 3.7rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow-wrap: break-word;

    ${active &&
    css`
      background-color: ${theme.colors.lightBlack};
    `};
  `}
`
