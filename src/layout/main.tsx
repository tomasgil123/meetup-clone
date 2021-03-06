import React, { useState } from 'react'
import { PossibleLangsContext } from 'src/context'
import { useFetchUser } from 'src/auth/user'

import Header from 'src/components/header'
import Footer from 'src/components/footer'
import { WrapperFooter } from './styles'

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  const [possibleLangs, setPossibleLangs] = useState([])
  const { user, loading } = useFetchUser()
  return (
    <>
      <Header isUserLoggedIn={user ? true : false} isUserLoading={loading} />
      <PossibleLangsContext.Provider value={{ setPossibleLangs: setPossibleLangs }}>
        {children}
      </PossibleLangsContext.Provider>
      <WrapperFooter>
        {possibleLangs.map((lang) => (
          <div key={lang}>{lang}</div>
        ))}
        <Footer />
      </WrapperFooter>
    </>
  )
}

export default Layout
