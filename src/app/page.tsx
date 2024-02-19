import Image from 'next/image';
import { register } from 'swiper/element/bundle';

import {
  Anchor,
  Footer,
  Invitation,
  Mail,
  Ocapella,
  Planet,
  ProgramGuide,
  Team,
  MarqueeText,
  Typography,
  UnderlineLink,
} from '@/components';
import { IconArrowNextLong, IconButtonPlayText } from '@/components/icons';

import styles from './page.module.scss';

register();

const Home = () => (
  <main className={styles.main}>
    <section className={styles.welcome}>
      <video
        autoPlay
        loop
        muted
        className={styles.video}
        poster='./wellcomeBackPoster.jpg'
        src='#'
      />
      <div className={styles.container}>
        <div className={styles.title_wrapper}>
          <Typography className={styles.subtitle} tag='p' variant='title'>
            это
          </Typography>
          <Typography className={styles.title} tag='h1' variant='title2'>
            РАДИО Овердрайв
          </Typography>
        </div>
        <div className={styles.description_container}>
          <div>
            <a
              aria-label='слушать в телеграм'
              href='https://t.me/rocknword'
              rel='noreferrer'
              target='_blank'
            >
              <IconButtonPlayText className={styles.playTgLink} />
            </a>
          </div>
          <a href='https://t.me/rocknword/11681' rel='noreferrer' target='_blank'>
            <div>
              <div className={styles.donation_wrapper}>
                <Typography className={styles.donation} tag='p' variant='text5'>
                  поддержать проект
                </Typography>
                <IconArrowNextLong />
              </div>
              <Typography className={styles.slogan} tag='div' variant='text6'>
                <p>Независимое радио без рекламы,</p>
                <p>ипотеки и средств против импотенции —</p>
              </Typography>
              <Typography className={styles.slogan_bold} tag='div' variant='text7'>
                <UnderlineLink>такое возможно?</UnderlineLink>
              </Typography>
              <Typography className={styles.slogan_bold} tag='div' variant='text7'>
                <UnderlineLink>Да, благодаря твоим донатам!</UnderlineLink>
              </Typography>
            </div>
          </a>
        </div>
        <MarqueeText>мы вещаем до последнего</MarqueeText>
      </div>
    </section>
    <Anchor name='about'>
      <section className={styles.about}>
        <div className={styles.container}>
          <div className={styles.img_wrapper}>
            <Image
              alt='коллаж из трех картинок с изображением космоса, глаза и концерта'
              className={styles.img}
              height={1000}
              layout='responsive'
              src='/about.png'
              width={1000}
            />
            <Image
              alt='коллаж из трех картинок с изображением космоса, глаза и концерта'
              className={styles.img_laptop}
              height={1000}
              layout='responsive'
              src='/about-laptop.png'
              width={1000}
            />
          </div>
          <div className={styles.container_text}>
            <div className={styles.title_wrapper}>
              <Typography className={styles.title} tag='h3' variant='title3'>
                МУЗЫКА,
              </Typography>
              <Typography className={styles.title} tag='h3' variant='title3'>
                СВОБОДА,
              </Typography>
              <Typography className={styles.title} tag='h3' variant='title3'>
                ЛЮБОВЬ
              </Typography>
            </div>
            <div className={styles.description_wrapper}>
              <Typography className={styles.description} tag='p' variant='text'>
                Мы базируемся на орбите свежей горячей планетёночки Земля и ставим музыку в высоком
                стиле, покуда смерть не разлучит нас. Долой ротацию и формат скучных
                околоистеблишментных радиостанций, где всё куплено, — врубайся
                в доброкачественнейшее музло всех времён и народов, оверслушатель!
              </Typography>
              <Typography className={styles.description} tag='p' variant='text'>
                Радио Овердрайв основано 15 октября 2020 года редакторами независимого издательства
                Чтиво на месте бывшей авторской страницы рок-писателя Сергея Иннера, психоделически
                исчезнувшего после презентации его антиромана{' '}
                <a
                  href='https://chtivo.spb.ru/book-overdrive.html'
                  rel='noreferrer'
                  target='_blank'
                >
                  <UnderlineLink>«Овердрайв»</UnderlineLink>
                </a>
                .
              </Typography>
            </div>
          </div>
        </div>
      </section>
    </Anchor>
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
