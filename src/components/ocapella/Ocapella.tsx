'use client';

import { Suspense } from 'react';
import { Element } from 'react-scroll';

import { Podcast, Typography } from '@/components';
import { useTogglePodcast } from '@/utils';

import uikit from '../uikit.module.scss';

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
    <Element className='element' name='program'>
      <div className={styles.container}>
        <Typography tag='h2' variant='title2'>
          о’капелла
        </Typography>
        <Typography className={styles.description} tag='p' variant='text2'>
          {' '}
          Подкаст о музыке как феномене и чуде.
        </Typography>
        <button className={`${uikit.link} ${styles.button}`} onClick={() => togglePodcast()}>
          {showPodcast ? 'скрыть' : 'слушать онлайн'}
        </button>
      </div>
      <Suspense fallback={<p> Loading...</p>}>
        <Podcast.Collection
          className={className}
          feedUrl='./ocappella'
          podcastLink='https://radiooverdrive.mave.digital'
        />
      </Suspense>
    </Element>
  );
};

export default Ocapella;
