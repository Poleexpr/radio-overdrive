import classnames from 'classnames';
import type { FC } from 'react';

import styles from './linkUnderline.module.scss';

interface LinkUnderlineProps {
  children: React.ReactNode;
  className?: string;
}

export const LinkUnderline: FC<LinkUnderlineProps> = ({ className, children }) => (
  <span className={classnames(className, styles.link)}>
    <span>{children}</span>
  </span>
);
