import { useEffect, useState } from 'react';

import Banner from './components/banner/banner.component';
import Button from './components/button/button.component';
import { THEME_MAPPINGS } from './constants/theme.constants';
import { ThemeKeys } from './enums/theme.enum';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const [currentTheme, setCurrentTheme] = useState('still-in-the-garden-theme');

  useEffect(() => {
    const themeKey = location.pathname?.split('/')[1]?.trim() as ThemeKeys;
    setCurrentTheme(THEME_MAPPINGS[themeKey] || ThemeKeys.AindaNoJardim);
  }, [location.pathname]);

  return (
    <main className={`pcn-${currentTheme}`}>
      <Banner>
        <Banner.Book />

        <Banner.Content>
          <Banner.Emphasis>
            Uma jornada interior na presença de <strong>Deus</strong>.
          </Banner.Emphasis>

          <Banner.About
            actor='Paulo Cesar Nascimento dos Santos'
            categories='Religioso, Inspiracional & Religioso, Espiritualidade, Vida Cristã, Religião.'
          ></Banner.About>

          <Button>LEIA UM POUCO</Button>
        </Banner.Content>
      </Banner>
    </main>
  );
}

export default App;
