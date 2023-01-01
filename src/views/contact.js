import Landing from "../components/landing";
import Footer from "../components/footer";
import contactBG from "../resources/landing/landingBG-2.jpg";
import styles from "./css-modules/home.module.css";
import ContactForm from "../components/contactForm";
import GoogleMap from "../components/googleMap";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import './css/contact.css';

const Contact = ({}) => {
  return (
    <div className={styles.home_contain}>
      <div className={styles.body}>
        <Landing titleText="Contact" bgImg={contactBG}>
          <ContactForm />
          <div className={styles.submitAndSocials}>
            <div className={styles.submitButton}>Submit</div>
            <div className={styles.socialsRow}>
              <FaInstagram />
              <FaFacebookF />
              <FaYoutube />
              <FaLinkedin />
              <FaTwitter />
              <HiMail />
            </div>
          </div>
        </Landing>
        <GoogleMap />
      </div>
      <div className={styles.bottom_stick}>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
