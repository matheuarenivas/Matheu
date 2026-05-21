const HERO_IMAGE = '/me.jpeg'

export function About() {
  return (
    <article className="flex flex-col">
      {/* Hero — full-bleed image with overlaid title at the bottom */}
      <section className="relative h-[80svh] min-h-[520px] w-full overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
          <p className="text-xs uppercase tracking-[0.24em] text-white/70">
            About
          </p>
          <h1 className="mt-4 max-w-5xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            Building the bridge between hardware and software.
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <p className="mb-6 text-xs uppercase tracking-[0.24em] text-muted-foreground">
          Hi, I'm Matheu.
        </p>
        <p className="max-w-4xl text-2xl font-medium leading-snug tracking-tight text-foreground sm:text-3xl lg:text-4xl">
          I'm an engineer who likes building things that exist in the real world —
          machines you can touch and the systems that make them think.
        </p>
      </section>

      <hr className="border-border/40" />

      {/* Background */}
      <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-16">
          <h2 className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
            Background
          </h2>
          <div className="max-w-3xl space-y-6 text-lg text-muted-foreground sm:text-xl">
            <p className="text-foreground">
              Short paragraph about who you are and where you're coming from —
              school, role, what drew you to engineering.
            </p>
            <p>
              A second paragraph about the kinds of problems you like to work on
              and what you've shipped.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-border/40" />

      {/* What I Do */}
      <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-16">
          <h2 className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
            What I Do
          </h2>
          <div className="max-w-3xl space-y-6 text-lg text-muted-foreground sm:text-xl">
            <p className="text-foreground">
              A line about the work — full-stack apps, CAD/CAM, 3D modeling,
              embedded systems, anything that connects software to the
              physical world.
            </p>
            <p>
              Whatever framing you want — disciplines you bridge, the kinds of
              teams you like, the scale of problems that excite you.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-border/40" />

      {/* Stats */}
      <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          <Stat value="5+" label="Years building software" />
          <Stat value="4" label="Featured projects" />
          <Stat value="∞" label="Things to make" />
        </div>
      </section>

      <hr className="border-border/40" />

      {/* Approach / closing */}
      <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-16">
          <h2 className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
            Approach
          </h2>
          <div className="max-w-3xl space-y-6 text-lg text-muted-foreground sm:text-xl">
            <p className="text-foreground">
              The way you think about a project — fast iteration, prototyping in
              CAD before code, whatever it is. Three or four sentences max.
            </p>
            <p>
              Closing thought — what's next, what you're chasing, why this
              matters.
            </p>
          </div>
        </div>
      </section>
    </article>
  )
}

type StatProps = {
  value: string
  label: string
}

function Stat({ value, label }: StatProps) {
  return (
    <div>
      <p className="text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
        {value}
      </p>
      <p className="mt-2 text-sm uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </p>
    </div>
  )
}
