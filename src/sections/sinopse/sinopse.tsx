import './sinopse.scss';

import { CurrentThemeContext } from '../../context';
import { useContext } from 'react';

export default function Sinopse() {
  const { bookContent, language } = useContext(CurrentThemeContext);
  const content = bookContent!.content[language]!;

  return (
    <section id='sinopse' className='pcn-sinopse pcn-container'>
      <h2 className='pcn-font-heading pcn-uppercase' data-aos='fade-up'>
        {content.synopsis.title}
      </h2>

      <div className='pcn-sinopse__contents pcn-font-body pcn-text-align-justify'>
        {content.synopsis.contents?.map((p, index) => (
          <p key={p.charAt(0) + index} data-aos='fade-up'>
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}
