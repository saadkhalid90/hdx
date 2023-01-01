import styles from "./css-modules/team.module.css";
import rhombusBG from "../resources/rhombus_bg.png";

const Team = ({}) => {
  return (
    <section
      className={styles.team_contain}
      style={{
        backgroundImage: `url(${rhombusBG})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center left"
      }}
    >
      <p className={`${styles.team_intro} latoTxt`}>
        Haystack’s team is composed of innovative, experienced individuals with
        expertise in both basic and clinical research as well as
        commercialization of medical technology. Our mission is to improve the
        lives of those suffering from nerve and muscle disorders through better
        and early detection and monitoring of diseases.
      </p>
      <div className={styles.teamBox}>
        <h3 className={`${styles.teamHeader} loveloLightTxt`}>Our Team</h3>
        <div className={styles.teamRows}>
          <div className={styles.teamRow}>
            <h4 className={styles.teamMember}>Mai Le</h4>
            <div className={styles.separator} />
            <p className={styles.teamDesig}>CEO, Co-Founder</p>
          </div>
          <div className={styles.teamRow}>
            <h4 className={styles.teamMember}>Benjamin Sanchez, PHD</h4>
            <div className={styles.separator} />
            <p className={styles.teamDesig}>Co-Founder</p>
          </div>
          <div className={styles.teamRow}>
            <h4 className={styles.teamMember}>Seward Rutkove, MD</h4>
            <div className={styles.separator} />
            <p className={styles.teamDesig}>Co-Founder</p>
          </div>
          <div className={styles.teamRow}>
            <h4 className={styles.teamMember}>Neil Lupton, PHD</h4>
            <div className={styles.separator} />
            <p className={styles.teamDesig}>Co-Founder</p>
          </div>
          <div className={styles.teamRow}>
            <h4 className={styles.teamMember}>Arindam Mukherjee</h4>
            <div className={styles.separator} />
            <p className={styles.teamDesig}>Biz Dev</p>
          </div>
        </div>
      </div>

      <div className={styles.teamBox}>
        <h3 className={`${styles.teamHeader} loveloLightTxt`}>Scientific Advisory Board</h3>
        <div className={styles.teamRows}>
          <div className={styles.teamRow}>
            <h4 className={styles.teamMember}>Jeremy Shefner, M.D.</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
