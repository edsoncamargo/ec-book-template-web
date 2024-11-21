import './our-partners.scss';

import { CurrentThemeContext } from '../../context';
import { useContext } from 'react';

export default function OurPartners() {
  const { bookContent, language } = useContext(CurrentThemeContext);
  const content = bookContent!.content[language]!;

  return (
    <section className='ec-our-partners ec-container'>
      <h2
        className='ec-our-partners__title ec-font-heading ec-uppercase'
        data-aos='fade-up'
      >
        {content.partners.title}
      </h2>

      <div className='ec-our-partners__logos'>
        {content.partners.logos.map((logo, index) => (
          <div
            key={logo}
            className='ec-our-partners__logos__item'
            data-aos='flip-left'
            data-aos-delay={30 * index}
          >
            <img
              alt={logo}
              src={`/assets/images/partners/${logo}`}
              loading='lazy'
            ></img>
          </div>
        ))}
      </div>
    </section>
  );
}
