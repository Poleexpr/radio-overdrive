import type { FC } from 'react';

import { Typography } from '@/components';

import styles from './scheduleCardItem.module.scss';

interface ScheduleCardItemProps {
  items: {
    time: string;
    event: string;
  }[];
}

export const ScheduleCardItem: FC<ScheduleCardItemProps> = ({ items }) =>
  items.map((item, i) => (
    <div key={i} className={styles.card}>
      <Typography className={styles.time} tag='p' variant='title5'>
        {item.time}
      </Typography>
      <Typography className={styles.name} tag='p' variant='text'>
        {item.event}
      </Typography>
    </div>
  ));
