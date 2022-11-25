import hand from "./../resources/approach/Hand.png";
import syringe from "./../resources/approach/syringe.png";
import needle from "./../resources/approach/Needle.png";
import skinMuscle from "./../resources/approach/SkinMuscle.png";
import styles from "./css-modules/swipeStory.module.css";

const SwipeStory = ({ step, stepData, stepSetter }) => {
  return (
    <section className={styles.story_contain}>
      <div className={styles.story_left}>
        <div
          className={styles.hand_contain}
          style={{
            backgroundImage: `url(${hand})`,
          }}
        >
          <img
            className={`${styles.syringe} ${styles[`syringe_${step}`]}`}
            src={syringe}
          />
        </div>
      </div>
      <div className={styles.story_right}>
        <div
          className={styles.muscle_contain}
          style={{
            backgroundImage: `url(${skinMuscle})`,
          }}
        >
          <img
            className={`${styles.needle} ${styles[`needle_${step}`]}`}
            src={needle}
          />
        </div>
        <div className={styles.step_contain}>
          <div
            className={styles.step_box}
            onClick={(e) => (step === 3 ? stepSetter(1) : stepSetter(step + 1))}
          >
            <div className={styles.step_text}>STEP</div>
            <div className={styles.step_number}>{step}</div>
          </div>
          <div className={styles.step_desc}>{stepData[step - 1]}</div>
        </div>
      </div>
    </section>
  );
};

export default SwipeStory;
