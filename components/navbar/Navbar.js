import React from "react";
import styles from "./Navbar.module.scss";
import Logo from "../imgs/Logo.png";
import Image from "next/image";
export default function Navbar() {
  return (
    <>
      <div className={styles.Navbar}>
        <div className={styles.NavbarLogo}>
          <Image
            src={Logo}
            alt="Logo"
            className={styles.Logo}
            height={150}
          />
        </div>
        <div className={styles.Navbar_list}>
          <ul className={styles.list}>
            <li className={styles.nav_links}>Home</li>
            <li className={styles.nav_links}>Our Mission</li>
            <li className={styles.nav_links}>About Us</li>
          </ul>
        </div>
      </div>
    </>
  );
}
