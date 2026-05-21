import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Plus, Minus } from 'lucide-react'
import { Logo } from '@/components/Logo'
import { MobileNav } from '@/components/nav/MobileNav'
import { WorkWithMePanel } from '@/components/nav/WorkWithMePanel'
import { navItems } from '@/components/nav/navItems'
import { cn } from '@/lib/utils'

export function NavBar() {
  const [isWorkOpen, setIsWorkOpen] = useState(false)

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/50"
      onMouseLeave={() => setIsWorkOpen(false)}
    >
      <div className="flex h-20 w-full items-center justify-between px-4 sm:px-6 lg:px-8">
        <NavLink to="/" aria-label="Home">
          <Logo />
        </NavLink>

        <nav className="hidden md:flex md:items-center md:gap-2 lg:gap-4">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                cn(
                  'relative px-3 py-2 text-sm font-medium uppercase tracking-[0.14em] transition-colors lg:px-4 lg:text-[0.95rem]',
                  'after:absolute after:bottom-1 after:left-3 after:right-3 after:h-px after:origin-left after:scale-x-0 after:bg-foreground after:transition-transform after:duration-300 lg:after:left-4 lg:after:right-4',
                  'hover:after:scale-x-100',
                  isActive
                    ? 'text-foreground after:scale-x-100'
                    : 'text-muted-foreground hover:text-foreground',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}

          <button
            type="button"
            onMouseEnter={() => setIsWorkOpen(true)}
            onFocus={() => setIsWorkOpen(true)}
            onClick={() => setIsWorkOpen((v) => !v)}
            aria-expanded={isWorkOpen}
            aria-controls="work-panel"
            className={cn(
              'inline-flex items-center gap-2 px-3 py-2 text-sm font-medium uppercase tracking-[0.14em] transition-colors lg:px-4 lg:text-[0.95rem]',
              isWorkOpen
                ? 'text-foreground'
                : 'text-muted-foreground hover:text-foreground',
            )}
          >
            <span>Work With Me</span>
            {isWorkOpen ? (
              <Minus className="size-4" aria-hidden="true" />
            ) : (
              <Plus className="size-4" aria-hidden="true" />
            )}
          </button>
        </nav>

        <MobileNav />
      </div>

      <WorkWithMePanel isOpen={isWorkOpen} />
    </header>
  )
}
