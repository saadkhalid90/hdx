import hand from "./../resources/approach/Hand.png";
import syringe from "./../resources/approach/syringe.png";
import needle from "./../resources/approach/Needle.png";
import skinMuscle from "./../resources/approach/SkinMuscle.png";
import styles from "./css-modules/swipeStory.module.css";

const SwipeStory = ({ step, pageContent, parentRef, syringeRef, needleRef, step1Ref, step2Ref, step3Ref }) => {
  return (
    <section ref={parentRef} className={styles.story_contain}>
      <div className={styles.story_left}>
        <div
          className={styles.hand_contain}
          style={{
            backgroundImage: `url(${hand})`,
          }}
        >
          <img
            ref={syringeRef}
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
            ref={needleRef}
            src={needle}
          />
        </div>
        <div className={styles.step_contain} ref={step1Ref}>
          <div className={styles.step_box}>
            <div className={styles.step_text}>STEP</div>
            <div className={styles.step_number}>1</div>
          </div>
          <div className={styles.step_desc}>{pageContent.stepOne}</div>
        </div>
        <div className={styles.step_contain} ref={step2Ref}>
          <div className={styles.step_box}>
            <div className={styles.step_text}>STEP</div>
            <div className={styles.step_number}>2</div>
          </div>
          <div className={styles.step_desc}>{pageContent.stepTwo}</div>
        </div>
        <div className={styles.step_contain} ref={step3Ref}>
          <div className={styles.step_box}>
            <div className={styles.step_text}>STEP</div>
            <div className={styles.step_number}>3</div>
          </div>
          <div className={styles.step_desc}>{pageContent.stepThree}</div>
        </div>
      </div>

      <div className={styles.play_controls}>
        
      </div>
    </section>
  );
};

export default SwipeStory;
