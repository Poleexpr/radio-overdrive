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

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}></div>
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
}
