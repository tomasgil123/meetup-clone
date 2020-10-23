/* eslint-disable jsx-a11y/no-autofocus */
import React, { FC, useState } from 'react'
import { useHandleInputValidationCreateEvent } from 'src/components/formElements/formStep/utils'
import { SAVE_NAME } from 'src/reducers/formCreateEvent'

import FormStep from 'src/components/formElements/formStep'
import {
  ContainerInput,
  Title,
  Subtitle,
  InputElement,
  ErrorMessageElement,
} from 'src/components/formElements'

const Name: FC = () => {
  const [inputValue, setInputValue] = useState('')

  const [exit, errorMessage, onValidateInput] = useHandleInputValidationCreateEvent({
    typeAction: SAVE_NAME,
    input: inputValue,
  })

  return (
    <FormStep exit={exit} onClickButton={onValidateInput}>
      <ContainerInput>
        <Title>Name</Title>
        <Subtitle>Complete with the name of your awesome event</Subtitle>
        <InputElement error={errorMessage}>
          <input
            value={inputValue}
            onChange={(e): void => {
              setInputValue(e.target.value)
            }}
            autoFocus
          />
        </InputElement>
        <ErrorMessageElement>{errorMessage}</ErrorMessageElement>
      </ContainerInput>
    </FormStep>
  )
}

export default Name
