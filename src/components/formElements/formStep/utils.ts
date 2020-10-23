import { useContext, useState } from 'react'
import { FormCreateEventContext, PageNavigationContext } from 'src/context'
import * as Yup from 'yup'

const validationSchemas = {
  SAVE_NAME: {
    SAVE_NAME: Yup.string().required('Please, complete with your credit card number'),
  },
  SAVE_DATE: {
    SAVE_DATE: Yup.string().required(
      'Please, complete with the good thru date of your credit card'
    ),
  },
  SAVE_DETAILS: {
    SAVE_DETAILS: Yup.string().required(
      'Please, complete with name which appears in your credit card'
    ),
  },
  SAVE_CITY: {
    SAVE_CITY: Yup.string().required(
      'Please, complete with the cvv number which appears on the back of your card'
    ),
  },
}

interface HandleInputValidationProps {
  typeAction: string
  input: string
}

interface ValidateInputReturn {
  success: boolean
  error?: string
}

const validateInput = async ({
  typeAction,
  input,
}: HandleInputValidationProps): Promise<ValidateInputReturn> => {
  const objectToValidate = {}
  objectToValidate[typeAction] = input
  try {
    await Yup.object(validationSchemas[typeAction]).validate(objectToValidate)
    return { success: true }
  } catch (err) {
    return { success: false, error: err['errors'][0] }
  }
}

const useHandleInputValidationCreateEvent = ({
  typeAction,
  input,
}: HandleInputValidationProps): [boolean, string, () => void] => {
  const { saveInput } = useContext(FormCreateEventContext)
  const { goToNextStep } = useContext(PageNavigationContext)

  const [exit, setExit] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const onValidateInput = async (): Promise<void> => {
    const resultValidation = await validateInput({ typeAction, input })
    if (resultValidation.success) {
      saveInput({ type: typeAction, payload: input })
      setExit(true)
      setTimeout(() => {
        goToNextStep()
      }, 500)
    } else {
      setErrorMessage(resultValidation.error)
    }
  }
  return [exit, errorMessage, onValidateInput]
}

export { useHandleInputValidationCreateEvent }
