"use client";

import React from "react";
import styles from "./HeroSection.module.css";
import { Button } from "primereact/button";

const HeroSection: React.FC = () => {
  return (
    <div className={styles.heroSection}>
      <video autoPlay loop muted className={styles.backgroundVideo}>
        <source src="./assets/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className={styles.overlay}>
        <img
          src="/assets/logo-2.png"
          alt="The Pro-Factor"
          className="w-60 mx-auto"
        />
        <div className="w-full flex flex-col items-center justify-center p-10 gap-4">
          <div
            className={`${styles.heroHeadline} flex flex-col gap-1 p-3 text-7xl text-center`}
          >
            <div className={`${styles.titleText} font-semibold`}>We're all</div>
            <div className={`${styles.titleText} font-semibold`}>SET to...</div>
            <div className="text-xl">Spark. Elevate. Transform!</div>
          </div>
          <a href="#about">
            <Button
              label="Get Started Now"
              severity="secondary"
              size="large"
              className="min-w-fit uppercase"
              outlined
            />
          </a>
        </div>
        <h1 className="text-xl text-center">connect.theprofactor@gmail.com</h1>
      </div>
    </div>
  );
};

export default HeroSection;
