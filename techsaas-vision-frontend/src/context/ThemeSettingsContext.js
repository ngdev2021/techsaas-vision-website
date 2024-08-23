import { useTheme } from './ThemeContext';

export const useThemeSettings = () => {
  const { themeSettings } = useTheme();
  return themeSettings;
};
