'use client';

import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';

import { IconArrowNext, IconArrowPrev } from '@/components/icons';
import { scheduleInfo } from '@/utils/data/scheduleInfo';

import { ScheduleCard } from '../scheduleCard/ScheduleCard';

export const ScheduleSlider = () => (
  <Splide
    aria-label='schedule'
    hasTrack={false}
    options={{
      rewind: true,
      gap: '1rem',
      type: 'loop',
      focus: 'center',
      perPage: 3,
      breakpoints: {
        900: {
          perPage: 1,
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
      {scheduleInfo.map((info) => (
        <SplideSlide>
          <ScheduleCard info={info} />
        </SplideSlide>
      ))}
    </SplideTrack>
  </Splide>
);
