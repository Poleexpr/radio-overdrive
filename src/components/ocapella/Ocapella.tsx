'use client';

import { Suspense } from 'react';

import { Podcast, Typography, ButtonRectangle } from '@/components';
import { useTogglePodcast } from '@/utils';

import styles from './ocapella.module.scss';

const Ocapella = () => {
  // кнопка будет менять состяние с false на true
  // а класс в подкаст будет передаваться в зависимости от состояния
  /* const [showPodcast, setShowPodcast] = useState(false);

  const togglePodcast = () => {
    setShowPodcast(!showPodcast);
  }; */

  const [showPodcast, togglePodcast] = useTogglePodcast(false);

  const className = showPodcast ? styles.showPodcast : styles.hidePodcast;

  return (
    <>
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
    </>
  );
};

export default Ocapella;
