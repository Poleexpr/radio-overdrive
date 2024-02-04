import { Typography } from '@/components'

import Schedule from '../schedule/Schedule'
import styles from './programGuide.module.scss'

const ProgramGuide = () => {
	return (
		<section id='program' className={styles.container}>
			<Typography tag='h2' variant='title2' className={styles.title}>
				программа передач
			</Typography>
			<Schedule />
			<div className={styles.description_wrapper}>
				<Typography tag='p' variant='text' className={styles.description}>
					И — всю неделю новые релизы топовых музыкантов. Не забудь подписаться
					на нас в Телеграм, чтобы больше ничего не пропустить.
				</Typography>
			</div>
		</section>
	)
}

export default ProgramGuide
