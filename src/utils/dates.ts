function formatDate(date: string): string {
  const dateSplited = date.split('/')
  const newDate = `${dateSplited[1]}/${dateSplited[0]}/${dateSplited[2]}`
  return newDate
}

export { formatDate }
