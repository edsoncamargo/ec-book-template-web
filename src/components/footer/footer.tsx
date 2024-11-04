import './footer.scss';

import { CurrentThemeContext } from '../../context';
import { useContext } from 'react';

export default function Footer() {
  const { currentTheme } = useContext(CurrentThemeContext);

  return (
    <footer className='pcn-footer pcn-uppercase'>
      <div className='pcn-footer__body pcn-container'>
        <div className='pcn-footer__top'>
          <div className='pcn-footer__cover'>
            <img
              src={`/assets/images/covers/${currentTheme.replace(
                '-theme',
                ''
              )}.jpeg`}
              alt=''
            />
          </div>

          <div className='pcn-footer__links'>
            <ul>
              <li>
                <a href='#/home'>Home</a>
              </li>
            </ul>

            <ul>
              <li>
                <a href='#/sinopse'>Sinopse</a>
              </li>
              <li>
                <a href='#/características'>Características</a>
              </li>
              <li>
                <a href='#/onde-adquirir-o-livro'>Onde adquirir o livro?</a>
              </li>
            </ul>

            <ul>
              <li>
                <a href='#/sobre-o-autor'>Sobre o autor</a>
              </li>
              <li>
                <a href='#/outras-publicacoes'>Outras publicações</a>
              </li>
            </ul>
          </div>
        </div>

        <div className='pcn-footer__middle'>
          <p>
            Todos os direitos reservados{' '}
            <small className='pcn-font-number'>2024</small>.
          </p>
        </div>

        <div className='pcn-footer__bottom'>
          <p className='pcn-footer__developer'>
            Desenvolvido por
            <a href='https://edsoncamargo.dev'>edsoncamargo.dev</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
