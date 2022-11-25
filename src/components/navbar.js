import logo from "../resources/navbar/hdx_logo.png";
import styles from "./css-modules/navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = ({}) => {
  return (
    <nav className={styles.navContain}>
      <Link to="/">
        <img className={styles.logo} src={logo} />
      </Link>
      <ul className={styles.navButtons}>
        <Link to="/about">
          <li className={styles.navItem}>About</li>
        </Link>
        <Link to="/approach">
          <li className={styles.navItem}>Approach</li>
        </Link>
        <Link to="/contact">
          <li className={styles.navButtonItem}>
            <div className={styles.navButton}>Contact</div>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
