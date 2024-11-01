import { BookContent, getBookContentById } from './data/books-content';

import { ThemeKeys } from './enums/theme.enum';
import { createContext } from 'react';

interface ThemeContextType {
  currentTheme: string;
  bookContent: BookContent | undefined;
}

export const CurrentThemeContext = createContext<ThemeContextType>({
  currentTheme: 'still-in-the-garden-theme',
  bookContent: getBookContentById(ThemeKeys.AindaNoJardim),
});
