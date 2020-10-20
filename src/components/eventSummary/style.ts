import styled from 'styled-components'
import { space, breakpoints, colors, boxShadow } from 'src/tokens'

const Container = styled.div`
  display: flex;
  box-shadow: ${boxShadow.shadow};
  border-top: 1px solid ${colors.base.borders};
  flex-direction: column;
  max-width: 700px;
  cursor: pointer;
  border-radius: ${space.s1};
  max-height: ${space.s56};
  @media (min-width: ${breakpoints.sm}) {
    flex-direction: row;
    height: ${space.s40};
  }
`

const ContainerImage = styled.div`
  height: 100%;
  border-top-left-radius: ${space.s1};
  border-top-right-radius: ${space.s1};
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (min-width: ${breakpoints.sm}) {
    flex: 1;
    border-bottom-left-radius: ${space.s1};
    border-top-right-radius: 0px;
  }
`

const Line = styled.div`
  border-left: ${space.s2} solid ${colors.base.primaryOrange};
  width: ${space.s2};
  background-color: ${colors.base.primaryOrange};
  @media (min-width: ${breakpoints.sm}) {
    height: 100%;
  }
`

const ContainerDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  padding: ${space.s3};
  @media (min-width: ${breakpoints.sm}) {
    flex: 3;
  }
`

const Title = styled.h2`
  color: ${colors.text.primary};
  margin-top: ${space.s3};
  margin-bottom: ${space.s3};
`

const Details = styled.div`
  color: ${colors.text.secondary};
  font-size: ${space.s4};
`

export { Container, ContainerImage, ContainerDetails, Title, Details, Line }
