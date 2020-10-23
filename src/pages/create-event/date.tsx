import React, { FC } from 'react'
import DateComponent from 'src/domain/create-event/date'

import CreateEventLayout from 'src/layout/createEvent/layout.container'

//types
import PageWithLayout from 'src/types/pageWithLayout'

const Date: FC = () => {
  return <DateComponent />
}

;(Date as PageWithLayout).layout = CreateEventLayout

export default Date
