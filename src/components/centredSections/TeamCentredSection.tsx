import classnames from 'classnames';
import type { FC, ReactNode } from 'react';

import { Typography } from '@/components';

import styles from './centredSection.module.scss';

interface TeamCentredSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const TeamCentredSection: FC<TeamCentredSectionProps> = ({ children, className, id }) => (
  <section className={classnames(styles.container, className)} id={id}>
    <Typography className={classnames(styles.title, 'title-appear')} tag='h2' variant='title2'>
      ведущие
    </Typography>
    {children}
  </section>
);
