import React from 'react'

// Work experience
const experiences = [
  {
    role: 'Front-End Developer',
    company: 'MindStack Solutions Pvt Ltd',
    period: 'Jul 2024 – Jan 2026',
    location: 'Bengaluru, India',
    type: 'Full-time',
    color: '#00D4FF',
    bullets: [
      'Built a Hospital Queue Management System from scratch with real-time patient flow tracking across multiple departments.',
      'Developed an E-Badge web application delivering dynamic badge generation with TypeScript + Material UI.',
      'Integrated REST APIs with backend teams ensuring seamless data flow and responsive performance.',
      'Followed component-driven architecture, maintaining reusable components that reduced redundant code.',
      'Participated in code reviews contributing to overall codebase quality and maintainability.',
    ],
  },
  {
    role: 'Co-Founder',
    company: 'EduNectar (EdTech Startup)',
    period: 'Feb 2021 – Jun 2023',
    location: 'Aligarh, India',
    type: 'Self-Founded',
    color: '#7C3AED',
    bullets: [
      'Co-founded a subscription-based EdTech startup with recorded lectures and live doubt-solving via mobile app.',
      'Recruited, onboarded, and managed teachers responsible for content creation and live sessions.',
      'Oversaw end-to-end content operations — schedules, quality review, and publishing.',
      'Gained hands-on experience in team management and early-stage startup building over 2+ years.',
    ],
  },
]

// Education
const education = {
  degree: 'B.Tech — Computer Science & Engineering',
  university: 'Noida International University',
  year: '2016 – 2020',
}

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 py-28 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="reveal text-center mb-16">
          <div className="inline-block mb-4">
            <span className="font-grotesk font-semibold text-xs text-[#94A3B8] uppercase tracking-[.12em] pb-1.5 border-b-2 border-[#00D4FF]">
              Work History
            </span>
          </div>
          <h2 className="font-grotesk font-bold text-4xl text-white">
            Where I've <span className="gradient-text">Worked</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#00D4FF] via-[#7C3AED] to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div key={i} className="reveal relative pl-16">
                {/* Timeline dot */}
                <div
                  className="absolute left-4 top-6 w-4 h-4 rounded-full border-2 -translate-x-1/2"
                  style={{ borderColor: exp.color, background: '#0A0F1E', boxShadow: `0 0 12px ${exp.color}66` }}
                />

                <div className="glow-border rounded-2xl bg-[#0D1526] p-6">
                  {/* Role + Period */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-grotesk font-bold text-xl text-white">{exp.role}</h3>
                      <p className="font-inter text-sm mt-1" style={{ color: exp.color }}>{exp.company}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className="font-mono text-xs text-[#8892B0] block">{exp.period}</span>
                      <span className="font-mono text-xs text-[#8892B055]">{exp.location}</span>
                    </div>
                  </div>

                  {/* Type badge */}
                  <span
                    className="inline-block mb-4 px-2.5 py-0.5 rounded text-xs font-mono border"
                    style={{ color: exp.color, borderColor: `${exp.color}44` }}
                  >
                    {exp.type}
                  </span>

                  {/* Bullet points */}
                  <ul className="space-y-2">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-sm text-[#8892B0] leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: exp.color }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* Career break note */}
            <div className="reveal relative pl-16">
              <div
                className="absolute left-4 top-4 w-3 h-3 rounded-full border border-[#8892B055] -translate-x-1/2"
                style={{ background: '#0A0F1E' }}
              />
              <div className="rounded-xl border border-dashed border-[#8892B033] p-4 text-sm text-[#8892B055] font-mono">
                // Career Break (Jul 2023 – Jun 2024) —  Personal development, self-study of React patterns, TypeScript, and open-source exploration.
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="reveal mt-16 text-center mb-6">
          <div className="inline-block">
            <span className="font-grotesk font-semibold text-xs text-[#94A3B8] uppercase tracking-[.12em] pb-1.5 border-b-2 border-[#00D4FF]">
              Education
            </span>
          </div>
        </div>
        <div className="reveal glow-border rounded-2xl bg-[#0D1526] p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#00D4FF22] to-[#7C3AED22] text-2xl">
              🎓
            </div>
            <div>
              <h3 className="font-grotesk font-bold text-white">{education.degree}</h3>
              <p className="text-sm text-[#8892B0]">{education.university}</p>
            </div>
          </div>
          <span className="font-mono text-xs text-[#00D4FF] flex-shrink-0">{education.year}</span>
        </div>

      </div>
    </section>
  )
}
