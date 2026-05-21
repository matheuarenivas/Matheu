import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Plus, Minus } from 'lucide-react'
import { Logo } from '@/components/Logo'
import { buttonVariants } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
]

// Edit these to point at your real links.
const EMAIL = 'arenivasmatheu@gmail.com'
const RESUME_HREF = '/resume.pdf' // drop a resume.pdf into /public
const LINKEDIN_HREF = 'https://www.linkedin.com/in/matthew-arenivas-505b47255/'

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

        <Sheet>
          <SheetTrigger
            aria-label="Open menu"
            className={cn(
              buttonVariants({ variant: 'ghost', size: 'icon-lg' }),
              'md:hidden',
            )}
          >
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-80 border-l-border/40 bg-background/40 backdrop-blur-xl"
          >
            <SheetHeader>
              <SheetTitle className="tracking-[0.18em] uppercase">Menu</SheetTitle>
            </SheetHeader>
            <nav className="mt-6 flex flex-col gap-1 px-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    cn(
                      'rounded-md px-3 py-3 text-base font-medium uppercase tracking-[0.14em] transition-colors',
                      isActive
                        ? 'bg-secondary text-foreground'
                        : 'text-muted-foreground hover:bg-secondary hover:text-foreground',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <div className="mt-6 border-t border-border/40 px-4 pt-6">
              <p className="px-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Work With Me
              </p>
              <div className="mt-2 flex flex-col gap-1">
                <a
                  href={`mailto:${EMAIL}`}
                  className="rounded-md px-3 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {EMAIL}
                </a>
                <a
                  href={RESUME_HREF}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md px-3 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  Resume
                </a>
                <a
                  href={LINKEDIN_HREF}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md px-3 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  LI
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Expandable panel — opens on hover of "Work With Me +" */}
      <div
        id="work-panel"
        className={cn(
          'hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out md:block',
          isWorkOpen
            ? 'max-h-96 opacity-100'
            : 'pointer-events-none max-h-0 opacity-0',
        )}
      >
        <div className="grid w-full grid-cols-1 gap-10 px-4 py-10 sm:grid-cols-3 sm:px-6 lg:px-8">
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Contact
            </h3>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-3 inline-block text-lg font-medium text-foreground hover:underline sm:text-xl"
            >
              {EMAIL}
            </a>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Resume
            </h3>
            <a
              href={RESUME_HREF}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block text-lg font-medium text-foreground hover:underline sm:text-xl"
            >
              View
            </a>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              LinkedIn
            </h3>
            <a
              href={LINKEDIN_HREF}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block text-lg font-medium text-foreground hover:underline sm:text-xl"
            >
              LI
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
