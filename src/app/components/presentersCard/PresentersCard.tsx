import styles from './presentersCard.module.scss'
import uikit from '../uikit.module.scss'
import Image from 'next/image'

const PresentersCard = (props: any) => {
	return (
		<div
			className={
				props.on
					? `${styles.container}`
					: `${styles.container} ${styles.cardClosed}`
			}
			onClick={() => props.toggle(props.id)}
			onMouseEnter={() => props.toggle(props.id)}
			onMouseLeave={() => props.leave(props.id)}
		>
			<div className={styles.img_wrapper}>
				<Image
					className={styles.card_img}
					src={props.img}
					alt='фотография ведущего'
					layout='fill'
				/>
			</div>
			<div className={styles.card_info}>
				<p className={uikit.text3}>Голос {props.day}</p>
				<p className={`${uikit.title4} ${styles.card_title}`}>{props.name}</p>
				<p className={uikit.text4}>г. {props.city}</p>
				<div className={`${uikit.text} ${styles.card_description}`}>
					<p>{props.descriptionParagraph1}</p>
					<p>{props.descriptionParagraph2}</p>
					<p>{props.descriptionParagraph3}</p>
					<p>{props.descriptionParagraph4}</p>
					<p>{props.descriptionParagraph5}</p>
				</div>
			</div>
		</div>
	)
}

export default PresentersCard
