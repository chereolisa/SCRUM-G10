import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LanguageSwitcher from './LanguageSwitcher'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src="/images/nav-logo.png" alt="Logo" className="nav-logo" />
      </div>

      <div className="nav-links">
        <ul>
          <li><Link className='links' to="/src/pages/Features.tsx">{'Features'}</Link></li>
          <li><Link className='links' to="/src/pages/Team.tsx">{'Team'}</Link></li>
          <li><Link className='links' to="/src/pages/HowItWorks.tsx">{'How it works'}</Link></li>
          <li><Link className='links' to="/src/pages/VerifyNow.tsx">{'Verify Now'}</Link></li>
          <li><Link className='links' to="/src/pages/FAQ.tsx">{'FAQ'}</Link></li>
        </ul>
      </div>

      <div className="nav-actions">
        <button className="signup">
            <Link to="/signup" className="signup-link">{'Sign Up'}</Link>
          </button>
          <button className="login">
            <Link to="/login" className="login-link">{'Login'}</Link>
          </button>
      
      </div>
    </nav>
  )
}

export default Navbar
