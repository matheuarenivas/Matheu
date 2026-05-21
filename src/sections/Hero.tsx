export function Hero() {
  return (
    <section className="flex flex-col items-start gap-6 px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
      <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
        Engineer · Designer · Builder
      </p>
      <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
        Building things you can see, touch, and compile.
      </h1>
      <p className="max-w-2xl text-lg text-muted-foreground">
        Hardware, software, and the systems that connect them. Selected work from CAD models to full-stack applications.
      </p>
    </section>
  )
}
