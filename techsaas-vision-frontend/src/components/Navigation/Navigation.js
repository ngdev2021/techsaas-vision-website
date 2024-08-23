import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import './Navigation.css';
import { ReactComponent as DarkModeIcon } from '../../assets/icons/dark-mode-icon.svg';
import { ReactComponent as LightModeIcon } from '../../assets/icons/light-mode-icon.svg';
import logo from '../../assets/techsaas-logo.webp';

const Navigation = ({ toggleModal }) => {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
    setTheme(isDarkMode ? 'default' : 'dark');
  };

  return (
    <nav className={`navigation ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="nav-logo">
        <a href="/">
          <img src={logo} alt="TechSaas Vision" />
        </a>
      </div>
      <ul className="nav-links">
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/portfolio">Portfolio</a>
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
    </nav>
  );
};

export default Navigation;
