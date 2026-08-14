import { store } from '../data.js'
import { Logo } from './Logo.jsx'
import { mapsUrl } from '../lib.js'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Logo />
        <nav aria-label="Footer">
          <a href={store.instagram}>Instagram</a>
          <a href={store.facebook}>Facebook</a>
          <a href={store.phoneHref}>Call</a>
          <a href={mapsUrl()}>Directions</a>
        </nav>
      </div>
      <p className="footer-note">
        Educational wellness guidance. Not a substitute for medical advice.
        Consult a registered practitioner for diagnosis or treatment.
      </p>
      <p className="footer-copy">
        © {new Date().getFullYear()} {store.name}. Robindale, Randburg.
      </p>
    </footer>
  )
}
