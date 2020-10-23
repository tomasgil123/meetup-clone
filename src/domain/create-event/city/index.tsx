import React, { useContext, useState, useEffect } from 'react'
import { FormCreateEventContext, PageNavigationContext } from 'src/context'

import FormStep from 'src/components/formElements/formStep'
import { ContainerInput, Title, Subtitle, ErrorMessageElement } from 'src/components/formElements'
import { ContainerCities, CityElement, ContainerLoader } from './styles'
import Loader from 'src/components/loader'

//types
import { CityInterface } from 'src/types/events'

const City = (): JSX.Element => {
  const { saveInput } = useContext(FormCreateEventContext)
  const { goToNextStep } = useContext(PageNavigationContext)

  const [exit, setExit] = useState(false)
  const [errorOnRequest, setErrorOnRequest] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [cities, setCities] = useState([])

  useEffect(() => {
    const getCities = async (): Promise<void> => {
      const result = await new Promise<CityInterface[]>((resolve) => {
        setTimeout(() => {
          resolve([{ name: 'Buenos Aires' }, { name: 'La Plata' }])
        }, 1000)
      })
      setCities(result)
      setIsLoading(false)
    }
    getCities()
  }, [])

  const onPickCity = (city: CityInterface): void => {
    saveInput({ type: 'SAVE_CITY', payload: city.name })
    setExit(true)
    setTimeout(() => {
      goToNextStep()
    }, 500)
  }

  return (
    <FormStep exit={exit} withValidation={false}>
      <ContainerInput>
        <Title>City</Title>
        <Subtitle>Tell us in which city the event is going to take place</Subtitle>
        {isLoading ? (
          <ContainerLoader>
            <Loader secondary={true} />
          </ContainerLoader>
        ) : (
          <>
            {errorOnRequest ? (
              <ErrorMessageElement>An erro has occurr. Try again later</ErrorMessageElement>
            ) : (
              <ContainerCities>
                {cities.map((item) => (
                  <CityElement key={item.name} onClick={(): void => onPickCity(item)}>
                    {item.name}
                  </CityElement>
                ))}
              </ContainerCities>
            )}
          </>
        )}
      </ContainerInput>
    </FormStep>
  )
}

export default City
