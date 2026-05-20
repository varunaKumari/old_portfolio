import React from 'react'

const ProjectsCard = ({ title, description, image, tech }) => {
  return (
    <div className="bg-dark-300 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300 shadow-lg">
      
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-52 object-cover"
      />

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-white">
          {title}
        </h3>

        <p className="text-gray-400 mb-4 text-sm leading-relaxed">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-white/10 text-white rounded-full text-xs"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <a
            href="#"
            className="flex-1 text-center px-4 py-2 bg-purple-600 rounded-lg font-medium hover:bg-purple-700 transition"
          >
            View Demo
          </a>
          <a
            href="#"
            className="flex-1 text-center px-4 py-2 border border-purple-500 rounded-lg font-medium hover:bg-purple-500/20 transition"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectsCard
