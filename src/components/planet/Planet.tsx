import type { FC, ReactNode } from 'react';

import uikit from '../uikit.module.scss';

import styles from './planet.module.scss';

interface PlanetProps {
  children?: ReactNode;
}

const Planet: FC<PlanetProps> = ({ children }) => (
  <div className={styles.planet_wrapper}>
    <div className={styles.container}>
      <a
        className={`${uikit.link} ${styles.link_subscribe}`}
        href='https://t.me/rocknword'
        rel='noreferrer'
        target='_blank'
      >
        подписаться
      </a>
      {children}
    </div>
  </div>
);

export default Planet;
