'use client';

import { useState } from 'react';

import { presentersInfo } from '@/utils';

import { PresentersCard } from '../presentersCard/PresentersCard';

import styles from './presentersContainer.module.scss';

export const PresentersContainer = () => {
  const [cardsBox, setCardsBox] = useState(presentersInfo);

  const toggle = (id: number) => {
    setCardsBox((prevCardsBox) =>
      prevCardsBox.map((card) =>
        card.id !== id
          ? { ...card, on: false }
          : card.on === true
            ? { ...card, on: card.on }
            : { ...card, on: !card.on },
      ),
    );
  };

  const leave = (id: number) => {
    setCardsBox((prevCardsBox) =>
      prevCardsBox.map((card) =>
        card.id === id ? { ...card, on: card.on } : { ...card, on: false },
      ),
    );
  };

  return (
    <div className={styles.cards_container}>
      <PresentersCard cardsElements={cardsBox} leave={leave} toggle={toggle} />
    </div>
  );
};
