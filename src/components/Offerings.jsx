import { offerings } from '../data.js'

export function Offerings() {
  return (
    <section className="offerings" id="offerings">
      <div className="section-head">
        <p className="kicker">What we offer</p>
        <h2>What’s on the shelf.</h2>
      </div>
      <ol className="offer-list">
        {offerings.map((item) => (
          <li key={item.num}>
            <span className="offer-num">{item.num}</span>
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
