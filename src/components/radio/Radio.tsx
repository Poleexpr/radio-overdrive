'use client';

import { useEffect, useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';

import { Typography } from '@/components';
import { IconButtonPlay } from '@/components/icons';

import styles from './radio.module.scss';

const Radio = () => {
  const [stream, setStream] = useState([]);

  useEffect(() => {
    const getStream = async () => {
      const rec = await fetch(
        'https://demo.azuracast.com/api/nowplaying_static/azuratest_radio.json',
      );
      const data = await rec.json();
      console.log(data.station.listen_url);
      setStream(data);
    };
    getStream();
  }, []);

  return (
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
          onPlay={(e) => console.log('onPlay')}
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
};

export default Radio;
