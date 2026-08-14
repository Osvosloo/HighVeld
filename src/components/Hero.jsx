import { store } from '../data.js'
import { getOpenStatus } from '../lib.js'

export function Hero() {
  const status = getOpenStatus()

  return (
    <section className="hero" id="top">
      <div className="hero-media" aria-hidden="true">
        <div className="hero-wash" />
        <Grass />
      </div>
      <div className="hero-copy">
        <p className="eyebrow">
          <span className={`dot ${status.isOpen ? 'is-open' : ''}`} />
          {status.label} · Robindale, Randburg
        </p>
        <h1>
          Wellness,
          <em> cultivated</em>
          <br />
          on the Highveld.
        </h1>
        <p className="lede">
          A discreet health consultancy and botanical wellness shop at Robin’s
          Corner Centre. Education first. Five stars, twenty-four times over.
        </p>
        <div className="hero-cta">
          <a className="btn btn-gold" href={store.whatsapp}>
            Message on WhatsApp
          </a>
          <a className="btn btn-line" href="#visit">
            Get directions
          </a>
        </div>
        <dl className="hero-stats">
          <div>
            <dt>Google rating</dt>
            <dd>
              {store.rating.toFixed(1)}
              <span> / 5</span>
            </dd>
          </div>
          <div>
            <dt>Reviews</dt>
            <dd>{store.reviewCount}</dd>
          </div>
          <div>
            <dt>Hours</dt>
            <dd>08:00–20:00</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}

function Grass() {
  return (
    <svg className="hero-grass" viewBox="0 0 1440 280" preserveAspectRatio="none">
      <path
        fill="#1e3a2a"
        d="M0 280V168c48-22 86-70 128-66 52 4 72 78 124 82 46 4 62-62 110-58s78 70 128 66c54-4 70-80 122-76 48 4 64 72 112 70 56-2 74-86 128-80 48 6 62 78 110 76 50-2 68-72 116-68 42 4 62 58 102 62v88H0Z"
      />
      <path
        fill="#0c1a12"
        d="M0 280v-72c40-18 78-52 118-48 44 4 62 58 106 62 48 4 66-52 112-48 50 4 70 60 118 56 44-4 62-58 108-54 52 4 72 64 120 60 46-4 64-62 110-58 48 4 70 58 116 56 40-2 62-48 98-50v94H0Z"
      />
    </svg>
  )
}
