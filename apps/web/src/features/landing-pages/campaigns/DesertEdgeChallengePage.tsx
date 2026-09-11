import type { LandingPageData } from '../types'
import { ArrowIcon, CampaignFaqList, CampaignMark, TermsFooter } from './shared'

export function DesertEdgeChallengePage({ page }: { page: LandingPageData }) {
  if (page.content.kind !== 'desert-edge-challenge') return null
  const content = page.content

  return (
    <main
      id="top"
      lang={page.context.language}
      className="lp-desert desert-grain overflow-hidden bg-[#d9c09b] text-[#171612]"
    >
      <header className="mx-auto flex max-w-[1600px] items-center justify-between border-b-2 border-black px-4 py-5 sm:px-8 lg:px-12">
        <CampaignMark />
        <nav
          className="hidden items-center gap-8 text-xs font-black uppercase md:flex"
          aria-label="Campaign"
        >
          <a className="underline-offset-4 hover:underline" href="#mission">
            {content.nav.mission}
          </a>
          <a className="underline-offset-4 hover:underline" href="#field-notes">
            {content.nav.fieldNotes}
          </a>
        </nav>
        <a
          href="#register"
          className="border-2 border-black bg-black px-4 py-2 text-xs font-black text-[#e7d2b0] uppercase hover:bg-transparent hover:text-black"
        >
          {content.nav.enter}
        </a>
      </header>

      <section className="mx-auto max-w-[1600px] border-x-2 border-black">
        <div className="flex justify-between border-b-2 border-black px-4 py-3 text-[0.62rem] font-black tracking-[0.18em] uppercase sm:px-8">
          <span>{content.hero.coordinates}</span>
          <span>{content.hero.issue}</span>
        </div>
        <div className="relative px-4 pt-14 pb-10 sm:px-8 lg:px-12 lg:pt-20">
          <div
            className="absolute top-[8%] right-[7%] hidden h-52 w-72 rotate-[-8deg] border-2 border-black lg:block"
            aria-hidden="true"
          >
            <div className="absolute top-1/2 -left-20 h-2 w-[430px] -rotate-12 bg-[#eb4f2f]" />
            <span className="absolute right-4 bottom-3 text-xs font-black">SECTOR / 06</span>
          </div>
          <h1 className="relative z-10 text-[clamp(4.2rem,13vw,13rem)] leading-[0.72] font-black tracking-[-0.075em] uppercase">
            {content.hero.title}
            <span className="block text-[#f3e6cf] [text-shadow:2px_2px_0_#171612,-2px_-2px_0_#171612,2px_-2px_0_#171612,-2px_2px_0_#171612]">
              {content.hero.titleAccent}
            </span>
          </h1>
          <div className="mt-14 grid gap-8 border-t-2 border-black py-8 lg:grid-cols-[1fr_0.75fr_auto] lg:items-end">
            <p className="max-w-2xl text-xl leading-8 font-bold sm:text-2xl">
              {content.hero.description}
            </p>
            <p className="text-xs leading-6 font-bold tracking-wider uppercase">
              No comfort zone.
              <br />
              No shortcuts.
              <br />
              Only forward.
            </p>
            <a
              href="#register"
              className="inline-flex items-center justify-center gap-3 border-2 border-black bg-[#eb4f2f] px-6 py-4 font-black uppercase shadow-[6px_6px_0_#171612] transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              {content.hero.cta}
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section id="mission" className="bg-[#171612] text-[#ead9bc]">
        <div className="mx-auto grid max-w-[1600px] gap-14 px-4 py-24 sm:px-8 lg:grid-cols-[0.4fr_1fr] lg:px-12 lg:py-36">
          <p className="text-xs font-black tracking-[0.24em] text-[#eb4f2f] uppercase">
            {content.statement.label} / 001
          </p>
          <div>
            <h2 className="max-w-5xl text-5xl leading-[0.92] font-black tracking-[-0.045em] uppercase sm:text-7xl lg:text-8xl">
              {content.statement.title}
            </h2>
            <p className="mt-10 max-w-2xl border-l-4 border-[#eb4f2f] pl-6 text-lg leading-8 text-[#ead9bc]/65">
              {content.statement.body}
            </p>
          </div>
        </div>
      </section>

      <section
        className="mx-auto max-w-[1600px] border-x-2 border-black"
        aria-label="Challenge metrics"
      >
        <div className="grid md:grid-cols-3">
          {content.metrics.map((metric) => (
            <div
              key={metric.unit}
              className="border-b-2 border-black px-4 py-10 last:border-b-0 sm:px-8 md:border-r-2 md:border-b-0 md:last:border-r-0"
            >
              <p className="text-[clamp(4rem,8vw,8rem)] leading-none font-black tracking-[-0.07em]">
                {metric.value}
              </p>
              <p className="mt-3 inline-block bg-black px-2 py-1 text-xs font-black tracking-widest text-[#e7d2b0]">
                {metric.unit}
              </p>
              <p className="mt-5 text-sm font-bold uppercase">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-4 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="flex items-end justify-between gap-8 border-b-4 border-black pb-6">
          <h2 className="text-4xl font-black tracking-tight sm:text-6xl">
            {content.missionsTitle}
          </h2>
          <span className="hidden text-7xl font-black text-[#eb4f2f] sm:block" aria-hidden="true">
            →
          </span>
        </div>
        <ol className="mt-10 grid gap-x-10 lg:grid-cols-2">
          {content.missions.map((mission, index) => (
            <li
              key={mission.number}
              className={`grid grid-cols-[4rem_1fr] gap-4 border-t-2 border-black py-8 ${index % 2 === 1 ? 'lg:translate-y-12' : ''}`}
            >
              <span className="text-3xl font-black text-[#eb4f2f]">{mission.number}</span>
              <div>
                <h3 className="text-xl font-black">{mission.title}</h3>
                <p className="mt-3 max-w-lg leading-7 text-black/65">{mission.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-[#eb4f2f] py-20 text-[#171612] lg:py-28">
        <div className="mx-auto grid max-w-[1600px] gap-12 px-4 sm:px-8 lg:grid-cols-[0.7fr_1fr] lg:px-12">
          <div>
            <p className="text-xs font-black tracking-[0.25em] uppercase">
              {content.rewards.label} / Classified
            </p>
            <h2 className="mt-6 text-5xl leading-[0.9] font-black uppercase sm:text-7xl">
              {content.rewards.title}
            </h2>
          </div>
          <div className="border-4 border-black bg-[#d9c09b] shadow-[12px_12px_0_#171612]">
            {content.rewards.items.map((item) => (
              <div
                key={item.name}
                className="flex flex-col justify-between gap-2 border-b-2 border-black p-5 last:border-0 sm:flex-row sm:items-center sm:p-7"
              >
                <span className="text-sm font-black tracking-wider">{item.name}</span>
                <span className="text-3xl font-black">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1600px] border-x-2 border-black lg:grid-cols-[0.7fr_1fr]">
        <div className="border-b-2 border-black p-5 sm:p-10 lg:border-r-2 lg:border-b-0 lg:p-14">
          <p className="text-[clamp(3.5rem,8vw,7rem)] leading-[0.8] font-black tracking-[-0.06em]">
            PACK
            <br />
            LIGHT.
          </p>
          <div className="mt-14 h-28 border-2 border-black desert-contour" aria-hidden="true" />
        </div>
        <div className="p-5 sm:p-10 lg:p-14">
          <h2 className="text-4xl font-black">{content.requirementsTitle}</h2>
          <ul className="mt-10">
            {content.requirements.map((requirement, index) => (
              <li
                key={requirement}
                className="grid grid-cols-[2rem_1fr] gap-4 border-t-2 border-black py-5 font-bold"
              >
                <span>{index + 1}.</span>
                <span>{requirement}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="register" className="bg-[#f0e3cc] px-4 py-24 sm:px-8 lg:py-36">
        <div className="mx-auto max-w-[1400px] border-4 border-black p-5 shadow-[14px_14px_0_#eb4f2f] sm:p-10 lg:p-16">
          <p className="text-xs font-black tracking-[0.25em] uppercase">{content.finalCta.label}</p>
          <h2 className="mt-8 text-[clamp(4rem,11vw,10rem)] leading-[0.76] font-black tracking-[-0.07em] uppercase">
            {content.finalCta.title}
          </h2>
          <div className="mt-12 flex flex-col gap-8 border-t-2 border-black pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-lg leading-8 font-bold">{content.finalCta.body}</p>
            <a
              href="#top"
              className="inline-flex shrink-0 items-center justify-center gap-3 bg-black px-7 py-4 font-black text-[#f0e3cc] uppercase hover:bg-[#eb4f2f] hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              {content.finalCta.cta}
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section id="field-notes" className="mx-auto max-w-5xl px-4 py-24 sm:px-8">
        <h2 className="text-5xl font-black sm:text-7xl">{content.faqTitle}</h2>
        <CampaignFaqList items={content.faqs} className="mt-10 font-bold" />
        <TermsFooter>{content.terms}</TermsFooter>
      </section>
    </main>
  )
}
