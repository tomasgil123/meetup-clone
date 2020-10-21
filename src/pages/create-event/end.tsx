import React, { FC } from 'react'

import CreateEventLayout from 'src/layout/createEvent'

//types
import PageWithLayout from 'src/types/pageWithLayout'

const End: FC = () => {
  return <div>End</div>
}

;(End as PageWithLayout).layout = CreateEventLayout

export default End
