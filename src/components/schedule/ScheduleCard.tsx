import type { FC } from 'react';

import { Typography } from '@/components';

import { ScheduleCardItem } from './ScheduleCardItem';
import styles from './scheduleSlider.module.scss';
import type { ScheduleCardProps } from './types';

export const ScheduleCard: FC<ScheduleCardProps> = ({ info }) => (
  <div className={styles.container}>
    <Typography className={styles.title} tag='h3' variant='title4'>
      {info.day}
    </Typography>
    <ScheduleCardItem items={info.schedule} />
  </div>
);
