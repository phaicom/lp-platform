import { describe, expect, it } from 'vitest'

import { getLandingPageDefinition, getRegisteredLandingPageSlugs } from './catalog'
import { getRegisteredCampaignKinds } from './registry'

describe('landingPageRegistry', () => {
  it('has exactly one renderer for every configured campaign', () => {
    expect(getRegisteredCampaignKinds().sort()).toEqual([...getRegisteredLandingPageSlugs()].sort())
  })

  it('contains the three example campaigns', () => {
    expect(getRegisteredCampaignKinds().sort()).toEqual([
      'desert-edge-challenge',
      'golden-market-festival',
      'neon-trading-cup',
    ])
  })

  it('keeps each translation aligned with its registered campaign', async () => {
    for (const slug of getRegisteredLandingPageSlugs()) {
      const definition = await getLandingPageDefinition(slug)
      const translations = Object.values(definition?.translations ?? {})

      expect(definition?.translations[definition.defaultLanguage]).toBeDefined()
      expect(translations.length).toBeGreaterThan(0)
      expect(translations.every((translation) => translation.kind === slug)).toBe(true)
    }
  })
})
