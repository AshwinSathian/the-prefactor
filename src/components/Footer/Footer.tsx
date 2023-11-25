"use client";

import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer id="footer" className={styles.megaFooter}>
      <div className="w-full h-full flex flex-col justify-center">
        <div className="flex flex-col justify-center text-center">
          <h1 className="text-5xl font-semibold">The ProFactor</h1>
        </div>
      </div>
      <p className="m-3 text-sm text-center font-light">
        &copy; {new Date().getFullYear()} by The ProFactor. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
