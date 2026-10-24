interface ImportMetaEnv {
  /** The site's own address, for canonical links, hreflang and the sitemap. */
  readonly PUBLIC_SITE_URL?: string
  /** The app the buttons open. */
  readonly PUBLIC_APP_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
