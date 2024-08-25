import React from 'react';
import { useThemeSettings } from '../context/theme/ThemeSettingsContext/ThemeSettingsContext';
import './TestComponent.css';

const TestComponent = () => {
  const themeSettings = useThemeSettings();
  const isDarkMode = themeSettings.colors.background === '#000000'; // Example for detecting dark mode

  return (
    <div
      className={`test-component ${isDarkMode ? 'dark-mode' : ''}`}
      style={{
        backgroundColor: themeSettings.colors.background,
        color: themeSettings.colors.text,
      }}
    >
      <h3>Dark Mode Test</h3>
      <p>This is a test component for dark mode.</p>

      {/* Test Button */}
      <button
        className={`test-button ${isDarkMode ? 'dark-mode' : ''}`}
        onClick={() => alert('Button clicked!')}
      >
        Test Button
      </button>
    </div>
  );
};

export default TestComponent;
