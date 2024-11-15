import './about.scss';

import { useContext, useEffect, useState } from 'react';

import { CurrentThemeContext } from '../../context';

export default function About() {
  const { bookContent, language } = useContext(CurrentThemeContext);
  const content = bookContent!.content[language]!;

  const [imageAuthorLoaded, setImageAuthorLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageAuthorLoad = () => {
    setImageAuthorLoaded(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  useEffect(() => {
    const imageAuthor = document.querySelector('.pcn-about__subscription');
    if (imageAuthor instanceof HTMLImageElement && imageAuthor?.complete)
      setImageLoaded(true);

    const image = document.querySelector('.pcn-about__subscription');
    if (image instanceof HTMLImageElement && image?.complete)
      setImageLoaded(true);
  }, []);

  return (
    <section id='sobre-o-autor' className='pcn-about' data-aos='fade-up'>
      <div className='pcn-about__body'>
        <div className='pcn-about__author'>
          <figure className='pcn-font'>
            <img
              className={`pcn-about__author__image ${
                imageAuthorLoaded ? 'pcn-about__author__image--loaded' : ''
              }`}
              src='/assets/images/author.jpeg'
              alt={content.about_author.signature_alt}
              loading='lazy'
              onLoad={handleImageAuthorLoad}
            />
          </figure>
        </div>

        <div className='pcn-about__caption'>
          <h2 className='pcn-font-heading pcn-uppercase' data-aos='fade-up'>
            {content.about_author.title}
          </h2>

          <p className='pcn-font-body' data-aos='fade-up'>
            {content.about_author.description}
          </p>

          <figure className='pcn-font' data-aos='fade-up'>
            <img
              className={`pcn-about__subscription ${
                imageLoaded ? 'pcn-about__subscription--loaded' : ''
              }`}
              src={`/assets/images/subscriptions/${content.about_author.signature}`}
              alt={content.about_author.signature_alt}
              loading='lazy'
              onLoad={handleImageLoad}
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
