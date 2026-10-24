# Helpic — landing

The public site for Helpic, a workspace for freelancers and their clients: what it is and the way into the app, in Ukrainian and English, light and dark. App: [helpic-frontend](https://github.com/pmaxis/helpic-frontend), API: [helpic-backend](https://github.com/pmaxis/helpic-backend).

**Stack:** Astro (static build), Tailwind CSS 4, Inter served from the site itself.

The site only links to the app: it calls no API and keeps no cookies.

## Run

Requires Docker.

```sh
cp .env.example .env
make up                 # http://localhost:4321, hot reload
```

- Production build behind nginx: `make prod` → http://localhost:8092
- Without Docker: `pnpm install && pnpm dev` → http://localhost:4321
- Type-check and build: `make test`

## Configuration

[`.env.example`](.env.example):

- `PUBLIC_SITE_URL`: the site's own address, for canonical links, hreflang and the sitemap.
- `PUBLIC_APP_URL`: the app the "Sign in" and "Get started" buttons open.
- `LANDING_PORT`, `LANDING_PROD_PORT`: host ports.

The pages are static, so both addresses are written into them at build time: the production image takes them as build arguments.

## Layout

```
src/
  pages/          Ukrainian at the root, English under en/; robots.txt, 404
  components/
    sections/     the home page's sections, top to bottom
    demo/         the hero's live board
    ui/           icons, buttons, section headings, feature tiles
  layouts/        the document: title, description, canonical, hreflang, Open Graph
  i18n/           both languages' words (en.ts is the shape uk.ts follows)
  styles/         Tailwind, the app's palette (dark following the system), scroll-in motion
public/           favicon
```

The page works without JavaScript: the scripts only set the demo, the timer and the report moving, and sections rise into view with CSS scroll-driven animations where the browser has them. Everything holds still with "reduce motion" on.
