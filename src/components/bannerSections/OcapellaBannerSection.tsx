'use client';

import { Typography, LinkRectangle } from '@/components';

import styles from './bannerSections.module.scss';

const OcapellaBannerSection = () => (
  <section className={styles.ocapella}>
    <div className={styles.container}>
      <Typography tag='h2' variant='title2'>
        о’капелла
      </Typography>
      <Typography className={styles.description} tag='p' variant='text2'>
        {' '}
        Подкаст о музыке как феномене и чуде.
      </Typography>
      <LinkRectangle className={styles.link} href='./ocapella'>
        слушать
      </LinkRectangle>
    </div>
  </section>
);

export default OcapellaBannerSection;
