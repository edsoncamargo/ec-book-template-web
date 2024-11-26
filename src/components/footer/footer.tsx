import './footer.scss';

import * as Icons from 'react-icons/fa6';

import { CurrentThemeContext } from '../../context';
import { useContext } from 'react';

export default function Footer() {
  const { currentTheme, bookContent, language } =
    useContext(CurrentThemeContext);
  const content = bookContent!.content[language]!;

  return (
    <footer className='ec-footer ec-uppercase'>
      <div className='ec-footer__body ec-container'>
        <div className='ec-footer__top'>
          <div className='ec-footer__cover'>
            <img
              alt=''
              src={`/assets/images/covers/${currentTheme.replace(
                '-theme',
                ''
              )}.jpeg`}
              loading='lazy'
            />
          </div>

          <div className='ec-footer__links'>
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

        <div className='ec-footer__middle'>
          {content.footer.social_medias.show && (
            <div className='ec-footer__middle__medias'>
              {content.footer.social_medias.buttons.map((button) => {
                const IconComponent = Icons[button.icon as keyof typeof Icons];
                return (
                  <a href={button.link} key={button.link} target='_blank'>
                    {IconComponent && <IconComponent className='ec-i' />}
                  </a>
                );
              })}
            </div>
          )}

          <p
            aria-label={`${content.footer.rights.label} ${content.footer.rights.year}`}
            role='text'
          >
            {content.footer.rights.label}{' '}
            <small className='ec-font-number' aria-hidden='true'>
              {content.footer.rights.year}
            </small>
            {''}.
          </p>
        </div>

        <div className='ec-footer__bottom'>
          <p className='ec-footer__developer'>
            {content.footer.developer}{' '}
            <a href='https://edsoncamargo.dev'>edsoncamargo.dev</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
