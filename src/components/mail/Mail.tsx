import { Typography } from '@/components';

import uikit from '../uikit.module.scss';

import styles from './mail.module.scss';

const Mail = () => (
  <section>
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Typography className={styles.title} tag='h3' variant='title3'>
          МЫ ЖДЁМ ВАШИ ПИСЬМА
        </Typography>
        <Typography className={styles.description} tag='p' variant='text2'>
          Пишите нам письма — если хотите с нами сотрудничать, быть волонтёром, прислать новый
          релиз, поделиться идеей программы, обратиться к ведущим и слушателям или просто так:
        </Typography>
        <p className={uikit.link_text2}>
          <a href='mailto:radio@russiandino.ru' rel='noreferrer' target='_blank'>
            radio@russiandino.ru
          </a>
        </p>
      </div>
    </div>
  </section>
);

export default Mail;
