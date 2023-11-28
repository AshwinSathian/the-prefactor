"use client";

import React from "react";
import styles from "./BlogScape.module.css";

const BlogScape: React.FC = () => {
  return (
    <div className="w-full my-8">
      <div className={`${styles.marquee} py-5 text-4xl font-light`}>
        <div className={`${styles.marqueeContent}`}>
          The Pro-Factor: Your Training Partner in Growth and
          Success.&nbsp;&nbsp;&nbsp;The Pro-Factor: Your Training Partner in
          Growth and Success.&nbsp;&nbsp;&nbsp;
        </div>
      </div>

      <div className={`${styles.blogScape}`}>
        <img src="./assets/blogscape.jpeg" className={styles.backgroundImage} />

        <div className={styles.overlay}>
          <div className="w-full flex flex-col items-center justify-center p-10 gap-4">
            <div
              className={`${styles.heroHeadline} flex flex-col gap-3 p-3 text-7xl text-center`}
            >
              <div
                className={`${styles.titleText} text-5xl lg:text-7xl font-semibold`}
              >
                Inkspirations: Navigate Our Blogscape
              </div>
              <div className="text-lg text-center py-6 w-3/4 lg:w-1/2 mx-auto bg-gray-900/50">
                Posts coming soon!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogScape;
