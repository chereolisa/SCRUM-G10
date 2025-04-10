import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LanguageSwitcher from './LanguageSwitcher'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="bg-blue-500 text-white p-4 sm:p-6 md:p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-xl sm:text-2xl md:text-3xl">TRUTH CHECK NIGERIA</h1>
        <button onClick={toggleMenu} className="lg:hidden p-2 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <div className={`lg:flex ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col lg:flex-row lg:space-x-6 lg:ml-auto">
          <li>
            <Link to="/" className="text-white hover:text-blue-300">{'Home'}</Link>
          </li>
          <li>
            <Link to="/signup" className="text-white hover:text-blue-300">{'Sign Up'}</Link>
          </li>
          <li>
            <Link to="/login" className="text-white hover:text-blue-300">{'Login'}</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
