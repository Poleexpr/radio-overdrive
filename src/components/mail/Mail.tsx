import { Typography } from '@/components';

import uikit from '../uikit.module.scss';
import styles from './mail.module.scss';

const Mail = () => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Typography tag='h3' variant='title3' className={styles.title}>
            МЫ ЖДЁМ ВАШИ ПИСЬМА
          </Typography>
          <Typography tag='p' variant='text2' className={styles.description}>
            Пишите нам письма — если хотите с нами сотрудничать, быть волонтёром, прислать новый
            релиз, поделиться идеей программы, обратиться к ведущим и слушателям или просто так:
          </Typography>
          <p className={uikit.link_text2}>
            <a href='mailto:radio@russiandino.ru' target='_blank'>
              radio@russiandino.ru
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mail;
