import { LANGUAGE_CODES } from './types'
import type { LandingPageDefinition, LanguageCode } from './types'

function normalizeLanguage(value: string | undefined) {
  return value?.trim().toLowerCase().split(/[-_]/)[0]
}

function findAvailableLanguage(
  candidate: string | undefined,
  page: LandingPageDefinition,
): LanguageCode | undefined {
  const normalizedCandidate = normalizeLanguage(candidate)

  return LANGUAGE_CODES.find(
    (language) => language === normalizedCandidate && page.translations[language] !== undefined,
  )
}

export function listAvailableLanguages(page: LandingPageDefinition) {
  return LANGUAGE_CODES.filter((language) => page.translations[language] !== undefined)
}

export function resolveLanguage({
  requestedLanguage,
  preferredLanguage,
  page,
}: {
  requestedLanguage: string
  preferredLanguage?: string
  page: LandingPageDefinition
}): LanguageCode | undefined {
  return (
    findAvailableLanguage(requestedLanguage, page) ??
    findAvailableLanguage(preferredLanguage, page) ??
    findAvailableLanguage(page.defaultLanguage, page) ??
    findAvailableLanguage('en', page)
  )
}
