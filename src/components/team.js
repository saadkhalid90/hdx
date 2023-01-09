import styles from "./css-modules/team.module.css";
import rhombusBG from "../resources/rhombus_bg.png";

const Team = ({desc, team, board}) => {
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
        {desc}
      </p>
      <div className={styles.teamBox}>
        <h3 className={`${styles.teamHeader} loveloLightTxt`}>Our Team</h3>
        <div className={styles.teamRows}>
          {team.length > 0 && team.map((teamMember, index) => {
            return  <div key={index} className={styles.teamRow}>
              <h4 className={styles.teamMember}>{teamMember.title}</h4>
              <div className={styles.separator} />
              <p className={styles.teamDesig}>{teamMember.teamMemberData.designation}</p>
            </div>
          })}
        </div>
      </div>

      <div className={styles.teamBox}>
        <h3 className={`${styles.teamHeader} loveloLightTxt`}>Scientific Advisory Board</h3>
        <div className={styles.teamRows}>
          {board.length > 0 && board.map((teamMember, index) => {
            return  <div key={index} className={styles.teamRow}>
              <h4 className={styles.teamMember}>{teamMember.title}</h4>
            </div>
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
