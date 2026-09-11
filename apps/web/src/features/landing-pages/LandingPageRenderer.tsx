import { landingPageRegistry } from './registry'
import type { LandingPageData } from './types'

export function LandingPageRenderer({ page }: { page: LandingPageData }) {
  const renderCampaign = landingPageRegistry[page.content.kind]
  return renderCampaign(page)
}
