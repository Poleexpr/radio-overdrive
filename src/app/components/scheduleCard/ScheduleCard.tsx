import styles from './scheduleCard.module.scss'
import uikit from '../uikit.module.scss'

const ScheduleCard = (props: any) => {
	return (
		<div className={styles.container}>
			<div className={`${styles.card} ${uikit.title4}`}>{props.day}</div>
			<div className={styles.card}>
				<div className={`${styles.time} ${uikit.title5}`}>8:00</div>
				<div className={`${styles.name} ${uikit.text}`}>
					Утренний эфир {props.person}
				</div>
			</div>
			<div className={styles.card}>
				<div className={`${styles.time} ${uikit.title5}`}>13:00</div>
				<div className={`${styles.name} ${uikit.text}`}>Дневной эфир</div>
			</div>
			<div className={styles.card}>
				<div className={`${styles.time} ${uikit.title5}`}>17:00</div>
				<div className={`${styles.name} ${uikit.text}`}>Вечерний эфир</div>
			</div>
			<div className={styles.card}>
				<div className={`${styles.time} ${uikit.title5}`}>22:00</div>
				<div className={`${styles.name} ${uikit.text}`}>Ночной эфир</div>
			</div>
		</div>
	)
}

export default ScheduleCard
