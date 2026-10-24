// @ts-check
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
// The config runs before Astro reads .env: read it here (in Docker it's the environment).
try {
  process.loadEnvFile()
} catch {
  // no .env
}
const { PUBLIC_SITE_URL } = process.env

export default defineConfig({
  // Canonical links, hreflang and the sitemap are absolute: they need the site's address.
  site: PUBLIC_SITE_URL || 'http://localhost:8092',
  // Ukrainian at the root, English under /en/, as the app's two languages.
  i18n: {
    locales: ['uk', 'en'],
    defaultLocale: 'uk',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'uk', locales: { uk: 'uk-UA', en: 'en' } },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    // Nothing inlined as data: URLs or inline scripts: the CSP allows only the site's own files.
    build: { assetsInlineLimit: 0 },
  },
})
