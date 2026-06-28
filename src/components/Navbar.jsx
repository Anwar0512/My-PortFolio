import React, { useEffect, useState } from 'react'

const navLinks = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact']

export default function Navbar() {
  const [active, setActive] = useState('Home')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      navLinks.forEach(l => {
        const el = document.getElementById(l.toLowerCase())
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120 && rect.bottom > 0) setActive(l)
        }
      })
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'nav-blur bg-[#0A0F1Ecc] border-b border-[#00D4FF11]' : ''}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <span
          className="font-grotesk font-bold text-lg gradient-text cursor-pointer"
          onClick={() => scrollTo('home')}
        >
          {'<HA />'}
        </span>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">
          {navLinks.map(l => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className={`font-inter text-sm transition-colors duration-200 ${active === l ? 'text-[#00D4FF]' : 'text-[#8892B0] hover:text-white'}`}
            >
              {l}
            </button>
          ))}
        </div>

        {/* Hire Me Button */}
        <button
          onClick={() => scrollTo('contact')}
          className="hidden md:block text-sm font-grotesk font-medium px-5 py-2 rounded-full border border-[#00D4FF] text-[#00D4FF] hover:bg-[#00D4FF] hover:text-[#0A0F1E] transition-all duration-200"
        >
          Hire Me
        </button>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-[#00D4FF]" onClick={() => setMenuOpen(m => !m)}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0D1526] border-t border-[#00D4FF11] px-6 py-4 flex flex-col gap-4">
          {navLinks.map(l => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className={`text-sm text-left ${active === l ? 'text-[#00D4FF]' : 'text-[#8892B0]'}`}
            >
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
