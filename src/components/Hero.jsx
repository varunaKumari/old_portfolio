import React from 'react'
import { motion } from 'framer-motion'
import profile from '../assets/profile1.jpeg'

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      id="home"
      className="min-h-screen flex items-center pt-24 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]"
    >
      <div className="container mx-auto px-4 md:px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12">

        {/* LEFT CONTENT */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 typewriter">
            Hi, I'm <span className="text-purple">Varuna Kumari</span>
          </h1>

          <h2 className="text-lg sm:text-xl md:text-4xl font-semibold mb-6 leading-snug">
            2nd Year student at Indian Institute of Information Technology Raichur
          </h2>

          <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-xl mx-auto md:mx-0">
            I create stunning web experiences with modern technologies and innovative design.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition text-center"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-purple rounded-lg font-medium hover:bg-purple/20 transition text-center"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-80 md:h-80">

            {/* GLOW */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-xl opacity-50"></div>

            {/* FLOATING IMAGE */}
            <motion.img
              src={profile}
              alt="Profile"
              className="relative rounded-full w-full h-full object-cover border-4 border-purple-500 z-10"
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>
        </div>

      </div>
    </motion.div>
  )
}

export default Hero
