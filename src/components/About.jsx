import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Github, Linkedin, Instagram } from 'lucide-react'

const skills = [
  'C', 'C++', 'Java', 'Python', 'TypeScript', 'Node.js', 'React',
  'Next.js', 'Tailwind CSS',
  'Framer Motion', 'ShadCN/UI', 'Express', 'OpenCV', 'TensorFlow',
  'PostgreSQL', 'MongoDB', 'GraphQL', 'REST APIs',
  'Linux', 'Langchain', 'Hugging Face', 'CVzone', 'Bootstrap'
]

const stats = [
  { target: 5, suffix: '+', label: 'Projects Completed' },
  { target: 23, suffix: '+', label: 'Technologies' },
  { target: 1, suffix: '+', label: 'Years Experience' },
]

const socialLinks = [
  { href: '#', icon: Instagram, label: 'Instagram' },
  { href: 'https://github.com/varunaKumari', icon: Github, label: 'GitHub' },
  {
    href: 'https://www.linkedin.com/in/varunakumari?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    icon: Linkedin,
    label: 'LinkedIn',
  },
]

function AnimatedCounter({ target, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const duration = 1200
    const stepTime = Math.max(Math.floor(duration / target), 30)
    const timer = setInterval(() => {
      start += 1
      setCount(start)
      if (start >= target) clearInterval(timer)
    }, stepTime)

    return () => clearInterval(timer)
  }, [isInView, target])

  return (
    <span ref={ref} className="text-3xl sm:text-4xl font-bold gradient-text">
      {count}{suffix}
    </span>
  )
}

const About = () => {
  return (
    <section id="about" className="py-20 bg-dark-200">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">

        {/* ── LEFT SIDE ── */}
        <div>
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-extrabold mb-8 text-white"
          >
            About<span className="gradient-text">.</span>
          </motion.h2>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="space-y-5 text-gray-300 mb-8 leading-relaxed"
          >
            <p>
              Hey, I'm Varuna, a Artificial Intelligence and Data Science student at IIIT Raichur.
              I enjoy solving complex problems and building scalable applications,
              with a focus on backend development, system programming, and cloud infrastructure.
            </p>

            <p>
              I am currently learning Operating Systems, Object-Oriented Programming,
              Computer Networks, and System Design. I work with C++, TypeScript,
              Node.js, PostgreSQL, and Docker, continuously refining my skills
              through hands-on projects.
            </p>

            <p>
              I actively participate in competitive programming on CodeChef and Codeforces,
              strengthening my algorithmic thinking and problem-solving abilities.
            </p>

            <p>
              On the frontend, I specialize in React, Next.js, Tailwind CSS,
              and Framer Motion. I also work with DevOps tools like Docker,
              Kubernetes, Nginx, and CI/CD pipelines.
            </p>

            <p>
              I'm always eager to learn and take on new challenges, thriving
              in collaborative and fast-paced environments.
            </p>
          </motion.div>

          {/* ── Animated Counters ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-4 mb-10"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="glass-card rounded-xl p-4 text-center flex flex-col items-center gap-1"
              >
                <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                <span className="text-xs sm:text-sm text-gray-400 mt-1">{stat.label}</span>
              </div>
            ))}
          </motion.div>

          {/* ── Social Links ── */}
          <div className="flex items-center gap-5">
            <span className="font-medium text-gray-300">My Links →</span>
            {socialLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 flex items-center justify-center rounded-full glass-card
                           text-gray-300 hover:bg-purple/20 hover:text-purple transition-colors duration-300"
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* ── RIGHT SIDE: Skills ── */}
        <div id="skills">
          <motion.h3
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6 text-white"
          >
            Skills<span className="gradient-text">.</span>
          </motion.h3>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.05 } },
            }}
            className="flex flex-wrap gap-3"
          >
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="glass-card px-4 py-2 border border-purple/20 rounded-xl font-medium text-gray-200
                           hover:border-purple/60 hover:bg-purple/10 hover:scale-105
                           transition-all duration-300 cursor-default select-none"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default About