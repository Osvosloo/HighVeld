import { useEffect, useMemo, useState } from 'react'

export function Menu() {
  const [menu, setMenu] = useState(null)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState('All')

  useEffect(() => {
    const url = `${import.meta.env.BASE_URL}menu.json`
    fetch(url)
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then(setMenu)
      .catch(() => setMenu({ products: [], updated: '' }))
  }, [])

  const products = menu?.products ?? []
  const categories = ['All', ...[...new Set(products.map((item) => item.category).filter(Boolean))]]

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    return products.filter((item) => {
      const inCategory = active === 'All' || item.category === active
      if (!inCategory) return false
      if (!q) return true
      return [item.name, item.detail, item.price, item.category]
        .join(' ')
        .toLowerCase()
        .includes(q)
    })
  }, [products, active, query])

  return (
    <section className="menu" id="menu">
      <div className="section-head">
        <p className="kicker">On the shelf</p>
        <h2>The menu.</h2>
        <p className="menu-lead">
          Products in store right now. Search or filter, then come in or WhatsApp
          to confirm stock — this is a list, not a checkout.
        </p>
      </div>

      <div className="menu-tools">
        <label className="menu-search">
          <span className="sr-only">Search products</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products…"
            autoComplete="off"
          />
        </label>
        <div className="menu-tabs" role="tablist" aria-label="Product categories">
          {categories.map((name) => (
            <button
              key={name}
              type="button"
              role="tab"
              aria-selected={active === name}
              className={active === name ? 'is-active' : ''}
              onClick={() => setActive(name)}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      {menu && visible.length === 0 && (
        <p className="menu-empty">Nothing matches. Try another word, or ask in store.</p>
      )}

      <ul className="menu-grid">
        {visible.map((item) => (
          <li key={`${item.category}-${item.name}`} className="product-card">
            <div className="product-media">
              {item.image ? (
                <img src={item.image} alt="" />
              ) : (
                <span className="product-placeholder" aria-hidden="true">
                  {item.category?.[0] ?? '•'}
                </span>
              )}
            </div>
            {item.category ? <p className="product-cat">{item.category}</p> : null}
            <p className="menu-name">{item.name}</p>
            {item.detail ? <p className="menu-detail">{item.detail}</p> : null}
            {item.price ? <p className="menu-price">{item.price}</p> : null}
          </li>
        ))}
      </ul>

      {menu?.updated ? (
        <p className="menu-updated">Last updated {menu.updated}</p>
      ) : null}
    </section>
  )
}
