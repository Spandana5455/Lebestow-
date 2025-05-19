import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from './images/logo.png'; 
import './Navbar.css'; 


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setOpenDropdown(null); 
  };

  const handleDropdownToggle = (menu) => {
    setOpenDropdown(prev => (prev === menu ? null : menu));
  };

  const closeMenu = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };
  return (
    <div className="navbar-section">
      <nav className="navbar navbar-expand-lg container-fluid">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} className="logo-image" alt="lebestow-logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleToggle}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse justify-content-end ${isOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={closeMenu}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" onClick={closeMenu}>About Us</Link>
              </li>

              {/* Explore Dropdown */}
              <li className={`nav-item dropdown ${openDropdown === 'explore' ? 'show' : ''}`}>
                <span
                  className="nav-link dropdown-toggle"
                  onClick={() => handleDropdownToggle('explore')}
                  role="button"
                >
                  Explore Properties
                </span>
                <ul className={`dropdown-menu ${openDropdown === 'explore' ? 'show' : ''}`}>
                  <li><Link className="dropdown-item" to="/explore/aira" onClick={closeMenu}>Co-living Aira</Link></li>
                  <li><Link className="dropdown-item" to="/explore/bhuvan" onClick={closeMenu}>Co-living Bhuvan</Link></li>
                  <li><Link className="dropdown-item" to="/explore/casa" onClick={closeMenu}>Casa</Link></li>
                  <li><Link className="dropdown-item" to="/explore/d" onClick={closeMenu}>Dhrithi</Link></li>
                </ul>
              </li>

              {/* Zones Dropdown */}
              <li className={`nav-item dropdown ${openDropdown === 'zones' ? 'show' : ''}`}>
                <span
                  className="nav-link dropdown-toggle"
                  onClick={() => handleDropdownToggle('zones')}
                  role="button"
                >
                  Zones
                </span>
                <ul className={`dropdown-menu ${openDropdown === 'zones' ? 'show' : ''}`}>
                  <li><Link className="dropdown-item" to="/zones/co-living" onClick={closeMenu}>Co-living</Link></li>
                  <li><Link className="dropdown-item" to="/zones/cafe" onClick={closeMenu}>Cafe</Link></li>
                  <li><Link className="dropdown-item" to="/zones/gaming" onClick={closeMenu}>Gaming</Link></li>
                  <li><Link className="dropdown-item" to="/zones/mealservice" onClick={closeMenu}>Meal Service</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <div className="btn btn-contact-customize">
                  <Link className="btn btn-contact" to="/contact" onClick={closeMenu}>Contact Us</Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;




