import { BookContent } from './enums/book-content.enum';
import { ThemeKeys } from './enums/theme.enum';
import { createContext } from 'react';
import { getBookContentById } from './data/books-content';

interface ThemeContextType {
  currentTheme: string;
  bookContent: BookContent | undefined;
  language: 'pt' | 'en';
}

export const CurrentThemeContext = createContext<ThemeContextType>({
  currentTheme: 'still-in-the-garden-theme',
  bookContent: getBookContentById(ThemeKeys.AindaNoJardim),
  language: 'pt',
});
