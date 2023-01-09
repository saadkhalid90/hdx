import Landing from "../components/landing";
import Intro from "../components/intro";
import PhotoAndContent from "../components/photoAndContent";
import DemoForm from "../components/demoForm";
import IconRow from "../components/iconRow";
import StatBox from "../components/statBox";
import Footer from "../components/footer";
import Loader from '../components/loader';

import axios from "axios";
import Fade from "@mui/material/Fade";
import ReactGA from "react-ga4";
import { useEffect } from "react";

import homeBG from "../resources/landing/landingBG-1.jpg";
import styles from "./css-modules/home.module.css";

import icon_1 from "../resources/icons/icon-1.png";
import icon_2 from "../resources/icons/icon-2.png";
import icon_3 from "../resources/icons/icon-3.png";

const iconsArr = [
  { img: icon_1, desc: "Family" },
  { img: icon_2, desc: "Social" },
  { img: icon_3, desc: "Work" },
];

const Home = ({ loadedHomeData, setHomeDataLoaded, loadedCommonData}) => {

  useEffect(() => {
    if (!loadedHomeData) {
      axios({
        url: "https://wordpress.haystack-dx.com/graphql",
        method: "post",
        data: {
          query: `
            query homePage {
              homePageData(id: "cG9zdDo1Mw==") {
                title
                homePageContent {
                  banner
                  carouselFields
                  mainDescription
                  sectionOneDescription
                  sectionOneImage {
                    mediaItemUrl
                  }
                  sectionTwoDescription
                  sectionTwoImage {
                    mediaItemUrl
                  }
                  statisticsHeading
                  statisticsHeadingHighlight
                }
              }
              allHomeStatistics {
                nodes {
                  title
                  statistic {
                    statistic
                  }
                }
              }
            }
          `,
        },
      }).then((result) => {
        let data = {
          title: result.data.data.homePageData.title,
          carouselStats: result.data.data.homePageData.homePageContent.carouselFields.split("-"),
          homeContent: result.data.data.homePageData.homePageContent,
          stats: result.data.data.allHomeStatistics.nodes, 
        };
        console.log(data);
        setHomeDataLoaded(data);
      });
    }
  }, []);

  return (
    <>
    {!loadedHomeData || !loadedCommonData ? 
      <Loader/>
      :
    <Fade in={true}> 
      <div className={styles.home_contain}>
        <div className={styles.body}>
          <Landing
            titleText={loadedHomeData.title}
            bgImg={homeBG}
          >
            <p className="landingSubtitle uppercase">
              {loadedHomeData.homeContent.banner}
            </p>
          </Landing>
          <Intro description={loadedHomeData.homeContent.mainDescription} carousel={loadedHomeData.carouselStats}/>
          <PhotoAndContent orientation="right" bgImg={loadedHomeData.homeContent.sectionOneImage.mediaItemUrl}>
            <p className={`${styles.content_para} latoTxt`}>
              {loadedHomeData.homeContent.sectionOneDescription}
            </p>
          </PhotoAndContent>
          <StatBox 
            statisticsHeading={loadedHomeData.homeContent.statisticsHeading}
            statisticsHeadingHighlight={loadedHomeData.homeContent.statisticsHeadingHighlight}
            stats={loadedHomeData.stats}
          />
          <PhotoAndContent orientation="left" bgImg={loadedHomeData.homeContent.sectionTwoImage.mediaItemUrl}>
            <p className={`${styles.content_para} latoTxt`}>
              {loadedHomeData.homeContent.sectionTwoDescription}
            </p>
            <IconRow iconsArr={iconsArr} />
          </PhotoAndContent>
        </div>
        <div className={styles.bottom_stick}>
          <Footer loadedCommonData={loadedCommonData} />
        </div>
      </div>
    </Fade>
    }
    </>
  );
};

export default Home;
