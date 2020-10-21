import React, { FC } from 'react'

import CreateEventLayout from 'src/layout/createEvent'

//types
import PageWithLayout from 'src/types/pageWithLayout'

const Date: FC = () => {
  return <div>Date</div>
}

;(Date as PageWithLayout).layout = CreateEventLayout

export default Date
