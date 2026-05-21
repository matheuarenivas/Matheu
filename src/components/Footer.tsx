export function Footer() {
  return (
    <footer className="border-t border-border/40 py-8">
      <div className="flex w-full flex-col items-center justify-between gap-2 px-4 text-sm text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
        <span>© {new Date().getFullYear()} Matheu Arenivas</span>
        <span>Built with React, Vite & Three.js</span>
      </div>
    </footer>
  )
}
