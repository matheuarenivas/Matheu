import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

type ProjectShellProps = {
  children: ReactNode
}

// Common wrapper for every project page: page padding + a back link.
// Per-project content goes inside.
export function ProjectShell({ children }: ProjectShellProps) {
  return (
    <article className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        Back
      </Link>
      {children}
    </article>
  )
}
