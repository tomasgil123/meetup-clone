import styled from 'styled-components'
import { space, colors } from 'src/tokens'

const ContainerCities = styled.div`
  max-width: 350px;
  margin: auto;
`

const CityElement = styled.div`
  border: 2px solid ${colors.base.borders};
  cursor: pointer;
  border-radius: ${space.s1};
  padding: ${space.s4};
  font-size: ${space.s5};
  margin: ${space.s2};
`

const ContainerLoader = styled.div`
  text-align: center;
  overflow: hidden;
`

export { ContainerCities, CityElement, ContainerLoader }
