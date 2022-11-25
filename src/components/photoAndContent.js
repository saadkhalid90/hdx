import styles from "./css-modules/photoAndContent.module.css";

const PhotoAndContent = ({ orientation, bgImg, children }) => {
  return (
    <section className={styles.pAndCContain}>
      {orientation === "left" && (
        <div
          className={`${styles.imageContain} ${styles.left}`}
          style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "cover" }}
        />
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
        <div
          className={`${styles.imageContain} ${styles.right}`}
          style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "cover" }}
        />
      )}
    </section>
  );
};

export default PhotoAndContent;
