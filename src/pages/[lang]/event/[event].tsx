/* eslint-disable no-empty */
import React, { FC } from 'react'
import { getLanguageCodes, getLanguageByCode } from 'src/internationalization'
import { formatDate } from 'src/utils/dates'

import EventComponent from 'src/domain/event'

import Layout from 'src/layout/event'

//mock data
import { events } from './data'

//types
import { EventDetailsWithTranslations } from 'src/types/events'
import PageWithLayout from 'src/types/pageWithLayout'

interface Props {
  event: EventDetailsWithTranslations
}

const Event: FC<Props> = ({ event }) => {
  return (
    <EventComponent
      name={event.name}
      imgSrc={event.imgSrc}
      details={event.details}
      date={event.date}
      numberParticipants={event.numberParticipants}
      temperature={event.temperature}
      translations={event.translations}
      city={event.city}
    />
  )
}
;(Event as PageWithLayout).layout = Layout

export default Event

type Params = {
  params: {
    event: string
    lang: string
  }
}

//tenemos que hacer la request para pedir el evento
//Estamos teniendo este error fetch TypeError: Only absolute URLs are supported

export async function getStaticProps({ params }: Params): Promise<unknown> {
  const translations = getLanguageByCode(params.lang).event

  const event = events.find((event) => event.event === params.event)
  event['translations'] = translations

  const todayPlusSevenDays = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000)
  const dateEventEnFormat = new Date(formatDate(event.date))
  const res = null
  //api returns temperature forecast only for the next 7 days. If event is not happening within the next 7 days
  //it does not make sense to call the api
  event['temperature'] = 0
  // if (todayPlusSevenDays > dateEventEnFormat) {
  //   try {
  //     res = await (
  //       await fetch(
  //         `${process.env.NEXT_PUBLIC_BASE_URL}/api/getTemperatureForecast?lat=${event.city.lat}&lon=${event.city.lon}&dateEvent=${event.date}`
  //       )
  //     ).json()
  //     event['temperature'] = res.temperature
  //   } catch (err) {
  //     console.log('err', err)
  //     event['temperature'] = 0
  //   }
  // }

  return {
    props: {
      event: {
        ...event,
      },
    },
  }
}

//aca solo tenemos que dejar el campo event, el resto hay que ponerlo en otro lado

export async function getStaticPaths(): Promise<unknown> {
  const codes = getLanguageCodes()
  const events = [
    {
      event: '1',
      city: { lat: '-34.603722', lon: '-58.381592' },
      date: '26/10/2020',
      details: '1aaaaa',
      imgSrc:
        'https://res.cloudinary.com/tomasgil123/image/upload/v1506275268/curso-fisica_zp1i56.jpg',
      numberParticipants: '3',
    },
    {
      event: '2',
      city: { lat: '-27.36708', lon: '-55.89608' },
      date: '26/10/2020',
      details: '2bbbbb',
      imgSrc:
        'https://res.cloudinary.com/tomasgil123/image/upload/v1506275268/curso-fisica_zp1i56.jpg',
      numberParticipants: '15',
    },
    {
      event: '3',
      city: { lat: '-27.36708', lon: '-55.89608' },
      date: '26/11/2020',
      details: '3cccccc',
      imgSrc:
        'https://res.cloudinary.com/tomasgil123/image/upload/v1506275268/curso-fisica_zp1i56.jpg',
      numberParticipants: '30',
    },
  ]

  const eventsWithCodes = []

  for (let i = 0; i < codes.length; i++) {
    for (let j = 0; j < events.length; j++) {
      const eventWithCodes = { ...events[j] }
      eventWithCodes['lang'] = codes[i]
      eventsWithCodes.push(eventWithCodes)
    }
  }

  return {
    paths: eventsWithCodes.map((event) => {
      return {
        params: {
          event: event.event,
          lang: event.lang,
        },
      }
    }),
    fallback: false,
  }
}
