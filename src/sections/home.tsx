import Banner from '../components/banner/banner.component';
import Button from '../components/button/button.component';
import { CurrentThemeContext } from '../context';
import { useContext } from 'react';

export function Home() {
  const { currentTheme } = useContext(CurrentThemeContext);

  console.log(currentTheme);

  return (
    <Banner>
      <Banner.Book currentTheme={currentTheme} />

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
  );
}
