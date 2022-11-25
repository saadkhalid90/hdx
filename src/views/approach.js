import Landing from "../components/landing";
import SwipeStory from "../components/swipeStory";
import Footer from "../components/footer";
import styles from "./css-modules/home.module.css";
import approachBG from "../resources/landing/landingBG-2.jpg";
import { useState, useEffect } from "react";
import VideoAndContent from "../components/videoAndContent";
import handVid from "./../resources/handVideo.mp4";

const stepDescs = [
  "The outer sensors send electrical current through out. When thee needle is in the air, current can’t flow, and therefore the resistance measured is very high.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Once the needle is fully inserted into the muscle, the resistance reaches its minimal value.",
];

const Approach = ({}) => {
  const [step, setStep] = useState(1);

  useEffect(() => {
    console.log(step);
  }, [step]);

  return (
    <div className={styles.home_contain}>
      <div className={styles.body}>
        <Landing titleText="Approach" bgImg={approachBG}>
          <p className="landingSubtitle size_1-1rem bottom_margin_15px ">
            Haystack Dx impedance-electromyography technology provides an
            innovated, AI-powered solution to assess any condition that impacts
            neuromuscular disorders such as muscular dystrophy, Lou Gehrig’s
            disease, cachexia and disuse. The unique value that Haystack Dx
            brings is quantifiable muscle health outcomes for the diagnosis and
            tracking of patients without changing the clinical procedure or the
            duration of the test.
          </p>
        </Landing>
        <SwipeStory step={step} stepData={stepDescs} stepSetter={setStep} />
        <VideoAndContent orientation="right" vid={handVid} bgCol={`#28333e`}>
          <p className={`${styles.content_para} latoTxt white`}>
            Today, millions of people suffer from debilitating diseases
            affecting their nerves and muscles. Neuromuscular disorders include
            injury to or disease of a nerve that connects to a muscle, diseases
            as a result of abnormalities of the muscles, and diseases that
            impact the transmission of information from the nervous system to a
            muscle. Diagnosis and therapeutic tracking of people with
            neuromuscular disorder is critical in ensuring their cure and
            wellbeing.
          </p>
        </VideoAndContent>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Approach;
