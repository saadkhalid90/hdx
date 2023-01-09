import styles from "./css-modules/photoAndContent.module.css";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";


const imgVarientsLeft = {
  visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, type: "tween" } },
  hidden: { opacity: 0, x: -20, y: -35 }
};

const imgVarientsRight = {
  visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, type: "tween" } },
  hidden: { opacity: 0, x: 20, y: -35 }
};

const txtVarients = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: "tween" } },
  hidden: { opacity: 0, y: 30 }
};

const PhotoAndContent = ({ orientation, bgImg, children }) => {

  const controls = useAnimation();
  const txtControls = useAnimation();
  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      txtControls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className={styles.pAndCContain}>
        {orientation === "left" && ( 
            <motion.div
              ref={ref}
              variants={imgVarientsLeft} 
              animate={controls}
              initial="hidden"          
              className={`${styles.imageContain} ${styles.left}`}
              style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "cover" }}
            />
        )}
        <motion.div
          variants={txtVarients} 
          animate={txtControls}
          initial="hidden"   
          className={`${styles.contentContain} ${
            orientation === "left"
              ? styles.cont_orient_left
              : styles.cont_orient_left
          }`}
        >
          {children}
        </motion.div>
        {orientation === "right" && (
            <motion.div
              ref={ref}
              variants={imgVarientsRight} 
              animate={controls}
              initial="hidden"    
              className={`${styles.imageContain} ${styles.right}`}
              style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "cover" }}
            />
        )}
    </section>
  );
};

export default PhotoAndContent;
