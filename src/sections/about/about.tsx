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
    const imageAuthor = document.querySelector('.ec-about__subscription');
    if (imageAuthor instanceof HTMLImageElement && imageAuthor?.complete)
      setImageLoaded(true);

    const image = document.querySelector('.ec-about__subscription');
    if (image instanceof HTMLImageElement && image?.complete)
      setImageLoaded(true);
  }, []);

  return (
    <section id='sobre-o-autor' className='ec-about' data-aos='fade-up'>
      <div className='ec-about__body'>
        <div className='ec-about__author'>
          <figure className='ec-font'>
            <img
              className={`ec-about__author__image ${
                imageAuthorLoaded ? 'ec-about__author__image--loaded' : ''
              }`}
              src={`/assets/images/authors/${content.about_author.author_image}`}
              alt={content.about_author.signature_alt}
              loading='lazy'
              onLoad={handleImageAuthorLoad}
            />
          </figure>
        </div>

        <div className='ec-about__caption'>
          <h2 className='ec-font-heading ec-uppercase' data-aos='fade-up'>
            {content.about_author.title}
          </h2>

          <p className='ec-font-body' data-aos='fade-up'>
            {content.about_author.description}
          </p>

          {content.about_author.signature && (
            <figure className='ec-font' data-aos='fade-up'>
              <img
                className={`ec-about__subscription ${
                  imageLoaded ? 'ec-about__subscription--loaded' : ''
                }`}
                src={`/assets/images/subscriptions/${content.about_author.signature}`}
                alt={content.about_author.signature_alt}
                loading='lazy'
                onLoad={handleImageLoad}
              />
            </figure>
          )}
        </div>
      </div>
    </section>
  );
}
