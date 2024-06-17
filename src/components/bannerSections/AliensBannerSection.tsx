'use client';

import { Typography, LinkRectangle } from '@/components';

import styles from './bannerSections.module.scss';

const AliensBannerSection = () => (
  <section className={styles.aliens2}>
    <div className={styles.container}>
      <Typography tag='h2' variant='title2'>
        пришельцы
      </Typography>
      <Typography className={styles.description} tag='p' variant='text2'>
        {' '}
        Прямые эфиры с музыкантами, писателями, философами и другими гостями не от мира сего.
      </Typography>
      <LinkRectangle className={styles.link} href='./aliens'>
        слушать
      </LinkRectangle>
    </div>
  </section>
);

export default AliensBannerSection;
