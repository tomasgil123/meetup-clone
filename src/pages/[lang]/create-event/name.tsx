/* eslint-disable jsx-a11y/no-autofocus */
import React, { FC } from 'react'

import NameComponent from 'src/domain/create-event/name'

import CreateEventLayout from 'src/layout/createEvent/layout.container'

//types
import PageWithLayout from 'src/types/pageWithLayout'

const Name: FC = () => {
  return <NameComponent />
}

;(Name as PageWithLayout).layout = CreateEventLayout

export default Name
