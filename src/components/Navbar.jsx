import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const menuItems = ['Home', 'About', 'Skills', 'Projects', 'Work', 'Contact']

  return (
    <nav className="fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg">
      <div className="container mx-auto flex justify-between items-center relative">

        {/* Logo */}
        <a href="#" className="text-3xl font-bold text-white flex items-center gap-2">
          Varuna <span className="text-purple">Kumari</span>
          <span className="w-2 h-2 bg-purple rounded-full"></span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          {menuItems.map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-white/80 hover:text-purple transition group"
            >
              <span>{item}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Toggle Icon */}
        <div
          className="md:hidden cursor-pointer text-white"
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? <FaXmark className="text-2xl" /> : <FaBars className="text-2xl" />}
        </div>

        {/* Mobile Menu */}
        {showMenu && (
          <div className="md:hidden absolute top-full left-0 w-full bg-dark-100 flex flex-col items-center space-y-6 py-6 shadow-lg">
            {menuItems.map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white/80 hover:text-purple text-lg"
                onClick={() => setShowMenu(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar
