import React from 'react'
import { motion } from 'framer-motion'
import ProjectsCard from './ProjectsCard'

// sample images (replace with your own)
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
  },
  {
    title: 'Multi-User Real-Time Whiteboard (Collaborative Web Application)',
    description:
      'Built a real-time multi-user whiteboard using Next.js, GraphQL subscriptions, and WebSockets, enabling low-latency collaborative drawing and synchronized canvas updates across multiple clients.',
    image: img2,
    tech: ['Node.js + TypeScript', 'GraphQL', 'REST APIs', 'WebSockets'],
  },
  {
    title: 'AI Sign Language Detection',
    description:
      'A real-time sign language recognition system using computer vision and deep learning to detect and classify hand gestures through a webcam.',
    image: img6,
    tech: ['OpenCV (cv2)', 'CVZone', 'TensorFlow / Keras'],
  },
{
    title: 'Portfolio Website',
    description:
      'Personal portfolio with animations and responsive design.',
    image: img5,
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Chat Application',
    description:
      'Real-time chat application with authentication and online presence.',
    image: img4,
    tech: ['Next.js', 'Socket.io', 'Redis'],
  },
  {
    title: 'To be added...',
    description:
      'Mern Stack Doctor Appointment System',
    image: img3,
    tech: ['React Native', 'GraphQL', 'Bootstrap', 'API'],
  },

  
]

const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      id="projects"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-4">
          Projects <span className="text-purple-500">.</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          A showcase of my recent work and technical projects
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectsCard key={index} {...project} />
          ))}
        </div>


 {/* VIEW MORE BUTTON */}
        <div className="flex justify-center mt-14">
          <a
            href="#"
            className="group px-8 py-4 border border-purple-500 rounded-xl text-white font-medium
                       flex items-center gap-3 hover:bg-purple-500/10 transition"
          >
            View More Projects
            <span className="group-hover:translate-x-1 transition">→</span>
          </a>
        </div>

      </div>
    </motion.section>
  )
}

export default Projects
