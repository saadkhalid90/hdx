import styles from "./css-modules/landing.module.css";
import Navbar from "./navbar";

const Landing = ({titleText, children, bgImg}) => {
  return (
    <header className={styles.landingContain} style={{backgroundImage: `url(${bgImg})`}}>
      <Navbar/>
      <div className={styles.landingTextContain}>
        <div className={styles.landingTitleContain}>
          <h1 className={`${styles.landingTitle} loveloLightTxt`}>
            {titleText}
          </h1>
        </div>
        <div className={styles.landingSubtitleContain}>
          {children}
        </div>
      </div>
    </header>
  );
};

export default Landing;
