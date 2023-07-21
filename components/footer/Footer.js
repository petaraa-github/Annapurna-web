import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import Twitter from "../imgs/twitter.png";
import Instagram from "../imgs/insta.png";
import Facebook from "../imgs/facebook.png";
import Playstore from "../imgs/playstoreW.png";
import Appstore from "../imgs/appstoreW.png";
import Logo from "../imgs/petaraalogo.png";
export default function Footer() {
  return (
    <>
      <div className={styles.main_footer}>
        <div className={styles.row}>
          {/* column 1 */}
          <div className={styles.col}>
            <Link className={styles.logo} href="/" >
              <Image
                className={styles.petaraa}
                src={Logo}
                alt="petaraa"
                width={200}
                height={200}
              />
            </Link>
          </div>

          {/* column 2 */}
          <div className={styles.col}>
            <h4 className={styles.footer_title}>Contact us</h4>
            <ul className={styles.footer_list}>
              <li className={styles.li}>Email: abc@gmail.com</li>
              <li className={styles.li}>Conatct no.: 8797879686</li>
            </ul>
          </div>

          {/* column 3 */}
          <div className={styles.col}>
            <h4 className={styles.footer_title}>Social Accounts</h4>
            <div className={styles.social_media}>
              <Link href="https://www.google.com">
                <Image
                  className={styles.media}
                  src={Twitter}
                  width={30}
                  height={30}
                />
              </Link>

              <Link href="https://www.google.com">
                <Image
                  className={styles.media}
                  src={Instagram}
                  width={30}
                  height={30}
                />
              </Link>

              <Link href="https://www.google.com">
                <Image
                  className={styles.media}
                  src={Facebook}
                  width={30}
                  height={30}
                />
              </Link>
            </div>
          </div>

          {/* column 4 */}
          <div className={styles.col}>
            <div className={styles.download_btn}>
              <Link href="https://www.google.com" className={styles.play_store}>
                <Image
                  className={styles.playstore}
                  src={Playstore}
                  alt="playstore"
                />
                <h2>Play Store</h2>
              </Link>

              <Link href="https://www.google.com" className={styles.app_store}>
                <Image
                  className={styles.appstore}
                  src={Appstore}
                  alt="appstore"
                />
                <h2>App Store</h2>
              </Link>
            </div>
          </div>
        </div>

        {/* <hr></hr> */}
        <div className={styles.footer_bottom}>
          <button className={styles.btn_link}>
            <Link href="/Privacy_Policy" className={styles.a}>
              Privacy Policy
            </Link>
          </button>

          <button className={styles.btn_link}>
            <Link href="/Terms_of_use" className={styles.a}>
              Terms of use
            </Link>
          </button>

          <button className={styles.btn_link}>
            <Link href="/Cookie_Policy" className={styles.a}>
              Cookie Policy
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
