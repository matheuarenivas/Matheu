import { siteConfig } from '@/lib/site-config'
import { cn } from '@/lib/utils'

type WorkWithMePanelProps = {
  isOpen: boolean
}

// The expandable dropdown that slides down beneath the desktop nav row.
// Transparent on purpose — it sits inside the header element, which provides
// the translucent background, so both areas read as one continuous surface.
export function WorkWithMePanel({ isOpen }: WorkWithMePanelProps) {
  return (
    <div
      id="work-panel"
      className={cn(
        'hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out md:block',
        isOpen
          ? 'max-h-96 opacity-100'
          : 'pointer-events-none max-h-0 opacity-0',
      )}
    >
      <div className="grid w-full grid-cols-1 gap-10 px-4 py-10 sm:grid-cols-3 sm:px-6 lg:px-8">
        <PanelItem
          label="Contact"
          href={`mailto:${siteConfig.email}`}
          text={siteConfig.email}
        />
        <PanelItem
          label="Resume"
          href={siteConfig.resumeHref}
          text="View"
          external
        />
        <PanelItem
          label="LinkedIn"
          href={siteConfig.linkedinHref}
          text="LI"
          external
        />
      </div>
    </div>
  )
}

type PanelItemProps = {
  label: string
  href: string
  text: string
  external?: boolean
}

function PanelItem({ label, href, text, external }: PanelItemProps) {
  return (
    <div>
      <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </h3>
      <a
        href={href}
        {...(external && { target: '_blank', rel: 'noreferrer' })}
        className="mt-3 inline-block text-lg font-medium text-foreground hover:underline sm:text-xl"
      >
        {text}
      </a>
    </div>
  )
}
