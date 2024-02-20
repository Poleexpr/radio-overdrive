import classnames from 'classnames';
import type { FC } from 'react';

import styles from './mailLink.module.scss';

interface MailLinkProps {
  isColorize: boolean;
  className?: string;
}

export const MailLink: FC<MailLinkProps> = ({ className, isColorize }) => (
  <a
    className={classnames(isColorize ? styles.textColor : styles.textWhite, className)}
    href='mailto:radio@russiandino.ru'
    rel='noreferrer'
    target='_blank'
  >
    radio@russiandino.ru
  </a>
);
