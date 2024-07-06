'use client';

import { useQuery } from '@tanstack/react-query';
import type { FC } from 'react';
import { useEffect, useRef, useState } from 'react';

import { Typography, Player, Loader, ErrorText } from '@/components';
import {
  IconLogoApplePodcast,
  IconLogoGooglePodcast,
  IconLogoCastbox,
  IconLogoOvercast,
} from '@/components/icons';
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

  if (isLoading) return <Loader />;

  if (error) return <ErrorText link='https://radiooverdrive.mave.digital' />;

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

  const songEndHandler = () => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
    // audioRef.current.load();
    // let playPromise = audioRef.current?.play();
    try {
      if (isPlaying && audioRef.current) {
        /*
        setTimeout(() => {
          
            audioRef.current?.play().catch((error) => {
              console.log(error);
            });
          
        }, 1000);
        */
        audioRef.current.onloadedmetadata = () => {
          audioRef.current?.play().catch((error) => {
            console.log(error);
          });
        };
      }
    } catch (error) {
      console.log(error);
    }
    /* if (playPromise) {
      audioRef.current.play().then(() => {
        console.log('playing').catch((error) => {
          console.log('error');
          setIsPlaying(!isPlaying);
        });
      });
    } */
  };

  /* audioRef.current?.addEventListener('loadeddata', () => {
    songEndHandler();
  });*

  // works
  /* const songEndHandler = async () => {
    if (audioRef.current?.play() !== undefined) {
      // eslint-disable-next-line @typescript-eslint/await-thenable
      await audioRef.current.pause();
      setIsPlaying(!isPlaying);
    }
  }; */

  return (
    <>
      <div className={styles.title}>
        <Typography tag='h2' variant='title2'>
          о’капелла
        </Typography>
        <Typography className={styles.description} tag='p' variant='text2'>
          Подкаст о музыке как феномене и чуде
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
          <div className={styles.nets_wrapper}>
            {' '}
            <a
              aria-label='Перейти на Apple Podcast'
              className={styles.net_link}
              href='https://podcasts.apple.com/podcast/id1551530393'
              rel='noreferrer'
              target='_blank'
            >
              <IconLogoApplePodcast className={styles.net_logo} />
              <Typography className={styles.net_tooltip} tag='span' variant='text6'>
                Apple Podcast
              </Typography>
            </a>
            <a
              aria-label='Перейти на Google Podcast'
              className={styles.net_link}
              href='https://podcasts.google.com/feed/aHR0cDovL3Jzcy5jYXN0Ym94LmZtL2V2ZXJlc3QvNmVlZWNlNWNkZDU5NGVkNDk1YjIxNzEyODFiMzg5ZWMueG1s?sa=X&ved=0CAcQrrcFahcKEwiA9NnL-ND7AhUAAAAAHQAAAAAQSQ&hl=ru'
              rel='noreferrer'
              target='_blank'
            >
              <IconLogoGooglePodcast className={styles.net_logo} />{' '}
              <Typography className={styles.net_tooltip} tag='span' variant='text6'>
                Google Podcast
              </Typography>
            </a>
            <a
              aria-label='Перейти на Castbox'
              className={styles.net_link}
              href='https://castbox.fm/channel/id3666927?utm_campaign=ex_share_ch&utm_medium=exlink&country=ru'
              rel='noreferrer'
              target='_blank'
            >
              <IconLogoCastbox className={styles.net_logo} />{' '}
              <Typography className={styles.net_tooltip} tag='span' variant='text6'>
                Castbox
              </Typography>
            </a>
            <a
              aria-label='Перейти на Overcast'
              className={styles.net_link}
              href='https://overcast.fm/itunes1551530393'
              rel='noreferrer'
              target='_blank'
            >
              <IconLogoOvercast className={styles.net_logo} />
              <Typography className={styles.net_tooltip} tag='span' variant='text6'>
                Overcast
              </Typography>
            </a>
          </div>
        </div>
        <Player.Library
          overSign
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
