import logo from "../resources/navbar/hdx_logo.png";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaPhone
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { ImLocation } from "react-icons/im";

import styles from "./css-modules/footer.module.css";

const Footer = ({}) => {
  return (
    <section className={styles.footerContain}>
      <img className={styles.footerLogo} src={logo} />
      <div className={styles.footerInfoRow}>
        <div className={styles.footerInfoItem}>
          <div className={styles.footerInfoItemIconContain}>
            <ImLocation />
          </div>
          <p className={styles.footerInfoItemText}>Haystack Dx, M2D2 110 Canal Street, 4th Floor Lowell, MA 01854</p>
        </div>
        <div className={styles.footerInfoItem}>
          <div className={styles.footerInfoItemIconContain}>
            <ImLocation />
          </div>
          <p className={styles.footerInfoItemText}>Haystack Dx, 1309 Beacon Street, Suite 300 Brookline, MA 02446</p>
        </div>
      </div>
      <div className={styles.footerInfoRow}>
        <div className={styles.footerInfoItem}>
          <div className={styles.footerInfoItemIconContain}>
            <FaPhone />
          </div>
          <p className={styles.footerInfoItemText}>(+1) 617 297 7409</p>
        </div>
        <div className={styles.footerInfoItem}>
          <div className={styles.footerInfoItemIconContain}>
            <HiMail />
          </div>
          <p className={styles.footerInfoItemText}>info@haystack-dx.com</p>
        </div>
      </div>
      <div className={styles.footerSocialsRow}>
        <FaInstagram />
        <FaFacebookF />
        <FaYoutube />
        <FaLinkedin />
        <FaTwitter />
        <HiMail />
      </div>
      <p className={styles.copyright_info}>
        Copyright {new Date().getFullYear()} Haystack Diagnostics. All rights reserved.{" "}
      </p>
    </section>
  );
};

export default Footer;
