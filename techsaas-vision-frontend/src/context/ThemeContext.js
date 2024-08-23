import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';
import { themeSettings } from './themes/themeSettings';
import ThemeSelectionModal from '../components/ThemeSelectionModal/ThemeSelectionModal';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('default');
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    if (theme) {
      localStorage.setItem('selectedTheme', theme);
    }
  }, [theme]);

  useEffect(() => {
    console.log('Loaded themeSettings:', themeSettings);
    console.log(
      'Current theme:',
      theme,
      'Settings:',
      themeSettings[theme]
    );
  }, [theme]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  const handleSetTheme = (newTheme) => {
    setTheme(newTheme);
    hideModal();
  };

  const value = {
    theme,
    themeSettings: themeSettings[theme] || themeSettings.default,
    setTheme: handleSetTheme,
    showModal,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
      {isModalVisible && (
        <ThemeSelectionModal setTheme={handleSetTheme} />
      )}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
