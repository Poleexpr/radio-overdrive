'use client';

import classnames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import Typograf from 'typograf';

import { Typography, Player } from '@/components';
import { radioConfig } from '@/utils';

import styles from './radio.module.scss';

interface RadioData {
  name: string;
  presenter: string;
  date: string;
  audio: string;
  tracklist: string[];
}

const tp = new Typograf({ locale: ['ru', 'en-US'] });

export const Radio = () => {
  const [tracklist, settracklist] = useState(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLMediaElement>(null);

  const [radioData, setRadioData] = useState<RadioData | null>(null);
  useEffect(() => {
    const getRadioData = async () => {
      const getNewRadioData = await radioConfig();
      setRadioData(getNewRadioData);
    };
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    getRadioData();
  }, []);

  const tracklistHandler = () => {
    settracklist((prevTracklist) => !prevTracklist);
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.frame}>
          <div className={styles.broadcastWrapper}>
            <div>
              <Player.PlayerSong
                audioRef={audioRef}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
              />
              <audio ref={audioRef} loop>
                <track kind='captions' />
                <source src={radioData?.audio} type='audio/mp3' />
              </audio>
            </div>
            <Typography className={styles.live} tag='p' variant='text5'>
              в эфире:
            </Typography>
            <div className={styles.currentTrackWrapper}>
              <Typography className={styles.title} tag='p' variant='text3'>
                {radioData && radioData.name}
              </Typography>
              <div className={styles.artist}>
                <Typography className={styles.artistText} tag='p' variant='text'>
                  {radioData && tp.execute(radioData.presenter)}
                </Typography>
                <Typography className={styles.artistText} tag='p' variant='text'>
                  {radioData && tp.execute(radioData.date)}
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
        {radioData &&
          radioData.tracklist &&
          radioData.tracklist.map((track: string) => (
            <Typography className={styles.track} tag='p' variant='text4'>
              {track}
            </Typography>
          ))}
      </div>
    </section>
  );
};
