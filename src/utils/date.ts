export const getYear = (dateVal: Date) => {
  const date = new Date(dateVal)
  return date.getFullYear()
}
