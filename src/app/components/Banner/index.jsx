"use client";

import Image from "next/image";
import CountDown from "../Countdown";
import useScreenSizeInfo from "@/app/hooks/useScreenSizeInfo";
import Hotel from "../Hotel";

import styles from "./Banner.module.scss";

const Banner = () => {
  const showHotel = true;
  const isMobile = useScreenSizeInfo() < 1024;

  return (
    <div className={styles.bannerWrapper}>
      <div className={styles.invitation}>
        <div>Սիրով հրավիրում ենք ձեզ մեր հարսանյաց արարողությանը</div>
        <div className={styles.date}>
          <p>Սեպտեմբեր</p>
          <p>7</p>
          <p>Շաբաթ</p>
        </div>
        <CountDown />
      </div>
      {isMobile && showHotel && <Hotel />}
      <div className={styles.bannerImage}>
        <Image
          className={styles.image}
          src="/images/bannerImage.jpg"
          layout="fill"
        />
      </div>
    </div>
  );
};

export default Banner;
