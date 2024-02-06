import { Typography } from '@/components';

import styles from './scheduleCard.module.scss';

const ScheduleCard = (props: any) => {
  return (
    <div className={styles.container}>
      <Typography tag='h4' variant='title4' className={styles.title}>
        {props.day}
      </Typography>
      <div className={styles.card}>
        <Typography tag='p' variant='title5' className={styles.time}>
          8:00
        </Typography>
        <Typography tag='p' variant='text' className={styles.name}>
          Утренний эфир {props.person}
        </Typography>
      </div>
      <div className={styles.card}>
        <Typography tag='p' variant='title5' className={styles.time}>
          13:00
        </Typography>
        <Typography tag='p' variant='text' className={styles.name}>
          Дневной эфир {props.person}
        </Typography>
      </div>
      <div className={styles.card}>
        <Typography tag='p' variant='title5' className={styles.time}>
          17:00
        </Typography>
        <Typography tag='p' variant='text' className={styles.name}>
          Вечерний эфир {props.person}
        </Typography>
      </div>
      <div className={styles.card}>
        <Typography tag='p' variant='title5' className={styles.time}>
          22:00
        </Typography>
        <Typography tag='p' variant='text' className={styles.name}>
          Ночной эфир {props.person}
        </Typography>
      </div>
    </div>
  );
};

export default ScheduleCard;
