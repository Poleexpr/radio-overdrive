import type { FC } from 'react';

import { Typography } from '@/components';

import styles from './scheduleCard.module.scss';

interface ScheduleCardProps {
  day: string;
  person: string;
}

const ScheduleCard: FC<ScheduleCardProps> = ({ day, person }) => (
  <div className={styles.container}>
    <Typography className={styles.title} tag='h4' variant='title4'>
      {day}
    </Typography>
    <div className={styles.card}>
      <Typography className={styles.time} tag='p' variant='title5'>
        8:00
      </Typography>
      <Typography className={styles.name} tag='p' variant='text'>
        Утренний эфир {person}
      </Typography>
    </div>
    <div className={styles.card}>
      <Typography className={styles.time} tag='p' variant='title5'>
        13:00
      </Typography>
      <Typography className={styles.name} tag='p' variant='text'>
        Дневной эфир {person}
      </Typography>
    </div>
    <div className={styles.card}>
      <Typography className={styles.time} tag='p' variant='title5'>
        17:00
      </Typography>
      <Typography className={styles.name} tag='p' variant='text'>
        Вечерний эфир {person}
      </Typography>
    </div>
    <div className={styles.card}>
      <Typography className={styles.time} tag='p' variant='title5'>
        22:00
      </Typography>
      <Typography className={styles.name} tag='p' variant='text'>
        Ночной эфир {person}
      </Typography>
    </div>
  </div>
);

export default ScheduleCard;
