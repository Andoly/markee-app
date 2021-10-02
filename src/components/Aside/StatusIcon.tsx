import styled, { keyframes } from 'styled-components'
import * as Icon from 'ui/icons'

export type StatusIconProps = {
  status: 'editing' | 'saving' | 'saved';
  className?: string;
};

const EditStatus = styled(Icon.Ellipse)`
  margin-right: 2px;
`

export function StatusIcon ({ status = 'saved', className }: StatusIconProps) {
  const Comp = {
    editing: EditStatus,
    saving: LoadingStatus,
    saved: Icon.Check,
  }[status]

  return <Comp className={className} />
}

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(359deg);
  }
`

const LoadingStatus = styled(Icon.Loading)`
  animation: ${rotation} 1s infinite linear;
`
