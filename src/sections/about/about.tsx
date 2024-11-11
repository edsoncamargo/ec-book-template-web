import './about.scss';

import { CurrentThemeContext } from '../../context';
import { useContext } from 'react';

export default function About() {
  const { bookContent } = useContext(CurrentThemeContext);
  const content = bookContent!.content.pt;

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
            className='pcn-about__subscription'
            src={`/assets/images/subscriptions/${content.about_author.signature}`}
            alt='Assinatura'
            loading='lazy'
            data-aos='fade-up'
          />
        </div>
      </div>
    </section>
  );
}
