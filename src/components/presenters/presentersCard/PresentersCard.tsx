import Image from 'next/image';
import type { FC } from 'react';

import { Typography } from '@/components';

import styles from './presentersCard.module.scss';

// TODO:  cardsElements typeof CONST*

interface PresentersCardProps {
  cardsElements: {
    id: number;
    on: boolean;
    img: string;
    day: string;
    name: string;
    city: string;
    descriptionParagraph1: string;
    descriptionParagraph2: string;
    descriptionParagraph3: string;
    descriptionParagraph4?: string;
    descriptionParagraph5?: string;
  }[];
  toggle: (id: number) => void;
  leave: (id: number) => void;
}

export const PresentersCard: FC<PresentersCardProps> = ({ cardsElements, toggle, leave }) =>
  cardsElements.map((cardElement) => (
    <div
      key={cardElement.id}
      className={
        cardElement.on ? `${styles.container}` : `${styles.container} ${styles.cardClosed}`
      }
      onMouseEnter={() => toggle(cardElement.id)}
      onMouseLeave={() => leave(cardElement.id)}
    >
      <div className={styles.img_wrapper}>
        <Image
          alt='фотография ведущего'
          className={styles.card_img}
          layout='fill'
          src={cardElement.img}
        />
      </div>
      <div className={styles.card_info}>
        <Typography tag='p' variant='text3'>
          Голос {cardElement.day}
        </Typography>
        <Typography className={styles.card_title} tag='h4' variant='title4'>
          {cardElement.name}
        </Typography>
        <Typography tag='p' variant='text4'>
          г. {cardElement.city}
        </Typography>
        <Typography className={styles.card_description} tag='div' variant='text'>
          <p>{cardElement.descriptionParagraph1}</p>
          <p>{cardElement.descriptionParagraph2}</p>
          <p>{cardElement.descriptionParagraph3}</p>
          <p>{cardElement.descriptionParagraph4}</p>
          <p>{cardElement.descriptionParagraph5}</p>
        </Typography>
      </div>
    </div>
  ));
