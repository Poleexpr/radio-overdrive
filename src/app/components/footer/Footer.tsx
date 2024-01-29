'use client'

import Image from 'next/image'
import { Element } from 'react-scroll'
import { ReactSVG } from 'react-svg'

import uikit from '../uikit.module.scss'
import styles from './footer.module.scss'

const Footer = () => {
	return (
		<Element name='contacts' className='element'>
			<footer className={styles.footer}>
				<div className={styles.container}>
					<div className={styles.subcontainer_first}>
						<p className={uikit.title6}>Овердрайв</p>
						<div className={styles.nets_wrapper}>
							<a href='https://t.me/rocknword' target='_blank'>
								<ReactSVG className={styles.net_logo} src='tg.svg' />
							</a>
							<a href='https://vk.com/rocknword' target='_blank'>
								<ReactSVG className={styles.net_logo} src='vk.svg' />
							</a>
							<a
								href='https://www.instagram.com/radio_overdrive/'
								target='_blank'
							>
								<ReactSVG className={styles.net_logo} src='instagram.svg' />
							</a>
						</div>
					</div>
					<div className={styles.subcontainer_second}>
						<a
							href='mailto:radio@russiandino.ru'
							target='_blank'
							className={styles.mail_link}
						>
							<ReactSVG className={styles.net_logo} src='mail.svg' />

							<p className={uikit.text}>radio@russiandino.ru</p>
						</a>

						<div className={styles.wrappe_copiright}>
							<p className={`${uikit.text} ${styles.heshtag}`}>
								#радиоовердрайв
							</p>
							<p className={uikit.text}>#хбдщдбдщ</p>
							<p className={`${uikit.title5} ${styles.slogan}`}>
								Мы вещаем до последнего
							</p>
							<p className={uikit.text}>
								© 2024 Радио Овердрайв. Санкт-Петербург. Все права защищены.
							</p>
						</div>
						<div className={styles.rd_wrapper}>
							<a
								href='https://www.russiandino.ru'
								target='_blank'
								className={styles.rd}
							>
								<ReactSVG src='rd-logo.svg' />

								<div className={styles.rd_text}>
									<p>made by</p>
									<p className={styles.rd_russkiy}>Russkiy</p>
									<p className={styles.rd_dinozavr}>Dinozavr</p>
								</div>
							</a>
						</div>
					</div>
				</div>
			</footer>
		</Element>
	)
}

export default Footer
