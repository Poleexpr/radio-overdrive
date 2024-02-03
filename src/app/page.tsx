import { register } from 'swiper/element/bundle'

import About from '../components/about/About'
import Footer from '../components/footer/Footer'
import Invitation from '../components/invitation/Invitation'
import Mail from '../components/mail/Mail'
import Ocapella from '../components/ocapella/Ocapella'
import Planet from '../components/planet/Planet'
import Presenters from '../components/presenters/Presenters'
import ProgramGuide from '../components/programGuide/ProgramGuide'
import Video from '../components/video/Video'
import Wellcome from '../components/wellcome/Wellcome'
import styles from './page.module.scss'
register()

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.center}></div>
			<Wellcome />
			<Video />
			<About />
			<Presenters />
			<Invitation />
			<Ocapella />
			<ProgramGuide />
			<Planet>
				<Mail />
				<Footer />
			</Planet>
		</main>
	)
}
