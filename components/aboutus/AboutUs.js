import React from "react";
import styles from "./AboutUs.module.scss";
import Image from "next/image";
import Title3 from "../imgs/Title3.png";
import SubImage1 from "../imgs/SubImage1.png";
import SubImage2 from "../imgs/SubImage2.png";
import SubTitle1 from "../imgs/SubTitle1.png";
import SubTitle2 from "../imgs/SubTitle2.png";
import Stitle3 from "../imgs/Stitle3.png";
import Stitle4 from "../imgs/Stitle4.png";
import Stitle5 from "../imgs/Stitle5.png";
import { ReviewData } from "./ReviewData";
import Review from "./Review";

export default function AboutUs() {
  return (
    <>
      <div id="AboutUs" className={styles.AboutUs}>
        <div className={styles.Title3}>
          <Image className={styles.Btitle3} src={Title3} alt="Title 3" />
          <Image className={styles.Stitle3} src={Stitle3} alt="Title 3" />
        </div>
        <div className={styles.AboutUsSection}>
          <div className={styles.SubImage}>
            <Image
              className={styles.SubImage1}
              src={SubImage1}
              alt="Sub Image 1"
              width={500}
            />
          </div>
          <div className={styles.RightSection}>
            <Image
              className={styles.Btitle4}
              src={SubTitle1}
              alt="Sub Title"
              width={400}
            />
            <Image className={styles.Stitle4} src={Stitle4} alt="SubImage 1" />

            <div className={styles.rightContent}>
              1/3rd of food produced for human consumption is wasted globally,
              which accounts for almost 1.3 billion tons per year. On the other
              hand, as per WHO 20% of the population faces extreme food
              shortages.
            </div>
          </div>
        </div>
        <div className={styles.AboutUsSectionR}>
          <div className={styles.LeftSection}>
            <Image
              className={styles.Btitle5}
              src={SubTitle2}
              alt="Sub Title"
              width={400}
            />
            <Image className={styles.Stitle5} src={Stitle5} alt="Sub Image 2" />
            <div className={styles.LeftContent}>
              The act of donating food is not limited to large-scale
              contributions. Even a small donation can have a ripple effect,
              inspiring others to join the cause and multiply the impact. It
              fosters a sense of compassion and unity within our communities,
              reminding us of the power we possess to uplift others and create
              positive change.
            </div>
          </div>
          <div className={styles.SubImage}>
            <Image
              className={styles.SubImage2}
              src={SubImage2}
              alt="Sub Image"
              width={500}
            />
          </div>
        </div>
        <div className={styles.Comments}>
          <div className={styles.SubTitle}>
            Hear why our community loves Petaraa Annapurna{" "}
          </div>
        </div>
        <div className={styles.public_reviews}>
          {ReviewData.map((data, index) => (
            <Review data={data} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}
