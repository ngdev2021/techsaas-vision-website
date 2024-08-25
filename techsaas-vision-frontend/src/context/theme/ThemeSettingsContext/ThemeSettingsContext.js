import { useTheme } from '../ThemeContext/ThemeContext';

export const useThemeSettings = () => {
  const { themeSettings } = useTheme();
  return themeSettings;
};
