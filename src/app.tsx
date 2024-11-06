import './app.scss';

import { BookContent, getBookContentById } from './data/books-content';
import { useEffect, useMemo, useState } from 'react';

import Characteristics from './sections/characteristics/characteristics';
import { CurrentThemeContext } from './context';
import Footer from './components/footer/footer';
import { Home } from './sections/home/home';
import OurPartiners from './sections/our-partners/our-partners';
import Sinopse from './sections/sinopse/sinopse';
import { THEME_MAPPINGS } from './constants/theme.constants';
import { ThemeKeys } from './enums/theme.enum';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  const themeKey = location.pathname?.split('/')[1]?.trim() as ThemeKeys;
  const initialTheme =
    THEME_MAPPINGS[themeKey] || THEME_MAPPINGS[ThemeKeys.AindaNoJardim];
  const initialContent =
    getBookContentById(themeKey) || getBookContentById(ThemeKeys.AindaNoJardim);

  const [currentTheme, setCurrentTheme] = useState<string>(initialTheme);
  const [bookContent, setBookContent] = useState<BookContent | undefined>(
    initialContent
  );

  useEffect(() => {
    const updatedThemeKey = location.pathname
      ?.split('/')[1]
      ?.trim() as ThemeKeys;
    setCurrentTheme(
      THEME_MAPPINGS[updatedThemeKey] || THEME_MAPPINGS[ThemeKeys.AindaNoJardim]
    );
    setBookContent(
      getBookContentById(updatedThemeKey) ||
        getBookContentById(ThemeKeys.AindaNoJardim)
    );
  }, [location.pathname]);

  const contextValue = useMemo(
    () => ({ currentTheme, bookContent }),
    [currentTheme, bookContent]
  );

  return (
    <main className={`pcn-${currentTheme} pcn-app`}>
      <CurrentThemeContext.Provider value={contextValue}>
        <Home />
        <Sinopse />
        <Characteristics />
        <OurPartiners />
        <Footer />
      </CurrentThemeContext.Provider>
    </main>
  );
}

export default App;
