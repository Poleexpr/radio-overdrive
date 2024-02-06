import { Typography } from '@/components';

import uikit from '../uikit.module.scss';

import styles from './invitation.module.scss';

const Invitation = () => (
  <section className={styles.wrapper}>
    <div className={styles.container}>
      <Typography className={styles.title} tag='h3' variant='title3'>
        ХОЧЕШЬ СТАТЬ ВЕДУЩИМ РАДИО ОВЕРДРАЙВ?
      </Typography>
      <Typography className={styles.text} tag='p' variant='text2'>
        Возможно, мы ищем именно тебя: неважно в какой точке Земли ты живёшь, если тебе есть что
        сказать, и ты врубаешь в высокий стиль, присылай демо-аудио и ссылку на свой плейлист на
      </Typography>

      <p className={uikit.link_text}>
        <a href='mailto:radio@russiandino.ru' rel='noreferrer' target='_blank'>
          radio@russiandino.ru
        </a>
      </p>
    </div>
  </section>
);

export default Invitation;
