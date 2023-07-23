import React from "react";
import styles from "./Mission.module.scss";
import Image from "next/image";
import Title2 from "../imgs/Title2.png";
import Stitle2 from "../imgs/Title2.png";
import OurMission from "../imgs/OurMission.png";

export default function Mission() {
  return (
    <>
      <div id="Mission" className={styles.OurMission}>
        <div className={styles.Mission}>
          <Image className={styles.Btitle2} src={Title2} alt="Title 2" width={300} />
          <Image className={styles.Stitle2} src={Stitle2} alt="Title 2" width={300} />
    
          <div className={styles.MissionSection}>
            <div className={styles.MissionContent}>
              Analyze and reduce the food wastage from restaurants and hotels.
            </div>
            <div className={styles.MissionContent}>
              Connect people looking for a way to donate without wasting excess
              food.
            </div>

            <div className={styles.MissionContent}>
              'Annapurna' is a cross-platform application that facilitates food
              donation to the nearest Charity.{" "}
            </div>
          </div>
        </div>
        <div className={styles.MissionImg}>
          <Image className={styles.OurMission} src={OurMission} alt="Our Mission" width={600} />
        </div>
      </div>
    </>
  );
}
