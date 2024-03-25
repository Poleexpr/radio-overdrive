import { Typography, LinkMail } from '@/components';

import styles from './invitationSections.module.scss';

export const CentredInvitationSection = () => (
  <section className={styles.vacancy}>
    <div className={styles.container}>
      <Typography className={styles.title} tag='h3' variant='title3'>
        ХОЧЕШЬ СТАТЬ ВЕДУЩИМ РАДИО ОВЕРДРАЙВ?
      </Typography>
      <Typography className={styles.description} tag='p' variant='text2'>
        Возможно, мы ищем именно тебя: неважно в какой точке Земли ты живёшь, если тебе есть что
        сказать, и ты врубаешь в высокий стиль, присылай демо-аудио и ссылку на свой плейлист на
      </Typography>
      <p>
        <LinkMail isColorize />
      </p>
    </div>
  </section>
);
