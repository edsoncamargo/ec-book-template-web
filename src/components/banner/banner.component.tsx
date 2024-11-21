import './banner.component.scss';

import { ReactNode, useState } from 'react';

import { THEME_MAPPINGS } from '../../constants/theme.constants';
import { ThemeKeys } from '../../enums/theme.enum';
import { replaceAllTags } from '../../utils/strings.utils';

type BannerProps = {
  children: ReactNode;
};

function Banner({ children }: Readonly<BannerProps>) {
  return (
    <div className='ec-banner'>
      <div className='ec-banner__body ec-container'>{children}</div>
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
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageSrc = `/assets/images/books/${currentTheme.replace(
    '-theme',
    ''
  )}.png`;

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className='ec-banner__body__book'>
      <img
        className={`${imageLoaded ? 'book--loaded' : ''}`}
        alt={bookAlt}
        title={bookAlt}
        src={imageSrc}
        loading='lazy'
        onLoad={handleImageLoad}
      />
    </div>
  );
}

type ContentProps = {
  children: ReactNode;
};

function Content({ children }: Readonly<ContentProps>) {
  return <div className='ec-banner__body__content'>{children}</div>;
}

type EmphasisProps = {
  children: ReactNode;
};

function Emphasis({ children }: Readonly<EmphasisProps>) {
  return (
    <h1
      className='ec-banner__title ec-font-emphasis'
      aria-label={replaceAllTags(typeof children === 'string' ? children : '')}
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
    <p className='ec-banner__about'>
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
