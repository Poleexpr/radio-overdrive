'use client'

import './scheduleCard.scss'

import { useEffect, useRef } from 'react'
import { register } from 'swiper/element/bundle'
import type { SwiperProps, SwiperSlideProps } from 'swiper/react'

import { IconArrowNext, IconArrowPrev } from '@/components/icons'

import ScheduleCard from '../scheduleCard/ScheduleCard'

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
					<IconArrowPrev />
				</div>
				<div className='custom-next'>
					<IconArrowNext />
				</div>
			</div>
			<swiper-container init={false} ref={swiperRef}>
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
	)
}

export default Schedule
