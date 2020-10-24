import React, { FC } from 'react'

import DetailsComponent from 'src/domain/create-event/details'

import CreateEventLayout from 'src/layout/createEvent/layout.container'

//types
import PageWithLayout from 'src/types/pageWithLayout'

const Details: FC = () => {
  return <DetailsComponent />
}

;(Details as PageWithLayout).layout = CreateEventLayout

export default Details
