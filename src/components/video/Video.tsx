import styles from './video.module.scss';

const Video = () => (
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

export default Video;
