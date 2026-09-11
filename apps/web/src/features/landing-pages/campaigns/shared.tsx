import type { CampaignFaq } from '../types'

export function CampaignMark({ inverse = false }: { inverse?: boolean }) {
  return (
    <a
      className={`inline-flex items-center gap-2 text-sm font-black tracking-[0.16em] uppercase ${inverse ? 'text-white' : 'text-current'}`}
      href="#top"
      aria-label="Apex Campaigns home"
    >
      <span className="grid size-7 place-items-center border-2 border-current" aria-hidden="true">
        A
      </span>
      Apex
    </a>
  )
}

export function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4" fill="none">
      <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

export function CampaignFaqList({
  items,
  className = '',
}: {
  items: ReadonlyArray<CampaignFaq>
  className?: string
}) {
  return (
    <div className={className}>
      {items.map((item) => (
        <details key={item.question} className="group border-b border-current/25 py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-bold focus-visible:outline-2 focus-visible:outline-offset-4">
            {item.question}
            <span className="text-xl transition-transform group-open:rotate-45" aria-hidden="true">
              +
            </span>
          </summary>
          <p className="max-w-2xl pt-4 leading-7 opacity-70">{item.answer}</p>
        </details>
      ))}
    </div>
  )
}

export function TermsFooter({ children }: { children: string }) {
  return (
    <footer className="flex flex-col gap-4 border-t border-current/20 py-8 text-xs opacity-70 sm:flex-row sm:items-center sm:justify-between">
      <p>© 2026 Apex Markets</p>
      <a className="underline underline-offset-4 focus-visible:outline-2" href="#terms">
        {children}
      </a>
    </footer>
  )
}
