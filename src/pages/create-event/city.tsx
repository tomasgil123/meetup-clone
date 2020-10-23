import React, { FC } from 'react'

import CityComponent from 'src/domain/create-event/city'

import CreateEventLayout from 'src/layout/createEvent/layout.container'

//types
import PageWithLayout from 'src/types/pageWithLayout'

const City: FC = () => {
  return <CityComponent />
}

;(City as PageWithLayout).layout = CreateEventLayout

export default City
