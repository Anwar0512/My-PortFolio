import React from 'react'

// My projects
const projects = [
  {
    title: 'Hospital Queue Management System',
    desc: 'Real-time patient queue tracking system built for hospital use. Features department-wise queue views, live state updates, and seamless patient flow management across multiple departments.',
    tech: ['React.js', 'JavaScript', 'Tailwind CSS', 'Redux Toolkit'],
    icon: '🏥',
    highlight: 'Production-grade',
    color: '#00D4FF',
    link: 'https://github.com/Hammad2810',
  },
  {
    title: 'E-Badge Platform',
    desc: 'Web application for dynamic badge creation and management. Type-safe data handling via TypeScript, polished Material UI interface, and full badge lifecycle management for end users.',
    tech: ['React.js', 'TypeScript', 'Material UI', 'Redux Toolkit'],
    icon: '🪪',
    highlight: 'TypeScript-powered',
    color: '#7C3AED',
    link: 'https://github.com/Hammad2810',
  },
]

function ProjectCard({ title, desc, tech, icon, highlight, color, link }) {
  return (
    <div className="reveal glow-border rounded-2xl bg-[#0D1526] p-7 flex flex-col">
      {/* Card header */}
      <div className="flex items-start justify-between mb-5">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{icon}</span>
          <span
            className="text-xs font-mono px-2.5 py-1 rounded-full"
            style={{ color, background: `${color}15`, border: `1px solid ${color}33` }}
          >
            {highlight}
          </span>
        </div>
        {/* External link icon */}
        <a href={link} target="_blank" rel="noreferrer" className="text-[#8892B055] hover:text-[#00D4FF] transition-colors duration-200">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
          </svg>
        </a>
      </div>

      <h3 className="font-grotesk font-bold text-xl text-white mb-3">{title}</h3>
      <p className="text-[#8892B0] text-sm leading-relaxed mb-6 flex-1">{desc}</p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2">
        {tech.map(t => (
          <span key={t} className="text-xs font-mono px-2.5 py-1 rounded bg-[#1A2444] text-[#8892B0]">{t}</span>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="reveal text-center mb-16">
          <div className="inline-block mb-4">
            <span className="font-grotesk font-semibold text-xs text-[#94A3B8] uppercase tracking-[.12em] pb-1.5 border-b-2 border-[#00D4FF]">
              Key Projects
            </span>
          </div>
          <h2 className="font-grotesk font-bold text-4xl text-white">
            Things I've <span className="gradient-text">Built</span>
          </h2>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => <ProjectCard key={i} {...p} />)}
        </div>

        {/* GitHub link */}
        <div className="reveal text-center mt-10">
          <a
            href="https://github.com/Hammad2810"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#8892B0] hover:text-[#00D4FF] transition-colors duration-200 font-mono"
          >
            See more on GitHub →
          </a>
        </div>

      </div>
    </section>
  )
}
