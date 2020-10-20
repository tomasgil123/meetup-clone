import React from 'react'

import EventSummary from 'src/components/eventSummary'

const Events = (): JSX.Element => {
  return (
    <div style={{ padding: '20px' }}>
      <EventSummary
        name={'First Event'}
        details={'Thisi si the first events. Its gooing to be aesome. A lot of people will come'}
        imgSrc={
          'https://res.cloudinary.com/tomasgil123/image/upload/v1506275268/curso-fisica_zp1i56.jpg'
        }
      />
    </div>
  )
}

export default Events
