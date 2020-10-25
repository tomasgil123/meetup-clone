import React from 'react'

import {
  Container,
  SectionTitle,
  ContainerInfo,
  SectionDetails,
  Image,
  Title,
  Details,
  SectionDateAndTemperature,
  Data,
  DataHint,
  DataText,
  Participants,
  SubmitSection,
  ContainerSubmitButton,
} from './styles'
import MainButton from 'src/components/button'

//if user is not logged in, he can not participate in the event

//types
import { EventDetailsWithTranslations } from 'src/types/events'

const Event = ({
  name,
  imgSrc,
  details,
  date,
  numberParticipants,
  temperature,
  translations,
}: EventDetailsWithTranslations): JSX.Element => {
  return (
    <Container>
      <SectionTitle>
        <Title>{name}</Title>
      </SectionTitle>
      <ContainerInfo>
        <SectionDateAndTemperature>
          <Data>
            <DataHint>{translations.date}</DataHint>
            <DataText>{date}</DataText>
          </Data>
          <Data>
            <DataHint>{translations.expectedTemperature}</DataHint>
            <DataText>{temperature}</DataText>
          </Data>
        </SectionDateAndTemperature>
        <SectionDetails>
          <Image>
            <img src={imgSrc} alt="" />
          </Image>
          <Details>{details}</Details>
          <Participants>{`${translations.participants}${numberParticipants}`}</Participants>
        </SectionDetails>
      </ContainerInfo>
      <SubmitSection>
        <ContainerSubmitButton>
          <MainButton
            typeButton={'button'}
            text={'Asistire'}
            onClickButton={undefined}
            secondary={false}
          />
        </ContainerSubmitButton>
      </SubmitSection>
    </Container>
  )
}

export default Event
