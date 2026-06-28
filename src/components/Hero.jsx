import React, { useEffect, useState } from 'react'

// Typing animation hook
function useTyping(words, speed = 80) {
  const [display, setDisplay] = useState('')
  const [wIdx, setWIdx] = useState(0)
  const [cIdx, setCIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wIdx]
    const timer = setTimeout(() => {
      if (!deleting) {
        setDisplay(word.slice(0, cIdx + 1))
        if (cIdx + 1 === word.length) setTimeout(() => setDeleting(true), 1800)
        else setCIdx(c => c + 1)
      } else {
        setDisplay(word.slice(0, cIdx - 1))
        if (cIdx - 1 === 0) { setDeleting(false); setWIdx(i => (i + 1) % words.length); setCIdx(0) }
        else setCIdx(c => c - 1)
      }
    }, deleting ? speed / 2 : speed)
    return () => clearTimeout(timer)
  }, [cIdx, deleting, wIdx, words, speed])

  return display
}

// My roles
const ROLES = [
  'React.js Specialist',
  'Front-End Developer',
  'UI/UX Craftsman',
]

export default function Hero() {
  const typed = useTyping(ROLES, 75)

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center z-10 px-6">
      <div className="max-w-4xl mx-auto text-center">

        {/* Available badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-[#0D1526] border border-[#00D4FF22] font-mono text-xs text-[#00D4FF]">
          <span className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse" />
          Available for new opportunities
        </div>

        {/* Name */}
        <h1 className="font-grotesk font-bold text-5xl md:text-7xl mb-4 leading-tight">
          Hi, I'm <span className="gradient-text">Hammad Anwar</span>
        </h1>

        {/* Typing role */}
        <div className="font-grotesk text-2xl md:text-3xl text-[#8892B0] mb-6 h-10">
          <span className="text-white">{typed}</span>
          <span className="cursor text-[#00D4FF] ml-1">|</span>
        </div>

        {/* Tagline */}
        <p className="font-inter text-[#8892B0] text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          Building scalable, production-grade web apps with{' '}
          <span className="text-white">React.js</span>,{' '}
          <span className="text-white">TypeScript</span>, and modern UI frameworks.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            onClick={e => { e.preventDefault(); document.getElementById('projects').scrollIntoView({ behavior: 'smooth' }) }}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#7C3AED] text-white font-grotesk font-semibold text-sm hover:opacity-90 transition-opacity duration-200 shadow-lg shadow-[#00D4FF22]"
          >
            View My Work
          </a>
          <a
            href="mailto:iamanwar.mac@gmail.com"
            className="px-8 py-3.5 rounded-full border border-[#8892B055] text-[#8892B0] font-grotesk font-medium text-sm hover:border-[#00D4FF] hover:text-[#00D4FF] transition-all duration-200"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#8892B055]">
          <span className="text-xs font-mono">scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#00D4FF44] to-transparent" />
        </div>
      </div>
    </section>
  )
}
