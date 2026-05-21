import type { IconType } from 'react-icons'
import {
  SiReact,
  SiTypescript,
  SiVite,
  SiTailwindcss,
  SiDocker,
  SiKubernetes,
  SiFigma,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiPython,
  SiCplusplus,
  SiPostgresql,
  SiMysql,
  SiSpringboot,
  SiSharp,
  SiDotnet,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'
import { Marquee } from '@/components/Marquee'

type Tech = {
  name: string
  Icon: IconType
  // Brand color. For logos whose canonical color is black/very dark
  // (GitHub, etc.) we fall back to white so they read on a dark bg.
  color: string
}

// Edit this list to change what shows up.
const techStack: Tech[] = [
  { name: 'React', Icon: SiReact, color: '#61DAFB' },
  { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
  { name: 'Spring Boot', Icon: SiSpringboot, color: '#6DB33F' },
  { name: 'C#', Icon: SiSharp, color: '#239120' },
  { name: '.NET', Icon: SiDotnet, color: '#512BD4' },
  { name: 'Python', Icon: SiPython, color: '#3776AB' },
  { name: 'C++', Icon: SiCplusplus, color: '#00599C' },
  { name: 'Node.js', Icon: SiNodedotjs, color: '#5FA04E' },
  { name: 'Vite', Icon: SiVite, color: '#646CFF' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
  { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
  { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
  { name: 'Kubernetes', Icon: SiKubernetes, color: '#326CE5' },
  { name: 'AWS', Icon: FaAws, color: '#FF9900' },
  { name: 'Figma', Icon: SiFigma, color: '#F24E1E' },
  { name: 'Git', Icon: SiGit, color: '#F05032' },
  { name: 'GitHub', Icon: SiGithub, color: '#FFFFFF' },
]

export function TechStack() {
  return (
    <section className="py-12 sm:py-16">
      <h2 className="mb-8 px-4 text-sm uppercase tracking-[0.2em] text-muted-foreground sm:mb-10 sm:px-6 lg:px-8">
        Tech Stack
      </h2>
      <Marquee>
        {techStack.map(({ name, Icon, color }) => (
          <div
            key={name}
            className="flex shrink-0 items-center gap-3 px-8 sm:px-12"
            title={name}
          >
            <Icon
              color={color}
              className="size-8 sm:size-10"
              aria-hidden="true"
            />
            <span className="text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground transition-colors duration-300 hover:text-foreground sm:text-base">
              {name}
            </span>
          </div>
        ))}
      </Marquee>
    </section>
  )
}
