import React, { FC } from 'react'

import EndComponent from 'src/domain/create-event/end'

import CreateEventLayout from 'src/layout/createEvent/layout.container'

//types
import PageWithLayout from 'src/types/pageWithLayout'

const End: FC = () => {
  return <EndComponent />
}

;(End as PageWithLayout).layout = CreateEventLayout

export default End
