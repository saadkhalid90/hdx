import Landing from "../components/landing";
import SwipeStory from "../components/swipeStory";
import swipe_styles from "../components/css-modules/swipeStory.module.css";
import Footer from "../components/footer";
import styles from "./css-modules/home.module.css";
import approachBG from "../resources/landing/landingBG-2.jpg";
import { useState, useEffect, useRef } from "react";
import VideoAndContent from "../components/videoAndContent";
import Loader from '../components/loader';
import Fade from "@mui/material/Fade";
import ReactGA from "react-ga4";
import axios from "axios";

const Approach = ({loadedCommonData, loadedApproachData, setApproachDataLoaded}) => {
  const [step, setStep] = useState(1);
  const [animate, setAnimate] = useState(false);

  const swipeRef = useRef();
  const syringeRef = useRef();
  const needleRef = useRef();
  const step1Ref = useRef();
  const step2Ref = useRef();
  const step3Ref = useRef();


  useEffect(() => {
    if (!loadedApproachData) {
      axios({
        url: "https://wordpress.haystack-dx.com/graphql",
        method: "post",
        data: {
          query: `
            query approachPage {
              approachPageData(id: "cG9zdDo1OA==") {
                title
                approachPageContent {
                  bannerDescription
                  stepOne
                  stepThree
                  stepTwo
                  videoSectionDescription
                }
              }
            }
          `,
        },
      }).then((result) => {
        let data = {
          title: result.data.data.approachPageData.title,
          pageContent: result.data.data.approachPageData.approachPageContent,
        }; 
        setApproachDataLoaded(data);
        scrollState();
      });
    }
  }, []);

  const scrollState = () => {
    window.onwheel = function(e) {
      if (window.scrollY > swipeRef.current.getBoundingClientRect().top + window.innerHeight) {
        if (!needleRef.current.classList.contains(swipe_styles.needle_animate)) {
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
    <>
    {!loadedApproachData || !loadedCommonData ? 
      <Loader/>
      :
      <Fade in={true}>
        <div className={styles.home_contain}>
          <div className={styles.body}>
            <Landing titleText="Approach" bgImg={approachBG}>
              <p className="landingSubtitle size_1-1rem bottom_margin_15px ">
                {loadedApproachData.pageContent.bannerDescription}
              </p>
            </Landing>
            <SwipeStory pageContent={loadedApproachData.pageContent} step={step} parentRef={swipeRef} syringeRef={syringeRef} needleRef={needleRef} step1Ref={step1Ref} step2Ref={step2Ref} step3Ref={step3Ref}/>
            <VideoAndContent orientation="right" vid={'https://res.cloudinary.com/dejxxzoeu/video/upload/v1672637110/handVideo_ga8wlb.mp4'} bgCol={`#28333e`}>
              <p className={`${styles.content_para} latoTxt white`}>
                {loadedApproachData.pageContent.videoSectionDescription}
              </p>
            </VideoAndContent>
          </div>
          <div className={styles.footer}>
            <Footer loadedCommonData={loadedCommonData}/>
          </div>
        </div>
      </Fade>
    }
    </>
  );
};

export default Approach;
