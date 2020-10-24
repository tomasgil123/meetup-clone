import React, { FC } from 'react'
import { getLanguageCodes, getLanguageByCode } from 'src/internationalization'

//types
import { EventDetails } from 'src/types/events'

interface Props {
  event: string
}

const Event: FC<Props> = ({ event }) => {
  console.log('event', event)
  return (
    <div>
      Event
      <span>{event.event}</span>
    </div>
  )
}

export default Event

type Params = {
  params: {
    event: string
  }
}

export async function getStaticProps({ params }: Params): Promise<unknown> {
  return {
    props: {
      event: {
        ...params,
      },
    },
  }
}

export async function getStaticPaths(): Promise<unknown> {
  const codes = getLanguageCodes()
  const events = [{ event: '1a' }, { event: '2a' }]

  const eventsWithCodes = []

  for (let i = 0; i < codes.length; i++) {
    for (let j = 0; j < events.length; j++) {
      const eventWithCode = {}
      eventWithCode['event'] = events[j].event
      eventWithCode['lang'] = codes[i]
      eventsWithCodes.push(eventWithCode)
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
