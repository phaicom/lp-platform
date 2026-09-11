import { createMemoryHistory, createRouter } from '@tanstack/react-router'
import { describe, expect, it } from 'vitest'

import { routeTree } from './routeTree.gen'

describe('canonical landing-page route', () => {
  it('matches all three path parameters and keeps campaign search parameters', () => {
    const history = createMemoryHistory({
      initialEntries: ['/int/en/neon-trading-cup?refid=123&utm_source=email'],
    })
    const router = createRouter({ routeTree, history })
    const matches = router.matchRoutes(history.location.pathname)

    expect(matches.at(-1)?.params).toEqual({
      reg: 'int',
      lang: 'en',
      lpName: 'neon-trading-cup',
    })
    expect(history.location.search).toBe('?refid=123&utm_source=email')
  })
})
