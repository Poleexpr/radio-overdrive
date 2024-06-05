'use client';

import type { FC, RefObject } from 'react';

import { Typography } from '@/components';

import type { ISong } from '../../app/ocapella/Ocapella';

import styles from './player.module.scss';

interface LibrarySongProps {
  song: ISong;
  songs: ISong[];
  setCurrentSong: (value: ISong) => void;
  audioRef: RefObject<HTMLAudioElement>;
  isPlaying: boolean;
  setIsPlaying: (value: boolean) => void;
  setSongs: (value: ISong[]) => void;
  id: string;
}

export const LibrarySong: FC<LibrarySongProps> = ({
  song,
  songs,
  setCurrentSong,
  audioRef,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isPlaying,
  setIsPlaying,
  setSongs,
  id,
}) => {
  const songSelectHandler = async () => {
    // eslint-disable-next-line @typescript-eslint/await-thenable
    await setCurrentSong(song);

    const newSongs = songs.map((song) => {
      if (song.id === id) {
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

    if (song.active) {
      audioRef.current?.pause();
      // setIsPlaying((prevIsPlaying: boolean) => (prevIsPlaying = false));
      setIsPlaying((isPlaying = false));
    } else {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      audioRef.current?.play();
      // setIsPlaying((prevIsPlaying: boolean) => (prevIsPlaying = true));
      setIsPlaying((isPlaying = true));
    }
  };
  return (
    <div
      className={`${styles.librarySong} ${song.active ? styles.selected : ''}`}
      role='button'
      tabIndex={0}
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onClick={songSelectHandler}
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onKeyDown={songSelectHandler}
    >
      <img
        alt={song.name.slice(song.name.indexOf('#'))}
        className={styles.image}
        src={song.cover}
      />
      <div className={styles.songDescription}>
        <Typography className={styles.date} tag='p' variant='text6'>
          {song.date.slice(0, 10).split('-').reverse().join('.')}
        </Typography>
        <Typography className={styles.title} tag='h4' variant='text'>
          {song.name.slice(song.name.indexOf('#'))}
        </Typography>
      </div>
    </div>
  );
};
