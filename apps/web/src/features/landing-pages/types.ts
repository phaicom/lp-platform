export const REGULATORS = [
  { code: 'int', name: 'International' },
  { code: 'th', name: 'Thailand' },
  { code: 'za', name: 'South Africa' },
  { code: 'my', name: 'Malaysia' },
] as const

export const LANGUAGE_CODES = ['en', 'th', 'de', 'ms'] as const

export type RegulatorCode = (typeof REGULATORS)[number]['code']
export type LanguageCode = (typeof LANGUAGE_CODES)[number]

export type LandingPageRouteContext = {
  regulator: RegulatorCode
  requestedLanguage: string
  language: LanguageCode
  slug: string
}

export type CampaignMeta = { title: string; description: string }
export type CampaignFaq = { question: string; answer: string }

export type NeonTradingCupContent = {
  kind: 'neon-trading-cup'
  meta: CampaignMeta
  nav: { overview: string; leaderboard: string; rewards: string }
  hero: {
    kicker: string
    title: string
    titleAccent: string
    description: string
    primaryCta: string
    secondaryCta: string
    season: string
  }
  countdown: { value: string; unit: string; label: string }
  stats: ReadonlyArray<{ value: string; label: string }>
  steps: ReadonlyArray<{ number: string; title: string; description: string }>
  leaderboard: ReadonlyArray<{ rank: string; name: string; score: string; change: string }>
  rewards: ReadonlyArray<{ place: string; amount: string; detail: string }>
  timeline: ReadonlyArray<{ date: string; title: string }>
  finalCta: { title: string; body: string; label: string }
  faqTitle: string
  faqs: ReadonlyArray<CampaignFaq>
  terms: string
}

export type GoldenMarketFestivalContent = {
  kind: 'golden-market-festival'
  meta: CampaignMeta
  nav: { story: string; rewards: string; participate: string }
  hero: {
    edition: string
    kicker: string
    title: string
    titleAccent: string
    description: string
    cta: string
    date: string
  }
  introduction: {
    label: string
    title: string
    paragraphs: ReadonlyArray<string>
    pullQuote: string
  }
  rewardsTitle: string
  rewards: ReadonlyArray<{ numeral: string; title: string; description: string }>
  benefits: ReadonlyArray<{ label: string; value: string }>
  stepsTitle: string
  steps: ReadonlyArray<{ number: string; title: string; description: string }>
  banner: { overline: string; title: string; description: string; cta: string }
  faqTitle: string
  faqs: ReadonlyArray<CampaignFaq>
  terms: string
}

export type DesertEdgeChallengeContent = {
  kind: 'desert-edge-challenge'
  meta: CampaignMeta
  nav: { mission: string; fieldNotes: string; enter: string }
  hero: {
    coordinates: string
    issue: string
    title: string
    titleAccent: string
    description: string
    cta: string
  }
  statement: { label: string; title: string; body: string }
  metrics: ReadonlyArray<{ value: string; unit: string; label: string }>
  missionsTitle: string
  missions: ReadonlyArray<{ number: string; title: string; description: string }>
  rewards: {
    label: string
    title: string
    items: ReadonlyArray<{ name: string; value: string }>
  }
  requirementsTitle: string
  requirements: ReadonlyArray<string>
  finalCta: { label: string; title: string; body: string; cta: string }
  faqTitle: string
  faqs: ReadonlyArray<CampaignFaq>
  terms: string
}

export type LandingPageTranslation =
  | NeonTradingCupContent
  | GoldenMarketFestivalContent
  | DesertEdgeChallengeContent

export type LandingPageDefinition = {
  id: string
  slug: LandingPageTranslation['kind']
  defaultLanguage: LanguageCode
  regulators: ReadonlyArray<RegulatorCode>
  translations: Readonly<Partial<Record<LanguageCode, LandingPageTranslation>>>
  socialImage?: string
  noIndex?: boolean
}

export type LandingPageData = {
  context: LandingPageRouteContext
  definition: LandingPageDefinition
  content: LandingPageTranslation
}

export type RawLandingPageRouteParams = { reg: string; lang: string; lpName: string }
export type LandingPageRequestContext = { origin: string; preferredLanguage?: string }
