import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronUp } from 'lucide-react'
import Home from './pages/Home'
import Navbar from './components/Navbar'

const App = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </AnimatePresence>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            key="scroll-top"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-purple text-white shadow-lg cursor-pointer hover:bg-purple/90 transition-colors duration-200"
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
