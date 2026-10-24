/**
 * The site's two languages: Ukrainian at the root, English under /en/.
 * Their words are in uk.ts and en.ts; English is the shape both follow.
 */
import { en, type Messages } from './en'
import { uk } from './uk'

export type { Messages }

export const LOCALES = ['uk', 'en'] as const
export type Locale = (typeof LOCALES)[number]
export const DEFAULT_LOCALE: Locale = 'uk'

export const MESSAGES: Record<Locale, Messages> = { uk, en }

/** The language's name in itself, and its short form for the header. */
export const LOCALE_NAMES: Record<Locale, string> = { uk: 'Українська', en: 'English' }
export const LOCALE_SHORT: Record<Locale, string> = { uk: 'UA', en: 'EN' }

/** A page's path in a language: "/" in Ukrainian is "/en/" in English. */
export function localePath(locale: Locale, path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`
  return locale === DEFAULT_LOCALE ? clean : `/${locale}${clean}`
}

/** "{done} of {total}" with its values put in. */
export function fill(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, k: string) => String(values[k] ?? `{${k}}`))
}
