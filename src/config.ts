export const APP_NAME = 'Helpic'

/** The app, which the site only links to: it calls no API and keeps no cookies. */
export const APP_URL = (import.meta.env.PUBLIC_APP_URL || 'http://localhost:5180').replace(/\/+$/, '')

/** A page of the app, e.g. appLink('/register'). */
export function appLink(path: string): string {
  return `${APP_URL}${path}`
}
