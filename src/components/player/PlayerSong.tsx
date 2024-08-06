'use client';

import type { FC, RefObject } from 'react';

import { Typography } from '@/components';
import { IconButtonPlay, IconButtonStop } from '@/components/icons';

import type { ISongInfo } from '../../app/ocapella/Ocapella';

import styles from './player.module.scss';

interface PlayerSongProps {
  // currentSong: ISong;
  isPlaying: boolean;
  setIsPlaying: (value: boolean) => void;
  audioRef: RefObject<HTMLMediaElement>;
  setSongInfo?: (value: ISongInfo) => void;
  songInfo?: ISongInfo;
  // songs: ISong[];
  // setCurrentSong: (value: ISong) => void;
  // setSongs: (value: ISong[]) => void;
}

export const PlayerSong: FC<PlayerSongProps> = ({
  // currentSong,
  isPlaying,
  setIsPlaying,
  audioRef,
  setSongInfo,
  songInfo,
  // songs,
  // setCurrentSong,
  // setSongs,
}) => {
  /*
  const activeLibraryHandler = (nextPrev: ISong) => {
    const newSongs = songs.map((song) => {
      if (song.id === nextPrev.id) {
        return {
          ...song,
          active: true,
        };
      }
      return {
        ...song,
        active: false,
      };
    });
    setSongs(newSongs);
  };
  */

  const dragHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) audioRef.current.currentTime = parseInt(e.target.value, 10);
    if (setSongInfo && songInfo)
      setSongInfo({ ...songInfo, currentTime: parseInt(e.target.value, 10) });
  };
  const playSongHandler = async () => {
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(!isPlaying);
    } else {
      await audioRef.current?.play();
      setIsPlaying(!isPlaying);
    }
  };

  const getTime = (time: number) =>
    `${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`;

  /* const skipTrackHandler = async (direction: string) => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === 'skip-forward') {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
      activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
    }
    if (direction === 'skip-back') {
      if ((currentIndex - 1) % songs.length === -1) {
        await setCurrentSong(songs[songs.length - 1]);
        // playAudio(isPlaying, audioRef);
        activeLibraryHandler(songs[songs.length - 1]);

        return;
      }
      await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
      activeLibraryHandler(songs[(currentIndex - 1) % songs.length]);
    }
    if (isPlaying) audioRef.current.play();
  };
  */

  const trackAnim = {
    transform: `translateX(${songInfo?.animationPercentage}%)`,
  };
  return (
    <div className={styles.player}>
      <div className={styles.playControl}>
        {!isPlaying ? (
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          <button aria-label='включить' className={styles.play} onClick={playSongHandler}>
            <IconButtonPlay />
          </button>
        ) : (
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          <button aria-label='выключить' className={styles.pause} onClick={playSongHandler}>
            <IconButtonStop />
          </button>
        )}
      </div>
      {songInfo && (
        <div className={styles.timeControl}>
          <div className={styles.track}>
            <input
              className={styles.trackInput}
              max={songInfo.duration || 0}
              min={0}
              type='range'
              value={songInfo.currentTime}
              onChange={dragHandler}
            />
            <div className={styles.animateTrack} style={trackAnim} />
          </div>
          <Typography className={styles.time} tag='p' variant='text4'>
            {getTime(songInfo.currentTime)} /{' '}
            {songInfo.duration ? getTime(songInfo.duration) : ' 00:00'}
          </Typography>
        </div>
      )}
    </div>
  );
};
