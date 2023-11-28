"use client";

import React from "react";
import styles from "./HeroSection.module.css";
import { Button } from "primereact/button";

const HeroSection: React.FC = () => {
  return (
    <div className={styles.heroSection}>
      <div className="w-full h-full flex flex-col items-center justify-center p-10 gap-4">
        <div
          className={`${styles.heroHeadline} hidden lg:flex p-3 text-7xl text-center`}
        >
          We are a
          <span className={`${styles.creativeText} text-7xl`}>Creative</span>
          Coaching Company
        </div>
        <div
          className={`${styles.heroHeadline} lg:hidden flex flex-col gap-1 text-center my-6`}
        >
          <div className="text-5xl">We are a</div>
          <div className={`${styles.creativeText} text-7xl`}>Creative</div>
          <div className="text-5xl">Coaching Partner</div>
        </div>
        <a href="#sections">
          <Button
            label="Explore"
            severity="secondary"
            size="large"
            className="hidden lg:flex w-52"
            rounded
          />
          <Button
            label="Explore"
            severity="secondary"
            className="lg:hidden w-52"
            rounded
          />
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
