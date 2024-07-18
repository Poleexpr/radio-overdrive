'use client';

import classnames from 'classnames';
import Image from 'next/image';
import type { FC, ReactNode } from 'react';
import { useRef } from 'react';

import styles from './sceletonAbout.module.scss';

interface SceletonAboutProps {
  children: ReactNode;
}

export const SceletonAbout: FC<SceletonAboutProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section ref={ref} className={styles.content}>
      <Image
        fill
        alt=''
        className={classnames(styles.layer, styles.background, 'layer')}
        src='/images/about-back.png'
        style={{
          objectFit: 'cover',
        }}
      />

      {children}
    </section>
  );
};
