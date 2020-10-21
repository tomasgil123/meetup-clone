/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react'

const navigation = {
  goToNextStep: (): void => {},
}

export const FormContext = createContext(navigation)
