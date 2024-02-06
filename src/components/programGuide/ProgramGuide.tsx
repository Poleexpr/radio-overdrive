import { Typography } from '@/components';

import { Schedule } from '../schedule';

import styles from './programGuide.module.scss';

const ProgramGuide = () => (
  <section className={styles.container} id='program'>
    <Typography className={styles.title} tag='h2' variant='title2'>
      программа передач
    </Typography>
    <Schedule.Slider />
    <div className={styles.description_wrapper}>
      <Typography className={styles.description} tag='p' variant='text'>
        И — всю неделю новые релизы топовых музыкантов. Не забудь подписаться на нас в Телеграм,
        чтобы больше ничего не пропустить.
      </Typography>
    </div>
  </section>
);

export default ProgramGuide;
