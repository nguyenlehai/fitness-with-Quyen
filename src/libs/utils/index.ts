export function formatDate(date: any, local: any) {
  const d = new Date(date)
  const options: any = { year: 'numeric', month: 'short', day: 'numeric' }
  return d.toLocaleDateString(local, options)
}
