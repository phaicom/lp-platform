import { createServerFn } from '@tanstack/react-start'

import { getLandingPageRequestContext } from './request-context.server'
import { resolveLandingPageRoute } from './resolve-route'
import type { RawLandingPageRouteParams } from './types'

export const getLandingPage = createServerFn({ method: 'GET' })
  .validator((params: RawLandingPageRouteParams) => params)
  .handler(async ({ data: params }) => {
    const requestContext = getLandingPageRequestContext()
    const page = await resolveLandingPageRoute(params, requestContext.preferredLanguage)

    return { page, requestContext }
  })
