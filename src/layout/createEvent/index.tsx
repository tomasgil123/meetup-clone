import React from 'react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { stepsForm } from 'src/utils'
import { motion, AnimatePresence } from 'framer-motion'

import Header from 'src/components/header'
import MainButton from 'src/components/button'
import { SubmitSection, ContainerSubmitButton, ContainerPage } from './styles'

import { getProgress, getNextStep } from './utils'

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  const router = useRouter()
  const [showContent, setShowContent] = React.useState(true)
  const [widthProgressBar, setWidthProgressBar] = React.useState(0)

  useEffect(() => {
    const currentStepUrl = router.pathname
    const progress = getProgress({ stepsForm, currentStepUrl })
    setWidthProgressBar(progress)
    setShowContent(true)
  }, [router.pathname])

  const goToNextStep = (): void => {
    const currentStepUrl = router.pathname
    const nextStep = getNextStep({ stepsForm, currentStepUrl })
    setShowContent(false)
    setTimeout(function () {
      router.push({
        pathname: `/${nextStep}`,
      })
    }, 500)
  }

  return (
    <>
      <Header />
      <ContainerPage>
        <AnimatePresence>
          {showContent && (
            <motion.div
              key={router.pathname}
              initial={{ x: 300, opacity: 0 }}
              exit={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </ContainerPage>
      <SubmitSection>
        <ContainerSubmitButton>
          <MainButton
            text="Continue"
            onClickButton={goToNextStep}
            typeButton="button"
            secondary={false}
          />
        </ContainerSubmitButton>
      </SubmitSection>
    </>
  )
}

export default Layout
