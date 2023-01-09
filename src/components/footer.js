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

const Footer = ({loadedCommonData}) => {
  return (
    <section className={styles.footerContain}>
      <img className={styles.footerLogo} src={logo} />
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
    </section>
  );
};

export default Footer;
