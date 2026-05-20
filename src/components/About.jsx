import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram } from 'lucide-react'

const skills = [
  'C', 'C++', 'Java', 'Python', 'TypeScript', 'Node.js', 'React',
  'Next.js', 'Tailwind CSS',
  'Framer Motion', 'ShadCN/UI', 'Express', 'OpenCV', 'TensorFlow',
  'PostgreSQL', 'MongoDB', 'GraphQL', 'REST APIs',
  'Linux', 'Langchain', 'Hugging Face', 'CVzone', 'Bootstrap'
]

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      id="about"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-5xl font-extrabold mb-8">
            About<span className="text-indigo-500">.</span>
          </h2>

          <div className="space-y-5 text-gray-300 mb-8 leading-relaxed">
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
              I’m always eager to learn and take on new challenges, thriving
              in collaborative and fast-paced environments.
            </p>
          </div>

          {/* LINKS */}
          <div className="flex items-center gap-6 mt-8 text-gray-300 mb-8">
            <span className="font-medium">My Links →</span>
            <a href="#" className="hover:text-indigo-500"><Instagram /></a>
            <a href="https://github.com/varunaKumari" className="hover:text-indigo-500"><Github /></a>
            <a href="https://www.linkedin.com/in/varunakumari?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:text-indigo-500"><Linkedin /></a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <h3 className="text-3xl font-bold mb-6">Skills</h3>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-6 py-3 border border-purple rounded-lg font-medium hover:bg-purple/20 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </motion.section>
  )
}

export default About