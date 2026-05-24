import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectsCard from './ProjectsCard'

// project images
import img1 from '../assets/pro1.jpeg'
import img2 from '../assets/pro2.jpg'
import img3 from '../assets/Screenshot 2025-12-19 141936.png'
import img4 from '../assets/Screenshot 2025-12-19 140251.png'
import img5 from '../assets/Screenshot 2025-12-19 140630.png'
import img6 from '../assets/image.png'

const projects = [
  {
    title: 'SocialMedia (Real-Time AI-Enhanced Social Platform)',
    description:
      'A full-fledged social media platform designed for teenagers and developers. This project blends modern design, scalable backend systems, and real-time communication, enhanced with AI, to deliver a dynamic and engaging user experience.',
    image: img1,
    tech: ['TypeScript', 'Node.js', 'Turborepo', 'Express'],
    category: 'Backend',
  },
  {
    title: 'Multi-User Real-Time Whiteboard (Collaborative Web Application)',
    description:
      'Built a real-time multi-user whiteboard using Next.js, GraphQL subscriptions, and WebSockets, enabling low-latency collaborative drawing and synchronized canvas updates across multiple clients.',
    image: img2,
    tech: ['Node.js + TypeScript', 'GraphQL', 'REST APIs', 'WebSockets'],
    category: 'Backend',
  },
  {
    title: 'AI Sign Language Detection',
    description:
      'A real-time sign language recognition system using computer vision and deep learning to detect and classify hand gestures through a webcam.',
    image: img6,
    tech: ['OpenCV (cv2)', 'CVZone', 'TensorFlow / Keras'],
    category: 'AI/ML',
  },
  {
    title: 'Portfolio Website',
    description:
      'Personal portfolio with animations and responsive design.',
    image: img5,
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    category: 'Frontend',
  },
  {
    title: 'Chat Application',
    description:
      'Real-time chat application with authentication and online presence.',
    image: img4,
    tech: ['Next.js', 'Socket.io', 'Redis'],
    category: 'Backend',
  },
  {
    title: 'To be added...',
    description:
      'Mern Stack Doctor Appointment System',
    image: img3,
    tech: ['React Native', 'GraphQL', 'Bootstrap', 'API'],
    category: 'Frontend',
  },
]

const filters = ['All', 'Frontend', 'Backend', 'AI/ML']

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="py-20 bg-dark-200">
      <div className="container mx-auto px-6">

        {/* ── Heading ── */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center mb-3 text-white"
        >
          Projects<span className="gradient-text">.</span>
        </motion.h2>

        {/* Decorative line */}
        <div className="w-20 h-1 bg-gradient-to-r from-purple to-pink mx-auto rounded-full mb-4" />

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10">
          A showcase of my recent work and technical projects
        </p>

        {/* ── Filter Tabs ── */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer
                ${activeFilter === filter
                  ? 'bg-gradient-to-r from-purple to-pink text-white shadow-lg shadow-purple/25'
                  : 'glass-card text-gray-400 hover:text-white hover:border-purple/40'
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* ── Cards Grid ── */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <ProjectsCard {...project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ── View More Button ── */}
        <div className="flex justify-center mt-14">
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="group relative px-8 py-4 rounded-xl text-white font-medium
                       flex items-center gap-3 glow-border glass-card
                       border border-purple/30 hover:border-purple/60
                       hover:bg-purple/10 transition-all duration-300"
          >
            View More Projects
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </motion.a>
        </div>

      </div>
    </section>
  )
}

export default Projects
