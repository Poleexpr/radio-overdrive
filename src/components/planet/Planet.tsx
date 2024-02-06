import uikit from '../uikit.module.scss';
import styles from './planet.module.scss';

type PlanetProps = {
  children: React.ReactNode;
};

const Planet = (props: PlanetProps) => {
  return (
    <div className={styles.planet_wrapper}>
      <div className={styles.container}>
        <a
          href='https://t.me/rocknword'
          target='_blank'
          className={`${uikit.link} ${styles.link_subscribe}`}
        >
          подписаться
        </a>
        {props.children}
      </div>
    </div>
  );
};

export default Planet;
