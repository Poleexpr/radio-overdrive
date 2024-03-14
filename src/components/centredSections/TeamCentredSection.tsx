import classnames from 'classnames';
import type { FC, ReactNode } from 'react';

import { Typography } from '@/components';

import styles from './centredSection.module.scss';

interface TeamCentredSectionProps {
  children: ReactNode;
  className?: string;
}

export const TeamCentredSection: FC<TeamCentredSectionProps> = ({ children, className }) => (
  <section className={classnames(styles.container, className)}>
    <Typography className={styles.title} tag='h2' variant='title2'>
      ведущие
    </Typography>
    {children}
  </section>
);
