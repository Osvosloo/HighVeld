const logoSrc = `${import.meta.env.BASE_URL}logo.png?v=2`

export function Logo() {
  return (
    <a href="#top" className="logo" aria-label="Highveld Cultivated Wellness">
      <img
        src={logoSrc}
        alt="Highveld Cultivated Wellness"
        className="logo-img"
      />
    </a>
  )
}
