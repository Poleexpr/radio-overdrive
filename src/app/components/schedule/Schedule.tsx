'use client'

import styles from './schedule.module.scss'
import uikit from '../uikit.module.scss'
import './scheduleCard.scss'
import ScheduleCard from '../scheduleCard/ScheduleCard';



import type { SwiperSlideProps, SwiperProps } from 'swiper/react';

import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';



declare global {
    namespace JSX {
        interface IntrinsicElements {
            "swiper-container": React.DetailedHTMLProps<
                React.HTMLAttributes<HTMLElement> & SwiperProps,
                HTMLElement
            >;
            "swiper-slide": React.DetailedHTMLProps<
                React.HTMLAttributes<HTMLElement> & SwiperSlideProps,
                HTMLElement
            >;
        }
    }
}

const Schedule = () => {
    const swiperRef = useRef<any>(null!);

    useEffect(() => {
        register();

        const params = {
            slidesPerView: 3,
            grabCursor: true,
            centeredSlides: true,

            navigation: {
                nextEl: '.custom-next',
                prevEl: '.custom-prev',
            },
            loop: true,
            breakpoints: {
                768: {
                    slidesPerView: 1,
                },
            },
        };

        Object.assign(swiperRef.current, params);

        swiperRef.current?.initialize();



        /*swiperElRef.current?.addEventListener('swiperprogress', (e: any) => {
            const [swiper, progress] = e.detail;
            console.log(progress);
        });

        swiperElRef.current?.addEventListener('swiperslidechange', (e: any) => {
            console.log('slide changed');
        });*/
    }, []);


    return (
        <>
            <div className='custom-navigation'>
                <div className="custom-prev">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                        <path d="M10.4844 17.9707L1.99909 9.48542L10.4844 1.00014" stroke="white" stroke-width="2" />
                        <path d="M1.99909 9.48542H18.9697" stroke="white" stroke-width="2" />
                    </svg>
                </div>
                <div className="custom-next">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                        <path d="M8.48438 1L16.9697 9.48528L8.48438 17.9706" stroke="white" stroke-width="2" />
                        <path d="M16.9697 9.48528H-0.000906566" stroke="white" stroke-width="2" />
                    </svg>
                </div>
            </div>
            <swiper-container init={false} ref={swiperRef}
            >
                <swiper-slide className={styles.slide}>
                    <ScheduleCard day="пятница" person="Ланы Дороховой" />
                </swiper-slide>
                <swiper-slide>
                    <ScheduleCard day="суббота" person="Ланы Дороховой" />
                </swiper-slide>
                <swiper-slide>
                    <ScheduleCard day="воскресенье" person="Ланы Дороховой" />
                </swiper-slide>
                <swiper-slide>
                    <ScheduleCard day="понедельник" person="Ланы Дороховой" />
                </swiper-slide>
                <swiper-slide>
                    <ScheduleCard day="вторник" person="Ланы Дороховой" />
                </swiper-slide>
                <swiper-slide>
                    <ScheduleCard day="среда" person="Ланы Дороховой" />
                </swiper-slide>
                <swiper-slide>
                    <ScheduleCard day="четверг" person="Ланы Дороховой" />
                </swiper-slide>

            </swiper-container>

        </>
    );
};

export default Schedule