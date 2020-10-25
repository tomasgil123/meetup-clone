import { EventLang } from 'src/types/screens'

export interface EventSummary {
  name: string
  imgSrc: string
  details: string
}

interface City {
  lat: string
  lon: string
}

export interface EventDetails extends EventSummary {
  date: string
  numberParticipants: number
  temperature: string
  city: City
}

export interface EventDetailsWithTranslations extends EventDetails {
  translations: EventLang
}

export interface CityInterface {
  name: string
}
