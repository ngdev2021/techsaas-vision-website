import React, { useState, useEffect } from 'react';
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
          <a href="/">
            <img src={logo} alt="TechSaas Vision" />
            TechSaas Vision
          </a>
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
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
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
