import classnames from 'classnames';
import type { FC } from 'react';

import styles from './linkText.module.scss';

interface LinkTextProps {
  children: React.ReactNode;
  className?: string;
  href: string;
  isNewWindow: boolean;
}

export const LinkText: FC<LinkTextProps> = ({ className, children, href, isNewWindow }) => (
  <a
    className={classnames(className, styles.link)}
    href={href}
    rel='noreferrer'
    target={isNewWindow ? '_blank' : '_self'}
  >
    {children}
  </a>
);
