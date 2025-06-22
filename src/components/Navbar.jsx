import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <span className="brand-icon">☕</span>
          <span className="brand-text">Brew & Bean</span>
        </Link>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/menu" 
              className={`nav-link ${location.pathname === '/menu' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Menu
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/contact" 
              className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Contact Us
            </Link>
          </li>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 