import React, { FC } from 'react'

import CreateEventLayout from 'src/layout/createEvent'

//types
import PageWithLayout from 'src/types/pageWithLayout'

const Name: FC = () => {
  return <div>Name -----</div>
}

;(Name as PageWithLayout).layout = CreateEventLayout

export default Name
