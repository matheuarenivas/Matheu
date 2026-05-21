import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type MarqueeProps = {
  children: ReactNode
  className?: string
  pauseOnHover?: boolean
}

// Infinite horizontal marquee: children are duplicated and the inner track
// is translated by -50%, so the second copy slides into the first copy's
// position seamlessly. Edges fade via a CSS mask.
//
// Animation duration is configured via `--animate-marquee` in index.css.
export function Marquee({
  children,
  className,
  pauseOnHover = true,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        'group relative w-full overflow-hidden',
        '[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]',
        className,
      )}
    >
      <div
        className={cn(
          'flex w-max animate-(--animate-marquee)',
          pauseOnHover && 'group-hover:[animation-play-state:paused]',
        )}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  )
}
