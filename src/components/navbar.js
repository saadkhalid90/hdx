import logo from '../resources/navbar/hdx_logo.png';
import styles from './css-modules/navbar.module.css';
import { Link } from 'react-router-dom';
import {
  HiMenuAlt3
} from "react-icons/hi";
import {
  IoClose
} from "react-icons/io5";
import Fade from "@mui/material/Fade";
import { useState } from 'react';
import bgImg from "../resources/landing/landingBG-2.jpg";
import { useLocation } from 'react-router-dom';


const Navbar = ({}) => {

  let location = useLocation();

  const checkLocationFade = (locationID) => {
    if (location.pathname.includes(locationID)) {
      setMobileMenuOpen(false);
    }    
  }

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className={styles.navContain}>
      <Link to ={'/'}>
        <img className={styles.logo} src={logo}/>
      </Link>
      <ul className={styles.navButtons}>
        <Link to ={'/about'} style={{textDecoration: 'none'}}>
          <li className={styles.navItem}>About</li>
        </Link>
        <Link to ={'/approach'} style={{textDecoration: 'none'}}>
          <li className={styles.navItem}>Approach</li>
        </Link>
        <Link to ={'/contact'} style={{textDecoration: 'none'}}>
          <li className={styles.navButtonItem}>
            <div className={styles.navButton}>Contact</div>
          </li>        
        </Link>
      </ul>
      <div className={styles.mobileMenuIcon} onClick={() => setMobileMenuOpen(true)}>
        <HiMenuAlt3 className={styles.menu_icon}/>
      </div>

      <Fade in={mobileMenuOpen}>
        <div className={styles.mobile_nav_container} style={{backgroundImage: `url(${bgImg})`}}>
          <div className={`${styles.mobileMenuIcon}  ${styles.menu_icon_close}`} onClick={() => setMobileMenuOpen(false)}>
            <IoClose className={`${styles.menu_icon}`}/>
          </div>
          <ul className={styles.navButtons_mobile} style={{textDecoration: 'none'}}>
            <Link to ={'/about'} style={{textDecoration: 'none'}} onClick={() => checkLocationFade('about')}>
              <li className={styles.navItem_mob}>About</li>
            </Link>
            <Link to ={'/approach'} style={{textDecoration: 'none'}} onClick={() => checkLocationFade('approach')}>
              <li className={styles.navItem_mob}>Approach</li>
            </Link>
            <Link to ={'/contact'} style={{textDecoration: 'none'}} onClick={() => checkLocationFade('contact')}>
              <li className={styles.navButtonItem}>
                <div className={styles.navButton_mob}>Contact</div>
              </li>        
            </Link>
          </ul>
        </div>
      </Fade>

    </nav>
  );
};

export default Navbar;
