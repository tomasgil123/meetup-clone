import React from 'react'

import Header from 'src/components/header'
import Footer from 'src/components/footer'
import { WrapperFooter } from './styles'

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <WrapperFooter>
        <Footer />
      </WrapperFooter>
    </>
  )
}

export default Layout
