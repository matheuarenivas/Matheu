import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { ProjectMeta, ProjectSpan } from '@/features/projects/data'

type ProjectCardProps = {
  project: ProjectMeta
}

// Static class strings so Tailwind's JIT picks them up.
// Below lg: every tile is a uniform square (clean stacking).
// At lg+: tiles fill their grid cell (cell size is set by the grid container, not the tile).
const spanClasses: Record<ProjectSpan, string> = {
  wide: 'lg:col-span-2',
  tall: 'lg:row-span-2',
}

export function ProjectCard({ project }: ProjectCardProps) {
  const spanClass = project.span ? spanClasses[project.span] : ''

  return (
    <Link
      to={`/${project.slug}`}
      aria-label={project.title}
      className={cn(
        'group relative block aspect-square overflow-hidden bg-secondary lg:aspect-auto',
        spanClass,
      )}
    >
      {project.image ? (
        <img
          src={project.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      ) : (
        <div
          className={cn(
            'absolute inset-0 bg-gradient-to-br transition-transform duration-700 ease-out group-hover:scale-105',
            project.gradient ?? 'from-zinc-700 via-zinc-800 to-zinc-950',
          )}
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-white/70">{project.tagline}</p>
          </div>
          <ArrowUpRight
            className="size-5 shrink-0 translate-y-1 text-white/70 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
            aria-hidden="true"
          />
        </div>
      </div>
    </Link>
  )
}