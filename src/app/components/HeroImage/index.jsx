"use client";
import { useLayoutEffect, useState } from "react";
import useScreenDetection from "../../hooks/useScreenSizeInfo";

import styles from "./HeroImage.module.scss";

const HeroImage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const isMobile = useScreenDetection() < 768;
  const scale = 1 + scrollPosition * 0.0005;
  const opacity = 1 - scrollPosition * 0.004;

  useLayoutEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <img
      src={
        isMobile
          ? "/images/mainImageMobile.jpeg"
          : "/images/mainImageDesktop.jpeg"
      }
      className={styles.fadingImage}
      style={{ transform: `scale(${scale})`, opacity: opacity }}
    />
  );
};

export default HeroImage;
