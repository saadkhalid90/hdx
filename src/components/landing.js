import styles from "./css-modules/landing.module.css";
import Navbar from "./navbar";
import { motion } from "framer-motion";
import React from 'react';

const animVarients = {
  hidden: {
    y: "175%",
    opacity: 0.8,
    color: "#bdbdbd",
  },
  visible: {
    y: 0,
    opacity: 1,
    color: "#fff",
  }
};

const subtitle = {
  hidden: {
    y: "50px",
    opacity: 0,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 1.0, delay: 0.25}
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 1.0, delay: 0.25}
  }
};

const container = {
  hidden: {
    y: "-20px",
    opacity: 0,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 1}
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 1}
  }
};

const Landing = ({titleText, children, bgImg}) => {
  return (
    <header className={styles.landingContain} style={{backgroundImage: `url(${bgImg})`}}>
      <Navbar/>
      <div className={styles.landingTextContain}>
        <motion.div 
          className={styles.landingTitleContain}
          initial="hidden"
          animate={"visible"}
          variants={container}
        >
          <h1 
            className={`${styles.landingTitle} 
            loveloLightTxt`}
          >
            {titleText.split(" ").length > 0 && titleText.split(" ").map((title, word_index) => {
              return <React.Fragment key={word_index}>
                  <span key={word_index} style={{overflow: 'hidden', display: 'inline-block'}}>
                    {title.split("").length > 0 && title.split("").map((txt, index) => {
                      return <motion.span 
                        style={{display: "inline-block"}} 
                        variants={animVarients} 
                        animate="visible"
                        initial="hidden"  
                        key={index}
                        transition={{ ease: [0.455, 0.03, 0.515, 0.955], duration: 1.1 }}
                        >
                          {txt} 
                      </motion.span>
                    })}
                  </span>
                  <span>{" "}</span>
                </React.Fragment>
            })}
          </h1>
        </motion.div>
        <motion.div 
          className={styles.landingSubtitleContain}
          variants={subtitle} 
          animate="visible"
          initial="hidden"  
        >
          {children}
        </motion.div>
      </div>
    </header>
  );
};

export default Landing;

//delay: word_index * 0.025 + index * 0.010