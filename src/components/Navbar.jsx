import { useEffect, useState } from 'react'
import { store } from '../data.js'
import { Logo } from './Logo.jsx'

const links = [
  ['About', '#about'],
  ['Offerings', '#offerings'],
  ['Reviews', '#reviews'],
  ['Visit', '#visit'],
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav-inner">
        <Logo />
        <nav className="nav-links" aria-label="Primary">
          {links.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <a className="btn btn-ghost" href={store.phoneHref}>
            Call
          </a>
          <a className="btn btn-gold" href="#visit">
            Visit the shop
          </a>
          <button
            className="nav-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span />
            <span />
          </button>
        </div>
      </div>
      {open && (
        <div id="mobile-menu" className="nav-drawer">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a className="btn btn-gold" href={store.whatsapp} onClick={() => setOpen(false)}>
            WhatsApp us
          </a>
        </div>
      )}
    </header>
  )
}
