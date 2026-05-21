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

// The logo file lives in /public/Logo.svg and is served from the site root.
function LogoMark() {
  return <img src="/Logo.svg" alt="" className="size-8 sm:size-9" />
}
