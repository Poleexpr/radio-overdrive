import classnames from 'classnames';
import type { FC, ReactNode } from 'react';

import styles from './linkRectangle.module.scss';

interface LinkRectangleProps {
  children: ReactNode;
  href: string;
  className?: string;
}

export const LinkRectangle: FC<LinkRectangleProps> = ({ className, children, href }) => (
  <a className={classnames(styles.link, className)} href={href} rel='noreferrer' target='_blank'>
    {children}
  </a>
);
