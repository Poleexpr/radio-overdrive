import styles from './video.module.scss';

export const Video = () => (
  <div className={styles.container}>
    <video
      controls
      loop
      muted
      className={styles.video}
      poster='./videos/video-overdrive-poster.png'
      src='./videos/video-overdrive.mp4'
    />
  </div>
);
