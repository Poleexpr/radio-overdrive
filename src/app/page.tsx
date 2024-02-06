import { register } from 'swiper/element/bundle';

import {
  About,
  Footer,
  Invitation,
  Mail,
  Ocapella,
  Planet,
  ProgramGuide,
  Team,
  Video,
  Welcome,
} from '@/components';

import styles from './page.module.scss';

register();

const Home = () => (
  <main className={styles.main}>
    <div className={styles.center} />
    <Welcome />
    <Video />
    <About />
    <Team />
    <Invitation />
    <Ocapella />
    <ProgramGuide />
    <Planet>
      <Mail />
      <Footer />
    </Planet>
  </main>
);

export default Home;
