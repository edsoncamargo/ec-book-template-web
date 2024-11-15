import './root.scss';
import 'aos/dist/aos.css';

import React, { Suspense, useEffect, useMemo, useState } from 'react';

import AOS from 'aos';
import { BookContent } from './enums/book-content.enum';
import { CurrentThemeContext } from './context';
import LoadingSquare from './components/loadings/loading.square';
import { THEME_MAPPINGS } from './constants/theme.constants';
import { ThemeKeys } from './enums/theme.enum';
import { getBookContentById } from './data/books-content';

const Home = React.lazy(() => import('./sections/home/home'));
const About = React.lazy(() => import('./sections/about/about'));
const Buy = React.lazy(() => import('./sections/buy/buy'));
const Characteristics = React.lazy(
  () => import('./sections/characteristics/characteristics')
);
const OurBooks = React.lazy(() => import('./sections/our-books/our-books'));
const OurPartners = React.lazy(
  () => import('./sections/our-partners/our-partners')
);
const Footer = React.lazy(() => import('./components/footer/footer'));
const Sinopse = React.lazy(() => import('./sections/sinopse/sinopse'));

function App() {
  const themeKey = import.meta.env.VITE_TEMPLATE_NAME as ThemeKeys;
  const initialTheme =
    THEME_MAPPINGS[themeKey] || THEME_MAPPINGS[ThemeKeys.AindaNoJardim];
  const initialContent =
    getBookContentById(themeKey) || getBookContentById(ThemeKeys.AindaNoJardim);

  const [currentTheme, setCurrentTheme] = useState<string>(initialTheme);
  const [bookContent, setBookContent] = useState<BookContent | undefined>(
    initialContent
  );

  const language: 'pt' | 'en' = 'pt';

  useEffect(() => {
    AOS.init();

    const updatedThemeKey =
      import.meta.env.VITE_TEMPLATE_NAME?.trim() as ThemeKeys;
    setCurrentTheme(
      THEME_MAPPINGS[updatedThemeKey] || THEME_MAPPINGS[ThemeKeys.AindaNoJardim]
    );
    setBookContent(
      getBookContentById(updatedThemeKey) ||
        getBookContentById(ThemeKeys.AindaNoJardim)
    );
  }, [themeKey]);

  const contextValue = useMemo(
    () => ({ currentTheme, bookContent, language }),
    [currentTheme, bookContent, language]
  );

  return (
    <main className={`pcn-${currentTheme} pcn-app`}>
      <CurrentThemeContext.Provider value={contextValue}>
        <Suspense fallback={<LoadingSquare />}>
          <Home />
          {bookContent?.content[language]!.synopsis.show && <Sinopse />}
          {bookContent?.content[language]!.purchase.show && <Buy />}
          {bookContent?.content[language]!.characteristics.show && (
            <Characteristics />
          )}
          {bookContent?.content[language]!.about_author.show && <About />}
          {bookContent?.content[language]!.other_publications.show && (
            <OurBooks />
          )}
          {bookContent?.content[language]!.partners.show && <OurPartners />}
          {bookContent?.content[language]!.footer.show && <Footer />}
        </Suspense>
      </CurrentThemeContext.Provider>
    </main>
  );
}

export default App;
