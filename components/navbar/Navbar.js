import React from "react";
import styles from "./Navbar.module.scss";
import Logo from "../imgs/Logo.png";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <>
      <div className={styles.Navbar}>
        <div className={styles.NavbarLogo}>
          <Image src={Logo} alt="Logo" className={styles.Logo} height={90} width={400}  />
        </div>
        <div className={styles.Navbar_list}>
          <ul className={styles.list}>
            <li className={styles.nav_links}>
              <Link href="/" className={styles.a}>
                Home
              </Link>
            </li>
            <li className={styles.nav_links}>
              <Link
                scroll={false}
                offset={10}
                className={styles.a}
                href="/#Mission"
              >
                Our Mission
              </Link>
            </li>
            <li className={styles.nav_links}>
              <Link
                scroll={true}
                offset={10}
                className={styles.a}
                href="/about_us"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
