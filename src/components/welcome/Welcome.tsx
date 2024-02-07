'use client';

import Marquee from 'react-fast-marquee';

import { Typography } from '@/components';
import { IconArrowNextLong, IconButtonPlayText, IconEllipse } from '@/components/icons';

import uikit from '../uikit.module.scss';

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

            <div className={`${styles.slogan_bold} ${uikit.text7} ${uikit.underline}`}>
              <p>такое возможно?</p>
              <p>Да, благодаря твоим донатам!</p>
            </div>
          </div>
        </a>
      </div>
      <Marquee autoFill>
        <p className={uikit.marqueeContent}>мы вещаем до последнего</p>
        <IconEllipse className={styles.ellipse} />
      </Marquee>
    </div>
  </div>
);

export default Welcome;
