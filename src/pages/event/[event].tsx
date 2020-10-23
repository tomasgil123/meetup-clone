import React, { FC } from 'react'

//types
import { EventDetails } from 'src/types/events'

interface Props {
  event: string
}

const Event: FC<Props> = ({ event }) => {
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
  const events = [{ event: '1a' }, { event: '2a' }]

  return {
    paths: events.map((event) => {
      return {
        params: {
          event: event.event,
        },
      }
    }),
    fallback: false,
  }
}
