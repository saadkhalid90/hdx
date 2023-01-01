import Landing from "../components/landing";
import SwipeStory from "../components/swipeStory";
import swipe_styles from "../components/css-modules/swipeStory.module.css";
import Footer from "../components/footer";
import styles from "./css-modules/home.module.css";
import approachBG from "../resources/landing/landingBG-2.jpg";
import { useState, useEffect, useRef } from "react";
import VideoAndContent from "../components/videoAndContent";
import handVid from "./../resources/handVideo.mp4";
import detectMouseWheelDirection from '../utils.js';

const stepDescs = [
  "The outer sensors send electrical current through out. When thee needle is in the air, current can’t flow, and therefore the resistance measured is very high.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Once the needle is fully inserted into the muscle, the resistance reaches its minimal value.",
];

const Approach = ({}) => {
  const [step, setStep] = useState(1);
  const [animate, setAnimate] = useState(false);

  const swipeRef = useRef();
  const syringeRef = useRef();
  const needleRef = useRef();
  const step1Ref = useRef();
  const step2Ref = useRef();
  const step3Ref = useRef();


  useEffect(() => {
    scrollState();
  }, []);

  const scrollState = () => {
    window.onwheel = function(e) {
      if (window.scrollY > swipeRef.current.getBoundingClientRect().top + window.innerHeight) {
        if (!syringeRef.current.classList.contains(swipe_styles.syringe_animate)) {
          syringeRef.current.classList.add(swipe_styles.syringe_animate);
          needleRef.current.classList.add(swipe_styles.needle_animate);
          step1Ref.current.classList.add(swipe_styles.step_one_animate);
          step2Ref.current.classList.add(swipe_styles.step_two_animate);
          step3Ref.current.classList.add(swipe_styles.step_three_animate);
        }
      }
    }
  }

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
        <SwipeStory step={step} stepData={stepDescs} stepSetter={setStep} parentRef={swipeRef} syringeRef={syringeRef} needleRef={needleRef} step1Ref={step1Ref} step2Ref={step2Ref} step3Ref={step3Ref}/>
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
