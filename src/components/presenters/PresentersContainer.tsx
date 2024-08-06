import { presentersConfig } from '@/utils';

import { PresentersCard } from './PresentersCard';
import styles from './presenters.module.scss';

export const PresentersContainer = async () => {
  const cardsBox = await presentersConfig();

  return (
    <div className={styles.cards_container}>
      <PresentersCard cardsElements={cardsBox} />
    </div>
  );
};
