import React from "react"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* COPYRIGHT */}
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-medium">
              Varuna Kumari
            </span>
            . All rights reserved.
          </p>

  <div className="flex gap-4"> <a href="https://github.com/varunaKumari" target="_blank" rel="noopener noreferrer" className="hover:text-purple transition" > GitHub </a> <a href="https://www.linkedin.com/in/varunakumari?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:text-purple transition" > LinkedIn </a> <a href="mailto:varunakumari2102@gmail.com" className="hover:text-purple transition" > Email </a> </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
