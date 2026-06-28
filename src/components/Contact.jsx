import React, { useState } from 'react'

// Contact details
const contactInfo = {
  email: 'iamanwar.mac@gmail.com',
  phone: '+91 8757470358',
  location: 'Bettiah, Bihar, India',
  linkedin: 'https://linkedin.com/in/hammad-anwar-922a37206',
}

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="relative z-10 py-28 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="reveal">

          {/* Section label */}
          <div className="inline-block mb-4">
            <span className="font-grotesk font-semibold text-xs text-[#94A3B8] uppercase tracking-[.12em] pb-1.5 border-b-2 border-[#00D4FF]">
              Get In Touch
            </span>
          </div>

          <h2 className="font-grotesk font-bold text-4xl text-white mb-6">
            Let's Build Something<br />
            <span className="gradient-text">Amazing Together</span>
          </h2>

          <p className="text-[#8892B0] leading-relaxed mb-12">
            I'm actively looking for new opportunities. Whether you have a role in mind or just want to connect, my inbox is always open.
          </p>

          {/* Contact info card */}
          <div className="glow-border rounded-2xl bg-[#0D1526] p-8 mb-8">
            <div className="space-y-4">

              {/* Email with copy */}
              <div className="flex items-center justify-between gap-4 p-3 rounded-xl bg-[#1A2444]">
                <div className="flex items-center gap-3">
                  <span className="text-xl">📧</span>
                  <span className="font-mono text-sm text-white">{contactInfo.email}</span>
                </div>
                <button
                  onClick={copyEmail}
                  className="text-xs font-mono px-3 py-1.5 rounded-lg border transition-all duration-200 flex-shrink-0"
                  style={copied
                    ? { borderColor: '#00D4FF', color: '#00D4FF' }
                    : { borderColor: '#8892B033', color: '#8892B0' }
                  }
                >
                  {copied ? '✓ Copied' : 'Copy'}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#1A2444]">
                <span className="text-xl">📱</span>
                <span className="font-mono text-sm text-white">{contactInfo.phone}</span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#1A2444]">
                <span className="text-xl">📍</span>
                <span className="font-mono text-sm text-white">{contactInfo.location}</span>
              </div>

            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex gap-4 justify-center">
            <a
              href={`mailto:${contactInfo.email}`}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#7C3AED] text-white font-grotesk font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-[#00D4FF22]"
            >
              Send Email
            </a>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3.5 rounded-full border border-[#8892B055] text-[#8892B0] font-grotesk font-medium text-sm hover:border-[#00D4FF] hover:text-[#00D4FF] transition-all duration-200"
            >
              LinkedIn
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
