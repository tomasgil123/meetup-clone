import React from 'react'
import { useRouter } from 'next/router'

import MainButton from 'src/components/button'
import { Container, Title, Subtitle, ContainerButton } from './styleLanding'

//types
import { HomeLang } from 'src/types/screens'

interface Props {
  translations: HomeLang
  lang: string
}

const Landing = ({ lang, translations }: Props): JSX.Element => {
  const router = useRouter()

  const goToSearch = (): void => {
    router.push({
      pathname: `${lang}/search`,
    })
  }
  return (
    <Container>
      <Title>{translations.title}</Title>
      <Subtitle>{translations.subtitle}</Subtitle>
      <ContainerButton>
        <MainButton
          typeButton={'button'}
          text={translations.button}
          secondary={false}
          onClickButton={goToSearch}
        />
      </ContainerButton>
    </Container>
  )
}

export default Landing
