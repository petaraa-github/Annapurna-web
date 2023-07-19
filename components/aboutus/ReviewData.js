import React from "react";
import styles from "./ReviewData.module.scss";
import Image from "next/image";
export default function ReviewData({
data
})
{
  return(
    <>
    <div className={styles.ReviewData}>
      <div className={styles.reviews}>
    <div className={styles.title}>
      <div className={styles.rtitle}>
        <h4>{data.title}</h4>
        </div>  
    <div className={styles.ScreenImg}>
      <Image className={styles.img}
      src={data.screenimg}
      width={50}
      height={50}
      />
    <div className={styles.reviewername}>
      <div className={styles.rname}>
        {data.reviewername}
      </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </>

  );
  }

