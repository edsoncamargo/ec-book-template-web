import './buy.scss';

import Button from '../../components/button/button.component';
import { CurrentThemeContext } from '../../context';
import { FaCartShopping } from 'react-icons/fa6';
import { useContext } from 'react';

export default function Buy() {
  const { bookContent, language } = useContext(CurrentThemeContext);
  const content = bookContent!.content[language]!;

  return (
    <section id='onde-adquirir-o-livro' className='ec-buy ec-container'>
      <div className='ec-buy__header'>
        <div className='ec-buy__title'>
          <h2 className='ec-font-heading ec-uppercase' data-aos='fade-up'>
            {content.purchase.title}
          </h2>
          <h3 className='ec-font-caption' data-aos='fade-up'>
            {content.purchase.description}
          </h3>
        </div>

        <span data-aos='fade-up'>
          <FaCartShopping className='ec-buy__icon' />
        </span>
      </div>

      <Purchase type='physical' />
      <Purchase type='ebook' />
    </section>
  );
}

type PurchaseProps = {
  type: 'physical' | 'ebook';
};

function Purchase({ type }: Readonly<PurchaseProps>) {
  const { bookContent, language } = useContext(CurrentThemeContext);
  const content = bookContent!.content[language]!;
  const purchase = content.purchase;

  if (!purchase.price?.[type]) {
    return null;
  }

  return (
    <div className={`ec-buy__${type}`}>
      <h3 className='ec-buy__price ec-font-subheading' data-aos='fade-up'>
        {purchase.price[type].label}

        <div className='ec-buy__price__group ec-font-number'>
          <span className='ec-buy__price__group__prefix'>
            {purchase.price[type].prefix}
          </span>
          <span className='ec-buy__price__group__value'>
            {purchase.price[type].value}
          </span>
          <span className='ec-buy__price__group__suffix'>
            {purchase.price[type].suffix}
          </span>
        </div>
      </h3>

      <div className='ec-buy__book'>
        {purchase.price[type].platforms?.map((book) => (
          <div
            key={`${book.name}-${type}`}
            className='ec-buy__book__btn-group'
            data-aos='fade-up'
          >
            <img
              alt={book.name}
              src={`/assets/images/logos/${book.name}.png`}
              loading='lazy'
            />

            <a href={book.link} target='_blank'>
              <Button
                variant={
                  book.name as
                    | 'cta'
                    | 'amazon'
                    | 'americanas'
                    | 'ml'
                    | 'ev'
                    | 'gp'
                    | 'rakuten'
                    | 'apple'
                    | undefined
                }
              >
                {book.button}
              </Button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
