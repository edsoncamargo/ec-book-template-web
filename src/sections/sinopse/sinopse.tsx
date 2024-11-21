import './sinopse.scss';

import { CurrentThemeContext } from '../../context';
import { useContext } from 'react';

export default function Sinopse() {
  const { bookContent, language } = useContext(CurrentThemeContext);
  const content = bookContent!.content[language]!;

  return (
    <section id='sinopse' className='ec-sinopse ec-container'>
      <h2 className='ec-font-heading ec-uppercase' data-aos='fade-up'>
        {content.synopsis.title}
      </h2>

      <div className='ec-sinopse__contents ec-font-body ec-text-align-justify'>
        {content.synopsis.contents?.map((p, index) => (
          <p key={p.charAt(0) + index} data-aos='fade-up'>
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}
