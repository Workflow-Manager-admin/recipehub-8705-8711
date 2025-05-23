import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';

// PUBLIC_INTERFACE
/**
 * Navigation bar component for RecipeHub
 * Displays logo, search bar, and navigation links
 */
const NavBar = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <div className="navbar-brand">
            <Link to="/" className="logo">
              <span className="logo-symbol">🍳</span> RecipeHub
            </Link>
          </div>
          
          <div className="navbar-search">
            <SearchBar />
          </div>
          
          <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
          
          <div className={`navbar-menu ${mobileMenuOpen ? 'open' : ''}`}>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/search" className="nav-link">Browse</Link>
            <Link to="/collections" className="nav-link">My Collections</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
