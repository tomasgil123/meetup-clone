import React from 'react'

import { Container, ContainerDetails, ContainerImage, Title, Details, Line } from './style'

//types
import { EventSummary } from 'src/types/events'

const EventSummaryCard = ({ name, imgSrc, details }: EventSummary): JSX.Element => {
  return (
    <Container>
      <ContainerImage>
        <Line />
        <img src={imgSrc} alt="" />
      </ContainerImage>
      <ContainerDetails>
        <Title>{name}</Title>
        <Details>{details}</Details>
      </ContainerDetails>
    </Container>
  )
}

export default EventSummaryCard
