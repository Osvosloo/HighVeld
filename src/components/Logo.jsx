export function Logo({ compact = false }) {
  return (
    <a href="#top" className="logo" aria-label="Highveld Cultivated Wellness">
      <svg className="logo-mark" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path
          d="M24 4c.3 7 2.6 12.2 7.2 15.8C36 23.4 39.2 28.6 39.2 36c0 5.4-3.4 8.8-8.6 10.4 2.4-3.8 2.8-8 .7-12.4C29.2 29.2 25.2 25.8 24 20.2 22.8 25.8 18.8 29.2 16.7 34c-2.1 4.4-1.7 8.6.7 12.4C12.2 44.8 8.8 41.4 8.8 36c0-7.4 3.2-12.6 8-16.2C21.4 16.2 23.7 11 24 4Z"
          fill="currentColor"
        />
      </svg>
      <span className="logo-text">
        <span className="logo-word">Highveld</span>
        {!compact && <span className="logo-sub">Cultivated Wellness</span>}
      </span>
    </a>
  )
}
