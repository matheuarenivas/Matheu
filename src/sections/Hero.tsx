export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background video — drop a compressed MP4 at /public/vid.mp4 */}
      <video
        src="/vid.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      {/* Dark overlay so the text stays readable on top of the video */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/70 via-background/40 to-background" />

      <div className="flex flex-col items-start gap-6 px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
          Engineer · Designer · Builder
        </p>
        <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          Building things you can see, touch, and compile.
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          Hardware, software, and the systems that connect them. Selected work from CAD models to full-stack applications.
        </p>
      </div>
    </section>
  )
}
