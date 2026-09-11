import { describe, expect, it } from 'vitest'

import { resolveLandingPageRoute } from './resolve-route'

describe('resolveLandingPageRoute', () => {
  it('resolves the Neon Trading Cup for INT English', async () => {
    const page = await resolveLandingPageRoute({
      reg: 'int',
      lang: 'en',
      lpName: 'neon-trading-cup',
    })

    expect(page?.context).toEqual({
      regulator: 'int',
      requestedLanguage: 'en',
      language: 'en',
      slug: 'neon-trading-cup',
    })
    expect(page?.content.kind).toBe('neon-trading-cup')
  })

  it('rejects Neon Trading Cup for the wrong regulator', async () => {
    const page = await resolveLandingPageRoute({
      reg: 'th',
      lang: 'en',
      lpName: 'neon-trading-cup',
    })

    expect(page).toBeUndefined()
  })

  it('resolves Golden Market Festival in English and Thai', async () => {
    const english = await resolveLandingPageRoute({
      reg: 'th',
      lang: 'en',
      lpName: 'golden-market-festival',
    })
    const thai = await resolveLandingPageRoute({
      reg: 'th',
      lang: 'th',
      lpName: 'golden-market-festival',
    })

    expect(english?.context.language).toBe('en')
    expect(thai?.context.language).toBe('th')
    expect(thai?.content.meta.title).toContain('เทศกาลแห่งรางวัล')
  })

  it('resolves Desert Edge Challenge for ZA English', async () => {
    const page = await resolveLandingPageRoute({
      reg: 'za',
      lang: 'en',
      lpName: 'desert-edge-challenge',
    })

    expect(page?.content.kind).toBe('desert-edge-challenge')
  })

  it('rejects a campaign for another valid regulator', async () => {
    const page = await resolveLandingPageRoute({
      reg: 'int',
      lang: 'en',
      lpName: 'desert-edge-challenge',
    })

    expect(page).toBeUndefined()
  })

  it('falls back to the campaign default for an unsupported language', async () => {
    const page = await resolveLandingPageRoute({
      reg: 'th',
      lang: 'ja',
      lpName: 'golden-market-festival',
    })

    expect(page?.context.requestedLanguage).toBe('ja')
    expect(page?.context.language).toBe('en')
  })

  it('returns no page for an unknown regulator or missing campaign', async () => {
    const invalidRegulator = await resolveLandingPageRoute({
      reg: 'invalid',
      lang: 'en',
      lpName: 'neon-trading-cup',
    })
    const missingCampaign = await resolveLandingPageRoute({
      reg: 'int',
      lang: 'en',
      lpName: 'not-found',
    })

    expect(invalidRegulator).toBeUndefined()
    expect(missingCampaign).toBeUndefined()
  })
})
