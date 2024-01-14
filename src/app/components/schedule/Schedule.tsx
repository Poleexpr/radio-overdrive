'use client'

import { ReactSVG } from 'react-svg'

import styles from './schedule.module.scss'
import uikit from '../uikit.module.scss'
import './scheduleCard.scss'
import ScheduleCard from '../scheduleCard/ScheduleCard'

import type { SwiperSlideProps, SwiperProps } from 'swiper/react'

import { useRef, useEffect } from 'react'
import { register } from 'swiper/element/bundle'

declare global {
	namespace JSX {
		interface IntrinsicElements {
			'swiper-container': React.DetailedHTMLProps<
				React.HTMLAttributes<HTMLElement> & SwiperProps,
				HTMLElement
			>
			'swiper-slide': React.DetailedHTMLProps<
				React.HTMLAttributes<HTMLElement> & SwiperSlideProps,
				HTMLElement
			>
		}
	}
}

const Schedule = () => {
	const swiperRef = useRef<any>(null!)

	useEffect(() => {
		register()

		const params = {
			//slidesPerView: 1,
			grabCursor: true,
			centeredSlides: true,

			navigation: {
				nextEl: '.custom-next',
				prevEl: '.custom-prev',
			},
			loop: true,
			breakpoints: {
				210: {
					slidesPerView: 1,
				},
				900: {
					slidesPerView: 3,
				},
			},
		}

		Object.assign(swiperRef.current, params)

		swiperRef.current?.initialize()

		/*swiperElRef.current?.addEventListener('swiperprogress', (e: any) => {
            const [swiper, progress] = e.detail;
            console.log(progress);
        });

        swiperElRef.current?.addEventListener('swiperslidechange', (e: any) => {
            console.log('slide changed');
        });*/
	}, [])

	return (
		<>
			<div className='custom-navigation'>
				<div className='custom-prev'>
					<ReactSVG src='arrowPrev.svg' />
				</div>
				<div className='custom-next'>
					<ReactSVG src='arrowNext.svg' />
				</div>
			</div>
			<swiper-container init={false} ref={swiperRef}>
				<swiper-slide className={styles.slide}>
					<ScheduleCard day='пятница' person='Ланы Дороховой' />
				</swiper-slide>
				<swiper-slide>
					<ScheduleCard day='суббота' person='Ланы Дороховой' />
				</swiper-slide>
				<swiper-slide>
					<ScheduleCard day='воскресенье' person='Ланы Дороховой' />
				</swiper-slide>
				<swiper-slide>
					<ScheduleCard day='понедельник' person='Ланы Дороховой' />
				</swiper-slide>
				<swiper-slide>
					<ScheduleCard day='вторник' person='Ланы Дороховой' />
				</swiper-slide>
				<swiper-slide>
					<ScheduleCard day='среда' person='Ланы Дороховой' />
				</swiper-slide>
				<swiper-slide>
					<ScheduleCard day='четверг' person='Ланы Дороховой' />
				</swiper-slide>
			</swiper-container>
		</>
	)
}

export default Schedule
