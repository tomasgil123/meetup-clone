import React, { FC } from 'react'

import CreateEventLayout from 'src/layout/createEvent'

//types
import PageWithLayout from 'src/types/pageWithLayout'

const Details: FC = () => {
  return <div>Details</div>
}

;(Details as PageWithLayout).layout = CreateEventLayout

export default Details
