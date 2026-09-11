import { getLandingPageDefinition } from './catalog'
import { resolveLanguage } from './resolve-language'
import { resolveRegulator } from './resolve-regulator'
import type { LandingPageData, RawLandingPageRouteParams } from './types'

export async function resolveLandingPageRoute(
  params: RawLandingPageRouteParams,
  preferredLanguage?: string,
): Promise<LandingPageData | undefined> {
  const regulator = resolveRegulator(params.reg)
  if (!regulator) return undefined

  const slug = params.lpName.trim().toLowerCase()
  const definition = await getLandingPageDefinition(slug)
  if (!definition || !definition.regulators.includes(regulator.code)) {
    return undefined
  }

  const language = resolveLanguage({
    requestedLanguage: params.lang,
    preferredLanguage,
    page: definition,
  })
  if (!language) return undefined

  const content = definition.translations[language]
  if (!content) return undefined

  return {
    context: {
      regulator: regulator.code,
      requestedLanguage: params.lang.trim().toLowerCase(),
      language,
      slug,
    },
    definition,
    content,
  }
}
