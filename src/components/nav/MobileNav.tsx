import { NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { siteConfig } from '@/lib/site-config'
import { cn } from '@/lib/utils'
import { navItems } from '@/components/nav/navItems'

// Slide-in drawer used at < md. Surfaces the same items as the desktop nav
// + the Work With Me links (since hover doesn't work on touch).
export function MobileNav() {
  return (
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
            <DrawerLink href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </DrawerLink>
            <DrawerLink href={siteConfig.resumeHref} external>
              Resume
            </DrawerLink>
            <DrawerLink href={siteConfig.linkedinHref} external>
              LI
            </DrawerLink>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

type DrawerLinkProps = {
  href: string
  external?: boolean
  children: React.ReactNode
}

function DrawerLink({ href, external, children }: DrawerLinkProps) {
  return (
    <a
      href={href}
      {...(external && { target: '_blank', rel: 'noreferrer' })}
      className="rounded-md px-3 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
    >
      {children}
    </a>
  )
}
