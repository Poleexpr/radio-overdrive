'use client'

import styles from './about.module.scss'
import uikit from '../uikit.module.scss'
import Image from 'next/image'

import { Element } from 'react-scroll'

const About = () => {
	return (
		<Element name='about' className='element'>
			<section className={styles.about}>
				<div className={styles.container}>
					<div className={styles.img_wrapper}>
						<Image
							className={styles.img}
							src='/about.png'
							alt='About img'
							layout='responsive'
							width={1000}
							height={1000}
						/>
						<Image
							className={styles.img_laptop}
							src='/about-laptop.png'
							alt='About img'
							layout='responsive'
							width={1000}
							height={1000}
						/>
					</div>
					<div className={styles.container_text}>
						<div className={styles.title_wrapper}>
							<h3 className={`${uikit.title3} ${styles.title}`}>МУЗЫКА,</h3>
							<h3 className={`${uikit.title3} ${styles.title}`}>СВОБОДА,</h3>
							<h3 className={`${uikit.title3} ${styles.title}`}>ЛЮБОВЬ</h3>
						</div>
						<div className={styles.description_wrapper}>
							<p className={`${uikit.text} ${styles.description}`}>
								Мы базируемся на орбите свежейгорячей планетёночки Земля
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
