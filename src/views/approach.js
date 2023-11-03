import Landing from "../components/landing";
import SwipeStory from "../components/swipeStory";
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

  const swipeRef = useRef();
  const syringeRef = useRef();
  const needleRef = useRef();
  const step1Ref = useRef();
  const step2Ref = useRef();
  const step3Ref = useRef();


  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "/approach" });
    window.scrollTo(0,0);
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
      });
    }
  }, []);
  
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
          <div className={styles.bottom_stick}>
            <Footer loadedCommonData={loadedCommonData}/>
          </div>
        </div>
      </Fade>
    }
    </>
  );
};

export default Approach;
