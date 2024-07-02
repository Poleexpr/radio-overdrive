import classnames from 'classnames';
import Image from 'next/image';

import {
  Footer,
  CentredSections,
  InvitationSection,
  BannerSection,
  Presenters2,
  MarqueeText,
  Typography,
  LinkUnderline,
  Schedule,
  Radio,
  LinkSubscribeWrapper,
  Video,
} from '@/components';
import { IconArrowNextLong, IconButtonPlayText } from '@/components/icons';
import { AnimationTextWrapper } from '@/wrappers';

import styles from './page.module.scss';

const Home = () => (
  <AnimationTextWrapper>
    <main className={styles.main}>
      <section className={styles.welcome} id='welcome'>
        <video
          autoPlay
          loop
          muted
          playsInline
          className={styles.video}
          poster='./videos/wellcomeBackPoster.jpg'
        >
          <source src='./videos/wellcomeBack.mp4' type='video/mp4' />
          <source src='./videos/wellcomeBack.webm' type='video/webm' />
        </video>
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
            <div className={styles.playTgLink_wrapper}>
              <a
                aria-label='слушать в телеграм'
                href='https://t.me/rocknword'
                rel='noreferrer'
                target='_blank'
              >
                <IconButtonPlayText className={classnames(styles.playTgLink, 'playTgLink')} />
              </a>
            </div>
            <a href='https://t.me/rocknword/12578' rel='noreferrer' target='_blank'>
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
      <Video />
      <div id='about'>
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
                  Мы базируемся на орбите свежей горячей планетёночки Земля и ставим музыку
                  в высоком стиле, покуда смерть не разлучит нас. Долой ротацию и формат скучных
                  околоистеблишментных радиостанций, где всё куплено
                  <span className='text-highlight'>,  — врубайся</span> в доброкачественнейшее музло
                  всех времён и народов<span className='text-highlight'>, оверслушатель!</span>
                </Typography>
                <Typography className={styles.description} tag='p' variant='text'>
                  Радио Овердрайв основано 15 октября 2020 года редакторами независимого
                  издательства Чтиво на месте бывшей авторской страницы рок-писателя Сергея Иннера,
                  психоделически исчезнувшего после презентации его антиромана{' '}
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
      </div>
      <div id='presenters'>
        <CentredSections.Team>
          <Presenters2.Container />
        </CentredSections.Team>
      </div>
      <InvitationSection.Centred />
      <BannerSection.Ocapella />
      <BannerSection.Aliens />
      <div id='program'>
        <CentredSections.Program className={styles.program}>
          <Schedule.Slider />
          <div className={styles.description_wrapper}>
            <Typography className={styles.description} tag='p' variant='text'>
              <span>
                И — всю неделю <span className='text-highlight'>новые релизы</span> топовых
                музыкантов. Не забудь подписаться на нас в Телеграм, чтобы больше ничего
                не пропустить.
              </span>
            </Typography>
          </div>
        </CentredSections.Program>
      </div>
      <div className={styles.planet}>
        <div className={styles.container}>
          <LinkSubscribeWrapper className={styles.link_subscribe} />
          <InvitationSection.Left />

          <div id='contacts'>
            <Footer />
          </div>
        </div>
      </div>
      <Radio />
    </main>
  </AnimationTextWrapper>
);

export default Home;
