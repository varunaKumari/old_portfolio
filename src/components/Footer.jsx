import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  {
    icon: <Github size={18} />,
    href: 'https://github.com/varunaKumari',
    label: 'GitHub',
  },
  {
    icon: <Linkedin size={18} />,
    href: 'https://www.linkedin.com/in/varunakumari?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    label: 'LinkedIn',
  },
  {
    icon: <Mail size={18} />,
    href: 'mailto:varunakumari2102@gmail.com',
    label: 'Email',
  },
]

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-dark-100 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Top Section ── */}
        <div className="py-12 flex flex-col md:flex-row justify-between items-center md:items-start gap-10">

          {/* Brand */}
          <div className="text-center md:text-left">
            <a
              href="#"
              className="text-2xl font-bold text-white inline-flex items-center gap-2"
            >
              Varuna <span className="text-purple">Kumari</span>
              <span className="w-2 h-2 bg-purple rounded-full" />
            </a>
            <p className="text-gray-500 mt-2 text-sm max-w-xs">
              Building the future, one line of code at a time.
            </p>
          </div>

          {/* Quick links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-gray-400 hover:text-purple transition group text-sm"
              >
                <span>{link.label}</span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="text-sm text-gray-500 hover:text-purple transition cursor-pointer"
          >
            Back to Top ↑
          </button>
        </div>

        {/* ── Divider ── */}
        <div className="border-t border-white/5" />

        {/* ── Bottom Section ── */}
        <div className="py-6 flex flex-col-reverse md:flex-row justify-between items-center gap-4">

          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {year}{' '}
            <span className="text-white font-medium">Varuna Kumari</span>. All
            rights reserved.
          </p>

          {/* Social icons */}
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-purple/20 hover:text-purple transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
