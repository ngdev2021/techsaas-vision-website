import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import logo from '../../assets/techsaas-logo.webp';
import { ReactComponent as DarkModeIcon } from '../../assets/icons/dark-mode-icon.svg';
import { ReactComponent as LightModeIcon } from '../../assets/icons/light-mode-icon.svg';

const Navigation = ({ toggleModal, userName }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.body.classList.toggle(
        'dark-theme',
        savedTheme === 'dark'
      );
      setIsDarkMode(savedTheme === 'dark');
    }

    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuActive(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDarkModeToggle = () => {
    const newTheme = !isDarkMode ? 'dark' : 'default';
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', newTheme);
    document.body.classList.toggle('dark-theme', !isDarkMode);
  };

  const handleMenuToggle = () => {
    setMenuActive(!menuActive);
  };

  const handleLinkClick = () => {
    setMenuActive(false); // Close the dropdown when a link is clicked
  };

  return (
    <nav
      className={`navigation ${isDarkMode ? 'dark' : 'light'}`}
      ref={navRef}
    >
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/" onClick={handleLinkClick}>
            <img src={logo} alt="TechSaas Vision" />
          </Link>
        </div>
        <button
          className={`nav-toggle ${menuActive ? 'active' : ''}`}
          onClick={handleMenuToggle}
        >
          <span className="hamburger"></span>
        </button>
        <ul className={`nav-links ${menuActive ? 'active' : ''}`}>
          <li>
            <span>Welcome, {userName ? userName : 'Guest'}!</span>
          </li>
          <li>
            <Link to="/services" onClick={handleLinkClick}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/portfolio" onClick={handleLinkClick}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={handleLinkClick}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleLinkClick}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/discover-how" onClick={handleLinkClick}>
              Discover How
            </Link>
          </li>
          <li>
            <Link to="/see-our-process" onClick={handleLinkClick}>
              See Our Process
            </Link>
          </li>
          <li>
            <button
              className="theme-switcher-button"
              onClick={toggleModal}
            >
              Switch Theme
            </button>
          </li>
          <li>
            <button
              className="dark-mode-button"
              onClick={handleDarkModeToggle}
            >
              {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
