import Schedule from '../schedule/Schedule'
import uikit from '../uikit.module.scss'
import styles from './programGuide.module.scss'

const ProgramGuide = () => {
	return (
		<section id='program' className={styles.container}>
			<h2 className={`${styles.title} ${uikit.title2}`}>программа передач</h2>
			<Schedule />
			<div className={styles.description_wrapper}>
				<p className={`${styles.description} ${uikit.text}`}>
					И — всю неделю новые релизы топовых музыкантов. Не забудь подписаться
					на нас в Телеграм, чтобы больше ничего не пропустить.
				</p>
			</div>
		</section>
	)
}

export default ProgramGuide
