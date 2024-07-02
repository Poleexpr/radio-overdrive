'use client';

// import { use } from 'react';
import classnames from 'classnames';
import { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';

import { Typography } from '@/components';
import { IconButtonPlay, IconButtonStop } from '@/components/icons';

import styles from './radio.module.scss';

/*
const urlStream = 'https://demo.azuracast.com/api/nowplaying_static/azuratest_radio.json';

const fetchStream = async (urlStream: string) => {
  const rec = await fetch(urlStream);
  const data = await rec.json();
  return data
};
*/
export const Radio = () => {
  // const stream = use(fetchStream(urlStream))
  const [tracklist, settracklist] = useState(false);

  const tracklistHandler = () => {
    settracklist((prevTracklist) => !prevTracklist);
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.frame}>
          <div className={styles.broadcastWrapper}>
            <AudioPlayer
              className='radio'
              customAdditionalControls={[]}
              customVolumeControls={[]}
              layout='horizontal'
              showDownloadProgress={false}
              showJumpControls={false}
              src='./audios/oxbow-over.mp3'
              customIcons={{
                play: <IconButtonPlay />,
                pause: <IconButtonStop />,
              }}
            />

            <Typography className={styles.live} tag='p' variant='text5'>
              в эфире:
            </Typography>
            <div className={styles.currentTrackWrapper}>
              <Typography className={styles.title} tag='p' variant='text3'>
                OVER
              </Typography>
              <div className={styles.artist}>
                <Typography className={styles.artistText} tag='p' variant='text'>
                  Ø Oxbow 8 мая 1996 ночь
                </Typography>
              </div>
            </div>
          </div>
          <div>
            <button
              aria-label='открыть / закрыть'
              className={
                tracklist
                  ? classnames(styles.button, styles.close)
                  : classnames(styles.button, styles.open)
              }
              onClick={tracklistHandler}
            >
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>
      <div
        className={tracklist ? classnames(styles.trackWrapper, styles.open) : styles.trackWrapper}
      >
        <Typography className={styles.track} tag='p' variant='text4'>
          Oxbow — Over
        </Typography>
        <Typography className={styles.track} tag='p' variant='text4'>
          Oxbow — Over
        </Typography>
        <Typography className={styles.track} tag='p' variant='text4'>
          Oxbow — Over
        </Typography>
        <Typography className={styles.track} tag='p' variant='text4'>
          Oxbow — Over
        </Typography>
        <Typography className={styles.track} tag='p' variant='text4'>
          Oxbow — Over
        </Typography>
        <Typography className={styles.track} tag='p' variant='text4'>
          Oxbow — Over
        </Typography>
        <Typography className={styles.track} tag='p' variant='text4'>
          Oxbow — Over
        </Typography>
      </div>
    </section>
  );
};
