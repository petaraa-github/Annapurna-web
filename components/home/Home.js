import React from "react";
import styles from "./Home.module.scss";
import Background from "../imgs/Background.png";
import Image from "next/image";
import FoodImg from "../imgs/FoodImg.png";
import Tagline from "../imgs/Tagline.png";
import Playstore from "../imgs/playstoreW.png";
import Appstore from "../imgs/appstoreW.png";
import BannerImg from "../imgs/BannerImg.png";
export default function HomePage() {
  return (
    <>
      <div className={styles.HomeBg}>
        <div className={styles.homeCol1}>
          <Image src={FoodImg} alt="Image1" width={300} />
        </div>
        <div className={styles.homeCol2}>
          <div>
            <Image src={Tagline} alt="Image2" width={500} />
          </div>
          <div className={styles.btnSection}>
            <button className={styles.AppLink}>
              <Image src={Playstore} alt="Playstore" />
              <h2>Google Play</h2>
            </button>
            <button className={styles.AppLink}>
              <Image src={Appstore} alt="Appstore" />
              <h2>App Store</h2>
            </button>
          </div>
        </div>
        <div className={styles.homeCol3}>
          <div>
            <Image src={BannerImg} alt="BannerImg" width={350} />
          </div>
        </div>
      </div>
    </>
  );
}
