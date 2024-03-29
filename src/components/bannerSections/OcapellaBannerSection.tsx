'use client';

import { Suspense } from 'react';

import { Podcast, Typography, ButtonRectangle } from '@/components';
import { useTogglePodcast } from '@/utils';

import styles from './bannerSections.module.scss';

export const OcapellaBannerSection = () => {
  const [showPodcast, togglePodcast] = useTogglePodcast(false);

  const className = showPodcast ? styles.showPodcast : styles.hidePodcast;

  return (
    <section className={styles.ocapella}>
      <div className={styles.container}>
        <Typography tag='h2' variant='title2'>
          о’капелла
        </Typography>
        <Typography className={styles.description} tag='p' variant='text2'>
          {' '}
          Подкаст о музыке как феномене и чуде.
        </Typography>
        <ButtonRectangle className={styles.button} onClick={() => togglePodcast()}>
          {showPodcast ? 'скрыть' : 'слушать онлайн'}
        </ButtonRectangle>
      </div>
      <Suspense fallback={<p> Loading...</p>}>
        <Podcast.Collection
          className={className}
          feedUrl='./ocappella'
          podcastLink='https://radiooverdrive.mave.digital'
        />
      </Suspense>
    </section>
  );
};
