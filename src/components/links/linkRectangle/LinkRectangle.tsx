import classnames from 'classnames';
import type { FC, ReactNode } from 'react';

import styles from './linkRrectangle.module.scss';

interface LinkRectangleProps {
  children: ReactNode;
  className?: string;
}

export const LinkRectangle: FC<LinkRectangleProps> = ({ className, children }) => (
  <a
    className={classnames(styles.link, className)}
    href='https://t.me/rocknword'
    rel='noreferrer'
    target='_blank'
  >
    {children}
  </a>
);
