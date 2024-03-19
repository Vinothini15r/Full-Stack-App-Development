import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './AdvancedNavbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const AdvancedNavbar = () => {
  const location = useLocation();
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  const toggleMoreDropdown = () => {
    setIsMoreOpen(!isMoreOpen);
    setIsProfileOpen(false); // Close profile dropdown when More dropdown is toggled
  };

  const toggleProfileDropdown = () => {
    setIsProfileOpen(!isProfileOpen);
    setIsMoreOpen(false); // Close More dropdown when profile dropdown is toggled
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">
          <i className="fas fa-umbrella-beach"></i> Beach Resort
        </Link>
      </div>
      <ul className="navbar-nav">
        <li className={`nav-item ${isActive("/home")}`}>
          <Link to="/home" className="nav-link">
            <i className="fas fa-swimmer"></i> Aquaventures
          </Link>
        </li>
        <li className={`nav-item ${isActive("/accommodations")}`}>
          <Link to="/accommodations" className="nav-link">
            <i className="fas fa-hotel"></i> Accommodations
          </Link>
        </li>
        <li className={`nav-item ${isActive("/activities")}`}>
          <Link to="/activities" className="nav-link">
            <i className="far fa-calendar-alt"></i> Events
          </Link>
        </li>
        
        <li className="nav-item dropdown">
          <a href="#" className="nav-link" onClick={toggleMoreDropdown}>
            More <i className="fas fa-caret-down"></i>
          </a>
          <div className={`dropdown-content ${isMoreOpen ? "show" : ""}`}>
            <Link to="/about" className="dropdown-link">
              <i className="fas fa-info-circle"></i> About Us
            </Link>
            <Link to="/gallery" className="dropdown-link">
              <i className="fas fa-images"></i> Gallery
            </Link>
          </div>
        </li>
        <li className="nav-item profile dropdown">
          <a href="#" className="nav-link" onClick={toggleProfileDropdown}>
            <i className="fas fa-user-circle"></i> Profile <i className="fas fa-caret-down"></i>
          </a>
          <div className={`dropdown-content ${isProfileOpen ? "show" : ""}`}>
            <Link to="/profile" className="dropdown-link">
              <i className="fas fa-user"></i> Profile
            </Link>
            <Link to="/logout" className="dropdown-link">
              <i className="fas fa-sign-out-alt"></i> Log Out
            </Link>
          </div>
        </li>
        <li className={`nav-item ${isActive("/login")}`}>
          <Link to="/project/login" className="nav-link">
            <i className="fas fa-sign-in-alt"></i> Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default AdvancedNavbar;
