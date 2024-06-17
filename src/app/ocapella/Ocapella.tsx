'use client';

import { useQuery } from '@tanstack/react-query';
import type { FC } from 'react';
import { useEffect, useRef, useState } from 'react';

import { Typography, Player } from '@/components';
import { fetchEpisodes } from '@/utils';
import dataNative from '@/utils/data/ocapellaInfo';

import styles from './page.module.scss';

export interface ISong {
  name: string;
  date: string;
  cover: string;
  description: string;
  audio: string;
  id: string;
  active: boolean;
}

export interface ISongInfo {
  currentTime: number;
  duration: number;
  animationPercentage: number;
}

export const Ocapella: FC = () => {
  const [songs, setSongs] = useState<ISong[]>(dataNative);
  const [currentSong, setCurrentSong] = useState<ISong>(songs[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLMediaElement>(null);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });

  const { status, data, isLoading, error } = useQuery({
    queryKey: ['episodes'],
    queryFn: () => fetchEpisodes('./ocappellaRSS'),
    staleTime: 10 * 1000,
  });

  useEffect(() => {
    if (status === 'success') {
      setSongs(data);
      setCurrentSong(data[0]);
    }
  }, [status, data]);

  if (isLoading)
    return (
      <div className={styles.loaderWrapper}>
        <div className={styles.loader} />
      </div>
    );

  if (error) return <div>Error!</div>;

  const timeUpdateHandler = (e: React.ChangeEvent<HTMLMediaElement>) => {
    const current = e.target.currentTime;
    const { duration } = e.target;
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animation = Math.round((roundedCurrent / roundedDuration) * 100);
    setSongInfo({
      currentTime: current,
      duration,
      animationPercentage: animation,
    });
  };
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

  const songEndHandler = async () => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);

    if (audioRef.current?.play() !== undefined) {
      setCurrentSong(songs[(currentIndex + 1) % songs.length]);
      activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
      audioRef.current.load();
      console.log(audioRef.current.play());
      await audioRef.current.play();
    }
  };
*/

  const songEndHandler = async () => {
    if (audioRef.current?.play() !== undefined) {
      // eslint-disable-next-line @typescript-eslint/await-thenable
      await audioRef.current.pause();
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <>
      <div className={styles.title}>
        <Typography tag='h2' variant='title2'>
          о’капелла
        </Typography>
        <Typography className={styles.description} tag='p' variant='text2'>
          Подкаст о музыке как феномене и чуде.
        </Typography>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.subContainer}>
          <Player.Song overSign currentSong={currentSong} />
          <Player.PlayerSong
            audioRef={audioRef}
            // currentSong={currentSong}
            isPlaying={isPlaying}
            // setCurrentSong={setCurrentSong}
            setIsPlaying={setIsPlaying}
            setSongInfo={setSongInfo}
            // setSongs={setSongs}
            songInfo={songInfo}
            // songs={songs}
          />
        </div>
        <Player.Library
          audioRef={audioRef}
          isPlaying={isPlaying}
          setCurrentSong={setCurrentSong}
          setIsPlaying={setIsPlaying}
          setSongs={setSongs}
          songs={songs}
        />
        <audio
          ref={audioRef}
          src={currentSong.audio}
          onLoadedMetadata={timeUpdateHandler}
          onTimeUpdate={timeUpdateHandler}
          // eslint-disable-next-line @typescript-eslint/no-misused-promises, react/jsx-sort-props
          onEnded={songEndHandler}
          // onEnded={() => {
          // eslint-disable-next-line no-void
          // void songEndHandler();
          // }}
        >
          <track kind='captions' />
          <source src={currentSong.audio} />
        </audio>
      </div>
    </>
  );
};
