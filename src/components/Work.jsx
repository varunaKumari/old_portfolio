import React from 'react'
import { motion } from 'framer-motion'

const experiences = [
  {
    role: '',
    company: '',
    duration: '',
    description:
      '',
  },
  {
    role: '',
    company: '',
    duration: '',
    description:
      '',
  },
  {
    role: '',
    company: '',
    duration: '',
    description:
      '',
  },
]

const Work = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
    id="work" className="py-24 bg-dark-200">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Work <span className="text-purple-500">Experience</span>
          </h2>
          <p className="text-gray-400 mt-3">
            My professional journey so far
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">

          {/* Vertical Line */}
          <div className="absolute left-4 top-0 h-full w-1 bg-purple-500/30"></div>

          {/* Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative pl-16"
              >
                {/* Dot */}
                <div className="absolute left-0 top-6 w-5 h-5 bg-purple-500 rounded-full"></div>

                {/* Card */}
                <div className="bg-dark-300 rounded-2xl p-6 shadow-lg">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {exp.role}
                      </h3>
                      <p className="text-purple-400 mt-1">
                        {exp.company}
                      </p>
                    </div>

                    {/* Date */}
                    <span className="px-4 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm whitespace-nowrap">
                      {exp.duration}
                    </span>
                  </div>

                  <p className="text-gray-400 mt-4 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  )
}

export default Work
