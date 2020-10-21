import React from 'react'
import styled from 'styled-components'
import { space, breakpoints, colors } from 'src/tokens'

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column-reverse;
  background-color: ${colors.base.purple};
  border-top: 1px solid ${colors.base.borders};
  padding-top: ${space.s6};
  padding-bottom: ${space.s6};
  padding-left: ${space.s12};
  padding-right: ${space.s12};
  align-items: center;
  @media (min-width: ${breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const Brand = styled.div`
  color: ${colors.base.white};
`

const Footer: React.FC = () => {
  return (
    <Container>
      <Brand>© Eventander 2020</Brand>
    </Container>
  )
}

export default Footer
