import React, { FC, useState } from 'react'
import { useHandleInputValidationCreateEvent } from 'src/components/formElements/formStep/utils'
import { SAVE_DETAILS } from 'src/reducers/formCreateEvent'

import FormStep from 'src/components/formElements/formStep'
import {
  ContainerInput,
  Title,
  Subtitle,
  TextareaElement,
  ErrorMessageElement,
} from 'src/components/formElements'

const Details: FC = () => {
  const [inputValue, setInputValue] = useState('')

  const [exit, errorMessage, onValidateInput] = useHandleInputValidationCreateEvent({
    typeAction: SAVE_DETAILS,
    input: inputValue,
  })
  return (
    <FormStep exit={exit} onClickButton={onValidateInput}>
      <ContainerInput>
        <Title>Name</Title>
        <Subtitle>Complete with the name of your awesome event</Subtitle>
        <TextareaElement
          rows={6}
          value={inputValue}
          onChange={(e): void => {
            setInputValue(e.target.value)
          }}
          error={errorMessage}
        />
        <ErrorMessageElement>{errorMessage}</ErrorMessageElement>
      </ContainerInput>
    </FormStep>
  )
}

export default Details
