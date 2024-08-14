import type { FC } from 'react';

import { Typography } from '@/components';

import { ScheduleCardItem } from '../scheduleCardItem/ScheduleCardItem';
import type { ScheduleCardProps } from '../types';

import styles from './scheduleCard.module.scss';

export const ScheduleCard: FC<ScheduleCardProps> = ({ info }) => (
  <div className={styles.container}>
    <Typography className={styles.title} tag='h3' variant='title4'>
      {info.day}
    </Typography>
    <ScheduleCardItem items={info.schedule} />
  </div>
);
