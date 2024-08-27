import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import logo from '../../assets/techsaas-logo.webp';
import { ReactComponent as DarkModeIcon } from '../../assets/icons/dark-mode-icon.svg';
import { ReactComponent as LightModeIcon } from '../../assets/icons/light-mode-icon.svg';

const Navigation = ({ toggleModal, userName }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.body.classList.toggle(
        'dark-theme',
        savedTheme === 'dark'
      );
      setIsDarkMode(savedTheme === 'dark');
    }
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

  return (
    <nav className={`navigation ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/">
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
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
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
