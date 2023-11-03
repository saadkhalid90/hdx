import styles from './css-modules/google_map.module.css';

function GoogleMap() {
  return (
    <div className={styles.map_container}>
      <iframe title="Map of Haystack Dx Office" className={styles.iframe} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11739.683963465748!2d-71.3142539!3d42.6418349!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8bad0bae46b8ab30!2sMassachusetts%20Medical%20Device%20Development%20Center%20(M2D2)!5e0!3m2!1sen!2s!4v1669289193118!5m2!1sen!2s" width="100%" height="100%"></iframe>
    </div>
  );
}

export default GoogleMap;