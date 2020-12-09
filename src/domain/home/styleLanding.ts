import styled from 'styled-components'
import { space, breakpoints, colors } from 'src/tokens'

const Container = styled.div`
  max-width: 600px;
  margin: auto;
  text-align: center;
  padding: ${space.s4};
`

const Title = styled.div`
  font-size: ${space.s6};
  padding-top: ${space.s12};
  color: ${colors.text.primary};
  @media (min-width: ${breakpoints.md}) {
    font-size: ${space.s10};
  }
`

const Subtitle = styled.div`
  font-size: ${space.s4};
  padding-top: ${space.s4};
  color: ${colors.text.secondary};
  @media (min-width: ${breakpoints.md}) {
    font-size: ${space.s5};
  }
`

const ContainerButton = styled.div`
  padding-top: ${space.s12};
  @media (min-width: ${breakpoints.md}) {
    padding-top: ${space.s24};
  }
  button {
    margin: auto;
  }
`

export { Container, ContainerButton, Title, Subtitle }
