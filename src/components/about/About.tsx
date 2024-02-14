'use client';

import Image from 'next/image';
import { Element } from 'react-scroll';

import { Typography, UnderlineLink } from '@/components';

import styles from './about.module.scss';

const About = () => (
  <Element className='element' name='about'>
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
              околоистеблишментных радиостанций, где всё куплено, — врубайся в доброкачественнейшее
              музло всех времён и народов, оверслушатель!
            </Typography>
            <Typography className={styles.description} tag='p' variant='text'>
              Радио Овердрайв основано 15 октября 2020 года редакторами независимого издательства
              Чтиво на месте бывшей авторской страницы рок-писателя Сергея Иннера, психоделически
              исчезнувшего после презентации его антиромана{' '}
              <a href='https://chtivo.spb.ru/book-overdrive.html' rel='noreferrer' target='_blank'>
                <UnderlineLink>«Овердрайв»</UnderlineLink>
              </a>
              .
            </Typography>
          </div>
        </div>
      </div>
    </section>
  </Element>
);

export default About;
