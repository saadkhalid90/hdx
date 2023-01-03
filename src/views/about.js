import Landing from "../components/landing";
import PhotoAndContent from "../components/photoAndContent";
import Team from "../components/team";
import Footer from "../components/footer";
import aboutBG from "../resources/landing/landingBG-2.jpg";
import styles from "./css-modules/home.module.css";
import Loader from '../components/loader';
import Fade from "@mui/material/Fade";
import ReactGA from "react-ga4";
import { useEffect } from "react";
import axios from "axios";

const About = ({loadedCommonData, loadedAboutData, setAboutDataLoaded}) => {

  useEffect(() => {
    if (!loadedAboutData) {
      axios({
        url: "https://wordpress.haystack-dx.com/graphql",
        method: "post",
        data: {
          query: `
            query aboutPage {
              aboutPageData(id: "cG9zdDo1Ng==") {
                title
                aboutPageContent {
                  bannerDescription
                  sectionDescription
                  sectionImage {
                    mediaItemUrl
                  }
                  teamSectionDescription
                }
              }
              teamMembers {
                nodes {
                  teamMemberData {
                    designation
                    website
                  }
                  title
                }
              }
              advisoryBoardMembers {
                nodes {
                  title
                }
              }
            }
          `,
        },
      }).then((result) => {
        let data = {
          title: result.data.data.aboutPageData.title,
          pageContent: result.data.data.aboutPageData.aboutPageContent,
          team: result.data.data.teamMembers.nodes.reverse(),
          board: result.data.data.advisoryBoardMembers.nodes.reverse(), 
        }; 
        setAboutDataLoaded(data);
      });
    }
  }, []);

  return (
    <>
    {!loadedAboutData || !loadedCommonData ? 
      <Loader/>
      :
    <Fade in={true}> 
      <div className={styles.home_contain}>
        <div className={styles.body}>
          <Landing titleText={loadedAboutData.title} bgImg={aboutBG}>
            <p className="landingSubtitle size_1-1rem bottom_margin_15px ">
              {loadedAboutData.pageContent.bannerDescription}
            </p>
          </Landing>
          <Team
            desc={loadedAboutData.pageContent.teamSectionDescription}
            team={loadedAboutData.team}
            board={loadedAboutData.board}
          />
          <PhotoAndContent orientation="right" bgImg={loadedAboutData.pageContent.sectionImage.mediaItemUrl}>
            <p className={`${styles.content_para} latoTxt`}>
              {loadedAboutData.pageContent.sectionDescription}
            </p>
          </PhotoAndContent>
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

export default About;
