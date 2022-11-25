import logo from '../resources/navbar/hdx_logo.png';
import styles from './css-modules/navbar.module.css';

const Navbar = ({}) => {
  return (
    <nav className={styles.navContain}>
      <img className={styles.logo} src={logo}/>
      <ul className={styles.navButtons}>
        <li className={styles.navItem}>About</li>
        <li className={styles.navItem}>Approach</li>
        <li className={styles.navButtonItem}>
          <div className={styles.navButton}>Contact</div>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;