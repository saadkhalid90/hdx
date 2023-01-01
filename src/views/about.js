import Landing from "../components/landing";
import PhotoAndContent from "../components/photoAndContent";
import Team from "../components/team";
import Footer from "../components/footer";
import aboutBG from "../resources/landing/landingBG-2.jpg";
import hdx_3 from "../resources/hdx_3.jpg";

import styles from "./css-modules/home.module.css";

const About = ({}) => {
  return (
    <div className={styles.home_contain}>
      <div className={styles.body}>
        <Landing titleText="About Us" bgImg={aboutBG}>
          <p className="landingSubtitle size_1-1rem bottom_margin_15px ">
            Haystack Diagnostics (d.b.a. Haystack Dx) is an early-stage medical
            device company committed to provide intelligent modern day solution
            for the diagnosing and monitoring of nerve and muscle diseases that
            impact millions of people every day.
          </p>
          <p className="landingSubtitle size_1-1rem">
            Our mission is to improve the lives of those suffering from nerve
            and muscle disorders through better and early detection and
            monitoring of diseases.
          </p>
        </Landing>
        <Team/>
        <PhotoAndContent orientation="right" bgImg={hdx_3}>
          <p className={`${styles.content_para} latoTxt`}>
            Needle electromyography (EMG) remains a cornerstone of neuromuscular
            diagnosis. The technique, first applied clinically in the 1940s, is
            used routinely to assist with the primary diagnosis of many
            conditions impacting nerve or muscle health, including neurogenic
            disorders such as radiculopathy and amyotrophic lateral sclerosis
            (ALS) and primary myopathic disorders, such as inflammatory myositis
            and critical illness myopathy. However, the technique has one major
            shortcoming: it relies entirely on the assessment of the active
            electrical properties of the myofiber membranes: namely, those
            associated with action potentials. The technique is completely blind
            to passive volume conduction properties of the muscle tissue, which
            are greatly altered by myofiber atrophy, intramuscular connective
            tissue, fat, edema and inflammation.
          </p>
        </PhotoAndContent>
      </div>
      <div className={styles.bottom_stick}>
        <Footer />
      </div>
    </div>
  );
};

export default About;
