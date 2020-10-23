//types
interface FormInitialState {
  name: string
  date: string
  details: string
  city: string
}

interface Action {
  type: string
  payload: string
}

//type of actions
export const SAVE_NAME = 'SAVE_NAME'
export const SAVE_DATE = 'SAVE_DATE'
export const SAVE_DETAILS = 'SAVE_DETAILS'
export const SAVE_CITY = 'SAVE_CITY'

export function reducerFormCreateEvent(state: FormInitialState, action: Action): FormInitialState {
  switch (action.type) {
    case SAVE_NAME:
      return { ...state, name: action.payload }
    case SAVE_DATE:
      return { ...state, name: action.payload }
    case SAVE_DETAILS:
      return { ...state, name: action.payload }
    case SAVE_CITY:
      return { ...state, name: action.payload }
    default:
      throw new Error()
  }
}
