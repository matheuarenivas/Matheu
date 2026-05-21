type ProjectHeroProps = {
  title: string
  tagline?: string
}

// Reusable title block for the top of a project page.
export function ProjectHero({ title, tagline }: ProjectHeroProps) {
  return (
    <header className="mt-8 max-w-4xl">
      <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
        {title}
      </h1>
      {tagline && (
        <p className="mt-4 text-lg text-muted-foreground">{tagline}</p>
      )}
    </header>
  )
}
