/* eslint-disable @typescript-eslint/no-var-requires */
const fetch = require('node-fetch')

function formatDate(date: string): string {
  const dateSplited = date.split('/')
  const newDate = `${dateSplited[1]}/${dateSplited[0]}/${dateSplited[2]}`
  return newDate
}

export default async (req, res) => {
  const lat = req.query.lat
  const lon = req.query.lon
  const dateEvent = req.query.dateEvent

  let result
  try {
    result = await (
      await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_KEY}&units=metric`
      )
    ).json()
  } catch (err) {
    res.statusCode = 400
    result = { err: err }
  }

  let dateWasFound = false
  let temperature = 0

  for (let i = 0; i < result.daily.length; i++) {
    //for the time being the site is only present in argentina so timezone will be hardcoded
    const dateForecastWithoutFormat = new Date(result.daily[i].dt * 1000).toLocaleString('en-US', {
      timeZone: 'America/Buenos_Aires',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    })
    const dateForecast = formatDate(dateForecastWithoutFormat)
    if (dateForecast === dateEvent) {
      dateWasFound = true
      temperature = Number(result.daily[i].temp.day)
      break
    }
  }

  result = { dateWasFound: dateWasFound, temperature: temperature }

  res.statusCode = 200

  res.json({ ...result })
}
