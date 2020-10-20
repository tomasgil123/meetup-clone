import React from 'react'

import MainButton from 'src/components/button'
import { Container, Title, Subtitle, ContainerButton } from './styleLanding'

const Landing = (): JSX.Element => {
  return (
    <Container>
      <Title>Busca eventos</Title>
      <Subtitle>Accede en un click a todos los eventos de tu ciudad</Subtitle>
      <ContainerButton>
        <MainButton
          typeButton={'button'}
          text={'Ver eventos'}
          secondary={false}
          onClickButton={undefined}
        />
      </ContainerButton>
    </Container>
  )
}

export default Landing
