import React from "react";
import styles from "./Help.module.scss";
import Image from "next/image";
import Title1 from "../imgs/Title1.png";
import Stitle1 from "../imgs/STitle1.png";
import Step1 from "../imgs/Step1.png";
import Step2 from "../imgs/Step2.png";
import Step3 from "../imgs/Step3.png";
import Step4 from "../imgs/Step4.png";
export default function Help() {
  return (
    <>
      <div className={styles.Help}>
        <div className={styles.Title}>
          <Image className={styles.Btitle1} src={Title1} alt="Title" />
          <Image className={styles.Stitle1} src={Stitle1} alt="Title" />
        </div>
        <div className={styles.ProcessImages}>
          <div className={styles.ProcessRow1}>
            <div className={styles.Process}>
              <Image src={Step1} alt="Step1" />
              <div className={styles.caption}>
                Register and Login yourself to get started
              </div>
            </div>
            <div className={styles.ProcessG}></div>
            <div className={styles.Process}>
              <Image src={Step2} alt="Step 2" />
              <div className={styles.caption}>
                Click on the add icon at the bottom-right to start donating
                
              </div>
            </div>
            <div className={styles.ProcessG}></div>
          </div>
          <div className={styles.ProcessRow2}>
            <div className={styles.ProcessG}></div>
            <div className={styles.Process}>
              <Image src={Step3} alt="Step 3" />
              <div className={styles.caption}>
                Add name of the item, images of item and your address
              </div>
            </div>
            <div className={styles.ProcessG}></div>
            <div className={styles.Process}>
              <Image src={Step4} alt="Step 4" />
              <div className={styles.caption}>
                You will get a confirmation of your donation.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
