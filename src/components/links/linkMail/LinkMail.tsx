import classnames from 'classnames';
import type { FC } from 'react';

import styles from './linkMail.module.scss';

interface LinkMailProps {
  isColorize: boolean;
  className?: string;
}

export const LinkMail: FC<LinkMailProps> = ({ className, isColorize }) => (
  <a
    className={classnames(isColorize ? styles.textColor : styles.textWhite, className)}
    href='mailto:radio@russiandino.ru'
    rel='noreferrer'
    target='_blank'
  >
    radio@russiandino.ru
  </a>
);
