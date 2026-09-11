import { getCookie, getRequestUrl } from '@tanstack/react-start/server'

import type { LandingPageRequestContext } from './types'

const LANGUAGE_COOKIE_NAMES = ['lp-language', 'PARAGLIDE_LOCALE'] as const

export function getLandingPageRequestContext(): LandingPageRequestContext {
  const configuredOrigin = process.env.SITE_URL ?? process.env.VITE_SITE_URL
  const requestOrigin = getRequestUrl({
    xForwardedHost: true,
    xForwardedProto: true,
  }).origin
  const preferredLanguage = LANGUAGE_COOKIE_NAMES.map((name) => getCookie(name)).find(
    (value) => value !== undefined,
  )

  return {
    origin: configuredOrigin?.replace(/\/$/, '') ?? requestOrigin,
    preferredLanguage,
  }
}
