import './banner.component.scss';

import { ReactNode } from 'react';
import { THEME_MAPPINGS } from '../../constants/theme.constants';
import { ThemeKeys } from '../../enums/theme.enum';

type BannerProps = {
  children: ReactNode;
};

function Banner({ children }: Readonly<BannerProps>) {
  return (
    <div className='pcn-banner'>
      <div className='pcn-banner__body pcn-container'>{children}</div>
    </div>
  );
}

type BookProps = {
  currentTheme: string;
};

function Book({
  currentTheme = THEME_MAPPINGS[ThemeKeys.AindaNoJardim],
}: Readonly<BookProps>) {
  return (
    <div className='pcn-banner__body__book'>
      <img
        alt='Capa do Livro'
        title='Capa do Livro'
        src={`/assets/images/books/${currentTheme.replace('-theme', '')}.svg`}
      ></img>
    </div>
  );
}

type ContentProps = {
  children: ReactNode;
};

function Content({ children }: Readonly<ContentProps>) {
  return <div className='pcn-banner__body__content'>{children}</div>;
}

type EmphasisProps = {
  children: ReactNode;
};

function Emphasis({ children }: Readonly<EmphasisProps>) {
  return <p className='pcn-banner__title pcn-font-emphasis'>{children}</p>;
}

type AboutProps = {
  actor: string;
  categories: string;
};

function About({ actor, categories }: Readonly<AboutProps>) {
  return (
    <div className='pcn-banner__about'>
      <p>
        <span>
          Por <strong>{actor}</strong>
        </span>
        <small>{categories}</small>
      </p>
    </div>
  );
}

Banner.Book = Book;
Banner.Content = Content;
Banner.Emphasis = Emphasis;
Banner.About = About;
export default Banner;
