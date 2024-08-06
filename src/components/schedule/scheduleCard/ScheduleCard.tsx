import type { FC } from 'react';

import { Typography } from '@/components';

import { ScheduleCardItem } from '../scheduleCardItem/ScheduleCardItem';

import styles from './scheduleCard.module.scss';

interface ScheduleCardProps {
  info: {
    day: string;
    schedule: {
      time: string;
      event: string;
    }[];
  };
}

export const ScheduleCard: FC<ScheduleCardProps> = ({ info }) => (
  <div className={styles.container}>
    <Typography className={styles.title} tag='h4' variant='title4'>
      {info.day}
    </Typography>
    <ScheduleCardItem items={info.schedule} />
  </div>
);
