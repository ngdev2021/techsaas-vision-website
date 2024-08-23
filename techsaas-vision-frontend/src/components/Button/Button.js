import React from 'react';
import './Button.css';
import { useThemeSettings } from '../../context/ThemeSettingsContext';

const Button = ({ children, onClick }) => {
  const themeSettings = useThemeSettings();

  return (
    <button
      className="custom-button"
      style={{
        backgroundColor: themeSettings.colors.primary,
        color: themeSettings.colors.text,
        borderRadius: themeSettings.layout.borderRadius,
        padding: themeSettings.layout.spacing,
        fontFamily: themeSettings.typography.fontFamily,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
