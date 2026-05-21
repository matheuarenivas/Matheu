import { cn } from '@/lib/utils'

type LogoProps = {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <LogoMark />
      <span className="text-2xl font-bold uppercase tracking-[0.08em] sm:text-3xl">
        Matheu
      </span>
    </span>
  )
}

// Swap this out for your custom logo later — e.g. <img src="/logo.svg" .../> or paste your own <svg>.
function LogoMark() {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-8 sm:size-9"
      aria-hidden="true"
    >
      {/* MA monogram: triangle (A) with a notch at the apex forming an M peak */}
      <path d="M4 27 L12 6 L16 14 L20 6 L28 27" />
      <path d="M9 20 L23 20" />
    </svg>
  )
}
