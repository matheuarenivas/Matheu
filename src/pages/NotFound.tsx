import { Link } from 'react-router-dom'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function NotFound() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-start gap-4 px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">404</p>
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Page not found</h1>
      <Link to="/" className={cn(buttonVariants(), 'mt-2')}>
        Back home
      </Link>
    </section>
  )
}