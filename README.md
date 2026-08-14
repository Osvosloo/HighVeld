# Highveld Cultivated Wellness

https://osvosloo.github.io/HighVeld/

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Update the menu

Edit `public/menu.json`. Each product needs a `name` and `category`. `detail`, `price`, and `image` are optional — leave `image` as `""` for the coloured placeholder tile.

There is no cart or checkout. After a live deploy, replacing `menu.json` on the host updates the shelf without a rebuild.

## Hosting

1. Push `main`
2. Repo **Settings → Pages → Source: GitHub Actions**
3. The site goes live at the Pages URL



