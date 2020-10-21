import React, { FC } from 'react'

import Landing from 'src/domain/home/landing'
import MainLayout from 'src/layout/main'

//types
import PageWithLayout from 'src/types/pageWithLayout'

const Home: FC = () => {
  return (
    <div>
      <Landing />
    </div>
  )
}

;(Home as PageWithLayout).layout = MainLayout

export default Home
