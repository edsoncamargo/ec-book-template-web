import './donation.scss';

import { useEffect, useRef, useState } from 'react';

import { FaBell } from 'react-icons/fa6';

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
        <FaBell />

        <div className='ec-donation__ballon' ref={eBallonRef}>
          <h3 className='ec-font-emphasis--ballon'>
            Convite - O Livro de Dora e Suas Irmãs
          </h3>

          <div>
            <h4 className='ec-font-heading'>BELO HORIZONTE</h4>

            <p>
              <strong>7 de dezembro</strong>, SÁBADO, 10h30 – CERVEJARIA GALPÃO
              FLOR DO CAMPO RUA CORONEL OTÁVIO DINIZ, 449, SANTA EFIGÊNIA
            </p>

            <p>
              <strong>8 de dezembro</strong>, DOMINGO, 11h – MODA DE VIOLA RUA
              JUIZ ELIZEU JARDIM, 153, BAIRRO DAS INDÚSTRIAS
            </p>
          </div>

          <div>
            <h4 className='ec-font-heading'>RECIFE</h4>

            <p>
              <strong>13 DE DEZEMBRO</strong>, SÁBADO, 10h30 – CERVEJARIA GALPÃO
              FLOR DO CAMPO RUA CORONEL OTÁVIO DINIZ, 449, SANTA EFIGÊNIA
            </p>
          </div>
        </div>
      </button>
    </div>
  );
}
