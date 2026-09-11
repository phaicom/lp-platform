import type { LandingPageData } from '../types'
import { ArrowIcon, CampaignFaqList, CampaignMark, TermsFooter } from './shared'

export function NeonTradingCupPage({ page }: { page: LandingPageData }) {
  if (page.content.kind !== 'neon-trading-cup') return null
  const content = page.content

  return (
    <main
      id="top"
      lang={page.context.language}
      className="lp-neon overflow-hidden bg-[#050608] text-white"
    >
      <div className="neon-grid relative">
        <header className="relative z-20 mx-auto flex max-w-[1480px] items-center justify-between px-5 py-6 sm:px-8 lg:px-12">
          <CampaignMark inverse />
          <nav
            className="hidden items-center gap-8 text-xs font-bold tracking-[0.15em] uppercase md:flex"
            aria-label="Campaign"
          >
            <a className="hover:text-[#c8ff2e]" href="#circuit">
              {content.nav.overview}
            </a>
            <a className="hover:text-[#c8ff2e]" href="#standings">
              {content.nav.leaderboard}
            </a>
            <a className="hover:text-[#c8ff2e]" href="#rewards">
              {content.nav.rewards}
            </a>
          </nav>
          <a
            className="neon-button px-4 py-2 text-xs font-black tracking-wider uppercase"
            href="#register"
          >
            {content.hero.primaryCta}
          </a>
        </header>

        <section className="relative mx-auto grid min-h-[760px] max-w-[1480px] items-center px-5 pt-16 pb-20 sm:px-8 lg:grid-cols-[1fr_0.72fr] lg:px-12 lg:pt-10">
          <div className="relative z-10">
            <p className="mb-6 flex items-center gap-3 text-xs font-black tracking-[0.22em] text-[#c8ff2e] uppercase">
              <span className="h-px w-10 bg-current" /> {content.hero.kicker}
            </p>
            <h1 className="max-w-5xl text-[clamp(4rem,10vw,9.5rem)] leading-[0.78] font-black tracking-[-0.075em] uppercase">
              {content.hero.title}
              <span className="neon-outline block">{content.hero.titleAccent}</span>
            </h1>
            <div className="mt-10 grid max-w-3xl gap-8 border-l-2 border-[#ff3157] pl-5 sm:grid-cols-[1fr_auto] sm:items-end sm:pl-8">
              <p className="max-w-xl text-base leading-7 text-white/65 sm:text-lg">
                {content.hero.description}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  className="neon-button inline-flex items-center gap-3 px-6 py-4 text-sm font-black uppercase"
                  href="#register"
                >
                  {content.hero.primaryCta} <ArrowIcon />
                </a>
                <a
                  className="border border-white/30 px-6 py-4 text-sm font-bold uppercase hover:border-white"
                  href="#circuit"
                >
                  {content.hero.secondaryCta}
                </a>
              </div>
            </div>
          </div>

          <div className="relative mt-14 min-h-80 lg:mt-0 lg:min-h-[590px]" aria-hidden="true">
            <div className="neon-orbit absolute top-1/2 left-1/2 size-[min(90vw,520px)] -translate-1/2 rounded-full border border-[#45f3ff]/40" />
            <div className="absolute top-[12%] right-[8%] h-[74%] w-[45%] -skew-x-12 border-2 border-[#c8ff2e] bg-[#c8ff2e]/5 shadow-[0_0_70px_rgba(200,255,46,.16)]" />
            <div className="absolute top-1/2 left-1/2 -translate-1/2 rotate-90 text-[clamp(2.2rem,5vw,5rem)] leading-none font-black tracking-[-0.04em] whitespace-nowrap text-white/10 uppercase">
              {content.hero.season}
            </div>
            <div className="absolute right-[2%] bottom-[12%] border border-[#ff3157] bg-[#050608] p-5 shadow-[8px_8px_0_#ff3157]">
              <p className="text-[4.8rem] leading-none font-black text-[#c8ff2e]">
                {content.countdown.value}
              </p>
              <p className="mt-1 text-xs font-black tracking-[0.2em] uppercase">
                {content.countdown.unit}
              </p>
              <p className="mt-3 text-xs text-white/50">{content.countdown.label}</p>
            </div>
          </div>
        </section>
      </div>

      <section
        className="border-y border-white/15 bg-[#0b0d10]"
        aria-label="Competition statistics"
      >
        <div className="mx-auto grid max-w-[1480px] grid-cols-2 lg:grid-cols-4">
          {content.stats.map((stat, index) => (
            <div
              key={stat.label}
              className="border-white/15 px-5 py-8 odd:border-r lg:border-r lg:px-10 lg:py-10"
            >
              <p
                className={`text-3xl font-black sm:text-5xl ${index === 0 ? 'text-[#c8ff2e]' : ''}`}
              >
                {stat.value}
              </p>
              <p className="mt-2 text-[0.65rem] tracking-[0.16em] text-white/50 uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="circuit" className="mx-auto max-w-[1480px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="grid gap-14 lg:grid-cols-[0.55fr_1fr]">
          <div>
            <p className="text-xs font-black tracking-[0.2em] text-[#45f3ff] uppercase">
              Race format / 3 moves
            </p>
            <h2 className="mt-5 text-5xl leading-none font-black tracking-[-0.05em] uppercase sm:text-7xl">
              From grid
              <br />
              to glory.
            </h2>
          </div>
          <ol>
            {content.steps.map((step) => (
              <li
                key={step.number}
                className="grid gap-5 border-t border-white/20 py-8 sm:grid-cols-[5rem_1fr_1fr] sm:items-start"
              >
                <span className="text-3xl font-black text-[#ff3157]">{step.number}</span>
                <h3 className="text-xl font-black uppercase">{step.title}</h3>
                <p className="leading-7 text-white/55">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="standings" className="relative bg-[#c8ff2e] py-24 text-[#050608] lg:py-32">
        <div className="absolute top-0 right-0 h-12 w-2/5 -translate-y-px bg-[#050608] [clip-path:polygon(12%_0,100%_0,100%_100%,0_100%)]" />
        <div className="mx-auto grid max-w-[1480px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.7fr_1fr] lg:px-12">
          <div>
            <p className="text-xs font-black tracking-[0.2em] uppercase">Live signal / preview</p>
            <h2 className="mt-5 text-6xl leading-[0.86] font-black tracking-[-0.06em] uppercase sm:text-8xl">
              Front
              <br />
              runners
            </h2>
            <p className="mt-7 max-w-sm leading-7 opacity-65">
              Standings update after verified market close. Names shown are illustrative.
            </p>
          </div>
          <div className="self-end border-2 border-[#050608] bg-[#050608] text-white shadow-[12px_12px_0_rgba(5,6,8,.25)]">
            <div className="grid grid-cols-[3rem_1fr_auto] gap-3 border-b border-white/20 px-4 py-3 text-[0.65rem] tracking-widest text-white/45 uppercase sm:grid-cols-[5rem_1fr_auto_auto] sm:px-6">
              <span>Rank</span>
              <span>Driver</span>
              <span>Score</span>
              <span className="hidden sm:block">Move</span>
            </div>
            {content.leaderboard.map((leader) => (
              <div
                key={leader.rank}
                className="grid grid-cols-[3rem_1fr_auto] items-center gap-3 border-b border-white/10 px-4 py-5 last:border-0 sm:grid-cols-[5rem_1fr_auto_auto] sm:px-6"
              >
                <span className="text-xl font-black text-[#c8ff2e]">{leader.rank}</span>
                <span className="truncate font-bold">{leader.name}</span>
                <span className="font-mono text-sm">{leader.score}</span>
                <span className="hidden w-12 text-right text-xs text-[#45f3ff] sm:block">
                  {leader.change}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="rewards" className="mx-auto max-w-[1480px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-black tracking-[0.2em] text-[#ff3157] uppercase">
              Prize allocation
            </p>
            <h2 className="mt-4 text-5xl font-black uppercase sm:text-7xl">Podium rewards</h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-white/45">
            Plus 117 performance awards distributed across the finishing field.
          </p>
        </div>
        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {content.rewards.map((reward, index) => (
            <article
              key={reward.place}
              className={`relative border p-7 [clip-path:polygon(0_0,calc(100%-24px)_0,100%_24px,100%_100%,0_100%)] ${index === 0 ? 'border-[#c8ff2e] bg-[#c8ff2e] text-black lg:-translate-y-5' : 'border-white/25 bg-white/[.03]'}`}
            >
              <p className="text-xs font-black tracking-[0.18em] uppercase">{reward.place}</p>
              <p className="mt-12 text-4xl font-black sm:text-5xl">{reward.amount}</p>
              <p className="mt-3 text-sm opacity-55">{reward.detail}</p>
            </article>
          ))}
        </div>
        <div className="mt-24 grid border-y border-white/20 sm:grid-cols-2 lg:grid-cols-4">
          {content.timeline.map((item) => (
            <div key={item.date} className="border-white/20 px-5 py-6 sm:border-r">
              <p className="font-mono text-sm text-[#45f3ff]">{item.date}</p>
              <p className="mt-2 font-bold">{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="register" className="bg-[#ff3157] text-white">
        <div className="mx-auto flex max-w-[1480px] flex-col gap-8 px-5 py-20 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12 lg:py-28">
          <div>
            <p className="text-[clamp(3.5rem,9vw,8rem)] leading-[0.82] font-black tracking-[-0.065em] uppercase">
              {content.finalCta.title}
            </p>
            <p className="mt-6 text-lg text-white/75">{content.finalCta.body}</p>
          </div>
          <a
            href="#top"
            className="inline-flex shrink-0 items-center justify-center gap-3 bg-white px-7 py-4 font-black text-black uppercase hover:bg-[#c8ff2e] focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            {content.finalCta.label}
            <ArrowIcon />
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-24 sm:px-8">
        <h2 className="text-4xl font-black uppercase sm:text-6xl">{content.faqTitle}</h2>
        <CampaignFaqList items={content.faqs} className="mt-10" />
        <TermsFooter>{content.terms}</TermsFooter>
      </section>
    </main>
  )
}
