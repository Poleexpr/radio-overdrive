'use client'
import { Element } from 'react-scroll'

import { Typography } from '@/components'
import {
	IconLogoInstagram,
	IconLogoMail,
	IconLogoRD,
	IconLogoTelegram,
	IconLogoVk,
} from '@/components/icons'

import styles from './footer.module.scss'

const Footer = () => {
	return (
		<Element name='contacts' className='element'>
			<footer className={styles.footer}>
				<div className={styles.container}>
					<div className={styles.subcontainer_first}>
						<Typography tag='h4' variant='title6'>
							Овердрайв
						</Typography>

						<div className={styles.nets_wrapper}>
							<a href='https://t.me/rocknword' target='_blank'>
								<IconLogoTelegram className={styles.net_logo} />
							</a>
							<a href='https://vk.com/rocknword' target='_blank'>
								<IconLogoVk className={styles.net_logo} />
							</a>
							<a
								href='https://www.instagram.com/radio_overdrive/'
								target='_blank'
							>
								<IconLogoInstagram className={styles.net_logo} />
							</a>
						</div>
					</div>
					<div className={styles.subcontainer_second}>
						<a
							href='mailto:radio@russiandino.ru'
							target='_blank'
							className={styles.mail_link}
						>
							<IconLogoMail className={styles.net_logo} />
							<Typography tag='p' variant='text'>
								radio@russiandino.ru
							</Typography>
						</a>

						<div className={styles.wrappe_copiright}>
							<Typography tag='p' variant='text' className={styles.heshtag}>
								#радиоовердрайв
							</Typography>
							<Typography tag='p' variant='text'>
								#хбдщдбдщ
							</Typography>
							<Typography tag='p' variant='title5' className={styles.slogan}>
								Мы вещаем до последнего
							</Typography>
							<Typography tag='p' variant='text'>
								© 2024 Радио Овердрайв. Санкт-Петербург. Все права защищены.
							</Typography>
						</div>
						<div className={styles.rd_wrapper}>
							<a
								href='https://www.russiandino.ru'
								target='_blank'
								className={styles.rd}
							>
								<IconLogoRD />

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
