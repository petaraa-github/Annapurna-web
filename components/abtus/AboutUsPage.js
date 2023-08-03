import React from "react";
import styles from "./AboutUsPage.module.scss";
import Image from "next/image";
import AbtUstTitle from "../imgs/TitleAbtUs.png";
import AbtUsLogo from "../imgs/abtUsLogo.png";
import AbtUsImage1 from "../imgs/AbtUsImage1.png";
import AbtUsImage2 from "../imgs/AbtUsImage2.png";
import Twitter from "../imgs/twitter.svg";
import Instagram from "../imgs/instagram.svg";
import Facebook from "../imgs/facebook.svg";

export default function AboutUsPage() {
  return (
    <>
      <div className={styles.Container1}>
        <div className={styles.leftContainer}>
          <div className={styles.BTitle1}>
            <Image src={AbtUstTitle} alt="About Us" width={350} height={80} className={styles.AbtUstTitle} />
          </div>
          <div className={styles.abtusInfo}>
            At Petaraa Annapurna , we believe that no one should go hungry while
            edible food goes to waste. Our mission is to improve communities and
            the environment by linking leftover food with people in need. We can
            work together to make the world a less hungry and more compassionate
            place. Here's what you need to know about us:
          </div>
        </div>
        <div className={styles.rightContainer}>
          <Image src={AbtUsLogo} alt="Logo" width={250} height={250} />
        </div>
      </div>
      <div className={styles.ContainerL}>
        <div className={styles.ImgContainer}>
          <div className={styles.textImg}>
            <Image
              src={AbtUsImage1}
              alt="Image 1"
              className={styles.image}
              width={300}
              height={450}
            />
            <div className={styles.text}>How it all started ?</div>
          </div>
        </div>
        <div className={styles.textContainer}>
          Our journey began with a simple idea – to harness the power of
          technology for social good. Witnessing the alarming rate of food waste
          and the increasing number of people facing food insecurity, we knew we
          had to take action. Our commitment to combating food insecurity
          motivates us to develop an easy-to-use platform that enables people to
          take significant action. With a passionate team of developers,
          designers, and food enthusiasts, was born.
        </div>
      </div>
      <div className={styles.Container1}>
        <div className={styles.textContainer}>
          Transparency, compassion, and efficiency are at the core of our
          values. We are committed to fostering a community of giving, where
          every contribution, no matter how big or small, counts. We believe in
          the potential of collective efforts to bring about meaningful change
          in the fight against hunger. By leveraging technology and fostering a
          spirit of giving, we aim to bridge this gap.
        </div>
        <div className={styles.ImgContainer}>
          <div className={styles.textImg}>
            <Image
              src={AbtUsImage2}
              alt="Image 2"
              className={styles.image}
              width={300}
              height={450}
            />
            <div className={styles.text}>Our Values</div>
          </div>
        </div>
      </div>
      <div className={styles.Container}>
        <div className={styles.getintouch}>Get in Touch</div>
        <div className={styles.touchdetail}>
          We love hearing from our users! If you have any questions, feedback,
          or suggestions, please don't hesitate to reach out to us.{" "}
        </div>
        <div className={styles.socialLinks}>
          <Image src={Twitter} alt="twitter" width={50} height={80} />
          <Image src={Instagram} alt="instagram" width={50} height={80} />
          <Image src={Facebook} alt="facebook" width={50} height={80} />
        </div>
        <div className={styles.conclusion}>
          Thank you for being a part of Petaraa Annapurna. Together, we can
          create a world where no one goes to bed hungry. Let's make a positive
          impact, one meal at a time!
        </div>
      </div>
    </>
  );
}
