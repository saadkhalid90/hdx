import styles from "./css-modules/statBox.module.css";
import { useEffect, useState } from "react";

const StatBox = ({statisticsHeading, statisticsHeadingHighlight, stats, setHomeStats, homeStats}) => {


  useEffect(() => {
    let arr = splitArray(stats.reverse(), 3);
  //  console.log(stats);
    if (arr.length > 0) {
      setHomeStats(arr);
    }
  }, []);

  function splitArray(array, pocketLength) {
    let arr=[];
    while (array.length > 0) {
      arr.push(array.splice(0, pocketLength));
    }
    return arr;
  }

  return (
    <section className={styles.statBox_contain}>
      <p className={`${styles.stat_intro} latoTxt`}>
        {statisticsHeading + " "}
        <span className={styles.stat_desc}>
          {statisticsHeadingHighlight}
        </span>
      </p>
      <div className={styles.statBox}>
        {homeStats.length > 0 && homeStats.map((split, index) => {
            return <div className={styles.statRow} key={'splitArr' + index}>
              {split.length > 0 && split.map((stat, index) => {
                return <div className={styles.statItem} key={index}>
                  <h3 className={styles.stat}>{stat.node.statistic.statistic}</h3>
                  <p className={`${styles.statType} latoTxt`}>{stat.node.title}</p>
                </div>
              })}
            </div>
        })}
      </div>
    </section>
  );
};

export default StatBox;
