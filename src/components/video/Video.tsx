import styles from './video.module.scss';

const Video = () => {
  return (
    <div className={styles.container}>
      <video
        className={styles.video}
        src='./video-overdrive.mp4'
        controls
        muted
        loop
        poster='./video-overdrive-poster.png'
      ></video>
    </div>
  );
};

export default Video;
