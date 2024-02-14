import classnames from 'classnames';
import type { FC } from 'react';

import styles from './underlineLink.module.scss';

interface UnderlineLinkProps {
  children: React.ReactNode;
  className?: string;
}

export const UnderlineLink: FC<UnderlineLinkProps> = ({ className, children }) => (
  <p className={classnames(className, styles.link)}>
    <span>{children}</span>
  </p>
);
