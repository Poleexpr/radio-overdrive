import Image from 'next/image';

import {
  Anchor,
  Footer,
  CentredSections,
  InvitationSection,
  BannerSection,
  Presenters,
  MarqueeText,
  Typography,
  LinkUnderline,
  LinkRectangle,
  ScheduleTest,
} from '@/components';
import { IconArrowNextLong, IconButtonPlayText } from '@/components/icons';

import styles from './page.module.scss';

const Home = () => (
  <main className={styles.main}>
    <section className={styles.welcome}>
      <video
        autoPlay
        loop
        muted
        className={styles.video}
        poster='./videos/wellcomeBackPoster.jpg'
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
                <LinkUnderline>такое возможно?</LinkUnderline>
              </Typography>
              <Typography className={styles.slogan_bold} tag='div' variant='text7'>
                <LinkUnderline>Да, благодаря твоим донатам!</LinkUnderline>
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
              src='/images/about-pic.png'
              width={1000}
            />
            <Image
              alt='коллаж из трех картинок с изображением космоса, глаза и концерта'
              className={styles.img_laptop}
              height={1000}
              layout='responsive'
              src='/images/about-pic-laptop.png'
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
                  <LinkUnderline>«Овердрайв»</LinkUnderline>
                </a>
                .
              </Typography>
            </div>
          </div>
        </div>
      </section>
    </Anchor>
    <Anchor name='presenters'>
      <CentredSections.Team>
        <Presenters.Container />
      </CentredSections.Team>
    </Anchor>
    <InvitationSection.Centred />

    <BannerSection.Ocapella />
    <Anchor name='program'>
      <CentredSections.Program className={styles.program}>
        <ScheduleTest.Slider />
        <div className={styles.description_wrapper}>
          <Typography className={styles.description} tag='p' variant='text'>
            И — всю неделю новые релизы топовых музыкантов. Не забудь подписаться на нас в Телеграм,
            чтобы больше ничего не пропустить.
          </Typography>
        </div>
      </CentredSections.Program>
    </Anchor>
    <div className={styles.planet}>
      <div className={styles.container}>
        <LinkRectangle className={styles.link_subscribe} href='https://t.me/rocknword'>
          подписаться
        </LinkRectangle>
        <InvitationSection.Left />

        <Anchor name='contacts'>
          <Footer />
        </Anchor>
      </div>
    </div>
  </main>
);

export default Home;
