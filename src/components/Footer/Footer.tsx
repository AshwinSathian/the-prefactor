"use client";

import { Button } from "primereact/button";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  const socials = [
    {
      id: 1,
      icon: "pi-instagram",
      link: "https://www.linkedin.com/company/the-pro-factor/",
    },
    {
      id: 2,
      icon: "pi-linkedin",
      link: "https://www.instagram.com/theprofactor/",
    },
  ];
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
      <div className="w-full flex items-center justify-center gap-3">
        {socials.map((s) => (
          <a key={s.id} href={s.link}>
            <Button
              icon={`pi ${s.icon}`}
              rounded
              text
              size="large"
              severity="secondary"
            />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
