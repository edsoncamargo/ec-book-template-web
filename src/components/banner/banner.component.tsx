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
  bookAlt: string;
};

function Book({
  currentTheme = THEME_MAPPINGS[ThemeKeys.AindaNoJardim],
  bookAlt,
}: Readonly<BookProps>) {
  const imageSrc = `/assets/images/books/${currentTheme.replace(
    '-theme',
    ''
  )}.png`;

  return (
    <div className='pcn-banner__body__book'>
      <img alt={bookAlt} title={bookAlt} src={imageSrc} loading='lazy' />
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
  return (
    <h1
      className='pcn-banner__title pcn-font-emphasis'
      dangerouslySetInnerHTML={{
        __html: typeof children === 'string' ? children : '',
      }}
    ></h1>
  );
}

type AboutProps = {
  actor: string;
  categories?: string;
};

function About({ actor, categories }: Readonly<AboutProps>) {
  return (
    <p className='pcn-banner__about'>
      <span aria-label={`Por ${actor}`} role='text'>
        Por <strong>{actor}</strong>
      </span>

      <small>{categories}</small>
    </p>
  );
}

Banner.Book = Book;
Banner.Content = Content;
Banner.Emphasis = Emphasis;
Banner.About = About;
export default Banner;
