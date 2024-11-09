import './our-partners.scss';

import { CurrentThemeContext } from '../../context';
import { useContext } from 'react';

export default function OurPartners() {
  const { bookContent } = useContext(CurrentThemeContext);
  const content = bookContent!.content.pt;

  return (
    <section className='pcn-our-partners pcn-container'>
      <h2
        className='pcn-our-partners__title pcn-font-heading pcn-uppercase'
        data-aos='fade-up'
      >
        {content.partners.title}
      </h2>

      <div className='pcn-our-partners__logos'>
        {content.partners.logos.map((logo, index) => (
          <div
            key={logo}
            className='pcn-our-partners__logos__item'
            data-aos='flip-left'
            data-aos-delay={30 * index}
          >
            <img src={`/assets/images/partners/${logo}`} alt={logo}></img>
          </div>
        ))}
      </div>
    </section>
  );
}
