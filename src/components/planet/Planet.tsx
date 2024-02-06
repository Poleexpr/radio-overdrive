import uikit from '../uikit.module.scss';

import styles from './planet.module.scss';

type PlanetProps = {
  children: React.ReactNode;
};

const Planet = (props: PlanetProps) => (
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
      {props.children}
    </div>
  </div>
);

export default Planet;
