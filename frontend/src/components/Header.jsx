import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo Section */}
        <Link to="/" className="header-logo" onClick={closeMenu}>
          <div className="logo-icon">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C10.5 4 8 7 8 10C8 13.5 10 16 12 16C14 16 16 13.5 16 10C16 7 13.5 4 12 2Z" fill="#e74c3c"/>
              <path d="M12 16C9 16 7 13.5 7 10C7 8.5 7.5 7 8.2 5.8C7.5 6.8 7 8 7 9.5C7 13 9.5 15.5 12 15.5C14.5 15.5 17 13 17 9.5C17 8 16.5 6.8 15.8 5.8C16.5 7 17 8.5 17 10C17 13.5 15 16 12 16Z" fill="#f39c12"/>
              <circle cx="12" cy="20" r="2" fill="#e74c3c" opacity="0.3"/>
            </svg>
          </div>
          <div className="logo-text">
            <span className="logo-title">FireGuard</span>
            <span className="logo-subtitle">IoT Safety</span>
          </div>
        </Link>

        {/* Navigation Menu */}
        <nav className={`header-nav ${menuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`} onClick={closeMenu}>Dashboard</Link></li>
            <li><Link to="/reports" className={`nav-link ${isActive('/reports') ? 'active' : ''}`} onClick={closeMenu}>Reports</Link></li>
            <li><Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`} onClick={closeMenu}>Contact</Link></li>
          </ul>
        </nav>

        {/* Tagline with Animation */}
        <div className="header-tagline">
          <span className="tagline-text">Smart Fire Detection for Safer Tomorrow</span>
        </div>

        {/* Auth Buttons */}
        <div className="header-auth">
          <Link to="/login" className="btn btn-login">Log In</Link>
          <Link to="/signup" className="btn btn-signup">Sign Up</Link>
        </div>

        {/* Mobile Hamburger */}
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`bar ${menuOpen ? 'bar-open' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'bar-open' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'bar-open' : ''}`}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
