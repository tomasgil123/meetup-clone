import styled from 'styled-components'
import { colors, boxShadow, space } from 'src/tokens/index'

type ContainerButtonProps = {
  secondary: boolean
}

const ContainerButton = styled.button`
  height: ${space.s12};
  width: 100%;
  outline: none;
  border-width: 0px;
  border: ${(props: ContainerButtonProps): string =>
    props.secondary ? `2px solid ${colors.base.primaryOrange}` : `inherit`};
  font-size: ${space.s4} !important;
  max-width: ${space.s64};
  border-radius: 4px;
  color: ${(props: ContainerButtonProps): string =>
    props.secondary ? `${colors.base.primaryOrange}` : `${colors.base.white}`};
  background-color: ${(props: ContainerButtonProps): string =>
    props.secondary ? `${colors.base.white}` : `${colors.base.primaryOrange}`};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: ${boxShadow.shadow};
  position: relative;
  top: 0px;
  transition: top ease 0.3s;
  &:active {
    top: 3px;
    box-shadow: none;
  }
`

export { ContainerButton }
