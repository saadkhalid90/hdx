import Landing from "../components/landing";
import Footer from "../components/footer";
import contactBG from "../resources/landing/landingBG-2.jpg";
import styles from "./css-modules/home.module.css";
import ContactForm from "../components/contactForm";
import GoogleMap from "../components/googleMap";

import './css/contact.css';
import Loader from '../components/loader';
import Fade from "@mui/material/Fade";
import ReactGA from "react-ga4";

const Contact = ({loadedCommonData}) => {
  return (
    <>
    {!loadedCommonData ? 
      <Loader/>
      :
    <Fade in={true}> 
      <div className={styles.home_contain}>
        <div className={styles.body}>
          <Landing titleText="Contact" bgImg={contactBG}>
            <ContactForm loadedCommonData={loadedCommonData}/>
          </Landing>
          <GoogleMap />
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

export default Contact;
