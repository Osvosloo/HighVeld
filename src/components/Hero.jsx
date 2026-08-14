import { store } from '../data.js'
import { getOpenStatus } from '../lib.js'

export function Hero() {
  const status = getOpenStatus()

  return (
    <section className="hero" id="top">
      <div className="hero-media" aria-hidden="true">
        <div className="hero-wash" />
        <div className="hero-grass">
          <svg viewBox="0 0 1440 200" preserveAspectRatio="none">
            <path
              fill="#c5e6e1"
              d="M0 90C120 20 240 20 360 90C480 160 600 160 720 90C840 20 960 20 1080 90C1200 160 1320 160 1440 90V200H0Z"
            />
            <path
              fill="#ffffff"
              d="M0 130C120 80 240 80 360 130C480 180 600 180 720 130C840 80 960 80 1080 130C1200 180 1320 180 1440 130V200H0Z"
            />
          </svg>
        </div>
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
          A discreet wellness shop at Robin’s Corner Centre. Flower, edibles,
          oils, and the extras — five stars, twenty-four times over.
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
