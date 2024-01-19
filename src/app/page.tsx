import Image from 'next/image'
import styles from './page.module.scss'

import Wellcome from './components/wellcome/Wellcome'
import Video from './components/video/Video'
import About from './components/about/About'
import Presenters from './components/presenters/Presenters'
import Invitation from './components/invitation/Invitation'
import Ocapella from './components/ocapella/Ocapella'
import Aliens from './components/aliens/Aliens'
import ProgramGuide from './components/programGuide/ProgramGuide'

import Footer from './components/footer/Footer'
import Planet from './components/planet/Planet'
import Mail from './components/mail/Mail'

import { register } from 'swiper/element/bundle'
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
			<Aliens />
			<ProgramGuide />
			<Planet>
				<Mail />
				<Footer />
			</Planet>
		</main>
	)
}
