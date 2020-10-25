import styled from 'styled-components'
import { space, breakpoints, colors, boxShadow } from 'src/tokens'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${space.s4};
  background-color: ${colors.base.background};
  min-height: 90vh;
`

const SectionTitle = styled.section`
  background-color: ${colors.base.white};
  padding-top: ${space.s4};
  padding-bottom: ${space.s4};
  border-bottom: 2px solid ${colors.base.borders};
`

const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  background-color: ${colors.base.background};
  margin: ${space.s2};
  @media (min-width: ${breakpoints.sm}) {
    flex-direction: row-reverse;
    margin: ${space.s5} auto;
    width: 100%;
  }
`

const SectionDetails = styled.section`
  flex: 2;
  width: 100%;
  display: flex;
  flex-direction: column;
`
const Image = styled.div`
  width: 100%;
  flex: 1;
  overflow: hidden;
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

const Title = styled.div`
  font-size: ${space.s6};
  font-weight: 600;
  color: ${colors.text.primary};
  max-width: 800px;
  width: 100%;
  margin: auto;
  padding: 0px ${space.s4};
  @media (min-width: ${breakpoints.sm}) {
    padding: 0px;
  }
`

const Details = styled.div`
  font-size: ${space.s4};
  color: ${colors.text.primary};
  padding-top: ${space.s4};
  padding-bottom: ${space.s4};
`

const SectionDateAndTemperature = styled.section`
  flex: 1;
  background-color: ${colors.base.white};
  padding: ${space.s4};
  border-radius: ${space.s1};
  display: flex;
  flex-direction: column;
  box-shadow: ${boxShadow.shadow};
  height: fit-content;
  margin: ${space.s2} 0px;
  @media (min-width: ${breakpoints.sm}) {
    margin-left: ${space.s4};
    margin-top: 0px;
    margin-bottom: 0px;
    margin-right: 0px;
    width: 100%;
  }
`

const Data = styled.div`
  display: flex;
  flex-direction: row;
`

const DataHint = styled.div`
  font-size: ${space.s4};
  color: ${colors.text.secondary};
  padding-right: ${space.s2};
`

const DataText = styled.div`
  font-size: ${space.s4};
  font-weight: 400;
`

const Participants = styled.div`
  font-size: ${space.s4};
  color: ${colors.text.primary};
  font-weight: 600;
`

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
  max-width: 800px;
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

export {
  Container,
  SectionTitle,
  ContainerInfo,
  SectionDetails,
  Title,
  Image,
  Details,
  SectionDateAndTemperature,
  Data,
  DataHint,
  DataText,
  Participants,
  SubmitSection,
  ContainerSubmitButton,
}
