import { createContext } from 'react';

interface ThemeContextType {
  currentTheme: string;
}

export const CurrentThemeContext = createContext<ThemeContextType>({
  currentTheme: 'still-in-the-garden-theme',
});
