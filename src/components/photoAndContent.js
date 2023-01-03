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
        className={`${styles.contentContain} ${
          orientation === "left"
            ? styles.cont_orient_left
            : styles.cont_orient_left
        }`}
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
