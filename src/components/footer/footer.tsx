import './footer.scss';

import { CurrentThemeContext } from '../../context';
import { useContext } from 'react';

export default function Footer() {
  const { currentTheme, bookContent } = useContext(CurrentThemeContext);
  const content = bookContent!.content.pt;

  return (
    <footer className='pcn-footer pcn-uppercase'>
      <div className='pcn-footer__body pcn-container'>
        <div className='pcn-footer__top'>
          <div className='pcn-footer__cover'>
            <img
              alt=''
              src={`/assets/images/covers/${currentTheme.replace(
                '-theme',
                ''
              )}.jpeg`}
              loading='lazy'
            />
          </div>

          <div className='pcn-footer__links'>
            {content.footer.menu.map((items, index) => (
              <ul key={items.toString() + index}>
                {items.map((item) => (
                  <li key={item.label}>
                    <a href={item.link}>{item.label}</a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className='pcn-footer__middle'>
          <p>
            {content.footer.rights.label}{' '}
            <small className='pcn-font-number'>
              {content.footer.rights.year}
            </small>
            {''}.
          </p>
        </div>

        <div className='pcn-footer__bottom'>
          <p className='pcn-footer__developer'>
            {content.footer.developer}
            {''}
            <a href='https://edsoncamargo.dev'>edsoncamargo.dev</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
