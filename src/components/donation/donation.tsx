import './donation.scss';

import { useEffect, useRef, useState } from 'react';

import Button from '../button/button.component';
import { FaHeart } from 'react-icons/fa6';

export default function Donation() {
  const [isOpen, setIsOpen] = useState(false);

  const eButtonRef = useRef<HTMLButtonElement | null>(null);
  const eBallonRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (isClickOutside(event, eButtonRef, eBallonRef)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  const toggleBalloon = () => {
    setIsOpen((prevState) => !prevState);
  };

  function isClickOutside(
    event: MouseEvent | TouchEvent,
    buttonRef: React.RefObject<HTMLButtonElement>,
    balloonRef: React.RefObject<HTMLDivElement>
  ) {
    return (
      balloonRef.current &&
      !balloonRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    );
  }

  return (
    <div className='ec-donation'>
      <button
        className='ec-donation__cta'
        data-open={isOpen}
        ref={eButtonRef}
        onClick={toggleBalloon}
      >
        <FaHeart />
        <div className='ec-donation__ballon' ref={eBallonRef}>
          <p>
            Ajude a financiar o <br />
            sonho de Dora 💖
          </p>

          <a
            href='https://www.vakinha.com.br/vaquinha/ajude-a-financiar-o-sonho-de-dora'
            target='_blank'
          >
            <Button>QUERO AJUDAR</Button>
          </a>
        </div>
      </button>
    </div>
  );
}
