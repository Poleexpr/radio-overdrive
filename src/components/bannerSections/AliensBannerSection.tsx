'use client';

import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { Podcast, Typography, ButtonRectangle, ErrorText } from '@/components';
import { useTogglePodcast } from '@/utils';

import styles from './bannerSections.module.scss';

const AliensBannerSection = () => {
  const [showPodcast, togglePodcast] = useTogglePodcast(false);

  return (
    <section className={styles.aliens2}>
      <div className={styles.container}>
        <Typography tag='h2' variant='title2'>
          пришельцы
        </Typography>
        <Typography className={styles.description} tag='p' variant='text2'>
          {' '}
          Прямые эфиры с музыкантами, писателями, философами и другими гостями не от мира сего.
        </Typography>
        <ButtonRectangle className={styles.button} onClick={() => togglePodcast()}>
          {showPodcast ? 'скрыть' : 'слушать онлайн'}
        </ButtonRectangle>
      </div>
      {showPodcast && (
        <ErrorBoundary fallback={<ErrorText podcastLink='https://radiooverdrive.mave.digital' />}>
          <Suspense fallback={<p> Loading...</p>}>
            <Podcast.Collection
              feedUrl='./prishelcy'
              podcastLink='https://overdrive-prishelcy.mave.digital'
            />
          </Suspense>
        </ErrorBoundary>
      )}
    </section>
  );
};

export default AliensBannerSection;
