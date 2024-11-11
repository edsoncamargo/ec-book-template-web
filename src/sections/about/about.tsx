import './about.scss';

import { useContext, useEffect, useState } from 'react';

import { CurrentThemeContext } from '../../context';

export default function About() {
  const { bookContent, language } = useContext(CurrentThemeContext);
  const content = bookContent!.content[language]!;

  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  useEffect(() => {
    const image = document.querySelector('.pcn-about__subscription');
    if (image instanceof HTMLImageElement && image?.complete)
      setImageLoaded(true);
  }, []);

  return (
    <section id='sobre-o-autor' className='pcn-about' data-aos='fade-up'>
      <div className='pcn-about__body'>
        <div className='pcn-about__author'>
          <em className='pcn-about__author__image'></em>
        </div>

        <div className='pcn-about__caption'>
          <h2 className='pcn-font-heading pcn-uppercase' data-aos='fade-up'>
            {content.about_author.title}
          </h2>

          <p className='pcn-font-body' data-aos='fade-up'>
            {content.about_author.description}
          </p>

          <img
            className={`pcn-about__subscription ${
              imageLoaded ? 'pcn-about__subscription--loaded' : ''
            }`}
            src={`/assets/images/subscriptions/${content.about_author.signature}`}
            alt={content.about_author.signature_alt}
            loading='lazy'
            onLoad={handleImageLoad}
          />
        </div>
      </div>
    </section>
  );
}
