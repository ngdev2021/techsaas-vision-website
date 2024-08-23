import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import './ThemeSwitcherButton.css';

const ThemeSwitcherButton = () => {
  const { showModal } = useTheme();

  return (
    <button
      className="theme-switcher-button"
      onClick={showModal}
    ></button>
  );
};

export default ThemeSwitcherButton;
