'use client'

import Image from 'next/image'
import { Element } from 'react-scroll'

import { Typography } from '@/components'

import uikit from '../uikit.module.scss'
import styles from './about.module.scss'

const About = () => {
	return (
		<Element name='about' className='element'>
			<section className={styles.about}>
				<div className={styles.container}>
					<div className={styles.img_wrapper}>
						<Image
							className={styles.img}
							src='/about.png'
							alt='коллаж из трех картинок с изображением космоса, глаза и концерта'
							layout='responsive'
							width={1000}
							height={1000}
						/>
						<Image
							className={styles.img_laptop}
							src='/about-laptop.png'
							alt='коллаж из трех картинок с изображением космоса, глаза и концерта'
							layout='responsive'
							width={1000}
							height={1000}
						/>
					</div>
					<div className={styles.container_text}>
						<div className={styles.title_wrapper}>
							<Typography tag='h3' variant='title3' className={styles.title}>
								МУЗЫКА,
							</Typography>
							<Typography tag='h3' variant='title3' className={styles.title}>
								СВОБОДА,
							</Typography>
							<Typography tag='h3' variant='title3' className={styles.title}>
								ЛЮБОВЬ
							</Typography>
						</div>
						<div className={styles.description_wrapper}>
							<p className={`${uikit.text} ${styles.description}`}>
								Мы базируемся на орбите свежей горячей планетёночки Земля
								и ставим музыку в высоком стиле, покуда смерть не разлучит нас.
								Долой ротацию и формат скучных околоистеблишментных
								радиостанций, где всё куплено, — врубайся в доброкачественнейшее
								музло всех времён и народов, оверслушатель!
							</p>
							<p className={`${uikit.text} ${styles.description}`}>
								Радио Овердрайв основано 15 октября 2020 года редакторами
								независимого издательства Чтиво на месте бывшей авторской
								страницы рок-писателя Сергея Иннера, психоделически исчезнувшего
								после презентации его антиромана{' '}
								<a
									href='https://chtivo.spb.ru/book-overdrive.html'
									target='_blank'
									className={styles.link}
								>
									<span>«Овердрайв»</span>
								</a>
								.
							</p>
						</div>
					</div>
				</div>
			</section>
		</Element>
	)
}

export default About
