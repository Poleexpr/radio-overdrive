import { IconLogoOverdrive } from '@/components/icons';

import styles from './loader.module.scss';

export const Loader = () => (
  <div className={styles.loaderWrapper}>
    <div className={styles.loader}>
      <IconLogoOverdrive />
    </div>
  </div>
);
