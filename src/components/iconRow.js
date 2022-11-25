import styles from "./css-modules/iconRow.module.css";

const IconRow = ({ iconsArr }) => {
  return (
    <div className={styles.iconRowContain}>
      {iconsArr.map((icon, idx) => (
        <div className={styles.iconItemContain}>
          <img className={styles.iconImg} src={icon.img} />
          <p className={styles.iconDesc}>{icon.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default IconRow;
