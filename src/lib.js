import { store } from './data.js'

export function mapsUrl() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(store.mapsQuery)}`
}

export function mapsEmbedUrl() {
  return `https://maps.google.com/maps?q=${encodeURIComponent(store.mapsQuery)}&z=16&output=embed`
}

function johannesburgMinutes(now = new Date()) {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Africa/Johannesburg',
    hour: 'numeric',
    minute: 'numeric',
    hourCycle: 'h23',
  }).formatToParts(now)

  const hour = Number(parts.find((part) => part.type === 'hour')?.value ?? 0)
  const minute = Number(parts.find((part) => part.type === 'minute')?.value ?? 0)
  return hour * 60 + minute
}

export function getOpenStatus(now = new Date()) {
  const minutes = johannesburgMinutes(now)
  const open = store.hours.open * 60
  const close = store.hours.close * 60
  const isOpen = minutes >= open && minutes < close
  const openLabel = String(store.hours.open).padStart(2, '0')
  const closeLabel = String(store.hours.close).padStart(2, '0')

  if (isOpen) {
    return { isOpen: true, label: `Open now · closes ${closeLabel}:00` }
  }

  if (minutes < open) {
    return { isOpen: false, label: `Closed · opens ${openLabel}:00` }
  }

  return { isOpen: false, label: `Closed · opens ${openLabel}:00 tomorrow` }
}

export function fullAddress() {
  const { shop, centre, street, suburb, city, postal } = store.address
  return `${shop}, ${centre}, ${street}, ${suburb}, ${city}, ${postal}`
}
