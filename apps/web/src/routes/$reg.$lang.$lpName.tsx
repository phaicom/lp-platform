import { createFileRoute, notFound, redirect } from '@tanstack/react-router'

import { LandingPageRenderer } from '#/features/landing-pages/LandingPageRenderer'
import { getLandingPage } from '#/features/landing-pages/get-landing-page'
import { createLandingPagePath } from '#/features/landing-pages/paths'
import { listAvailableLanguages } from '#/features/landing-pages/resolve-language'

export const Route = createFileRoute('/$reg/$lang/$lpName')({
  loader: async ({ location, params }) => {
    const result = await getLandingPage({ data: params })
    if (!result.page) throw notFound()

    if (result.page.context.requestedLanguage !== result.page.context.language) {
      throw redirect({
        to: '/$reg/$lang/$lpName',
        params: {
          reg: result.page.context.regulator,
          lang: result.page.context.language,
          lpName: result.page.context.slug,
        },
        search: location.search,
        replace: true,
      })
    }

    return { ...result, page: result.page }
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {}

    const { content, context, definition } = loaderData.page
    const canonicalPath = createLandingPagePath(context)
    const canonicalUrl = `${loaderData.requestContext.origin}${canonicalPath}`
    const socialImage = definition.socialImage
      ? new URL(definition.socialImage, loaderData.requestContext.origin).href
      : undefined

    return {
      meta: [
        { title: content.meta.title },
        { name: 'description', content: content.meta.description },
        {
          name: 'robots',
          content: definition.noIndex ? 'noindex, nofollow' : 'index, follow',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: content.meta.title },
        { property: 'og:description', content: content.meta.description },
        { property: 'og:url', content: canonicalUrl },
        ...(socialImage ? [{ property: 'og:image', content: socialImage }] : []),
        { name: 'twitter:card', content: socialImage ? 'summary_large_image' : 'summary' },
        { name: 'twitter:title', content: content.meta.title },
        { name: 'twitter:description', content: content.meta.description },
        ...(socialImage ? [{ name: 'twitter:image', content: socialImage }] : []),
      ],
      links: [
        { rel: 'canonical', href: canonicalUrl },
        ...definition.regulators.flatMap((regulator) =>
          listAvailableLanguages(definition).map((language) => ({
            rel: 'alternate',
            hrefLang: language,
            href: `${loaderData.requestContext.origin}${createLandingPagePath({
              regulator,
              language,
              slug: definition.slug,
            })}`,
          })),
        ),
      ],
    }
  },
  component: LandingPageRoute,
  errorComponent: () => (
    <main className="grid min-h-screen place-items-center bg-slate-950 px-6 text-center text-white">
      <div>
        <h1 className="text-3xl font-bold">This page is temporarily unavailable</h1>
        <p className="mt-3 text-slate-300">Please try again in a moment.</p>
      </div>
    </main>
  ),
})

function LandingPageRoute() {
  const { page } = Route.useLoaderData()
  return <LandingPageRenderer page={page} />
}
