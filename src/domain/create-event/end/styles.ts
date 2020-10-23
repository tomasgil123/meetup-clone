import styled from 'styled-components'
import { ContainerInput } from 'src/components/formElements'

const ContainerEndComponent = styled(ContainerInput)`
  overflow: hidden;
  text-align: center;
  margin: auto;
`

const ContainerLoader = styled.div`
  text-align: center;
  overflow: hidden;
`

const ContainerButton = styled.div`
  button {
    margin: auto;
  }
`

const ContainerConfetti = styled.div`
  div {
    position: absolute !important;
    top: 30%;
    left: 50%;
  }
`

export { ContainerEndComponent, ContainerLoader, ContainerButton, ContainerConfetti }
