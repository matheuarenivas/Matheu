import { ProjectShell } from '@/features/projects/shared/ProjectShell'
import { ProjectHero } from '@/features/projects/shared/ProjectHero'

export function ProjectTwoPage() {
  return (
    <ProjectShell>
      <ProjectHero
        title="Project Two"
        tagline="Short description goes here."
      />

      <div className="mt-12 aspect-video w-full overflow-hidden bg-gradient-to-br from-amber-900 via-zinc-900 to-zinc-950" />

      <div className="mt-12 max-w-3xl space-y-6 text-muted-foreground">
        <p>Full project write-up coming soon.</p>
      </div>
    </ProjectShell>
  )
}