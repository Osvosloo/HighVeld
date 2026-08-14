import { store } from '../data.js'
import { fullAddress, getOpenStatus, mapsEmbedUrl, mapsUrl } from '../lib.js'

export function Visit() {
  const status = getOpenStatus()
  const { address } = store

  return (
    <section className="visit" id="visit">
      <div className="visit-copy">
        <p className="kicker">Find us</p>
        <h2>Shop 6, Robin’s Corner Centre.</h2>
        <p className="visit-lead">
          On Malibongwe Drive in Robindale — a short stop if you are already in
          Randburg, Linden, or Northcliff.
        </p>

        <address>
          {address.shop}
          <br />
          {address.centre}
          <br />
          {address.street}
          <br />
          {address.suburb}, {address.city}
          <br />
          {address.postal}
        </address>

        <p className={`hours-pill ${status.isOpen ? 'is-open' : ''}`}>
          <span className="dot" />
          {status.label}
        </p>

        <ul className="hours">
          {store.hours.days.map(([day, time]) => (
            <li key={day}>
              <span>{day}</span>
              <span>{time}</span>
            </li>
          ))}
        </ul>

        <div className="visit-cta">
          <a className="btn btn-gold" href={store.phoneHref}>
            Call {store.phone}
          </a>
          <a className="btn btn-line" href={store.whatsapp}>
            WhatsApp
          </a>
          <a className="btn btn-line" href={mapsUrl()}>
            Open in Maps
          </a>
        </div>
      </div>
      <div className="visit-map">
        <iframe
          title={`Map of ${store.name}`}
          src={mapsEmbedUrl()}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <p className="map-caption">{fullAddress()}</p>
      </div>
    </section>
  )
}
