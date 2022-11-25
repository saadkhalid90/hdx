import styles from "./css-modules/intro.module.css";
import TextCar from "./textCar";

const Intro = ({}) => {
  return (
    <section className={styles.introContain}>
      <div className={styles.textContain}>
        <p className="paraInv">
          Over 100 million people worldwide are inflicted by one of the many
          diseases that affect the health of nerves and muscle required for
          everyday activity.
        </p>
        <p className="paraInv">
          Haystack Dx advances electrodiagnostic medicine with proprietary
          needle technology and AI-powered algorithms.
        </p>
      </div>
      <div className={styles.carContain}>
        <TextCar/>
      </div>
      
    </section>
  );
};

export default Intro;
