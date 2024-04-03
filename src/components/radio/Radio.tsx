'use client';

// import { use } from 'react';
import AudioPlayer from 'react-h5-audio-player';

import { Typography } from '@/components';
import { IconButtonPlay } from '@/components/icons';

import styles from './radio.module.scss';

/*
const urlStream = 'https://demo.azuracast.com/api/nowplaying_static/azuratest_radio.json';

const fetchStream = async (urlStream: string) => {
  const rec = await fetch(urlStream);
  const data = await rec.json();
  return data
};
*/
export const Radio = () => (
  // const stream = use(fetchStream(urlStream))

  <section className={styles.container}>
    <div className={styles.wrapper}>
      <AudioPlayer
        className='radio'
        customAdditionalControls={[]}
        customVolumeControls={[]}
        layout='horizontal'
        showDownloadProgress={false}
        showJumpControls={false}
        src='https://demo.azuracast.com/listen/azuratest_radio/radio.mp3'
        customIcons={{
          play: <IconButtonPlay />,
        }}
      />
      <Typography className={styles.live} tag='p' variant='text5'>
        в эфире:
      </Typography>
      <Typography className={styles.title} tag='p' variant='text3'>
        текст
      </Typography>
      <Typography className={styles.artist} tag='p' variant='text'>
        текст
      </Typography>
    </div>
  </section>
);
