export type ProjectSpan = 'wide' | 'tall'

// Metadata used by the grid card on the home page.
// The full project pages live in ./pages and own their own content.
export type ProjectMeta = {
  slug: string
  title: string
  tagline: string
  // Optional layout hint. Default = square (1x1). 'wide' = 2 cols, 'tall' = 2 rows.
  // Only applied at lg+; smaller screens stack into uniform squares.
  span?: ProjectSpan
  // Optional: drop a path like '/projects/atv.jpg' (place file in /public/projects/).
  // Until you have images, the gradient placeholder is shown.
  image?: string
  gradient?: string
}

export const projects: ProjectMeta[] = [
  {
    slug: 'atv',
    title: 'ATV',
    tagline: 'Custom-designed all-terrain vehicle.',
    span: 'tall',
    gradient: 'from-zinc-700 via-zinc-800 to-zinc-950',
  },
  {
    slug: 'project-2',
    title: 'Project Two',
    tagline: 'Short description goes here.',
    span: 'wide',
    gradient: 'from-amber-900 via-zinc-900 to-zinc-950',
  },
  {
    slug: 'project-3',
    title: 'Project Three',
    tagline: 'Short description goes here.',
    gradient: 'from-emerald-900 via-zinc-900 to-zinc-950',
  },
  {
    slug: 'project-4',
    title: 'Project Four',
    tagline: 'Short description goes here.',
    gradient: 'from-blue-900 via-zinc-900 to-zinc-950',
  },
]