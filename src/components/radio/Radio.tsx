'use client';

import { useEffect, useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import { ReactSVG } from 'react-svg';

import uikit from '../uikit.module.scss';

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
            play: <ReactSVG src='play.svg' />,
          }}
          onPlay={(e) => console.log('onPlay')}
        />
        <p className={`${uikit.text5} ${styles.live}`}>в эфире:</p>
        <p className={`${uikit.text3} ${styles.title}`}>текст</p>
        <p className={`${uikit.text} ${styles.artist}`}>текст</p>
      </div>
    </section>
  );
};

export default Radio;
