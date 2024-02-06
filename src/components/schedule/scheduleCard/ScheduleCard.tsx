import { Typography } from '@/components';

import styles from './scheduleCard.module.scss';

const ScheduleCard = (props: any) => (
  <div className={styles.container}>
    <Typography className={styles.title} tag='h4' variant='title4'>
      {props.day}
    </Typography>
    <div className={styles.card}>
      <Typography className={styles.time} tag='p' variant='title5'>
        8:00
      </Typography>
      <Typography className={styles.name} tag='p' variant='text'>
        Утренний эфир {props.person}
      </Typography>
    </div>
    <div className={styles.card}>
      <Typography className={styles.time} tag='p' variant='title5'>
        13:00
      </Typography>
      <Typography className={styles.name} tag='p' variant='text'>
        Дневной эфир {props.person}
      </Typography>
    </div>
    <div className={styles.card}>
      <Typography className={styles.time} tag='p' variant='title5'>
        17:00
      </Typography>
      <Typography className={styles.name} tag='p' variant='text'>
        Вечерний эфир {props.person}
      </Typography>
    </div>
    <div className={styles.card}>
      <Typography className={styles.time} tag='p' variant='title5'>
        22:00
      </Typography>
      <Typography className={styles.name} tag='p' variant='text'>
        Ночной эфир {props.person}
      </Typography>
    </div>
  </div>
);

export default ScheduleCard;
