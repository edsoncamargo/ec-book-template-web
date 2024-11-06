import './characteristics.scss';

import Card from '../../components/card/card.component';
import { CurrentThemeContext } from '../../context';
import { hasNumber } from '../../utils/strings.utils';
import { useContext } from 'react';

export default function Characteristics() {
  const { bookContent } = useContext(CurrentThemeContext);
  const content = bookContent!.content.pt;

  return (
    <section id='caracteristicas' className='pcn-characteristics pcn-container'>
      <h2 className='pcn-font-heading pcn-uppercase'>
        {content.characteristics.title}
      </h2>

      <div className='pcn-characteristics__items pcn-uppercase'>
        {content.characteristics.details.map((detail) => (
          <div key={detail.value} className='pcn-characteristics__line'>
            <div className='pcn-characteristics__item'>
              <Card variant='left'>
                <p>{detail.type}</p>
              </Card>
            </div>

            <div className='pcn-characteristics__item'>
              <Card variant='right'>
                {hasNumber(detail.value) ? (
                  <p className='pcn-font-number'>{detail.value}</p>
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
