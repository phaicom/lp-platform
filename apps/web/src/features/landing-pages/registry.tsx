import type { ReactNode } from 'react'

import { DesertEdgeChallengePage } from './campaigns/DesertEdgeChallengePage'
import { GoldenMarketFestivalPage } from './campaigns/GoldenMarketFestivalPage'
import { NeonTradingCupPage } from './campaigns/NeonTradingCupPage'
import type { LandingPageData, LandingPageTranslation } from './types'

type CampaignRenderer = (page: LandingPageData) => ReactNode

export const landingPageRegistry = {
  'neon-trading-cup': (page) => <NeonTradingCupPage page={page} />,
  'golden-market-festival': (page) => <GoldenMarketFestivalPage page={page} />,
  'desert-edge-challenge': (page) => <DesertEdgeChallengePage page={page} />,
} satisfies Record<LandingPageTranslation['kind'], CampaignRenderer>

export function getRegisteredCampaignKinds() {
  return Object.keys(landingPageRegistry)
}
