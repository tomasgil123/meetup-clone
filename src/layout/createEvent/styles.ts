import styled from 'styled-components'
import { space, colors, breakpoints } from 'src/tokens'

const SubmitSection = styled.div`
  width: 100%;
  height: ${space.s24};
  background-color: ${colors.base.white};
  display: flex;
  align-items: center;
  z-index: 9;
  border-top: 1px solid ${colors.base.borders};
  position: fixed;
  bottom: 0px;
  overflow-x: hidden;
`
const ContainerSubmitButton = styled.div`
  padding-top: ${space.s4};
  padding-bottom: ${space.s6};
  overflow-x: hidden;
  width: 100%;
  margin: auto;
  max-width: 500px;
  display: flex;
  justify-content: center;
  background-color: ${colors.base.white};
  z-index: 10;
  button {
    width: 50%;
  }
  @media (min-width: ${breakpoints.md}) {
    justify-content: flex-end;
    button {
      width: 100%;
    }
  }
`

const ContainerPage = styled.div`
  overflow-x: hidden;
`

export { SubmitSection, ContainerSubmitButton, ContainerPage }
