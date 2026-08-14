import { store } from '../data.js'

export function Reviews() {
  return (
    <section className="reviews" id="reviews">
      <div className="reviews-panel">
        <p className="kicker">Google reviews</p>
        <p className="score">{store.rating.toFixed(1)}</p>
        <div className="stars" aria-hidden="true">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i}>★</span>
          ))}
        </div>
        <h2>Perfect score. {store.reviewCount} neighbours said so.</h2>
        <p>
          Highveld Cultivated Wellness is rated {store.rating.toFixed(1)} on
          Google — a Randburg shop people actually recommend.
        </p>
        <a
          className="btn btn-gold"
          href="https://www.google.com/search?q=Highveld+Cultivated+Wellness+Randburg+reviews"
        >
          Read Google reviews
        </a>
      </div>
    </section>
  )
}
