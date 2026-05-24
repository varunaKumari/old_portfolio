import React, { useState, useEffect, useRef, useCallback } from 'react'
import { FaBars } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'
import { motion, AnimatePresence } from 'framer-motion'

const menuItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const navRef = useRef(null)

  // ── Scroll-aware background ──────────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // ── Active section via IntersectionObserver ───────────────────────────
  useEffect(() => {
    const sectionIds = ['home', 'about', 'projects', 'work', 'contact']
    const observers = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  // ── Close mobile menu on outside click / scroll ──────────────────────
  const closeMenu = useCallback(() => setShowMenu(false), [])

  useEffect(() => {
    if (!showMenu) return

    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) closeMenu()
    }

    document.addEventListener('mousedown', handleClickOutside)
    window.addEventListener('scroll', closeMenu, { passive: true })

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      window.removeEventListener('scroll', closeMenu)
    }
  }, [showMenu, closeMenu])

  // ── Helpers ──────────────────────────────────────────────────────────
  const isActive = (item) => {
    const target = item.href.replace('#', '')
    return activeSection === target
  }

  // ── Mobile link stagger variants ─────────────────────────────────────
  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.3, ease: 'easeOut', when: 'beforeChildren', staggerChildren: 0.06 },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.2, ease: 'easeIn', when: 'afterChildren' },
    },
  }

  const linkVariants = {
    hidden: { opacity: 0, x: -16 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.25, ease: 'easeOut' } },
    exit: { opacity: 0, x: -16, transition: { duration: 0.15 } },
  }

  return (
    <nav
      ref={navRef}
      role="navigation"
      aria-label="Main navigation"
      className={`fixed w-full z-50 transition-all duration-300 py-4 px-6 md:px-8 ${
        scrolled
          ? 'bg-dark-100/95 backdrop-blur-md border-b border-white/5 shadow-lg'
          : 'bg-transparent backdrop-blur-none'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center relative">
        {/* ── Logo ─────────────────────────────────────────────────── */}
        <a href="#home" className="text-2xl md:text-3xl font-bold text-white flex items-center gap-2">
          Varuna <span className="text-purple">Kumari</span>
          <span className="w-2 h-2 bg-purple rounded-full" />
        </a>

        {/* ── Desktop Menu ─────────────────────────────────────────── */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`relative text-sm font-medium transition group ${
                isActive(item) ? 'text-purple' : 'text-white/80 hover:text-purple'
              }`}
            >
              <span>{item.label}</span>
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-purple transition-all duration-300 ${
                  isActive(item) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </a>
          ))}

          {/* CTA */}
          <a
            href="#contact"
            className="px-4 py-2 bg-purple rounded-lg text-sm font-medium hover:bg-purple/80 transition text-white"
          >
            Hire Me
          </a>
        </div>

        {/* ── Mobile Toggle ────────────────────────────────────────── */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setShowMenu((v) => !v)}
          aria-expanded={showMenu}
          aria-label="Toggle menu"
        >
          {showMenu ? <FaXmark className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>

        {/* ── Mobile Menu ──────────────────────────────────────────── */}
        <AnimatePresence>
          {showMenu && (
            <motion.div
              key="mobile-menu"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden absolute top-full left-0 w-full bg-dark-100/95 backdrop-blur-md flex flex-col overflow-hidden rounded-b-xl shadow-xl border-b border-white/5"
            >
              <div className="flex flex-col px-4 py-4 gap-1">
                {menuItems.map((item) => (
                  <motion.a
                    key={item.label}
                    variants={linkVariants}
                    href={item.href}
                    onClick={closeMenu}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition ${
                      isActive(item)
                        ? 'text-purple bg-white/5'
                        : 'text-white/80 hover:text-purple hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </motion.a>
                ))}

                {/* Mobile CTA */}
                <motion.a
                  variants={linkVariants}
                  href="#contact"
                  onClick={closeMenu}
                  className="mt-2 block text-center px-4 py-3 bg-purple rounded-lg text-sm font-medium hover:bg-purple/80 transition text-white"
                >
                  Hire Me
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar
