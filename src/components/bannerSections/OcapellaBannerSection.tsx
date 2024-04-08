'use client';

import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { Podcast, Typography, ButtonRectangle, ErrorText } from '@/components';
import { useTogglePodcast } from '@/utils';

import styles from './bannerSections.module.scss';

const OcapellaBannerSection = () => {
  const [showPodcast, togglePodcast] = useTogglePodcast(false);

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
      {showPodcast && (
        <ErrorBoundary fallback={<ErrorText podcastLink='https://radiooverdrive.mave.digital' />}>
          <Suspense fallback={<p> Loading...</p>}>
            <Podcast.Collection
              feedUrl='./ocappella'
              podcastLink='https://radiooverdrive.mave.digital'
            />
          </Suspense>
        </ErrorBoundary>
      )}
    </section>
  );
};

export default OcapellaBannerSection;
