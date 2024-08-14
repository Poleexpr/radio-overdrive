import { presentersConfig } from '@/utils';

import { PresentersCard } from './PresentersCard';
import styles from './presenters.module.scss';

export const PresentersContainer = async () => {
  const cardsBox = await presentersConfig();

  return (
    <div
      className={
        Array.isArray(cardsBox) && cardsBox.length <= 4
          ? styles.cards_container
          : styles.cards_containerBig
      }
    >
      <PresentersCard cardsElements={cardsBox} />
    </div>
  );
};
