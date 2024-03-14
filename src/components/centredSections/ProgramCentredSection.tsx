import classnames from 'classnames';
import type { FC, ReactNode } from 'react';

import { Typography } from '@/components';

import styles from './centredSection.module.scss';

interface ProgramCentredSectionProps {
  children: ReactNode;
  className?: string;
}

export const ProgramCentredSection: FC<ProgramCentredSectionProps> = ({ children, className }) => (
  <section className={classnames(styles.container, className)}>
    <Typography className={styles.title} tag='h2' variant='title2'>
      программа передач
    </Typography>
    {children}
  </section>
);
