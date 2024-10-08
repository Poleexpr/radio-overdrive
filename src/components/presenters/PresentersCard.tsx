import Image from 'next/legacy/image';
import type { FC } from 'react';

import { Typography } from '@/components';
import { presentersBlurData } from '@/utils/helpers';

import styles from './presenters.module.scss';
import type { PresentersCardProps } from './types';

export const PresentersCard: FC<PresentersCardProps> = ({ cardsElements }) =>
  Array.isArray(cardsElements) ? (
    cardsElements.map((cardElement, id) => (
      <div key={id} className={styles.box}>
        <Image
          alt='фотография ведущего'
          blurDataURL={presentersBlurData}
          className={styles.card_img}
          layout='fill'
          placeholder='blur'
          src={cardElement.img}
        />
        <div className={styles.card_info}>
          <Typography tag='p' variant='text3'>
            Голос {cardElement.day}
          </Typography>
          <Typography className={styles.card_title} tag='h3' variant='title4'>
            {cardElement.name}
          </Typography>
          <Typography tag='p' variant='text4'>
            г. {cardElement.city}
          </Typography>
          <Typography className={styles.card_description} tag='div' variant='text'>
            <p>{cardElement.biography}</p>
          </Typography>
        </div>
      </div>
    ))
  ) : (
    <div className={styles.box}>
      <Image
        alt='фотография ведущего'
        blurDataURL={presentersBlurData}
        className={styles.card_img}
        layout='fill'
        placeholder='blur'
        src={cardsElements.img}
      />
      <div className={styles.card_info}>
        <Typography tag='p' variant='text3'>
          Голос {cardsElements.day}
        </Typography>
        <Typography className={styles.card_title} tag='h3' variant='title4'>
          {cardsElements.name}
        </Typography>
        <Typography tag='p' variant='text4'>
          г. {cardsElements.city}
        </Typography>
        <Typography className={styles.card_description} tag='div' variant='text'>
          <p>{cardsElements.biography}</p>
        </Typography>
      </div>
    </div>
  );
