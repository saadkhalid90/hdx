import styles from "./css-modules/statBox.module.css";

const StatBox = ({}) => {
  return (
    <section className={styles.statBox_contain}>
      <p className={`${styles.stat_intro} latoTxt`}>
        Diverse group of disorders characterized by muscle and/or nerve
        dysfunction affects. Neuromuscular disorders affect{" "}
        <span className={styles.stat_desc}>
          more than 100 million people worldwide
        </span>
      </p>
      <div className={styles.statBox}>
        <div className={styles.statRow}>
          <div className={styles.statItem}>
            <h3 className={styles.stat}>20 million</h3>
            <p className={`${styles.statType} latoTxt`}>Peripheral Neuropathy</p>
          </div>
          <div className={styles.statItem}>
            <h3 className={styles.stat}>20 million</h3>
            <p className={`${styles.statType} latoTxt`}>Nerve Root Problem</p>
          </div>
          <div className={styles.statItem}>
            <h3 className={styles.stat}>16 million</h3>
            <p className={`${styles.statType} latoTxt`}>Radiculopathy</p>
          </div>
        </div>
        <div className={styles.statRow}>
          <div className={styles.statItem}>
            <h3 className={styles.stat}>8 million</h3>
            <p className={`${styles.statType} latoTxt`}>
              Carpal Tunnel Syndrome & other neuropathies
            </p>
          </div>
          <div className={styles.statItem}>
            <h3 className={styles.stat}>2 million</h3>
            <p className={`${styles.statType} latoTxt`}>Primary Myopathies</p>
          </div>
          <div className={styles.statItem}>
            <h3 className={styles.stat}>30,000</h3>
            <p className={`${styles.statType} latoTxt`}>Lou Gehrig’s Disease</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatBox;
