import Landing from "../components/landing";
import Intro from "../components/intro";
import PhotoAndContent from "../components/photoAndContent";
import IconRow from "../components/iconRow";
import StatBox from "../components/statBox";
import Footer from "../components/footer";

import homeBG from "../resources/landing/landingBG-1.jpg";
import hdx_1 from "../resources/hdx_1.jpg";
import hdx_2 from "../resources/hdx_2.jpg";
import styles from "./css-modules/home.module.css";

import icon_1 from "../resources/icons/icon-1.png";
import icon_2 from "../resources/icons/icon-2.png";
import icon_3 from "../resources/icons/icon-3.png";

const iconsArr = [
  { img: icon_1, desc: "Family" },
  { img: icon_2, desc: "Social" },
  { img: icon_3, desc: "Work" },
];

const Home = ({}) => {
  return (
    <div className={styles.home_contain}>
      <div className={styles.body}>
        <Landing
          titleText="Intelligent & Synergistic Diagnostics"
          bgImg={homeBG}
        >
          <p className="landingSubtitle uppercase">
            Next generation neuromuscular Diagnostics
          </p>
        </Landing>
        <Intro />
        <PhotoAndContent orientation="right" bgImg={hdx_1}>
          <p className={`${styles.content_para} latoTxt`}>
            HDx technology obtains electrophysiological, histological and
            compositional data of the nerve and muscles while giving the ability
            to track disease and effects of therapy.
          </p>
        </PhotoAndContent>
        <StatBox />
        <PhotoAndContent orientation="left" bgImg={hdx_2}>
          <p className={`${styles.content_para} latoTxt`}>
            Symptoms of nerve and muscle disorders impact our day-to-day life.
          </p>
          <p className={`${styles.content_para} latoTxt`}>
            The most prevalent symptoms include muscle weakness, numbness, pain,
            and paralysis.
          </p>
          <IconRow iconsArr={iconsArr} />
        </PhotoAndContent>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
