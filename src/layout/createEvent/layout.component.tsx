import React from 'react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { stepsForm } from 'src/utils'
import { PageNavigationContext } from 'src/context'

import Header from 'src/components/header'
import { ContainerPage } from './styles'

import { getProgress, getNextStep } from './utils'

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  const router = useRouter()
  const [widthProgressBar, setWidthProgressBar] = React.useState(0)

  useEffect(() => {
    const currentStepUrl = router.pathname
    const progress = getProgress({ stepsForm, currentStepUrl })
    setWidthProgressBar(progress)
  }, [router.pathname])

  const goToNextStep = (): void => {
    const currentStepUrl = router.pathname
    const nextStep = getNextStep({ stepsForm, currentStepUrl })
    setTimeout(function () {
      router.push({
        pathname: `/${nextStep}`,
      })
    }, 500)
  }

  return (
    <PageNavigationContext.Provider value={{ goToNextStep }}>
      <Header />
      <ContainerPage>{children}</ContainerPage>
    </PageNavigationContext.Provider>
  )
}

export default Layout
