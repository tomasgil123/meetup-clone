import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import Confetti from 'react-dom-confetti'
import MainButton from 'src/components/button'
import Loader from 'src/components/loader'
import { motion } from 'framer-motion'
import { Title, Subtitle, ErrorMessageElement } from 'src/components/formElements'
import {
  ContainerLoader,
  ContainerEndComponent,
  ContainerButton,
  ContainerConfetti,
} from './styles'

const config = {
  angle: 90,
  spread: 198,
  startVelocity: 27,
  elementCount: 70,
  dragFriction: 0.12,
  duration: 3000,
  stagger: 3,
  width: '27px',
  height: '20px',
  perspective: '853px',
  colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
}

const End = (): JSX.Element => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [resultRequest, setResultRequest] = useState(false)
  const [confettiExplotion, setConfettiExplotion] = useState(false)

  useEffect(() => {
    const createEvent = async (): Promise<void> => {
      const result = await new Promise<boolean>((resolve) => {
        setTimeout(() => {
          resolve(true)
        }, 1000)
      })
      setIsLoading(false)
      setResultRequest(result)
      setTimeout(() => {
        setConfettiExplotion(true)
      }, 100)
    }
    createEvent()
  }, [])

  const goBackHome = (): void => {
    router.push({
      pathname: `/`,
    })
  }

  return (
    <ContainerEndComponent>
      {isLoading ? (
        <ContainerLoader>
          <Loader secondary={true} />
        </ContainerLoader>
      ) : (
        <>
          {resultRequest ? (
            <>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, transition: { duration: 2.5 } },
                  visible: { opacity: 1, transition: { duration: 2.5 } },
                }}
              >
                <Title>Woo! Your course has be created</Title>
                <Subtitle>Your course is ready</Subtitle>
                <ContainerButton>
                  <MainButton
                    text={'Go back home'}
                    onClickButton={goBackHome}
                    typeButton={'button'}
                    secondary={false}
                  />
                </ContainerButton>
              </motion.div>
              <ContainerConfetti>
                <Confetti active={confettiExplotion} config={config} />
              </ContainerConfetti>
            </>
          ) : (
            <ErrorMessageElement>An error has ocurred</ErrorMessageElement>
          )}
        </>
      )}
    </ContainerEndComponent>
  )
}

export default End
