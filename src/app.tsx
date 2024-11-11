import './app.scss';
import 'aos/dist/aos.css';

import { BookContent, getBookContentById } from './data/books-content';
import React, { Suspense, useEffect, useMemo, useState } from 'react';

import AOS from 'aos';
import { CurrentThemeContext } from './context';
import LoadingSquare from './components/loadings/loading.square';
import Seo from './components/seo';
import { THEME_MAPPINGS } from './constants/theme.constants';
import { ThemeKeys } from './enums/theme.enum';
import { useLocation } from 'react-router-dom';

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
    AOS.init();

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
        <Seo
          title={bookContent?.seo.title ?? ''}
          description={bookContent?.seo.description ?? ''}
          theme={currentTheme}
          isbn={bookContent?.content.pt.characteristics.details[0].value ?? ''}
        />

        <Suspense fallback={<LoadingSquare />}>
          <Home />
          <Sinopse />
          <Buy />
          <Characteristics />
          <About />
          <OurBooks />
          <OurPartners />
          <Footer />
        </Suspense>
      </CurrentThemeContext.Provider>
    </main>
  );
}

export default App;
