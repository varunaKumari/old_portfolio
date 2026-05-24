import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import profile from '../assets/profile1.jpeg'

// ── Animation variants ─────────────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

// ── Particle dots data ─────────────────────────────────────────────────────
const particles = [
  { top: '10%', left: '8%',  delay: 0,   dur: 5 },
  { top: '20%', right: '12%', delay: 1.2, dur: 6 },
  { top: '60%', left: '5%',  delay: 0.6, dur: 7 },
  { top: '75%', right: '8%', delay: 2,   dur: 5.5 },
  { top: '35%', left: '18%', delay: 1.5, dur: 6.5 },
  { top: '85%', left: '50%', delay: 0.8, dur: 7.5 },
  { top: '15%', left: '70%', delay: 2.2, dur: 5 },
  { top: '50%', right: '18%', delay: 1,  dur: 6 },
]

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden hero-gradient"
    >
      {/* ── Floating decorative shapes (desktop only) ────────────── */}
      <motion.div
        className="hidden md:block absolute top-20 right-20 w-72 h-72 rounded-full bg-purple/10 blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="hidden md:block absolute bottom-32 left-16 w-56 h-56 rounded-full bg-pink/10 blur-3xl"
        animate={{ y: [0, 25, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="hidden md:block absolute top-1/2 right-1/3 w-24 h-24 rounded-lg rotate-45 bg-blue/5 blur-2xl"
        animate={{ y: [0, -20, 0], rotate: [45, 90, 45] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="hidden md:block absolute bottom-20 right-40 w-16 h-16 rounded-full bg-purple/5 blur-xl"
        animate={{ y: [0, 18, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* ── Particle dots ────────────────────────────────────────── */}
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute w-1 h-1 bg-purple/30 rounded-full particle-float"
          style={{
            top: p.top,
            left: p.left,
            right: p.right,
            animationDuration: `${p.dur}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      {/* ── Main content ─────────────────────────────────────────── */}
      <div className="container mx-auto px-4 md:px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12 relative z-10">

        {/* LEFT — Text content */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
          >
            Hi, I'm{' '}
            <span className="gradient-text">Varuna Kumari</span>
          </motion.h1>

          <motion.h2
            variants={fadeUp}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-6 leading-snug text-white/90"
          >
            2nd Year student at Indian Institute of Information Technology Raichur
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-gray-300 mb-8 max-w-xl mx-auto md:mx-0"
          >
            I create stunning web experiences with modern technologies and innovative design.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple/80 transition text-center text-white"
            >
              View Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border border-purple rounded-lg font-medium hover:bg-purple/20 transition text-center text-white"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>

        {/* RIGHT — Profile image with rotating ring */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
        >
          <div className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80">
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple to-pink blur-xl opacity-40" />

            {/* Rotating gradient ring */}
            <motion.div
              className="absolute -inset-2 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, #8B5CF6, #EC4899, #3B82F6, #8B5CF6)',
                padding: '3px',
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            >
              <div className="w-full h-full rounded-full bg-dark-100" />
            </motion.div>

            {/* Floating image (static rotation, only float) */}
            <motion.img
              src={profile}
              alt="Varuna Kumari – Profile Photo"
              className="absolute inset-0 rounded-full w-full h-full object-cover z-10"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────────────── */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 hover:text-purple transition z-10"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 scroll-bounce" />
      </motion.a>
    </section>
  )
}

export default Hero
