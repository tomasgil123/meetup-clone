import React, { useState } from 'react'
import { useHandleInputValidationCreateEvent } from 'src/components/formElements/formStep/utils'

import { SAVE_DATE } from 'src/reducers/formCreateEvent'

import DatePicker from 'react-datepicker'
import FormStep from 'src/components/formElements/formStep'
import { ContainerInput, Title, Subtitle, ErrorMessageElement } from 'src/components/formElements'
import { ContainerDatePicker, ContainerErrorMessage } from './styles'

import 'react-datepicker/dist/react-datepicker.css'

const DateComponent = (): JSX.Element => {
  const [dateEvent, setDateEvent] = useState('')
  const yesterday = new Date()

  const [exit, errorMessage, onValidateInput] = useHandleInputValidationCreateEvent({
    typeAction: SAVE_DATE,
    input: dateEvent,
  })

  return (
    <FormStep exit={exit} onClickButton={onValidateInput}>
      <ContainerInput>
        <Title>Date of the event</Title>
        <Subtitle>Please, tell us when the event is taken place</Subtitle>
        <ContainerDatePicker>
          <DatePicker
            selected={dateEvent}
            onChange={(date): void => setDateEvent(date)}
            inline
            minDate={yesterday}
          />
        </ContainerDatePicker>
        {errorMessage !== '' && (
          <ContainerErrorMessage>
            <ErrorMessageElement>{errorMessage}</ErrorMessageElement>
          </ContainerErrorMessage>
        )}
      </ContainerInput>
    </FormStep>
  )
}

export default DateComponent
