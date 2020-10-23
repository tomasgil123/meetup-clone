export interface EventSummary {
  name: string
  imgSrc: string
  details: string
}

export interface EventDetails extends EventSummary {
  date: string
  numberParticipants: number
}

export interface CityInterface {
  name: string
}
