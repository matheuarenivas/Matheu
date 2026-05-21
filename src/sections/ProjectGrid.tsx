import { ProjectCard } from '@/features/projects/ProjectCard'
import { projects } from '@/features/projects/data'

export function ProjectGrid() {
  return (
    <section className="px-4 pb-24 sm:px-6 sm:pb-32 lg:px-8">
      <div className="mb-8 flex items-end justify-between gap-4 sm:mb-10">
        <h2 className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
          Selected Work
        </h2>
      </div>
      <div className="grid grid-flow-dense grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:aspect-[3/2] lg:grid-cols-3 lg:grid-rows-2 lg:gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}