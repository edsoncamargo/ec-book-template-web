import './characteristics.scss';

import { hasNumber, replaceAllTags } from '../../utils/strings.utils';

import Card from '../../components/card/card.component';
import { CurrentThemeContext } from '../../context';
import { useContext } from 'react';

export default function Characteristics() {
  const { bookContent, language } = useContext(CurrentThemeContext);
  const content = bookContent!.content[language]!;

  return (
    <section id='caracteristicas' className='ec-characteristics ec-container'>
      <h2
        className='ec-font-heading ec-uppercase'
        data-aos='fade-up'
        aria-label={replaceAllTags(content.characteristics.title)}
      >
        {content.characteristics.title}
      </h2>

      <div className='ec-characteristics__items ec-uppercase'>
        {content.characteristics.details.map((detail) => (
          <div
            key={detail.value}
            className='ec-characteristics__line'
            data-aos='fade-up'
            aria-label={`${detail.type}: ${detail.value}`}
            role='text'
          >
            <div className='ec-characteristics__item' aria-hidden='true'>
              <Card variant='left'>
                <p>{detail.type}</p>
              </Card>
            </div>

            <div className='ec-characteristics__item' aria-hidden='true'>
              <Card variant='right'>
                {hasNumber(detail.value) ? (
                  <p className='ec-font-number'>{detail.value}</p>
                ) : (
                  <p>{detail.value}</p>
                )}
              </Card>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
