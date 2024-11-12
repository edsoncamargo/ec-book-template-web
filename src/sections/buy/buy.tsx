import './buy.scss';

import Button from '../../components/button/button.component';
import { CurrentThemeContext } from '../../context';
import { FaCartShopping } from 'react-icons/fa6';
import { useContext } from 'react';

export default function Buy() {
  const { bookContent, language } = useContext(CurrentThemeContext);
  const content = bookContent!.content[language]!;

  return (
    <section id='onde-adquirir-o-livro' className='pcn-buy pcn-container'>
      <div className='pcn-buy__header'>
        <div className='pcn-buy__title'>
          <h2 className='pcn-font-heading pcn-uppercase' data-aos='fade-up'>
            {content.purchase.title}
          </h2>
          <h3 className='pcn-font-caption' data-aos='fade-up'>
            {content.purchase.description}
          </h3>
        </div>

        <span data-aos='fade-up'>
          <FaCartShopping className='pcn-buy__icon' />
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

  if (!purchase.price) {
    return;
  }

  return (
    <div className={`pcn-buy__${type}`}>
      <h3 className='pcn-buy__price pcn-font-subheading' data-aos='fade-up'>
        {content.purchase.price![type].label}

        <div className='pcn-buy__price__group pcn-font-number'>
          <span className='pcn-buy__price__group__prefix'>
            {content.purchase.price![type].prefix}
          </span>
          <span className='pcn-buy__price__group__value'>
            {content.purchase.price![type].value}
          </span>
          <span className='pcn-buy__price__group__suffix'>
            {content.purchase.price![type].suffix}
          </span>
        </div>
      </h3>

      <div className='pcn-buy__book'>
        {content.purchase.price![type].platforms.map((book) => (
          <div
            key={`${book.name}-${type}`}
            className='pcn-buy__book__btn-group'
            data-aos='fade-up'
          >
            <img
              alt={book.name}
              src={`/assets/images/logos/${book.name}.png`}
              loading='lazy'
            ></img>

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
          </div>
        ))}
      </div>
    </div>
  );
}
