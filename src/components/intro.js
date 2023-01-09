import styles from "./css-modules/intro.module.css";
import TextCar from "./textCar";

const Intro = ({ description, carousel }) => {
  return (
    <section className={styles.introContain}>
      <div className={styles.textContain}>
        <p className="paraInv">
          {description}
        </p>
      </div>
      <div className={styles.carContain}>
        <TextCar carousel={carousel}/>
      </div>
      
    </section>
  );
};

export default Intro;
