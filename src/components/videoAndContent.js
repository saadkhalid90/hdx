import styles from "./css-modules/photoAndContent.module.css";

const VideoAndContent = ({ orientation, vid, children, bgCol = "white" }) => {
  return (
    <section className={`${styles.pAndCContain} ${styles.videoContain}`} style={{ backgroundColor: bgCol }}>
      {orientation === "left" && (
        <div className={`${styles} ${styles.left}`}>
          <video autoplay muted loop width="100%" height="100%">
            <source
              src={vid}
              type="video/mp4"
            />
          </video>
        </div>
      )}
      <div
        className={
          `${styles.contentContain} ${
            orientation === "left"
              ? styles.cont_orient_left
              : styles.cont_orient_left
          }`
        }
      >
        {children}
      </div>
      {orientation === "right" && (
        <div className={`${styles.imageContain} ${styles.right}`}>
          <video autoPlay muted loop width="100%" height="100%">
            <source
              src={vid}
              type="video/mp4"
            />
          </video>
        </div>
      )}
    </section>
  );
};

export default VideoAndContent;
