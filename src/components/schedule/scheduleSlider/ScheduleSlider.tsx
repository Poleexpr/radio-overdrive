'use client';

import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import { useEffect, useState } from 'react';

import { IconArrowNext, IconArrowPrev } from '@/components/icons';
import { scheduleConfig } from '@/utils';

import { ScheduleCard } from '../scheduleCard/ScheduleCard';
import type { ScheduleData } from '../types';

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
          <div>test</div>
        </SplideSlide>
        {scheduleData && Array.isArray(scheduleData)
          ? scheduleData.map((info: ScheduleData, i) => (
              <SplideSlide key={i}>
                <ScheduleCard info={info} />
              </SplideSlide>
            ))
          : scheduleData && (
              <SplideSlide>
                <ScheduleCard info={scheduleData} />
              </SplideSlide>
            )}
      </SplideTrack>
    </Splide>
  );
};
