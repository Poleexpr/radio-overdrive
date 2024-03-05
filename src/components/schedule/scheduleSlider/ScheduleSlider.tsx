'use client';

import { useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle';

import { IconArrowNext, IconArrowPrev } from '@/components/icons';

import ScheduleCard from '../scheduleCard/ScheduleCard';

const Schedule = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const swiperRef = useRef<any>(null!);

  useEffect(() => {
    register();

    const params = {
      // slidesPerView: 1,
      centeredSlides: true,
      grabCursor: true,
      loop: true,
      navigation: {
        nextEl: '.custom-next',
        prevEl: '.custom-prev',
      },

      breakpoints: {
        210: {
          slidesPerView: 1,
        },
        900: {
          slidesPerView: 3,
        },
      },
    };

    Object.assign(swiperRef.current, params);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    swiperRef.current?.initialize();

    /* swiperElRef.current?.addEventListener('swiperprogress', (e: any) => {
            const [swiper, progress] = e.detail;
            console.log(progress);
        });

        swiperElRef.current?.addEventListener('swiperslidechange', (e: any) => {
            console.log('slide changed');
        }); */
  }, []);

  return (
    <>
      <div className='custom-navigation'>
        <div className='custom-prev'>
          <IconArrowPrev />
        </div>
        <div className='custom-next'>
          <IconArrowNext />
        </div>
      </div>
      <swiper-container ref={swiperRef} init={false}>
        <swiper-slide>
          <ScheduleCard day='понедельник' person='Павела Барнашова' />
        </swiper-slide>
        <swiper-slide>
          <ScheduleCard day='среда' person='Дениса Никитенко' />
        </swiper-slide>
        <swiper-slide>
          <ScheduleCard day='четверг' person='Андрея Григорьева' />
        </swiper-slide>
        <swiper-slide>
          <ScheduleCard day='суббота' person='Виталия Савченко' />
        </swiper-slide>

        <swiper-slide>
          <ScheduleCard day='понедельник' person='Павела Барнашова' />
        </swiper-slide>
        <swiper-slide>
          <ScheduleCard day='среда' person='Дениса Никитенко' />
        </swiper-slide>
        <swiper-slide>
          <ScheduleCard day='четверг' person='Андрея Григорьева' />
        </swiper-slide>
        <swiper-slide>
          <ScheduleCard day='суббота' person='Виталия Савченко' />
        </swiper-slide>
      </swiper-container>
    </>
  );
};

export default Schedule;
