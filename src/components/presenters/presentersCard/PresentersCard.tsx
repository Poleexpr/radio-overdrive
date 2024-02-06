import Image from 'next/image';

import { Typography } from '@/components';

import styles from './presentersCard.module.scss';

const PresentersCard = (props: any) => (
  <div
    className={props.on ? `${styles.container}` : `${styles.container} ${styles.cardClosed}`}
    onClick={() => props.toggle(props.id)}
    onMouseEnter={() => props.toggle(props.id)}
    onMouseLeave={() => props.leave(props.id)}
  >
    <div className={styles.img_wrapper}>
      <Image alt='фотография ведущего' className={styles.card_img} layout='fill' src={props.img} />
    </div>
    <div className={styles.card_info}>
      <Typography tag='p' variant='text3'>
        Голос {props.day}
      </Typography>
      <Typography className={styles.card_title} tag='h4' variant='title4'>
        {props.name}
      </Typography>
      <Typography tag='p' variant='text4'>
        г. {props.city}
      </Typography>
      <Typography className={styles.card_description} tag='div' variant='text'>
        <p>{props.descriptionParagraph1}</p>
        <p>{props.descriptionParagraph2}</p>
        <p>{props.descriptionParagraph3}</p>
        <p>{props.descriptionParagraph4}</p>
        <p>{props.descriptionParagraph5}</p>
      </Typography>
    </div>
  </div>
);

export default PresentersCard;
