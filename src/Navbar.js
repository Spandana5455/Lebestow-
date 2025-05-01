import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from './images/logo.png'; 
import './Navbar.css'; 


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="navbar-section">
      <nav className="navbar navbar-expand-lg container-fluid">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} className="logo-image" alt="lebestow-logo"/>
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
                <Link className="nav-link" to="/" onClick={() => setIsOpen(false)}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
              </li>
              <li className="nav-item dropdown">
                <span className="nav-link dropdown-toggle" id="exploreDropdown" role="button">Explore Properties</span>
                <ul className="dropdown-menu" aria-labelledby="exploreDropdown">
                  <li><Link className="dropdown-item" to="/explore/aira" onClick={() => setIsOpen(false)}>Aira</Link></li>
                  <li><Link className="dropdown-item" to="/explore/bhuvan" onClick={() => setIsOpen(false)}>Bhuvan</Link></li>
                  <li><Link className="dropdown-item" to="/explore/casa" onClick={() => setIsOpen(false)}>Casa</Link></li>
                  <li><Link className="dropdown-item" to="/explore/d" onClick={() => setIsOpen(false)}>D</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <span className="nav-link dropdown-toggle" id="zonesDropdown" role="button">Zones</span>
                <ul className="dropdown-menu" aria-labelledby="zonesDropdown">
                  <li><Link className="dropdown-item" to="/zones/co-living" onClick={() => setIsOpen(false)}>Co-living</Link></li>
                  <li><Link className="dropdown-item" to="/zones/cafe" onClick={() => setIsOpen(false)}>Cafe</Link></li>
                  <li><Link className="dropdown-item" to="/zones/gym" onClick={() => setIsOpen(false)}>Gym</Link></li>
                  <li><Link className="dropdown-item" to="/zones/gaming" onClick={() => setIsOpen(false)}>Gaming</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className=" btn btn-contact" to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;




