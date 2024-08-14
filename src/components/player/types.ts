import type { RefObject } from 'react';

import type { ISong, ISongInfo } from '@/wrappers/podcastPageWrapper/types';

export interface LibraryProps {
  songs: ISong[];
  setCurrentSong: (value: ISong) => void;
  audioRef: RefObject<HTMLAudioElement>;
  isPlaying: boolean;
  setIsPlaying: (value: boolean) => void;
  setSongs: (value: ISong[]) => void;
  overSign: boolean;
}

export interface LibrarySongProps {
  song: ISong;
  songs: ISong[];
  setCurrentSong: (value: ISong) => void;
  audioRef: RefObject<HTMLAudioElement>;
  isPlaying: boolean;
  setIsPlaying: (value: boolean) => void;
  setSongs: (value: ISong[]) => void;
  id: string;
  overSign: boolean;
}

export interface PlayerSongProps {
  isPlaying: boolean;
  setIsPlaying: (value: boolean) => void;
  audioRef: RefObject<HTMLMediaElement>;
  setSongInfo?: (value: ISongInfo) => void;
  songInfo?: ISongInfo;
}

export interface SongProps {
  currentSong: ISong;
  overSign: boolean;
}
