import React from 'react'
import { useRouter } from 'next/router'
import { stepsForm } from 'src/utils'
import { PageNavigationContext } from 'src/context'

import Header from 'src/components/header'
import { ContainerPage } from './styles'

import { getNextStep } from './utils'

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  const router = useRouter()

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
