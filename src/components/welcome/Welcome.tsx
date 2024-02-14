import { MarqueeText, Typography, UnderlineLink } from '@/components';
import { IconArrowNextLong, IconButtonPlayText } from '@/components/icons';

import styles from './wellcome.module.scss';

const Welcome = () => (
  <div className={styles.wrapper}>
    <video
      autoPlay
      loop
      muted
      className={styles.video}
      poster='./wellcomeBackPoster.jpg'
      src='./wellcomeBack.mp4'
    />
    <div className={styles.container}>
      <div className={styles.title_wrapper}>
        <Typography className={styles.subtitle} tag='p' variant='title'>
          это
        </Typography>
        <Typography className={styles.title} tag='h1' variant='title2'>
          РАДИО Овердрайв
        </Typography>
      </div>
      <div className={styles.description_container}>
        <div>
          <a
            aria-label='слушать в телеграм'
            href='https://t.me/rocknword'
            rel='noreferrer'
            target='_blank'
          >
            <IconButtonPlayText className={styles.playTgLink} />
          </a>
        </div>
        <a href='https://t.me/rocknword/11681' rel='noreferrer' target='_blank'>
          <div>
            <div className={styles.donation_wrapper}>
              <Typography className={styles.donation} tag='p' variant='text5'>
                поддержать проект
              </Typography>
              <IconArrowNextLong />
            </div>
            <Typography className={styles.slogan} tag='div' variant='text6'>
              <p>Независимое радио без рекламы,</p>
              <p>ипотеки и средств против импотенции —</p>
            </Typography>
            <Typography className={styles.slogan_bold} tag='div' variant='text7'>
              <UnderlineLink>такое возможно?</UnderlineLink>
            </Typography>
            <Typography className={styles.slogan_bold} tag='div' variant='text7'>
              <UnderlineLink>Да, благодаря твоим донатам!</UnderlineLink>
            </Typography>
          </div>
        </a>
      </div>
      <MarqueeText>мы вещаем до последнего</MarqueeText>
    </div>
  </div>
);

export default Welcome;
