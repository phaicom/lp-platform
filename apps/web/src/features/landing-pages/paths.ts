import type { LanguageCode, RegulatorCode } from './types'

export function createLandingPagePath({
  regulator,
  language,
  slug,
}: {
  regulator: RegulatorCode
  language: LanguageCode
  slug: string
}) {
  return `/${encodeURIComponent(regulator)}/${encodeURIComponent(language)}/${encodeURIComponent(slug)}`
}
