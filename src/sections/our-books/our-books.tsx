import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './our-books.scss';

import Slider, { Settings } from 'react-slick';

import { CurrentThemeContext } from '../../context';
import Line from '../../components/line/line.component';
import { useContext } from 'react';

export default function OurBooks() {
  const { bookContent, language } = useContext(CurrentThemeContext);
  const content = bookContent!.content[language]!;

  const settings: Settings = {
    className: 'center',
    centerMode: true,
    slidesToShow: 1,
    focusOnSelect: true,
    infinite: true,
    variableWidth: true,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 10000,
  };

  return (
    <div data-aos='fade-up'>
      <Line />
      <section id='outras-publicacoes' className='pcn-our-books'>
        <div
          className='pcn-our-books__title pcn-font-heading pcn-uppercase pcn-text-color-secondary'
          data-aos='fade-up'
        >
          <h2
            dangerouslySetInnerHTML={{
              __html: content.other_publications.title,
            }}
          ></h2>
          <small className='pcn-font-number'>.</small>
        </div>

        <div className='pcn-our-books__carousel pcn-our-books__slider'>
          <Slider {...settings}>
            {content.other_publications.books.map((book, index) => (
              <div
                key={book.title}
                className='pcn-our-books__slider__item'
                data-aos='fade-up'
                data-aos-delay={30 * index}
              >
                <a href={book.link} target='_blank'>
                  <img
                    alt={book.title}
                    src={`/assets/images/covers/${book.cover_image}`}
                    loading='lazy'
                  />
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <Line />
    </div>
  );
}
