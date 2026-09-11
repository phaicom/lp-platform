import type { LandingPageData } from '../types'
import { ArrowIcon, CampaignFaqList, CampaignMark, TermsFooter } from './shared'

export function GoldenMarketFestivalPage({ page }: { page: LandingPageData }) {
  if (page.content.kind !== 'golden-market-festival') return null
  const content = page.content

  return (
    <main
      id="top"
      lang={page.context.language}
      className="lp-golden overflow-hidden bg-[#f4eddf] text-[#382719]"
    >
      <header className="mx-auto flex max-w-[1440px] items-center justify-between border-b border-[#6d4d31]/25 px-5 py-6 sm:px-10 lg:px-16">
        <CampaignMark />
        <nav
          className="hidden gap-10 text-[0.68rem] font-bold tracking-[0.16em] uppercase md:flex"
          aria-label="Campaign"
        >
          <a className="hover:text-[#a46d1f]" href="#story">
            {content.nav.story}
          </a>
          <a className="hover:text-[#a46d1f]" href="#rewards">
            {content.nav.rewards}
          </a>
          <a className="hover:text-[#a46d1f]" href="#participate">
            {content.nav.participate}
          </a>
        </nav>
        <p className="text-[0.62rem] tracking-[0.12em] uppercase sm:text-xs">
          {content.hero.edition}
        </p>
      </header>

      <section className="relative mx-auto grid min-h-[780px] max-w-[1440px] items-center gap-12 px-5 py-20 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-16 lg:py-28">
        <div className="relative z-10">
          <p className="mb-8 text-xs tracking-[0.28em] text-[#95651e] uppercase">
            {content.hero.kicker}
          </p>
          <h1 className="text-[clamp(4rem,9.2vw,9.5rem)] leading-[0.78] tracking-[-0.065em]">
            {content.hero.title}
            <em className="block pl-[8vw] font-normal text-[#a46d1f]">
              {content.hero.titleAccent}
            </em>
          </h1>
          <div className="mt-12 grid max-w-3xl gap-8 border-t border-[#6d4d31]/35 pt-7 sm:grid-cols-[1fr_auto] sm:items-start">
            <p className="max-w-lg text-lg leading-8 text-[#5e4937]">{content.hero.description}</p>
            <a
              className="golden-link inline-flex items-center gap-3 text-sm font-bold tracking-[0.12em] uppercase"
              href="#story"
            >
              {content.hero.cta}
              <ArrowIcon />
            </a>
          </div>
        </div>
        <div className="relative min-h-[360px] lg:min-h-[590px]" aria-hidden="true">
          <div className="golden-rosette absolute top-1/2 left-1/2 size-[min(78vw,520px)] -translate-1/2 rounded-full" />
          <div className="absolute top-1/2 left-1/2 grid size-52 -translate-1/2 place-items-center rounded-full border border-[#f4eddf]/70 bg-[#442d1c] text-center text-[#eed9a8] shadow-[0_30px_80px_rgba(74,47,24,.25)] sm:size-64">
            <span>
              <span className="block text-[0.6rem] tracking-[0.3em] uppercase">Golden market</span>
              <span className="mt-2 block text-5xl italic">’26</span>
            </span>
          </div>
          <p className="absolute right-0 bottom-0 origin-bottom-right -rotate-90 text-[0.62rem] tracking-[0.25em] uppercase">
            {content.hero.date}
          </p>
        </div>
      </section>

      <section id="story" className="bg-[#fffaf0]">
        <div className="mx-auto grid max-w-[1280px] gap-14 px-5 py-24 sm:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:px-16 lg:py-40">
          <div>
            <p className="text-xs tracking-[0.25em] text-[#a46d1f] uppercase">
              {content.introduction.label}
            </p>
            <h2 className="mt-7 max-w-xl text-4xl leading-[1.06] sm:text-6xl">
              {content.introduction.title}
            </h2>
          </div>
          <div className="lg:pt-20">
            <div className="columns-1 gap-10 text-base leading-8 text-[#655342] sm:columns-2">
              {content.introduction.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mb-6 break-inside-avoid">
                  {paragraph}
                </p>
              ))}
            </div>
            <blockquote className="mt-10 border-y border-[#a46d1f]/35 py-8 text-2xl leading-snug italic text-[#7d531b] sm:text-3xl">
              “{content.introduction.pullQuote}”
            </blockquote>
          </div>
        </div>
      </section>

      <section
        id="rewards"
        className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 lg:px-16 lg:py-36"
      >
        <p className="text-center text-xs tracking-[0.28em] text-[#a46d1f] uppercase">
          Curated rewards
        </p>
        <h2 className="mx-auto mt-6 max-w-3xl text-center text-4xl leading-tight sm:text-6xl">
          {content.rewardsTitle}
        </h2>
        <div className="mt-20 grid border-y border-[#6d4d31]/30 md:grid-cols-3">
          {content.rewards.map((reward, index) => (
            <article
              key={reward.numeral}
              className={`relative px-4 py-12 md:px-8 md:py-16 ${index > 0 ? 'border-t border-[#6d4d31]/30 md:border-t-0 md:border-l' : ''}`}
            >
              <span className="text-7xl leading-none text-[#c9a865]/45 italic">
                {reward.numeral}
              </span>
              <div className="mt-16 h-px w-10 bg-[#a46d1f]" />
              <h3 className="mt-6 text-2xl">{reward.title}</h3>
              <p className="mt-4 max-w-xs leading-7 text-[#6d5845]">{reward.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#3a281b] text-[#f4eddf]">
        <div className="mx-auto grid max-w-[1440px] md:grid-cols-3">
          {content.benefits.map((benefit) => (
            <div
              key={benefit.label}
              className="border-b border-[#f4eddf]/20 px-5 py-10 last:border-b-0 sm:px-10 md:border-r md:border-b-0 md:px-12"
            >
              <p className="text-[0.65rem] tracking-[0.2em] text-[#d5b675] uppercase">
                {benefit.label}
              </p>
              <p className="mt-3 text-3xl italic">{benefit.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="participate"
        className="mx-auto max-w-[1280px] px-5 py-24 sm:px-10 lg:px-16 lg:py-40"
      >
        <div className="grid gap-16 lg:grid-cols-[0.7fr_1fr]">
          <h2 className="text-5xl leading-none sm:text-7xl">{content.stepsTitle}</h2>
          <ol>
            {content.steps.map((step) => (
              <li
                key={step.number}
                className="grid grid-cols-[3rem_1fr] gap-5 border-t border-[#6d4d31]/30 py-8 sm:grid-cols-[4rem_0.65fr_1fr]"
              >
                <span className="text-sm text-[#a46d1f] italic">{step.number}</span>
                <h3 className="text-xl">{step.title}</h3>
                <p className="col-start-2 leading-7 text-[#6d5845] sm:col-start-auto">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="register" className="px-4 pb-4 sm:px-8 sm:pb-8">
        <div className="golden-banner mx-auto max-w-[1500px] px-6 py-20 text-center text-[#fff7e8] sm:px-10 lg:py-28">
          <p className="text-[0.65rem] tracking-[0.3em] text-[#dfc17b] uppercase">
            {content.banner.overline}
          </p>
          <h2 className="mx-auto mt-6 max-w-4xl text-5xl leading-none italic sm:text-8xl">
            {content.banner.title}
          </h2>
          <p className="mx-auto mt-7 max-w-xl leading-7 text-[#eadfce]/75">
            {content.banner.description}
          </p>
          <a
            href="#top"
            className="mt-9 inline-flex items-center gap-3 border-b border-[#dfc17b] pb-2 text-sm font-bold tracking-widest uppercase focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            {content.banner.cta}
            <ArrowIcon />
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-24 sm:px-10 lg:py-32">
        <h2 className="text-4xl italic sm:text-6xl">{content.faqTitle}</h2>
        <CampaignFaqList items={content.faqs} className="mt-10" />
        <TermsFooter>{content.terms}</TermsFooter>
      </section>
    </main>
  )
}
