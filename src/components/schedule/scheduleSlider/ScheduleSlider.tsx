'use client';

import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import { useEffect, useState } from 'react';

import { Typography } from '@/components';
import { IconArrowNext, IconArrowPrev } from '@/components/icons';
import { scheduleConfig } from '@/utils';

import { ScheduleCard } from '../scheduleCard/ScheduleCard';
import type { ScheduleData } from '../types';

import styles from './scheduleSlider.module.scss';

export const ScheduleSlider = () => {
  const [scheduleData, setScheduleInfo] = useState<ScheduleData | ScheduleData[] | null>(null);
  useEffect(() => {
    const getScheduleData = async () => {
      const getNewScheduleData = await scheduleConfig();
      setScheduleInfo(getNewScheduleData);
    };
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    getScheduleData();
  }, []);

  // solving the 'splide has no child at all' problem with the map method on android
  let firstSlide;
  let allSlides;

  if (scheduleData && Array.isArray(scheduleData)) {
    [firstSlide] = scheduleData.slice(0, 1);
    allSlides = scheduleData.slice(1);
  } else if (scheduleData && !Array.isArray(scheduleData)) {
    firstSlide = scheduleData;
  }

  return (
    <Splide
      aria-label='schedule'
      hasTrack={false}
      options={{
        rewind: true,
        gap: '1rem',
        type: 'loop',
        focus: 'center',
        perPage: 1,
        mediaQuery: 'min',
        breakpoints: {
          1024: {
            perPage: 3,
          },
        },
      }}
    >
      <div className='splide__arrows'>
        <button aria-label='назад' className='splide__arrow splide__arrow--prev'>
          <IconArrowPrev />
        </button>
        <button aria-label='вперёд' className='splide__arrow splide__arrow--next'>
          <IconArrowNext />
        </button>
      </div>
      <SplideTrack>
        <SplideSlide>
          <Typography className={styles.title} tag='h3' variant='title4'>
            {firstSlide && firstSlide.day}
          </Typography>
          {firstSlide &&
            firstSlide.schedule.map((item, i) => (
              <div key={i} className={styles.card}>
                <Typography className={styles.time} tag='p' variant='title5'>
                  {item.time}
                </Typography>
                <Typography className={styles.name} tag='p' variant='text'>
                  {item.event}
                </Typography>
              </div>
            ))}
        </SplideSlide>
        {allSlides &&
          allSlides.map((info: ScheduleData, i) => (
            <SplideSlide key={i}>
              <ScheduleCard info={info} />
            </SplideSlide>
          ))}
      </SplideTrack>
    </Splide>
  );
};
