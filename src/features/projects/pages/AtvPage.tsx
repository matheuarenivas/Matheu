import { ProjectShell } from '@/features/projects/shared/ProjectShell'
import { ProjectHero } from '@/features/projects/shared/ProjectHero'

export function AtvPage() {
  return (
    <ProjectShell>
      <ProjectHero
        title="ATV"
        tagline="Custom-designed all-terrain vehicle."
      />

      <div className="mt-12 aspect-video w-full overflow-hidden bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-950">
        {/* Replace with a Three.js / R3F scene or hero image later. */}
      </div>

      <div className="mt-12 max-w-3xl space-y-6 text-muted-foreground">
        <p>Full project write-up coming soon.</p>
      </div>
    </ProjectShell>
  )
}