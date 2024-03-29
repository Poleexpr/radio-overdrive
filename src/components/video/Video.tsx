import styles from './video.module.scss';

export const Video = () => (
  <div className={styles.container}>
    <video
      controls
      loop
      muted
      className={styles.video}
      poster='./video-overdrive-poster.png'
      src='./video-overdrive.mp4'
    />
  </div>
);
