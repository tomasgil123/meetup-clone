/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react'

interface Action {
  type: string
  payload: string
}

//I had to define the structure of the store otherwise typescript complains
//Im not giving createContext a default value

const formState = {
  name: '',
  date: '',
  details: '',
  city: '',
  saveInput: (action: Action): void => {},
}

export const FormCreateEventContext = createContext(formState)

const navigation = {
  goToNextStep: (): void => {},
}

export const PageNavigationContext = createContext(navigation)
