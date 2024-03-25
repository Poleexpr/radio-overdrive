import { Typography, LinkMail } from '@/components';

import styles from './invitationSections.module.scss';

export const LeftInvitationSection = () => (
  <section className={styles.mail}>
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Typography className={styles.title} tag='h3' variant='title3'>
          МЫ ЖДЁМ ВАШИ ПИСЬМА
        </Typography>
        <Typography className={styles.description} tag='p' variant='text2'>
          Пишите нам письма — если хотите с нами сотрудничать, быть волонтёром, прислать новый
          релиз, поделиться идеей программы, обратиться к ведущим и слушателям или просто так:
        </Typography>
        <p>
          <LinkMail isColorize={false} />
        </p>
      </div>
    </div>
  </section>
);
