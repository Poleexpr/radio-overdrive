'use client';

import type { FC, RefObject } from 'react';

import type { ISong } from '../../app/ocapella/Ocapella';

import { LibrarySong } from './LibrarySong';
import styles from './player.module.scss';

interface LibraryProps {
  songs: ISong[];
  setCurrentSong: (value: ISong) => void;
  audioRef: RefObject<HTMLAudioElement>;
  isPlaying: boolean;
  setIsPlaying: (value: boolean) => void;
  setSongs: (value: ISong[]) => void;
}

export const Library: FC<LibraryProps> = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setIsPlaying,
  setSongs,
}) => (
  <div className={styles.library}>
    <div className={styles.librarySongs}>
      {songs.map((song) => (
        <LibrarySong
          key={song.id}
          audioRef={audioRef}
          id={song.id}
          isPlaying={isPlaying}
          setCurrentSong={setCurrentSong}
          setIsPlaying={setIsPlaying}
          setSongs={setSongs}
          song={song}
          songs={songs}
        />
      ))}
    </div>
  </div>
);
