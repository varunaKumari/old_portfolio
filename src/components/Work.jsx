import React from 'react'
import { motion } from 'framer-motion'

const journeyData = [
  {
    role: 'AI & Data Science Student',
    company: 'IIIT Raichur',
    duration: '2024 - Present',
    description:
      'Pursuing B.Tech in Artificial Intelligence and Data Science. Building projects in web development, machine learning, and system programming.',
    isCurrent: true,
  },
  {
    role: 'Open Source Contributor',
    company: 'GitHub',
    duration: '2024 - Present',
    description:
      'Contributing to open source projects and building a portfolio of personal projects using modern web technologies.',
    isCurrent: false,
  },
  {
    role: 'Competitive Programmer',
    company: 'CodeChef & Codeforces',
    duration: '2024 - Present',
    description:
      'Actively participating in competitive programming contests, strengthening algorithmic thinking and problem-solving abilities.',
    isCurrent: false,
  },
]

const cardVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
      ease: 'easeOut',
    },
  }),
}

const Work = () => {
  return (
    <section id="work" className="py-24 bg-dark-200">
      <div className="container mx-auto px-6">

        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-gray-400 mt-4 text-lg max-w-xl mx-auto">
            My academic and development journey
          </p>
        </motion.div>

        {/* ── Timeline ── */}
        <div className="relative max-w-4xl mx-auto pl-6 md:pl-10">

          {/* Gradient vertical line */}
          <div
            className="absolute left-3 md:left-5 top-0 h-full w-0.5 md:w-1 rounded-full"
            style={{
              background:
                'linear-gradient(to bottom, #8B5CF6, #EC4899, #3B82F6)',
            }}
          />

          {/* Cards */}
          <div className="space-y-12">
            {journeyData.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="relative pl-10 md:pl-14"
              >
                {/* Timeline dot */}
                <span
                  className={`absolute left-0 md:left-1.5 top-6 w-4 h-4 md:w-5 md:h-5 rounded-full border-[3px] border-dark-200 z-10 ${
                    item.isCurrent
                      ? 'bg-purple'
                      : 'bg-dark-400'
                  }`}
                  style={
                    item.isCurrent
                      ? { animation: 'pulse-glow 2s ease-in-out infinite' }
                      : undefined
                  }
                />

                {/* Card */}
                <div className="glass-card glow-border rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1 cursor-default">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {item.role}
                      </h3>
                      <p className="text-purple mt-1 font-medium">
                        {item.company}
                      </p>
                    </div>

                    {/* Duration badge */}
                    <span className="inline-block self-start whitespace-nowrap rounded-full bg-gradient-to-r from-purple/20 to-pink/20 px-4 py-1 text-sm font-medium text-purple">
                      {item.duration}
                    </span>
                  </div>

                  <p className="text-gray-400 mt-4 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Work
