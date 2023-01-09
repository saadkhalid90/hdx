import hdxLogo from '../resources/loader/logo_ni.png';
import styles from './css-modules/loader.module.css';

function Loader(){
  return (
    <div className={styles.flex_contain}>
      <div className={styles.logo_contain}>
        <img src={hdxLogo} alt="HDX Logo" className={styles.logo}/>
      </div>
  </div>
  )
}

export default Loader;