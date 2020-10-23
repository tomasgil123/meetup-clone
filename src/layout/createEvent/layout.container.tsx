/* eslint-disable @typescript-eslint/no-empty-function */
import React, { FC, useReducer } from 'react'
import { FormCreateEventContext } from 'src/context'
import { reducerFormCreateEvent } from 'src/reducers/formCreateEvent'

import Layout from './layout.component'

interface LayoutProps {
  children: React.ReactNode
}

const initialState = {
  name: 'to',
  date: '',
  details: '',
  city: '',
}

const LayoutContainer: FC = ({ children }: LayoutProps) => {
  const [state, dispatch] = useReducer(reducerFormCreateEvent, initialState)

  const { name, date, details, city } = state

  return (
    <FormCreateEventContext.Provider
      value={{
        name,
        date,
        details,
        city,
        saveInput: dispatch,
      }}
    >
      <Layout>{children}</Layout>
    </FormCreateEventContext.Provider>
  )
}

export default LayoutContainer
