import { useEffect, useMemo, useState } from 'react';

import { CurrentThemeContext } from './context';
import { Home } from './sections/home';
import { THEME_MAPPINGS } from './constants/theme.constants';
import { ThemeKeys } from './enums/theme.enum';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const [currentTheme, setCurrentTheme] = useState<string>(
    'still-in-the-garden-theme'
  );

  useEffect(() => {
    const themeKey = location.pathname?.split('/')[1]?.trim() as ThemeKeys;
    setCurrentTheme(
      THEME_MAPPINGS[themeKey] || THEME_MAPPINGS[ThemeKeys.AindaNoJardim]
    );
  }, [location.pathname]);

  const contextValue = useMemo(() => ({ currentTheme }), [currentTheme]);

  return (
    <main className={`pcn-${currentTheme}`}>
      <CurrentThemeContext.Provider value={contextValue}>
        <Home />
      </CurrentThemeContext.Provider>
    </main>
  );
}

export default App;
