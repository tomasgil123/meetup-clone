import React, { FC } from 'react'

import CreateEventLayout from 'src/layout/createEvent'

//types
import PageWithLayout from 'src/types/pageWithLayout'

const City: FC = () => {
  return <div>City</div>
}

;(City as PageWithLayout).layout = CreateEventLayout

export default City
