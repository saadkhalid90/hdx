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
import Fade from "@mui/material/Fade";
import styles from "./css-modules/footer.module.css";

import copyright from "../resources/legal/Copyright and Trademark_010123.pdf";
import fcoi from "../resources/legal/HDxFCOIPolicy.pdf";
import privacy from "../resources/legal/Privacy policy_010123.pdf";
import terms from "../resources/legal/Terms of Use_010123.pdf";


const Footer = ({loadedCommonData}) => {
  return (
    <Fade in={true}>
    <section className={styles.footerContain}>
      <img alt="" className={styles.footerLogo} src={logo} />
      <div className={styles.footerInfoRow}>
        <div className={styles.footerInfoItem}>
          <div className={styles.footerInfoItemIconContain}>
            <ImLocation />
          </div>
          <p className={styles.footerInfoItemText}>{loadedCommonData.companyInformation.mainAddress}</p>
        </div>
        <div className={styles.footerInfoItem}>
          <div className={styles.footerInfoItemIconContain}>
            <ImLocation />
          </div>
          <p className={styles.footerInfoItemText}>{loadedCommonData.companyInformation.secondaryAddress}</p>
        </div>
      </div>
      <div className={styles.footerInfoRow}>
        <div className={styles.footerInfoItem}>
          <div className={styles.footerInfoItemIconContain}>
            <FaPhone />
          </div>
          <p className={styles.footerInfoItemText}>{loadedCommonData.companyInformation.contactNumber}</p>
        </div>
        <div className={styles.footerInfoItem}>
          <div className={styles.footerInfoItemIconContain}>
            <HiMail />
          </div>
          <p style={{cursor: 'pointer'}} onClick={() => window.open('mailto:' + loadedCommonData.companyInformation.contactEmail)} className={styles.footerInfoItemText}>{loadedCommonData.companyInformation.contactEmail}</p>
        </div>
      </div>
      <div className={styles.footerSocialsRow}>
        {loadedCommonData.socialMedia.instagram && <FaInstagram onClick={() => window.open(loadedCommonData.socialMedia.instagram)}/>}
        {loadedCommonData.socialMedia.facebook && <FaFacebookF onClick={() => window.open(loadedCommonData.socialMedia.facebook)}/>}
        {loadedCommonData.socialMedia.youtube && <FaYoutube onClick={() => window.open(loadedCommonData.socialMedia.youtube)}/>}
        {loadedCommonData.socialMedia.linkedIn && <FaLinkedin onClick={() => window.open(loadedCommonData.socialMedia.linkedIn)}/>}
        {loadedCommonData.socialMedia.twitter && <FaTwitter onClick={() => window.open(loadedCommonData.socialMedia.twitter)}/>}
        {loadedCommonData.socialMedia.email && <HiMail onClick={() => window.open('mailto:' + loadedCommonData.socialMedia.email)} />}
      </div>
      <p className={styles.copyright_info}>
        Copyright {new Date().getFullYear()} Haystack Diagnostics. All rights reserved.{" "}
      </p>
      <div className={styles.flexed_footer_buttons}>
        <a href={copyright} target="_blank" rel="noreferrer" className={`${styles.copyright_info} ${styles.button_terms}`}>Copyright Policy</a>
        <a href={privacy} target="_blank" rel="noreferrer" className={`${styles.copyright_info} ${styles.button_terms}`}>Privacy Policy</a>
        <a href={terms} target="_blank" rel="noreferrer" className={`${styles.copyright_info} ${styles.button_terms}`}>Terms of Use</a>
        <a href={fcoi} target="_blank" rel="noreferrer" className={`${styles.copyright_info} ${styles.button_terms}`}>Conflict of Interest Policy</a>
      </div>
    </section>
    </Fade>
  );
};

export default Footer;
