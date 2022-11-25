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
        className={styles.contentContain}
        style={{
          paddingLeft: orientation === "left" ? "30px" : "100px",
          paddingRight: orientation === "left" ? "100px" : "30px",
        }}
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
