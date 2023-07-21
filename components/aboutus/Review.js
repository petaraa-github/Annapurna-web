import React from "react";
import styles from "./Review.module.scss";
import Image from "next/image";
import Quote from "../imgs/quotes.svg";
export default function ReviewData({ data }) {
  return (
    <>
      <div className={styles.ReviewData}>
        <div className={styles.ReviewCard}>
          <div className={styles.quotes}>
            <Image src={Quote} alt="Quotes" width={100} height={100} className={styles.quoteImg} />
          </div>
          <div className={styles.reviews}>
            <div className={styles.title}>
              <div className={styles.rtitle}>
                <h4>"{data.title}"</h4>
              </div>

              <div className={styles.ScreenImg}>
                <Image
                  className={styles.img}
                  src={data.screenimg}
                  width={70}
                  height={70}
                />
                <div className={styles.reviewername}>
                  <div className={styles.rname}>{data.reviewername}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
