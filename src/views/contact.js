import Landing from "../components/landing";
import Footer from "../components/footer";
import contactBG from "../resources/landing/landingBG-2.jpg";
import styles from "./css-modules/home.module.css";
import ContactForm from "../components/contactForm";
import GoogleMap from "../components/googleMap";

const Contact = ({}) => {
  return (
    <div className={styles.home_contain}>
      <div className={styles.body}>
        <Landing titleText="Contact" bgImg={contactBG}>
          <ContactForm/>
        </Landing>
        <GoogleMap />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
