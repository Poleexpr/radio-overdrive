import Image from 'next/image';
import type { FC } from 'react';

import { Typography } from '@/components';
import { presentersBlurData } from '@/utils/helpers';

import styles from './presenters.module.scss';

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

export const PresentersCard: FC<PresentersCardProps> = ({ cardsElements }) =>
  cardsElements.map((cardElement) => (
    <div key={cardElement.id} className={styles.box}>
      <Image
        fill
        alt='фотография ведущего'
        blurDataURL={presentersBlurData}
        className={styles.card_img}
        placeholder='blur'
        src={cardElement.img}
      />
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
        </Typography>
      </div>
    </div>
  ));
