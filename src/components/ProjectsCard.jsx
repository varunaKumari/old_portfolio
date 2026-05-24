import React from 'react'

const ProjectsCard = ({ title, description, image, tech }) => {
  return (
    <div
      className="group glow-border glass-card rounded-2xl overflow-hidden
                 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple/5
                 transition-all duration-300"
    >
      {/* ── Image Section ── */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-48 sm:h-52 object-cover transition-transform duration-500
                     group-hover:scale-110"
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-300 to-transparent pointer-events-none" />
      </div>

      {/* ── Content Section ── */}
      <div className="p-5 sm:p-6">
        {/* Title */}
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-purple/10 text-purple-300 border border-purple/20
                         rounded-full text-xs font-medium"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <a
            href="#"
            className="flex-1 text-center px-4 py-2.5 text-sm font-medium rounded-lg
                       bg-gradient-to-r from-purple to-pink text-white
                       hover:shadow-lg hover:shadow-purple/25
                       transition-all duration-300"
          >
            View Demo
          </a>
          <a
            href="#"
            className="flex-1 text-center px-4 py-2.5 text-sm font-medium rounded-lg
                       border border-white/10 text-white
                       hover:border-purple/50 hover:bg-purple/10
                       transition-all duration-300"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectsCard
