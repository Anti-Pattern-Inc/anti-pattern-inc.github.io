const getFormattedDate = (date: string | null) => {
  if (!date) return ''
  const d = new Date(date)
  const pad = (num: number) => {
    return ('00' + num).slice(-2)
  }
  return `${d.getFullYear()}.${pad(d.getMonth() + 1)}.${pad(d.getDate())}`
}

export { getFormattedDate }
